<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use App\Models\Course;
use App\Models\PromoCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class OrderManageController extends Controller
{
    // অর্ডার তালিকা
    public function index(Request $request)
    {
        $query = Order::with(['user', 'course', 'promoCode']);

        // Search by order_id, transaction_id, or user name
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('order_id', 'like', "%{$search}%")
                    ->orWhere('transaction_id', 'like', "%{$search}%")
                    ->orWhereHas('user', function ($userQuery) use ($search) {
                        $userQuery->where('name', 'like', "%{$search}%")
                            ->orWhere('email', 'like', "%{$search}%");
                    });
            });
        }

        // Filter by course
        if ($request->filled('course_id')) {
            $query->where('course_id', $request->course_id);
        }

        // Filter by status
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Filter by payment method
        if ($request->filled('payment_method')) {
            $query->where('payment_method', $request->payment_method);
        }

        // Filter by date range
        if ($request->filled('date_from')) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }

        if ($request->filled('date_to')) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        $orders = $query->latest()->paginate(20)->withQueryString();

        // Get data for filters
        $courses =  Course::orderBy('title')->get();
        $statuses = ['pending', 'completed', 'failed', 'cancelled'];
        $paymentMethods = ['bkash', 'nagad', 'rocket', 'sslcommerz']; // Adjust as needed

        return view('admin.orders.index', compact('orders', 'courses', 'statuses', 'paymentMethods'));
    }

    // অর্ডার বিস্তারিত দেখুন
    public function show(Order $order)
    {
        $order->load(['user', 'course', 'promoCode']);
        return view('admin.orders.show', compact('order'));
    }

  
  
      public function updateStatus(Request $request, Order $order)
    {
        $request->validate([
            'status' => 'required|in:pending,completed,failed'
        ]);

       
        
       if ($request->status == 'completed' && $order->status != 'completed') {
            $phone = $order->phone_number;
            $message = "অভিনন্দন! কোর্স অনুরোধ অনুমোদিত। লগইন করে ক্লাস শুরু করুন। -সহায়ক";
         //   $this->sendSMS($phone, $message);
        }

         $order->update(['status' => $request->status]);

        return redirect()->back()
            ->with('success', 'অর্ডার স্ট্যাটাস সফলভাবে আপডেট করা হয়েছে');
    }
  
  
     function sendSMS($number, $message)
    {
        $userName = 'sohayokstorage@gmail.com';
        $apiKey = '0FN56C04NCS70K0';
        $senderName = '8809643910190';
       
       if (!str_starts_with($number, '88')) {
        $number = '88' . $number;
    }


        $url = "https://api.mimsms.com/api/SmsSending/Send?" .
            "UserName=" . $userName .
            "&Apikey=" . $apiKey .
            "&MobileNumber=" . $number .
            "&SenderName=" . $senderName .
            "&TransactionType=T" .
            "&Message=" . rawurlencode($message);

        // 2. Send the request
        $response = Http::get($url);
       
      

        return $response->body();
    }

  

    // অর্ডার সম্পাদনা ফর্ম
    public function edit(Order $order)
    {
        $users = User::all();
        $courses = Course::all();
        $promoCodes = PromoCode::where('status', 'active')->get();

        return view('admin.orders.edit', compact('order', 'users', 'courses', 'promoCodes'));
    }

    // অর্ডার আপডেট
    public function update(Request $request, Order $order)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'course_id' => 'required|exists:courses,id',
            'amount' => 'required|numeric|min:0',
            'payment_method' => 'required|in:bkash,nagad',
            'account_number' => 'required|string',
            'phone_number' => 'required|string',
            'transaction_id' => 'required|string|unique:orders,transaction_id,' . $order->id,
            'status' => 'required|in:pending,completed,failed',
            'promo_code_id' => 'nullable|exists:promo_codes,id',
        ]);

        try {
            DB::beginTransaction();

            $order->user_id = $request->user_id;
            $order->course_id = $request->course_id;
            $order->amount = $request->amount;
            $order->payment_method = $request->payment_method;
            $order->account_number = $request->account_number;
            $order->phone_number = $request->phone_number;
            $order->transaction_id = $request->transaction_id;
            $order->status = $request->status;

            // ডিসকাউন্ট ক্যালকুলেশন
            if ($request->promo_code_id) {
                $promoCode = PromoCode::find($request->promo_code_id);
                $order->promo_code_id = $promoCode->id;
                $order->used_coupon = $promoCode->code;
                $order->discount = $promoCode->discount_amount;
                $order->final_amount = $request->amount - $promoCode->discount_amount;
            } else {
                $order->promo_code_id = null;
                $order->used_coupon = null;
                $order->discount = 0;
                $order->final_amount = $request->amount;
            }

            $order->save();

            DB::commit();

            return redirect()->route('admin.orders.index')
                ->with('success', 'অর্ডার সফলভাবে আপডেট করা হয়েছে');

        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()
                ->with('error', 'অর্ডার আপডেট করতে সমস্যা হয়েছে: ' . $e->getMessage());
        }
    }

    // অর্ডার ডিলিট
    public function destroy(Order $order)
    {
        $order->delete();

        return redirect()->route('admin.orders.index')
            ->with('success', 'অর্ডার সফলভাবে ডিলিট করা হয়েছে');
    }

    // সার্চ ফাংশনালিটি
    public function search(Request $request)
    {
        $search = $request->get('search');

        $orders = Order::with(['user', 'course', 'promoCode'])
            ->where(function ($query) use ($search) {
                $query->where('order_id', 'like', "%{$search}%")
                    ->orWhere('transaction_id', 'like', "%{$search}%")
                    ->orWhere('phone_number', 'like', "%{$search}%")
                    ->orWhereHas('user', function ($q) use ($search) {
                        $q->where('name', 'like', "%{$search}%")
                            ->orWhere('email', 'like', "%{$search}%");
                    })
                    ->orWhereHas('course', function ($q) use ($search) {
                        $q->where('title', 'like', "%{$search}%");
                    });
            })
            ->latest()
            ->paginate(20);

        return view('admin.orders.index', compact('orders', 'search'));
    }
}