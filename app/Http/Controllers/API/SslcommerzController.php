<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class SslcommerzController extends Controller
{
    // Stateless mobile equivalent of SSLsslcommerzController@proccess — takes
    // user_id from the request body (no Laravel session) like EnrollController's
    // processEnrollment/freeEnrollment, and hits the same SSLCommerz init API,
    // success/fail/cancel/ipn URLs so SSLsslcommerzController@ipn completes both
    // the web and mobile flows identically.
    public function init(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'user_id' => 'required|exists:users,id',
            'final_amount' => 'required|numeric|min:1',
        ]);

        $course = Course::findOrFail($request->course_id);
        $user = User::findOrFail($request->user_id);

        $existingOrder = Order::where('user_id', $user->id)
            ->where('course_id', $course->id)
            ->whereIn('status', ['pending', 'approved', 'completed'])
            ->first();

        if ($existingOrder) {
            return response()->json(['success' => false, 'message' => 'আপনি ইতিমধ্যেই এই কোর্সে ভর্তি হয়েছেন বা আবেদন করেছেন।'], 400);
        }

        $orderId = 'ORD-' . Str::upper(Str::random(8)) . time();

        $order = Order::create([
            'user_id' => $user->id,
            'course_id' => $course->id,
            'order_id' => $orderId,
            'amount' => (float) $request->final_amount,
            'final_amount' => (float) $request->final_amount,
            'discount' => $request->discount ?? 0,
            'used_coupon' => $request->coupon_code ?? 'No',
            'status' => 'pending',
            'payment_method' => 'sslcommerz',
            'phone_number' => $user->phone,
        ]);

        $postData = [
            'store_id' => config('sslcommerz.store_id'),
            'store_passwd' => config('sslcommerz.store_password'),
            'total_amount' => $order->final_amount,
            'currency' => 'BDT',
            'tran_id' => $orderId,
            'success_url' => url('/payment/success'),
            'fail_url' => url('/payment/cancel'),
            'cancel_url' => url('/payment/cancel'),
            'ipn_url' => url('/payment/ipn'),
            'cus_name' => $user->name,
            'cus_email' => $user->email,
            'cus_phone' => $user->phone,
        ];

        $response = Http::asForm()->post(config('sslcommerz.init_url'), $postData);

        if ($response->successful()) {
            $data = $response->json();
            if (!empty($data['GatewayPageURL'])) {
                return response()->json([
                    'success' => true,
                    'gateway_url' => $data['GatewayPageURL'],
                    'order_id' => $orderId,
                ]);
            }
        }

        Log::error('SSLCommerz mobile init failed', ['response' => $response->json() ?? $response->body()]);
        return response()->json(['success' => false, 'message' => 'পেমেন্ট শুরু করা যায়নি'], 500);
    }

    // Polled by the Flutter app after the WebView returns, since the order is
    // only actually marked completed asynchronously by SSLsslcommerzController@ipn.
    public function status($orderId)
    {
        $order = Order::where('order_id', $orderId)->first();

        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        return response()->json(['status' => $order->status]);
    }
}
