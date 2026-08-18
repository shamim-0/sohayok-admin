@extends('admin.dashboard.layout')

@section('content')
    <div class="mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900">সেটিংস</h1>
                <p class="text-gray-600 mt-1">আপনার জনপ্রিয় কোর্স সেকশন টাইটেল এবং সাবটাইটেল ম্যানেজ করুন</p>
            </div>
        </div>

        <!-- Success/Error Messages -->
        @if(session('success'))
            <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-green-800">{{ session('success') }}</span>
                </div>
                <button type="button" class="text-green-600 hover:text-green-800" onclick="this.parentElement.remove()">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        @endif

        @if ($errors->any())
            <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-red-800 font-medium">নিম্নলিখিত ত্রুটিগুলো ঠিক করুন:</span>
                </div>
                <ul class="mt-2 list-disc list-inside text-red-700">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <!-- Popular Course Section Content Form -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
                <h5 class="text-lg font-semibold text-gray-900">জনপ্রিয় কোর্স সেকশন কন্টেন্ট</h5>
                <p class="text-sm text-gray-600 mt-1">আপনার জনপ্রিয় কোর্স সেকশনের টাইটেল এবং সাবটাইটেল সেট করুন</p>
            </div>

            <div class="p-6">
                <form action="{{ route('admin.popular-course-section.store') }}" method="POST">
                    @csrf
                    
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <!-- Title Part 1 -->
                        <div>
                            <label for="title_part_1" class="block text-sm font-medium text-gray-700 mb-2">
                                টাইটেল পার্ট ১ *
                            </label>
                            <input type="text" id="title_part_1" name="title_part_1" 
                                   value="{{ old('title_part_1', $popularCourseSection->title_part_1 ?? '') }}" 
                                   required
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                   placeholder="টাইটেলের প্রথম অংশ">
                            <p class="text-xs text-gray-500 mt-1">টাইটেলের প্রথম অংশ (সাধারণত সাধারণ টেক্সট)</p>
                        </div>

                        <!-- Title Part 2 -->
                        <div>
                            <label for="title_part_2" class="block text-sm font-medium text-gray-700 mb-2">
                                টাইটেল পার্ট ২ *
                            </label>
                            <input type="text" id="title_part_2" name="title_part_2" 
                                   value="{{ old('title_part_2', $popularCourseSection->title_part_2 ?? '') }}" 
                                   required
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                   placeholder="টাইটেলের দ্বিতীয় অংশ">
                            <p class="text-xs text-gray-500 mt-1">টাইটেলের দ্বিতীয় অংশ (সাধারণত হাইলাইটেড টেক্সট)</p>
                        </div>

                        <!-- Subtitle Part 1 -->
                        <div>
                            <label for="subtitle_part_1" class="block text-sm font-medium text-gray-700 mb-2">
                                সাবটাইটেল পার্ট ১ *
                            </label>
                            <input type="text" id="subtitle_part_1" name="subtitle_part_1" 
                                   value="{{ old('subtitle_part_1', $popularCourseSection->subtitle_part_1 ?? '') }}" 
                                   required
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                   placeholder="সাবটাইটেলের প্রথম অংশ">
                            <p class="text-xs text-gray-500 mt-1">সাবটাইটেলের প্রথম অংশ</p>
                        </div>

                        <!-- Subtitle Part 2 -->
                        <div>
                            <label for="subtitle_part_2" class="block text-sm font-medium text-gray-700 mb-2">
                                সাবটাইটেল পার্ট ২ *
                            </label>
                            <input type="text" id="subtitle_part_2" name="subtitle_part_2" 
                                   value="{{ old('subtitle_part_2', $popularCourseSection->subtitle_part_2 ?? '') }}" 
                                   required
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                   placeholder="সাবটাইটেলের দ্বিতীয় অংশ">
                            <p class="text-xs text-gray-500 mt-1">সাবটাইটেলের দ্বিতীয় অংশ</p>
                        </div>
                    </div>

                    <!-- Preview Section -->
                    <div class="mb-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                        <h4 class="text-sm font-medium text-gray-900 mb-4 text-center">জনপ্রিয় কোর্স সেকশন - লাইভ প্রিভিউ</h4>
                        
                        <!-- Title Preview -->
                        <div class="text-center mb-4">
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
                                <span id="preview-title-part-1" class="text-gray-800">
                                    {{ old('title_part_1', $popularCourseSection->title_part_1 ?? 'জনপ্রিয়') }}
                                </span>
                                <span id="preview-title-part-2" class="text-purple-600">
                                    {{ old('title_part_2', $popularCourseSection->title_part_2 ?? 'কোর্সসমূহ') }}
                                </span>
                            </h2>
                        </div>

                        <!-- Subtitle Preview -->
                        <div class="text-center">
                            <p class="text-lg text-gray-600">
                                <span id="preview-subtitle-part-1">
                                    {{ old('subtitle_part_1', $popularCourseSection->subtitle_part_1 ?? 'আমাদের সবচেয়ে') }}
                                </span>
                                <span id="preview-subtitle-part-2" class="font-semibold text-purple-500">
                                    {{ old('subtitle_part_2', $popularCourseSection->subtitle_part_2 ?? 'জনপ্রিয় কোর্সগুলো একনজরে') }}
                                </span>
                            </p>
                        </div>

                        <!-- Full Text Preview -->
                        <div class="mt-6 p-4 bg-white rounded-lg border border-purple-100 shadow-sm">
                            <h5 class="text-sm font-medium text-gray-700 mb-3 text-center">সম্পূর্ণ টেক্সট প্রিভিউ:</h5>
                            <div class="text-center space-y-2">
                                <p class="text-gray-800">
                                    <strong class="text-purple-600">টাইটেল:</strong> 
                                    "<span id="preview-full-title" class="font-medium">
                                        {{ old('title_part_1', $popularCourseSection->title_part_1 ?? 'জনপ্রিয়') }}
                                        {{ old('title_part_2', $popularCourseSection->title_part_2 ?? 'কোর্সসমূহ') }}
                                    </span>"
                                </p>
                                <p class="text-gray-700">
                                    <strong class="text-purple-600">সাবটাইটেল:</strong> 
                                    "<span id="preview-full-subtitle">
                                        {{ old('subtitle_part_1', $popularCourseSection->subtitle_part_1 ?? 'আমাদের সবচেয়ে') }}
                                        {{ old('subtitle_part_2', $popularCourseSection->subtitle_part_2 ?? 'জনপ্রিয় কোর্সগুলো একনজরে') }}
                                    </span>"
                                </p>
                            </div>
                        </div>


                    </div>

                    <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                        <button type="submit"
                                class="px-6 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-200 flex items-center">
                            @if($popularCourseSection)
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                কন্টেন্ট আপডেট করুন
                            @else
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                কন্টেন্ট তৈরি করুন
                            @endif
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Current Content Info -->
        @if($popularCourseSection)
            <div class="mt-6 bg-purple-50 rounded-lg border border-purple-200 p-6">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-purple-800 font-medium">বর্তমান কন্টেন্ট সেভ আছে</span>
                </div>
                <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-700">
                    <div>
                        <p><strong>টাইটেল পার্ট ১:</strong> {{ $popularCourseSection->title_part_1 }}</p>
                        <p><strong>টাইটেল পার্ট ২:</strong> {{ $popularCourseSection->title_part_2 }}</p>
                    </div>
                    <div>
                        <p><strong>সাবটাইটেল পার্ট ১:</strong> {{ $popularCourseSection->subtitle_part_1 }}</p>
                        <p><strong>সাবটাইটেল পার্ট ২:</strong> {{ $popularCourseSection->subtitle_part_2 }}</p>
                    </div>
                </div>
                <div class="mt-3 text-xs text-purple-600">
                    <p><strong>সর্বশেষ আপডেট:</strong> {{ $popularCourseSection->updated_at->format('d M, Y H:i') }}</p>
                </div>
            </div>
        @else
            <div class="mt-6 bg-yellow-50 rounded-lg border border-yellow-200 p-6">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-yellow-800 font-medium">কোন কন্টেন্ট সেট করা নেই</span>
                </div>
                <p class="mt-2 text-sm text-yellow-700">
                    আপনার জনপ্রিয় কোর্স সেকশনে কোন কন্টেন্ট সেট করা নেই। উপরের ফর্ম ব্যবহার করে টাইটেল এবং সাবটাইটেলের অংশগুলো যোগ করুন।
                </p>
            </div>
        @endif
    </div>



