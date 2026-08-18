<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Order;
use App\Models\PromoCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SSLsslcommerzController extends Controller
{
    // ==============================
    // STEP 1: CREATE ORDER + REDIRECT
    // ==============================
    public function proccess(Request $request)
    {
        $course = Course::findOrFail($request->course_id);

        $orderId = 'ORD-' . Str::upper(Str::random(8)) . time();

        // 🔥 আগে order create
        $order = Order::create([
            'user_id' => Auth::id(),
            'course_id' => $course->id,
            'order_id' => $orderId,
            'amount' => (float) $request->final_amount,
            'final_amount' => (float) $request->final_amount,
            'discount' => $request->discount ?? 0,
            'status' => 'pending',
            'payment_method' => 'sslcommerz',
            'phone_number' => auth()->user()->phone,
        ]);

        $postData = [
            'store_id' => config('sslcommerz.store_id'),
            'store_passwd' => config('sslcommerz.store_password'),
            'total_amount' => $order->final_amount,
            'currency' => 'BDT',
            'tran_id' => $orderId,
            'success_url' => url("/payment/success"),
            'fail_url' => url("/payment/cancel"),
            'cancel_url' => url("/payment/cancel"),
            'ipn_url' => url('/payment/ipn'),
            'cus_name' => auth()->user()->name,
            'cus_email' => auth()->user()->email,
            'cus_phone' => auth()->user()->phone,
        ];

        $response = Http::asForm()->post(config('sslcommerz.init_url'), $postData);

        if ($response->successful()) {
            $data = $response->json();

            if (!empty($data['GatewayPageURL'])) {
                // return redirect($data['GatewayPageURL']);
                return Inertia::location($data['GatewayPageURL']);
            }
        }

        Log::error('SSLCommerz init failed', ['response' => $response->json() ?? $response->body()]);
        return back()->with('error', 'Payment initialization failed');
    }

    // ==============================
    // STEP 2: SUCCESS (ONLY REDIRECT)
    // ==============================
    public function success(Request $request)
    {
        $tran_id = $request->tran_id;
        return redirect("/enroll/success/$tran_id");
    }

    // ==============================
    // STEP 3: CANCEL
    // ==============================
    public function cancel(Request $request)
    {
        $course = Course::find($request->course_id);

        return Inertia::render('enroll/error', compact('course'));
    }

    // ==============================
    // STEP 4: IPN (MAIN LOGIC)
    // ==============================
    public function ipn(Request $request)
    {
        Log::info('SSL IPN', $request->all());

        $tran_id = $request->tran_id;
        $val_id = $request->val_id;

        $order = Order::where('order_id', $tran_id)->first();

        if (!$order) {
            Log::error('Order not found', ['tran_id' => $tran_id]);
            return response('Order not found', 404);
        }

        if ($order->status === 'completed') {
            return response('Already processed', 200);
        }

        // 🔥 VALIDATION API CALL
        $validation = Http::asForm()->post(
            config('sslcommerz.validation_url'),
            [
                'val_id' => $val_id,
                'store_id' => config('sslcommerz.store_id'),
                'store_passwd' => config('sslcommerz.store_password'),
                'format' => 'json'
            ]
        );

        $data = $validation->json();

        Log::info('SSL VALIDATION RESPONSE', $data);

        if (
            isset($data['status']) &&
            $data['status'] === 'VALID' &&
            $data['tran_id'] === $tran_id &&
            round($data['amount'], 2) == round($order->final_amount, 2)
        ) {
            // ✅ SUCCESS
            $order->update([
                'status' => 'completed',
                'transaction_id' => $request->bank_tran_id,
                'payment_details' => json_encode($data),
                'paid_at' => now(),
            ]);

            if ($order->promo_code_id) {
                PromoCode::where('id', $order->promo_code_id)
                    ->increment('used_count');
            }

            return response('Payment Success', 200);
        }

        // ❌ FAILED
        $order->update([
            'status' => 'failed',
            'payment_details' => json_encode($data),
        ]);

        return response('Validation Failed', 200);
    }
}