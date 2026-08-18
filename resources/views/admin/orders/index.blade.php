@extends('admin.dashboard.layout')

@section('content')

    <div class=" mx-auto px-4 py-6">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <!-- Header Section -->
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-xl font-bold text-gray-800 mb-4">অর্ডার তালিকা</h2>

                <!-- Advanced Search and Filter Form -->
                <form action="{{ route('admin.orders.index') }}" method="GET" class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <!-- Search Input -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">সার্চ</label>
                            <div class="relative rounded-md shadow-sm">
                                <input type="text" name="search"
                                    class="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="অর্ডার আইডি, ট্রানজেকশন আইডি, ইউজার..." value="{{ request('search') }}">
                                <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i class="fas fa-search text-gray-400"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Course Filter -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">কোর্স</label>
                            <select name="course_id"
                                class="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                                <option value="">সব কোর্স</option>
                                @foreach ($courses as $course)
                                    <option value="{{ $course->id }}"
                                        {{ request('course_id') == $course->id ? 'selected' : '' }}>
                                        {{ $course->title }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        <!-- Status Filter -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">স্ট্যাটাস</label>
                            <select name="status"
                                class="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                                <option value="">সব স্ট্যাটাস</option>
                                <option value="pending" {{ request('status') == 'pending' ? 'selected' : '' }}>পেন্ডিং
                                </option>
                                <option value="completed" {{ request('status') == 'completed' ? 'selected' : '' }}>কমপ্লিটেড
                                </option>
                                <option value="failed" {{ request('status') == 'failed' ? 'selected' : '' }}>ফেইলড</option>
                                <option value="cancelled" {{ request('status') == 'cancelled' ? 'selected' : '' }}>বাতিল</option>
                            </select>
                        </div>

                        <!-- Payment Method Filter -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">পেমেন্ট মেথড</label>
                            <select name="payment_method"
                                class="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                                <option value="">সব মেথড</option>
                                <option value="bkash" {{ request('payment_method') == 'bkash' ? 'selected' : '' }}>বিকাশ
                                </option>
                                <option value="nagad" {{ request('payment_method') == 'nagad' ? 'selected' : '' }}>নগদ
                                </option>
                                <option value="rocket" {{ request('payment_method') == 'rocket' ? 'selected' : '' }}>রকেট
                                </option>
                                <option value="sslcommerz"
                                    {{ request('payment_method') == 'sslcommerz' ? 'selected' : '' }}>এসএসএল কমার্জ
                                </option>
                            </select>
                        </div>

                        <!-- Date From -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">তারিখ থেকে</label>
                            <input type="date" name="date_from"
                                class="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                value="{{ request('date_from') }}">
                        </div>

                        <!-- Date To -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">তারিখ পর্যন্ত</label>
                            <input type="date" name="date_to"
                                class="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                value="{{ request('date_to') }}">
                        </div>

                        <!-- Filter Buttons -->
                        <div class="flex items-end space-x-2">
                            <button type="submit"
                                class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-150">
                                <i class="fas fa-filter"></i> ফিল্টার
                            </button>
                            <a href="{{ route('admin.orders.index') }}"
                                class="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-150">
                                <i class="fas fa-undo-alt"></i> রিসেট
                            </a>
                        </div>
                    </div>
                </form>
            </div>

            <!-- Active Filters Display -->
            @if (request('search') ||
                    request('course_id') ||
                    request('status') ||
                    request('payment_method') ||
                    request('date_from') ||
                    request('date_to'))
                <div class="px-6 py-3 bg-gray-50 border-b border-gray-200">
                    <div class="flex flex-wrap items-center gap-2">
                        <span class="text-sm text-gray-600">সক্রিয় ফিল্টার:</span>
                        @if (request('search'))
                            <span
                                class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                                সার্চ: {{ request('search') }}
                                <a href="{{ route('admin.orders.index', array_merge(request()->except('search'), ['page' => 1])) }}"
                                    class="ml-1 text-blue-600 hover:text-blue-800">
                                    <i class="fas fa-times-circle"></i>
                                </a>
                            </span>
                        @endif
                        @if (request('course_id'))
                            <span
                                class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                                কোর্স: {{ $courses->find(request('course_id'))?->title }}
                                <a href="{{ route('admin.orders.index', array_merge(request()->except('course_id'), ['page' => 1])) }}"
                                    class="ml-1 text-green-600 hover:text-green-800">
                                    <i class="fas fa-times-circle"></i>
                                </a>
                            </span>
                        @endif
                        @if (request('status'))
                            <span
                                class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800">
                                স্ট্যাটাস: {{ ucfirst(request('status')) }}
                                <a href="{{ route('admin.orders.index', array_merge(request()->except('status'), ['page' => 1])) }}"
                                    class="ml-1 text-yellow-600 hover:text-yellow-800">
                                    <i class="fas fa-times-circle"></i>
                                </a>
                            </span>
                        @endif
                        @if (request('payment_method'))
                            <span
                                class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                                পেমেন্ট: {{ strtoupper(request('payment_method')) }}
                                <a href="{{ route('admin.orders.index', array_merge(request()->except('payment_method'), ['page' => 1])) }}"
                                    class="ml-1 text-purple-600 hover:text-purple-800">
                                    <i class="fas fa-times-circle"></i>
                                </a>
                            </span>
                        @endif
                        @if (request('date_from') || request('date_to'))
                            <span
                                class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                                তারিখ: {{ request('date_from') }} - {{ request('date_to') }}
                                <a href="{{ route('admin.orders.index', array_merge(request()->except(['date_from', 'date_to']), ['page' => 1])) }}"
                                    class="ml-1 text-indigo-600 hover:text-indigo-800">
                                    <i class="fas fa-times-circle"></i>
                                </a>
                            </span>
                        @endif
                    </div>
                </div>
            @endif

            <!-- Export Button -->
            <div class="px-6 py-3 bg-gray-50 border-b border-gray-200 flex justify-end">
                <button onclick="exportToExcel()"
                    class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-150">
                    <i class="fas fa-file-excel"></i> এক্সপোর্ট
                </button>
            </div>

            <!-- Table Section -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                               #
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                অর্ডার আইডি
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ব্যবহারকারী
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                কোর্স
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                পরিমাণ
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                চূড়ান্ত পরিমাণ
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                স্ট্যাটাস
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                পেমেন্ট মেথড
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ট্রানজেকশন আইডি
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                তারিখ
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                একশন
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        @forelse($orders as $index=> $order )
                            <tr class="hover:bg-gray-50 transition-colors duration-150">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                   {{ $orders->firstItem() + $index }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {{ $order->order_id }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    <div>
                                        <div class="font-medium">{{ $order->user->name }}</div>
                                        <div class="text-xs text-gray-500">{{ $order->user->email }}</div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-700">
                                    {{ Str::limit($order->course->title, 50) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    ৳{{ number_format($order->amount, 2) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    ৳{{ number_format($order->final_amount, 2) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span
                                        class="inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                                    @if ($order->status == 'completed') bg-green-100 text-green-800
                                    @elseif($order->status == 'failed') bg-red-100 text-red-800
                                    @else bg-yellow-100 text-yellow-800 @endif">
                                        @if ($order->status == 'pending')
                                            পেন্ডিং
                                        @elseif($order->status == 'completed')
                                            কমপ্লিটেড
                                        @elseif($order->status == 'cancelled')
                                            বাতিল
                                        @else
                                            ফেইলড
                                        @endif
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span
                                        class="inline-flex px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                                        {{ strtoupper($order->payment_method) }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {{ $order->transaction_id ?? '-' }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {{ $order->created_at->format('d/m/Y h:i A') }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div class="flex space-x-2">
                                        <a href="{{ route('admin.orders.show', $order) }}"
                                            class="text-blue-600 hover:text-blue-900 transition-colors duration-150"
                                            title="দেখুন">
                                            <i class="fas fa-eye"></i>
                                        </a>
                                        <form action="{{ route('admin.orders.destroy', $order) }}" method="POST"
                                            onsubmit="return confirm('আপনি কি এই অর্ডার ডিলিট করতে চান?')" class="inline">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit"
                                                class="text-red-600 hover:text-red-900 transition-colors duration-150"
                                                title="ডিলিট করুন">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="10" class="px-6 py-4 text-center text-sm text-gray-500">
                                    <div class="flex flex-col items-center justify-center py-8">
                                        <i class="fas fa-inbox text-4xl text-gray-400 mb-2"></i>
                                        <p>কোন অর্ডার পাওয়া যায়নি</p>
                                    </div>
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <!-- Pagination Section -->
            <div class="px-6 py-4 border-t border-gray-200">
                {{ $orders->appends(request()->query())->links() }}
            </div>
        </div>
    </div>



    <script>
        function exportToExcel() {
            // Get current filters
            const params = new URLSearchParams(window.location.search);
            params.set('export', 'excel');
            window.location.href = window.location.pathname + '?' + params.toString();
        }
    </script>
@endsection