<script>
// Real-time preview update
document.addEventListener('DOMContentLoaded', function() {
    const titlePart1Input = document.getElementById('title_part_1');
    const titlePart2Input = document.getElementById('title_part_2');
    const subtitlePart1Input = document.getElementById('subtitle_part_1');
    const subtitlePart2Input = document.getElementById('subtitle_part_2');

    function updatePreview() {
        // Title Part 1
        document.getElementById('preview-title-part-1').textContent = 
            titlePart1Input.value || 'জনপ্রিয়';
        
        // Title Part 2
        document.getElementById('preview-title-part-2').textContent = 
            titlePart2Input.value || 'কোর্সসমূহ';
        
        // Subtitle Part 1
        document.getElementById('preview-subtitle-part-1').textContent = 
            subtitlePart1Input.value || 'আমাদের সবচেয়ে';
        
        // Subtitle Part 2
        document.getElementById('preview-subtitle-part-2').textContent = 
            subtitlePart2Input.value || 'জনপ্রিয় কোর্সগুলো একনজরে';
        
        // Full Title
        document.getElementById('preview-full-title').textContent = 
            (titlePart1Input.value || 'জনপ্রিয়') + ' ' + 
            (titlePart2Input.value || 'কোর্সসমূহ');
        
        // Full Subtitle
        document.getElementById('preview-full-subtitle').textContent = 
            (subtitlePart1Input.value || 'আমাদের সবচেয়ে') + ' ' + 
            (subtitlePart2Input.value || 'জনপ্রিয় কোর্সগুলো একনজরে');
    }

    // Add event listeners
    titlePart1Input.addEventListener('input', updatePreview);
    titlePart2Input.addEventListener('input', updatePreview);
    subtitlePart1Input.addEventListener('input', updatePreview);
    subtitlePart2Input.addEventListener('input', updatePreview);

    // Initial preview update
    updatePreview();
});
</script>

@endsection