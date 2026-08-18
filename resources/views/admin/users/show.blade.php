@extends('admin.dashboard.layout')

@section('content')
<div class="flex-1 p-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">ব্যবহারকারীর বিবরণ</h1>
            <p class="text-gray-600 mt-1">{{ $user->name }} - প্রোফাইল তথ্য</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3">
            <a href="{{ route('admin.users.edit', $user) }}" 
               class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 border border-blue-400 shadow-lg hover:shadow-blue-500/25">
                <i class="fas fa-edit mr-2"></i> সম্পাদনা
            </a>
            <a href="{{ route('admin.users.index') }}" 
               class="text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 bg-white hover:bg-gray-50 shadow-sm">
                <i class="fas fa-arrow-left mr-2"></i> ফিরে যান
            </a>
        </div>
    </div>

    <!-- User Profile Card -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <!-- User Header -->
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <div class="relative">
                <img class="h-20 w-20 rounded-full border-2 border-blue-300" 
                     src="{{ $user->avatar ?? "https://cdn-icons-png.flaticon.com/512/3675/3675805.png"}}" 
                     alt="{{ $user->name }}">
                <div class="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div class="text-center sm:text-left">
                <h2 class="text-2xl font-bold text-gray-800">{{ $user->name }}</h2>
                <p class="text-gray-600 text-lg">{{ $user->email }}</p>
                <div class="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                        <i class="fas fa-user-circle mr-2"></i>
                        {{ ucfirst($user->role) }}
                    </span>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                        <i class="fas fa-circle mr-2 text-xs"></i>
                        সক্রিয়
                    </span>
                </div>
            </div>
        </div>

        <!-- User Details Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Left Column -->
            <div class="space-y-6">
                <!-- Phone Number -->
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-all duration-300">
                    <div class="flex items-center mb-3">
                        <div class="bg-blue-100 p-2 rounded-lg mr-3 border border-blue-200">
                            <i class="fas fa-phone text-blue-500"></i>
                        </div>
                        <label class="text-sm font-medium text-gray-600">ফোন নম্বর</label>
                    </div>
                    <p class="text-gray-800 text-lg font-medium pl-11">{{ $user->phone ?? 'নির্দিষ্ট করা হয়নি' }}</p>
                </div>

                <!-- Current Education -->
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-purple-300 transition-all duration-300">
                    <div class="flex items-center mb-3">
                        <div class="bg-purple-100 p-2 rounded-lg mr-3 border border-purple-200">
                            <i class="fas fa-graduation-cap text-purple-500"></i>
                        </div>
                        <label class="text-sm font-medium text-gray-600">বর্তমান শিক্ষা</label>
                    </div>
                    <p class="text-gray-800 text-lg font-medium pl-11">{{ $user->current_education ?? 'নির্দিষ্ট করা হয়নি' }}</p>
                </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-6">
                <!-- Institute Name -->
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-orange-300 transition-all duration-300">
                    <div class="flex items-center mb-3">
                        <div class="bg-orange-100 p-2 rounded-lg mr-3 border border-orange-200">
                            <i class="fas fa-university text-orange-500"></i>
                        </div>
                        <label class="text-sm font-medium text-gray-600">প্রতিষ্ঠানের নাম</label>
                    </div>
                    <p class="text-gray-800 text-lg font-medium pl-11">{{ $user->institute_name ?? 'নির্দিষ্ট করা হয়নি' }}</p>
                </div>

                <!-- Account Created -->
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-green-300 transition-all duration-300">
                    <div class="flex items-center mb-3">
                        <div class="bg-green-100 p-2 rounded-lg mr-3 border border-green-200">
                            <i class="fas fa-calendar-alt text-green-500"></i>
                        </div>
                        <label class="text-sm font-medium text-gray-600">অ্যাকাউন্ট তৈরি হয়েছে</label>
                    </div>
                    <p class="text-gray-800 text-lg font-medium pl-11">{{ $user->created_at->format('M d, Y') }}</p>
                </div>
            </div>
        </div>

        <!-- Additional Information Section -->
        <div class="mt-8 pt-6 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">অতিরিক্ত তথ্য</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600">কোর্স সংখ্যা</p>
                            <p class="text-xl font-bold text-gray-800">৫</p>
                        </div>
                        <div class="bg-blue-100 p-2 rounded-lg">
                            <i class="fas fa-book text-blue-500"></i>
                        </div>
                    </div>
                </div>
                
                <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600">সম্পন্ন অ্যাসাইনমেন্ট</p>
                            <p class="text-xl font-bold text-gray-800">১২</p>
                        </div>
                        <div class="bg-green-100 p-2 rounded-lg">
                            <i class="fas fa-check-circle text-green-500"></i>
                        </div>
                    </div>
                </div>
                
                <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600">সর্বশেষ সক্রিয়</p>
                            <p class="text-sm font-medium text-gray-800">আজ</p>
                        </div>
                        <div class="bg-purple-100 p-2 rounded-lg">
                            <i class="fas fa-clock text-purple-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="mt-8 pt-6 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">দ্রুত কর্ম</h3>
            <div class="flex flex-wrap gap-3">
                <button class="flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 transition-colors duration-200">
                    <i class="fas fa-envelope mr-2"></i> বার্তা পাঠান
                </button>
                <button class="flex items-center px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg border border-green-200 transition-colors duration-200">
                    <i class="fas fa-key mr-2"></i> পাসওয়ার্ড রিসেট
                </button>
                <button class="flex items-center px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg border border-purple-200 transition-colors duration-200">
                    <i class="fas fa-chart-bar mr-2"></i> কার্যকলাপ দেখুন
                </button>
                <button class="flex items-center px-4 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-lg border border-orange-200 transition-colors duration-200">
                    <i class="fas fa-ban mr-2"></i> অ্যাকাউন্ট ব্লক
                </button>
            </div>
        </div>
    </div>
</div>
@endsection