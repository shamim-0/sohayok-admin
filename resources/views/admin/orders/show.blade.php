@extends('admin.dashboard.layout')




@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h2 class="text-xl font-bold text-gray-800">অর্ডার বিস্তারিত - {{ $order->order_id }}</h2>
                <p class="text-sm text-gray-600 mt-1">অর্ডার সম্পর্কিত সম্পূর্ণ তথ্য</p>
            </div>
            <a href="{{ route('admin.orders.index') }}" class="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors duration-150">
                <i class="fas fa-arrow-left mr-2"></i> পিছনে যান
            </a>
        </div>

        <div class="p-6">
            <!-- Order and Payment Information -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <!-- Order Information -->
                <div class="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-shopping-cart text-blue-600 mr-3"></i>
                        <h3 class="text-lg font-semibold text-gray-800">অর্ডার তথ্য</h3>
                    </div>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">অর্ডার আইডি:</span>
                            <span class="text-gray-900 font-mono">{{ $order->order_id }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">স্ট্যাটাস:</span>
                            <div class="flex items-center space-x-2">
                                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                                    @if($order->status == 'completed') bg-green-100 text-green-800
                                    @elseif($order->status == 'failed') bg-red-100 text-red-800
                                    @else bg-yellow-100 text-yellow-800 @endif">
                                    @if($order->status == 'pending') পেন্ডিং
                                    @elseif($order->status == 'completed') কমপ্লিটেড
                                    @else ফেইলড @endif
                                </span>
                                <form action="{{ route('admin.orders.status.update', $order) }}" method="POST" class="inline">
                                    @csrf
                                    <select name="status" onchange="this.form.submit()" class="text-xs border border-gray-300 rounded px-2 py-1 focus:ring-blue-500 focus:border-blue-500">
                                        <option value="pending" {{ $order->status == 'pending' ? 'selected' : '' }}>পেন্ডিং</option>
                                        <option value="completed" {{ $order->status == 'completed' ? 'selected' : '' }}>কমপ্লিটেড</option>
                                        <option value="failed" {{ $order->status == 'failed' ? 'selected' : '' }}>ফেইলড</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">মোট পরিমাণ:</span>
                            <span class="text-gray-900">৳{{ number_format($order->amount, 2) }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">ডিসকাউন্ট:</span>
                            <span class="text-red-600">৳{{ number_format($order->discount, 2) }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">চূড়ান্ত পরিমাণ:</span>
                            <span class="text-green-600 font-bold">৳{{ number_format($order->final_amount, 2) }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">অর্ডার তারিখ:</span>
                            <span class="text-gray-900">{{ $order->created_at->format('d/m/Y h:i A') }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="font-medium text-gray-700">আপডেট তারিখ:</span>
                            <span class="text-gray-900">{{ $order->updated_at->format('d/m/Y h:i A') }}</span>
                        </div>
                    </div>
                </div>

                <!-- Payment Information -->
                <div class="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-credit-card text-green-600 mr-3"></i>
                        <h3 class="text-lg font-semibold text-gray-800">পেমেন্ট তথ্য</h3>
                    </div>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">পেমেন্ট মেথড:</span>
                            <span class="inline-flex px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                                {{ strtoupper($order->payment_method) }}
                            </span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">অ্যাকাউন্ট নম্বর:</span>
                            <span class="text-gray-900">{{ $order->account_number }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">ফোন নম্বর:</span>
                            <span class="text-gray-900">{{ $order->phone_number }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">ট্রানজেকশন আইডি:</span>
                            <span class="text-gray-900 font-mono">{{ $order->transaction_id }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">ব্যবহৃত কুপন:</span>
                            <span>
                                @if($order->used_coupon)
                                    <span class="inline-flex px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                                        {{ $order->used_coupon }}
                                    </span>
                                @else
                                    <span class="text-gray-400">N/A</span>
                                @endif
                            </span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="font-medium text-gray-700">প্রোমো কোড:</span>
                            <span>
                                @if($order->promoCode)
                                    <span class="text-blue-600 font-medium">{{ $order->promoCode->code }}</span>
                                @else
                                    <span class="text-gray-400">N/A</span>
                                @endif
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- User and Course Information -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <!-- User Information -->
                <div class="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-user text-purple-600 mr-3"></i>
                        <h3 class="text-lg font-semibold text-gray-800">ব্যবহারকারী তথ্য</h3>
                    </div>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">নাম:</span>
                            <span class="text-gray-900">{{ $order->user->name }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">ইমেইল:</span>
                            <span class="text-gray-900">{{ $order->user->email }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="font-medium text-gray-700">ইউজার আইডি:</span>
                            <span class="text-gray-900 font-mono">{{ $order->user->id }}</span>
                        </div>
                    </div>
                </div>

                <!-- Course Information -->
                <div class="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <div class="flex items-center mb-4">
                        <i class="fas fa-book text-orange-600 mr-3"></i>
                        <h3 class="text-lg font-semibold text-gray-800">কোর্স তথ্য</h3>
                    </div>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">কোর্স নাম:</span>
                            <span class="text-gray-900">{{ $order->course->title }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                            <span class="font-medium text-gray-700">কোর্স আইডি:</span>
                            <span class="text-gray-900 font-mono">{{ $order->course->id }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="font-medium text-gray-700">ক্যাটাগরি:</span>
                            <span>
                                @if($order->course->category)
                                    <span class="text-gray-900">{{ $order->course->category->name }}</span>
                                @else
                                    <span class="text-gray-400">N/A</span>
                                @endif
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Promo Code Information -->
            @if($order->promoCode)
            <div class="bg-gray-50 rounded-lg p-5 border border-gray-200 mb-6">
                <div class="flex items-center mb-4">
                    <i class="fas fa-tag text-red-600 mr-3"></i>
                    <h3 class="text-lg font-semibold text-gray-800">প্রোমো কোড তথ্য</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="text-center p-3 bg-white rounded border">
                        <div class="text-sm text-gray-600">কোড</div>
                        <div class="text-lg font-bold text-blue-600">{{ $order->promoCode->code }}</div>
                    </div>
                    <div class="text-center p-3 bg-white rounded border">
                        <div class="text-sm text-gray-600">ডিসকাউন্ট পরিমাণ</div>
                        <div class="text-lg font-bold text-green-600">৳{{ number_format($order->promoCode->discount_amount, 2) }}</div>
                    </div>
                    <div class="text-center p-3 bg-white rounded border">
                        <div class="text-sm text-gray-600">স্ট্যাটাস</div>
                        <div>
                            <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full {{ $order->promoCode->is_active == 1 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                                {{ $order->promoCode->is_active == 1 ? 'একটিভ' : 'ইনএকটিভ' }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            @endif

            <!-- Actions -->
            <div class="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">একশন</h3>
                <div class="flex flex-wrap gap-3">
                   
                    <a href="{{ route('admin.orders.index') }}" class="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors duration-150">
                        <i class="fas fa-list mr-2"></i> সকল অর্ডার
                    </a>
                   
                </div>
            </div>
        </div>
    </div>
</div>
@endsection