@extends('admin.dashboard.layout')

@section('content')
<div class="flex-1 p-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">কোর্সের শিক্ষার্থী তালিকা</h1>
            <p class="text-gray-600 mt-1">{{ $course->title }} - এনরোল্ড শিক্ষার্থীবৃন্দ</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3">
            <a href="{{ route('admin.courses.show', $course) }}"
               class="text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 bg-white hover:bg-gray-50 shadow-sm">
                <i class="fas fa-arrow-left mr-2"></i> কোর্স ডিটেইলে ফিরে যান
            </a>
        </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="flex items-center">
                <div class="bg-blue-100 p-3 rounded-lg mr-4 border border-blue-200">
                    <i class="fas fa-users text-blue-500 text-xl"></i>
                </div>
                <div>
                    <p class="text-sm text-gray-600">মোট শিক্ষার্থী</p>
                    <p class="text-2xl font-bold text-gray-800">{{ $orders->count() }}</p>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="flex items-center">
                <div class="bg-green-100 p-3 rounded-lg mr-4 border border-green-200">
                    <i class="fas fa-check-circle text-green-500 text-xl"></i>
                </div>
                <div>
                    <p class="text-sm text-gray-600">একটিভ শিক্ষার্থী</p>
                    <p class="text-2xl font-bold text-gray-800">{{ $orders->count() }}</p>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="flex items-center">
                <div class="bg-purple-100 p-3 rounded-lg mr-4 border border-purple-200">
                    <i class="fas fa-money-bill-wave text-purple-500 text-xl"></i>
                </div>
                <div>
                    <p class="text-sm text-gray-600">মোট আয়</p>
                    <p class="text-2xl font-bold text-gray-800">৳{{ number_format($orders->sum('amount'), 2) }}</p>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="flex items-center">
                <div class="bg-orange-100 p-3 rounded-lg mr-4 border border-orange-200">
                    <i class="fas fa-calendar-alt text-orange-500 text-xl"></i>
                </div>
                <div>
                    <p class="text-sm text-gray-600">গড় এনরোলমেন্ট</p>
                    <p class="text-2xl font-bold text-gray-800">{{ $course->created_at->format('M Y') }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Students Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <!-- Table Header -->
        <div class="px-6 py-4 border-b border-gray-200">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 class="text-lg font-semibold text-gray-800">শিক্ষার্থী তালিকা</h2>

                <!-- Search and Filters -->
                <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <form method="GET" action="{{ route('admin.courses.student', $course) }}" class="flex gap-3">
                        <div class="relative">
                            <input type="text"
                                   name="search"
                                   value="{{ request('search') }}"
                                   placeholder="শিক্ষার্থীর নাম, ইমেইল বা ফোন নম্বর..."
                                   class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64">
                            <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                        </div>
                        <button type="submit"
                                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center">
                            <i class="fas fa-search mr-2"></i> খুঁজুন
                        </button>
                        @if(request('search'))
                        <a href="{{ route('admin.courses.student', $course) }}"
                           class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center">
                            <i class="fas fa-times mr-2"></i> ক্লিয়ার
                        </a>
                        @endif
                    </form>

                    <form method="GET" action="{{ route('admin.courses.student', $course) }}">
                        <input type="hidden" name="export" value="1">
                        @if(request('search'))
                            <input type="hidden" name="search" value="{{ request('search') }}">
                        @endif
                        <button type="submit"
                                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center">
                            <i class="fas fa-download mr-2"></i> এক্সপোর্ট
                        </button>
                    </form>
                </div>
            </div>

            <!-- Search Results Info -->
            @if(request('search'))
            <div class="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div class="flex items-center text-blue-700">
                    <i class="fas fa-info-circle mr-2"></i>
                    <span class="text-sm">
                        "{{ request('search') }}" এর জন্য {{ $orders->count() }}টি ফলাফল পাওয়া গেছে
                    </span>
                </div>
            </div>
            @endif
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead>
                    <tr class="bg-gray-50 border-b border-gray-200">
                        <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            শিক্ষার্থী
                        </th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ইমেইল
                        </th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ফোন
                        </th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            এনরোল তারিখ
                        </th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            পরিমাণ
                        </th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            স্ট্যাটাস
                        </th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            কর্ম
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    @forelse($orders as $order)
                    <tr class="hover:bg-gray-50 transition-colors duration-150">
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {{ substr($order->user->name, 0, 1) }}
                                </div>
                                <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">
                                        {{ $order->user->name }}
                                    </div>
                                    <div class="text-sm text-gray-500">
                                        ID: {{ $order->user->id }}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{ $order->user->email }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                                {{ $order->user->phone ?? 'N/A' }}
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                                {{ $order->created_at->format('d M, Y') }}
                            </div>
                            <div class="text-sm text-gray-500">
                                {{ $order->created_at->format('h:i A') }}
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">
                                ৳{{ number_format($order->amount, 2) }}
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                <i class="fas fa-check-circle mr-1 text-xs"></i>
                                Completed
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div class="flex items-center gap-2">
                                <a href="{{ route('admin.users.show', $order->user->id) }}"
                                   class="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                                   title="View Profile">
                                    <i class="fas fa-eye"></i>
                                </a>

                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="7" class="px-6 py-8 text-center">
                            <div class="flex flex-col items-center justify-center text-gray-500">
                                <i class="fas fa-users text-4xl mb-4 text-gray-300"></i>
                                <p class="text-lg font-medium mb-2">কোন শিক্ষার্থী খুঁজে পাওয়া যায়নি</p>
                                <p class="text-sm">
                                    @if(request('search'))
                                        "{{ request('search') }}" এর জন্য কোন ফলাফল নেই
                                    @else
                                        এই কোর্সে এখনো কোন শিক্ষার্থী এনরোল করেনি।
                                    @endif
                                </p>
                            </div>
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</div>

<script>


// Search functionality with Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[name="search"]');
    const searchForm = document.querySelector('form[method="GET"]');

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchForm.submit();
        }
    });
});
</script>
@endsection
