@extends('admin.dashboard.layout')

@section('content')
    <main class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-500 text-sm">সক্রিয় কোর্স</p>
                        <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $course }}</h3>
                    </div>
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <i class="fas fa-book text-blue-500"></i>
                    </div>
                </div>
            </div>



            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-500 text-sm">শিক্ষার্থী</p>
                        <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $user }}</h3>
                    </div>
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <i class="fas fa-users text-purple-500"></i>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-500 text-sm">পেন্ডিং অর্ডার</p>
                        <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $pending_order }}</h3>
                    </div>
                    <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <i class="fas fa-clock text-yellow-500"></i>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-500 text-sm">অ্যাক্টিভ অর্ডার</p>
                        <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $active_order }}</h3>
                    </div>
                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <i class="fa-solid fa-bag-shopping text-pink-400"></i>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-500 text-sm">মোট আয়</p>
                        <h3 class="text-2xl font-bold text-gray-800 mt-1">৳{{ number_format($total_income, 2) }}</h3>
                    </div>
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <i class="fas fa-money-bill-wave text-green-500"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Recent Users Card -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-lg font-semibold text-gray-800">সদ্য নিবন্ধিত শিক্ষার্থী</h3>
                    <a href="{{ route('admin.users.index') }}" class="text-blue-500 text-sm hover:text-blue-700">সব
                        দেখুন</a>
                </div>
                <div class="space-y-4">
                    @forelse($recent_users as $recent_user)
                        <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                    <i class="fas fa-user text-gray-500"></i>
                                </div>
                                <div>
                                    <p class="font-medium text-gray-800">{{ $recent_user->name }}</p>
                                    <p class="text-sm text-gray-500">{{ $recent_user->email }}</p>
                                </div>
                            </div>
                            <span class="text-xs text-gray-400">{{ $recent_user->created_at->diffForHumans() }}</span>
                        </div>
                    @empty
                        <p class="text-gray-500 text-center py-4">কোন ব্যবহারকারী পাওয়া যায়নি</p>
                    @endforelse
                </div>
            </div>

            <!-- Recent Orders Card -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-lg font-semibold text-gray-800">সাম্প্রতিক অর্ডার</h3>
                    <a href="{{ route('admin.orders.index') }}" class="text-blue-500 text-sm hover:text-blue-700">সব
                        দেখুন</a>
                </div>
                <div class="space-y-4">
                    @forelse($recent_orders as $order)
                        <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                    <i class="fas fa-shopping-bag text-gray-500"></i>
                                </div>
                                <div>
                                    <p class="font-medium text-gray-800">অর্ডার #{{ $order->id }}</p>
                                    <p class="text-sm text-gray-500">{{ $order->user->name ?? 'Unknown User' }}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="font-medium text-gray-800">৳{{ number_format($order->amount, 2) }}</p>
                                <span class="text-xs px-2 py-1 rounded-full 
                                    @if($order->status == 'completed') bg-green-100 text-green-800
                                    @elseif($order->status == 'pending') bg-yellow-100 text-yellow-800
                                    @else bg-red-100 text-red-800 @endif">
                                    {{ $order->status }}
                                </span>
                            </div>
                        </div>
                    @empty
                        <p class="text-gray-500 text-center py-4">কোন অর্ডার পাওয়া যায়নি</p>
                    @endforelse
                </div>
            </div>
        </div>
    </main>
@endsection