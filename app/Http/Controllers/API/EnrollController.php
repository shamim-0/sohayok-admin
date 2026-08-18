<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class EnrollController extends Controller
{
    public function enroll($slug)
    {
        $course = Course::where('slug', $slug)->firstOrFail();
        return response()->json(['course' => $course]);
    }



    public function processEnrollment(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'payment_method' => 'required|in:bkash,nagad',
            'phone_number' => 'required|string|max:15',
            'transaction_id' => 'required|string|max:100',
            'amount' => 'required|numeric|min:1',
            'used_coupon' => 'nullable|string',
            'final_amount' => 'required|numeric|min:1',
        ]);




        $user_id = $request->user_id;

        $course = Course::findOrFail($request->course_id);

        $orderId = 'ORD-' . Str::upper(Str::random(8)) . time();



        $existingOrder = Order::where('user_id', $user_id)
            ->where('course_id', $course->id)
            ->whereIn('status', ['pending', 'approved', 'completed'])
            ->first();

        if ($existingOrder) {
            return response()->json(['error' => 'আপনি ইতিমধ্যেই এই কোর্সে ভর্তি হয়েছেন বা আবেদন করেছেন।'], 400);
        }

        $order = Order::create([
            'user_id' => $user_id,
            'course_id' => $course->id,
            'promo_code_id' => $code ?? null,
            'order_id' => $orderId,
            'amount' => $course->price,
            'discount' => $request->discount ?? 0,
            'final_amount' => $request->final_amount,
            'used_coupon' => "No",
            'status' => 'pending',
            'payment_method' => $request->payment_method,
            'account_number' => $request->phone_number,
            'phone_number' => $request->phone_number,
            'transaction_id' => $request->transaction_id,
        ]);

        return response()->json(['success' => 'আপনার অর্ডারটি প্রক্রিয়াধীন রয়েছে'], 200);
    }



    public function freeEnrollment(Request $request)
    {

        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'user_id' => 'required|exists:users,id',
        ]);

        $course = Course::findOrFail($request->course_id);

        $existingOrder = Order::where('user_id', $request->user_id)
            ->where('course_id', $course->id)
            ->whereIn('status', ['pending', 'approved', 'completed'])
            ->first();

        if ($existingOrder) {
            return response()->json(['error' => 'আপনি ইতিমধ্যেই এই কোর্সে ভর্তি হয়েছেন বা আবেদন করেছেন।'], 400);
        }

        $orderId = 'ORD-' . Str::upper(Str::random(8)) . time();

        $order = Order::create([
            'user_id' => $request->user_id,
            'course_id' => $course->id,
            'order_id' => $orderId,
            'amount' => 0,
            'discount' => 0,
            'final_amount' => 0,
            'used_coupon' => "No",
            'status' => 'completed',
            'payment_method' => 'free',
            'phone_number' => $request->phone_number ?? null,
            'college_name' => $request->college_name ?? null,
            'district_name' => $request->district_name ?? null,
            'hsc_batch' => $request->hsc_batch ?? null,
        ]);

        return response()->json(['success' => 'আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে'], 200);

    }


    public function check_enroll($user_id, $course_id)
    {
        $existingOrder = Order::where('user_id', $user_id)
            ->where('course_id', $course_id)
            ->whereIn('status', 'completed')
            ->first();

        if ($existingOrder) {
            return response()->json(['enrolled' => true]);
        } else {
            return response()->json(['enrolled' => false]);
        }
    }
}




