@extends('admin.dashboard.layout')

@section('content')
    <div class="flex-1 p-6 overflow-y-auto">
        <!-- Header -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
                <h1 class="text-2xl font-bold text-gray-800">কোর্সের বিবরণ</h1>
                <p class="text-gray-600 mt-1">{{ $course->title }} - প্রোফাইল তথ্য</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
                <a href="{{ route('admin.courses.edit', $course) }}"
                    class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 border border-blue-400 shadow-lg hover:shadow-blue-500/25">
                    <i class="fas fa-edit mr-2"></i> সম্পাদনা
                </a>
                <a href="{{ route('admin.courses.index') }}"
                    class="text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 bg-white hover:bg-gray-50 shadow-sm">
                    <i class="fas fa-arrow-left mr-2"></i> ফিরে যান
                </a>
            </div>
        </div>

        <!-- Course Profile Card -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <!-- Course Header -->
            <div class="flex flex-col lg:flex-row gap-6 mb-8">
                <!-- Thumbnail -->
                <div class="lg:w-1/3">
                    <div class="bg-gray-100 rounded-xl border border-gray-200 overflow-hidden">
                        <img class="w-full h-64 object-cover"
                            src="{{ $course->thumbnail ? $course->thumbnail : 'https://via.placeholder.com/400x300?text=No+Thumbnail' }}"
                            alt="{{ $course->title }}">
                    </div>
                </div>

                <!-- Course Info -->
                <div class="lg:w-2/3">
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ $course->title }}</h2>
                    <p class="text-gray-600 text-lg mb-4">{{ $course->slug }}</p>

                    <div class="flex flex-wrap gap-3 mb-4">
                        @php
                            $statusBadge = $course->status_badge;
                        @endphp
                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium {{ $statusBadge[0] }} border {{ $statusBadge[0] == 'bg-gray-100 text-gray-800' ? 'border-gray-200' : ($statusBadge[0] == 'bg-green-100 text-green-800' ? 'border-green-200' : 'border-red-200') }}">
                            <i
                                class="fas fa-circle mr-2 text-xs {{ $statusBadge[0] == 'bg-gray-100 text-gray-800' ? 'text-gray-500' : ($statusBadge[0] == 'bg-green-100 text-green-800' ? 'text-green-500' : 'text-red-500') }}"></i>
                            {{ $statusBadge[1] }}
                        </span>

                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">
                            <i class="fas fa-folder mr-2"></i>
                            {{ $course->category->name }}
                        </span>

                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                            <i class="fas fa-calendar-alt mr-2"></i>
                            {{ $course->created_at->format('M d, Y') }}
                        </span>
                    </div>

                    <!-- Pricing -->
                    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm text-gray-600">বর্তমান মূল্য</p>
                                <div class="flex items-center gap-3">
                                    <span
                                        class="text-2xl font-bold text-gray-800">৳{{ number_format($course->final_price, 2) }}</span>
                                    @if ($course->offer_price)
                                        <span
                                            class="text-lg text-gray-500 line-through">৳{{ number_format($course->price, 2) }}</span>
                                        <span
                                            class="text-sm font-medium bg-green-500 text-white px-2 py-1 rounded-full">{{ $course->discount_percentage }}%
                                            ছাড়</span>
                                    @endif
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="text-sm text-gray-600">মূল মূল্য</p>
                                <p class="text-lg font-semibold text-gray-800">৳{{ number_format($course->price, 2) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Course Details Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <!-- Description -->
                <div class="lg:col-span-2">
                    <div class="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
                        <div class="flex items-center mb-4">
                            <div class="bg-blue-100 p-2 rounded-lg mr-3 border border-blue-200">
                                <i class="fas fa-align-left text-blue-500"></i>
                            </div>
                            <label class="text-sm font-medium text-gray-600">বর্ণনা</label>
                        </div>
                        <p class="text-gray-800 whitespace-pre-line">{{ $course->description }}</p>
                    </div>

                    <!-- Enrolled Students Form -->
                    <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <form action="{{ route('admin.courses.update.enrolled', $course) }}" method="POST">
                            @csrf
                            <div class="flex items-center mb-4">
                                <div class="bg-green-100 p-2 rounded-lg mr-3 border border-green-200">
                                    <i class="fas fa-user-graduate text-green-500"></i>
                                </div>
                                <label for="enrolled" class="text-sm font-medium text-gray-600">ডিফল্ট ভর্তি
                                    শিক্ষার্থী</label>
                            </div>

                            <div class="mb-4">
                                <input type="number" id="enrolled" name="enrolled" value="{{ $course->enrolled }}"
                                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
                                    placeholder="শিক্ষার্থীর সংখ্যা লিখুন">
                            </div>

                            <div class="flex justify-end">
                                <button type="submit"
                                    class="px-5 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200">
                                    সংরক্ষণ করুন
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- How to buy course  -->
                    <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <form action="{{ route('admin.courses.update.enrolled', $course) }}" method="POST">
                            @csrf
                            <div class="flex items-center mb-4">
                                <div class="bg-green-100 p-2 rounded-lg mr-3 border border-green-200">
                                    <i class="fa-solid fa-bag-shopping text-green-500"></i>
                                </div>
                                <label for="how_to_buy" class="text-sm font-medium text-gray-600">How to buy course? Paste youtube video id</label>
                            </div>

                            <div class="mb-4">
                                <input type="text" id="how_to_buy" name="how_to_buy" value="{{ $course->how_to_buy }}"
                                    class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
                                    placeholder="How to buy? enter youtube video id">
                            </div>

                            <div class="flex justify-end">
                                <button type="submit"
                                    class="px-5 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200">
                                    সংরক্ষণ করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



            <!-- Additional Information -->
            <div class="space-y-4">
                <!-- Category -->
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div class="flex items-center mb-2">
                        <div class="bg-purple-100 p-2 rounded-lg mr-3 border border-purple-200">
                            <i class="fas fa-folder text-purple-500"></i>
                        </div>
                        <label class="text-sm font-medium text-gray-600">ক্যাটাগরি</label>
                    </div>
                    <p class="text-gray-800 font-medium">{{ $course->category->name }}</p>
                </div>

                <!-- Social Links -->
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div class="flex items-center mb-3">
                        <div class="bg-green-100 p-2 rounded-lg mr-3 border border-green-200">
                            <i class="fas fa-share-alt text-green-500"></i>
                        </div>
                        <label class="text-sm font-medium text-gray-600">সোশ্যাল লিঙ্ক</label>
                    </div>
                    <div class="space-y-2">
                        @if ($course->whatsapp_link)
                            <a href="{{ $course->whatsapp_link }}" target="_blank"
                                class="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                                <i class="fab fa-whatsapp mr-2 text-green-500"></i>
                                WhatsApp Group
                            </a>
                        @endif
                        @if ($course->facebook_link)
                            <a href="{{ $course->facebook_link }}" target="_blank"
                                class="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                                <i class="fab fa-facebook mr-2 text-blue-500"></i>
                                Facebook Group
                            </a>
                        @endif
                        @if ($course->telegram_link)
                            <a href="{{ $course->telegram_link }}" target="_blank"
                                class="flex items-center text-gray-700 hover:text-blue-400 transition-colors">
                                <i class="fab fa-telegram mr-2 text-blue-400"></i>
                                Telegram Channel
                            </a>
                        @endif
                        @if (!$course->whatsapp_link && !$course->facebook_link && !$course->telegram_link)
                            <p class="text-gray-500 text-sm">কোন সোশ্যাল লিঙ্ক যুক্ত করা হয়নি</p>
                        @endif
                    </div>
                </div>
            </div>
        </div>

        <!-- More Description -->
        @if ($course->more_description)
            <div class="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
                <div class="flex items-center mb-4">
                    <div class="bg-orange-100 p-2 rounded-lg mr-3 border border-orange-200">
                        <i class="fas fa-info-circle text-orange-500"></i>
                    </div>
                    <label class="text-sm font-medium text-gray-600">বিস্তারিত বর্ণনা</label>
                </div>
                <div class="text-gray-800 whitespace-pre-line">{{ $course->more_description }}</div>
            </div>
        @endif

        <!-- Quick Actions -->
        <div class="mt-8 pt-6 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">দ্রুত কর্ম</h3>
            <div class="flex flex-wrap gap-3">
                <a href="{{ route('admin.courses.edit', $course) }}"
                    class="flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 transition-colors duration-200">
                    <i class="fas fa-edit mr-2"></i> সম্পাদনা করুন
                </a>


                <a href="{{ route('admin.courses.student', $course) }}"
                    class="flex items-center px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg border border-purple-200 transition-colors duration-200">
                    <i class="fas fa-users mr-2"></i> শিক্ষার্থী দেখুন
                </a>
                <a href="{{ route('admin.courses.routine', $course) }}"
                    class="flex items-center px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg border border-purple-200 transition-colors duration-200">
                    <i class="fa-solid fa-chart-simple mr-2"></i> রুটিন যোগ করুন
                </a>
                <a href="{{ route('admin.courses.features', $course) }}"
                    class="flex items-center px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg border border-purple-200 transition-colors duration-200">
                    <i class="fa-solid fa-chart-simple mr-2"></i> ফিচার যোগ করুন
                </a>
                <a href="{{ route('admin.courses.instructor', $course) }}"
                    class="flex items-center px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg border border-purple-200 transition-colors duration-200">
                    <i class="fa-solid fa-chart-simple mr-2"></i> ইন্সট্রাক্টর যোগ করুন
                </a>
                <a href="{{ route('admin.courses.exams.index', $course) }}"
                    class="flex items-center px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg border border-purple-200 transition-colors duration-200">
                    <i class="fa-solid fa-chart-simple mr-2"></i> লিখিত পরীক্ষা যোগ করুন
                </a>
            </div>
        </div>
    </div>
    </div>
@endsection
