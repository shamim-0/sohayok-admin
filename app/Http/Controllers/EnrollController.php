<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Order;
use App\Models\PromoCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Inertia\Inertia;

class EnrollController extends Controller
{
    public function enroll($slug)
    {
        $course = Course::where('slug', $slug)->firstOrFail();

        $discount = Cache::get('discount');

        $promo = PromoCode::where('course_id', $course->id)->first();



        $finalAmount = Cache::get('finalAmount');




        if ($finalAmount) {
            $course['offer_price'] = $finalAmount;
        }


        if ($promo) {
            $course['discount'] = $discount ?? 0;
        }


        return Inertia::render('enroll/index', compact('course'));
    }



    public function validateCoupon(Request $request)
    {
        $request->validate([
            'code' => 'required|string',
            'course_id' => 'required|exists:courses,id'
        ]);

        $code = $request->input('code');
        $promoCode = PromoCode::where('code', $code)->where('is_active', 1)->first();


        if (!$promoCode) {
            return redirect()->back()->with('error', 'ভুল প্রোমো কোড');
        }

        $course = Course::find($request->course_id);
        $discount = $promoCode->calculateDiscount($course->offer_price);
        $finalAmount = $course->offer_price - $discount;


        Cache::put('discount', $discount, now()->addMinutes(5));
        Cache::put('finalAmount', $finalAmount, now()->addMinutes(5));
        Cache::put('code', $promoCode->id, now()->addMinutes(5));

        return redirect()->back()->with('success', 'প্রোমো কোড এপ্লাই করা হয়েছে');
    }

  
  
      public function enrollFree(Request $request)
    {

        $request->validate([
            'course_id' => 'required|exists:courses,id',
        ]);

        $course = Course::findOrFail($request->course_id);

        $existingOrder = Order::where('user_id', Auth::id())
            ->where('course_id', $course->id)
            ->whereIn('status', ['pending', 'approved', 'completed'])
            ->first();

        if ($existingOrder) {
            return redirect()->back()->with('error', 'আপনি ইতিমধ্যেই এই কোর্সে ভর্তি হয়েছেন বা আবেদন করেছেন।');
        }

        $orderId = 'ORD-' . Str::upper(Str::random(8)) . time();

        $order = Order::create([
            'user_id' => Auth::id(),
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

        return redirect("/enroll/success/$orderId")->with('success', 'আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে');
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






        $course = Course::findOrFail($request->course_id);
        $code = Cache::get('code');
        $orderId = 'ORD-' . Str::upper(Str::random(8)) . time();



        $existingOrder = Order::where('user_id', Auth::id())
            ->where('course_id', $course->id)
            ->whereIn('status', ['pending', 'approved', 'completed'])
            ->first();

        if ($existingOrder) {
            return redirect()->back()->with('error', 'আপনি ইতিমধ্যেই এই কোর্সে ভর্তি হয়েছেন বা আবেদন করেছেন।');
        }

        $order = Order::create([
            'user_id' => Auth::id(),
            'course_id' => $course->id,
            'promo_code_id' => $code ?? null,
            'order_id' => $orderId,
            'amount' => $course->price,
            'discount' => $request->discount ?? 0,
            'final_amount' => $request->final_amount,
            'used_coupon' => $code ? "YES" : "No",
            'status' => 'pending',
            'payment_method' => $request->payment_method,
            'account_number' => $request->phone_number,
            'phone_number' => $request->phone_number,
            'transaction_id' => $request->transaction_id,
        ]);

        if ($code) {
            PromoCode::where('id', $code)->increment('used_count');
        }

        Cache::forget('discount');
        Cache::forget('finalAmount');
        Cache::forget('code');

        return redirect("/enroll/success/$orderId")->with('success', 'আপনার অর্ডারটি প্রক্রিয়াধীন রয়েছে');
    }

    public function enrollmentSuccess($orderId)
    {
        $order = Order::where('order_id', $orderId)
            ->where('user_id', Auth::id())
            ->with(['course', 'promoCode'])
            ->firstOrFail();

        return Inertia::render('enroll/Success', compact('order'));
    }
}