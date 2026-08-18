@extends('admin.dashboard.layout')

@section('content')
    <div class="mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900">সেটিংস</h1>
                <p class="text-gray-600 mt-1">আপনার "কেন আমাদের বেছে নিবেন" সেকশন কন্টেন্ট ম্যানেজ করুন</p>
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

        <!-- Why Choose Us Section Content Form -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
                <h5 class="text-lg font-semibold text-gray-900">কেন আমাদের বেছে নিবেন সেকশন কন্টেন্ট</h5>
                <p class="text-sm text-gray-600 mt-1">আপনার "কেন আমাদের বেছে নিবেন" সেকশনের সমস্ত কন্টেন্ট সেট করুন</p>
            </div>

            <div class="p-6">
                <form action="{{ route('admin.why-choose-us-section.store') }}" method="POST" id="whyChooseUsForm">
                    @csrf
                    
                    <!-- Title Section -->
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">টাইটেল এবং সাবটাইটেল</h3>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Title Part 1 -->
                            <div>
                                <label for="title_part_1" class="block text-sm font-medium text-gray-700 mb-2">
                                    টাইটেল পার্ট ১ *
                                </label>
                                <input type="text" id="title_part_1" name="title_part_1" 
                                       value="{{ old('title_part_1', $whyChooseUsSection->title_part_1 ?? '') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                       placeholder="টাইটেলের প্রথম অংশ">
                                <p class="text-xs text-gray-500 mt-1">টাইটেলের প্রথম অংশ</p>
                            </div>

                            <!-- Title Part 2 -->
                            <div>
                                <label for="title_part_2" class="block text-sm font-medium text-gray-700 mb-2">
                                    টাইটেল পার্ট ২ *
                                </label>
                                <input type="text" id="title_part_2" name="title_part_2" 
                                       value="{{ old('title_part_2', $whyChooseUsSection->title_part_2 ?? '') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                       placeholder="টাইটেলের দ্বিতীয় অংশ">
                                <p class="text-xs text-gray-500 mt-1">টাইটেলের দ্বিতীয় অংশ</p>
                            </div>

                            <!-- Subtitle Part 1 -->
                            <div>
                                <label for="subtitle_part_1" class="block text-sm font-medium text-gray-700 mb-2">
                                    সাবটাইটেল পার্ট ১ *
                                </label>
                                <input type="text" id="subtitle_part_1" name="subtitle_part_1" 
                                       value="{{ old('subtitle_part_1', $whyChooseUsSection->subtitle_part_1 ?? '') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                       placeholder="সাবটাইটেলের প্রথম অংশ">
                                <p class="text-xs text-gray-500 mt-1">সাবটাইটেলের প্রথম অংশ</p>
                            </div>

                            <!-- Subtitle Part 2 -->
                            <div>
                                <label for="subtitle_part_2" class="block text-sm font-medium text-gray-700 mb-2">
                                    সাবটাইটেল পার্ট ২ *
                                </label>
                                <input type="text" id="subtitle_part_2" name="subtitle_part_2" 
                                       value="{{ old('subtitle_part_2', $whyChooseUsSection->subtitle_part_2 ?? '') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                       placeholder="সাবটাইটেলের দ্বিতীয় অংশ">
                                <p class="text-xs text-gray-500 mt-1">সাবটাইটেলের দ্বিতীয় অংশ</p>
                            </div>
                        </div>
                    </div>

                    <!-- Features Section -->
                    <div class="mb-8">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-lg font-semibold text-gray-900">ফিচারস (৬টি)</h3>
                            <button type="button" onclick="resetFeatures()" class="text-sm text-red-600 hover:text-red-800">
                                ডিফল্ট ফিচারস সেট করুন
                            </button>
                        </div>
                        
                        <div id="features-container">
                            @php
                                $defaultFeatures = [
                                    ['icon' => '🎓', 'title' => 'বিশেষজ্ঞ প্রশিক্ষক', 'description' => 'শিল্পে অভিজ্ঞ এবং প্রত্যয়িত প্রশিক্ষকদের কাছ থেকে শিখুন যারা বাস্তব-বিশ্বের জ্ঞান নিয়ে আসেন'],
                                    ['icon' => '📚', 'title' => 'ব্যবহারিক কারিকুলাম', 'description' => 'তাত্ত্বিক ধারণা থেকে বাস্তব প্রয়োগ পর্যন্ত হাতে-কলমে শেখার অভিজ্ঞতা'],
                                    ['icon' => '💻', 'title' => 'লাইভ ক্লাস', 'description' => 'ইন্টারেক্টিভ লাইভ সেশন এবং তাত্ক্ষণিক সন্দেহ সমাধানের সুযোগ'],
                                    ['icon' => '📱', 'title' => 'লাইফটাইম এক্সেস', 'description' => 'কোর্স সম্পূর্ণ করার পরও লাইফটাইম কন্টেন্ট এবং আপডেট এক্সেস পান'],
                                    ['icon' => '🤝', 'title' => 'ক্যারিয়ার সাপোর্ট', 'description' => 'জব প্লেসমেন্ট সহায়তা, রিজিউমি বিল্ডিং এবং ইন্টারভিউ প্রস্তুতি'],
                                    ['icon' => '🏆', 'title' => 'প্রমাণীকরণ সার্টিফিকেট', 'description' => 'শিল্প-স্বীকৃত সার্টিফিকেট যা আপনার ক্যারিয়ারের সম্ভাবনা বৃদ্ধি করে']
                                ];
                                
                                $existingFeatures = old('features', $whyChooseUsSection->features ?? $defaultFeatures);
                            @endphp

                            @foreach($existingFeatures as $index => $feature)
                            <div class="feature-item mb-4 p-4 border border-gray-200 rounded-lg">
                                <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                                    <!-- Icon -->
                                    <div class="md:col-span-1">
                                        <label class="block text-sm font-medium text-gray-700 mb-2">আইকন</label>
                                        <input type="text" name="features[{{ $index }}][icon]" 
                                               value="{{ $feature['icon'] }}" 
                                               required
                                               class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-center"
                                               maxlength="10">
                                    </div>
                                    
                                    <!-- Title -->
                                    <div class="md:col-span-3">
                                        <label class="block text-sm font-medium text-gray-700 mb-2">টাইটেল</label>
                                        <input type="text" name="features[{{ $index }}][title]" 
                                               value="{{ $feature['title'] }}" 
                                               required
                                               class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                               placeholder="ফিচার টাইটেল">
                                    </div>
                                    
                                    <!-- Description -->
                                    <div class="md:col-span-8">
                                        <label class="block text-sm font-medium text-gray-700 mb-2">বর্ণনা</label>
                                        <textarea name="features[{{ $index }}][description]" 
                                                  required
                                                  rows="2"
                                                  class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                                  placeholder="ফিচার বর্ণনা">{{ $feature['description'] }}</textarea>
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>

                    <!-- Stats Section -->
                    <div class="mb-8">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-lg font-semibold text-gray-900">স্ট্যাটিস্টিক্স (৪টি)</h3>
                            <button type="button" onclick="resetStats()" class="text-sm text-red-600 hover:text-red-800">
                                ডিফল্ট স্ট্যাটস সেট করুন
                            </button>
                        </div>
                        
                        <div id="stats-container">
                            @php
                                $defaultStats = [
                                    ['number' => '১০,০০০+', 'label' => 'সন্তুষ্ট শিক্ষার্থী'],
                                    ['number' => '৫০০+', 'label' => 'বিশেষজ্ঞ প্রশিক্ষক'],
                                    ['number' => '২০০+', 'label' => 'কোর্স সংগ্রহ'],
                                    ['number' => '৯৫%', 'label' => 'সাফল্যের হার']
                                ];
                                
                                $existingStats = old('stats', $whyChooseUsSection->stats ?? $defaultStats);
                            @endphp

                            @foreach($existingStats as $index => $stat)
                            <div class="stat-item mb-4 p-4 border border-gray-200 rounded-lg">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <!-- Number -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">সংখ্যা</label>
                                        <input type="text" name="stats[{{ $index }}][number]" 
                                               value="{{ $stat['number'] }}" 
                                               required
                                               class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                               placeholder="যেমন: ১০,০০০+">
                                    </div>
                                    
                                    <!-- Label -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">লেবেল</label>
                                        <input type="text" name="stats[{{ $index }}][label]" 
                                               value="{{ $stat['label'] }}" 
                                               required
                                               class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                               placeholder="যেমন: সন্তুষ্ট শিক্ষার্থী">
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>

                    <!-- Preview Section -->
                    <div class="mb-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                        <h4 class="text-sm font-medium text-gray-900 mb-4 text-center">কেন আমাদের বেছে নিবেন সেকশন - লাইভ প্রিভিউ</h4>
                        
                        <!-- Title Preview -->
                        <div class="text-center mb-4">
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
                                <span id="preview-title-part-1" class="text-gray-800">
                                    {{ old('title_part_1', $whyChooseUsSection->title_part_1 ?? 'কেন আমাদের') }}
                                </span>
                                <span id="preview-title-part-2" class="text-green-600">
                                    {{ old('title_part_2', $whyChooseUsSection->title_part_2 ?? 'বেছে নিবেন?') }}
                                </span>
                            </h2>
                        </div>

                        <!-- Subtitle Preview -->
                        <div class="text-center mb-6">
                            <p class="text-lg text-gray-600">
                                <span id="preview-subtitle-part-1">
                                    {{ old('subtitle_part_1', $whyChooseUsSection->subtitle_part_1 ?? 'আমরা আপনাকে অফার করি') }}
                                </span>
                                <span id="preview-subtitle-part-2" class="font-semibold text-green-500">
                                    {{ old('subtitle_part_2', $whyChooseUsSection->subtitle_part_2 ?? 'সেরা শিক্ষার অভিজ্ঞতা') }}
                                </span>
                            </p>
                        </div>

                        <!-- Features Preview -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            @foreach($existingFeatures as $feature)
                            <div class="bg-white p-4 rounded-lg border border-green-100 shadow-sm">
                                <div class="text-2xl mb-2">{{ $feature['icon'] }}</div>
                                <h4 class="font-semibold text-gray-900 mb-2">{{ $feature['title'] }}</h4>
                                <p class="text-sm text-gray-600">{{ $feature['description'] }}</p>
                            </div>
                            @endforeach
                        </div>

                        <!-- Stats Preview -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            @foreach($existingStats as $stat)
                            <div class="text-center bg-white p-4 rounded-lg border border-green-100 shadow-sm">
                                <div class="text-2xl font-bold text-green-600">{{ $stat['number'] }}</div>
                                <div class="text-sm text-gray-600">{{ $stat['label'] }}</div>
                            </div>
                            @endforeach
                        </div>
                    </div>

                    <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                        <button type="submit"
                                class="px-6 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-200 flex items-center">
                            @if($whyChooseUsSection)
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
        @if($whyChooseUsSection)
            <div class="mt-6 bg-green-50 rounded-lg border border-green-200 p-6">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-green-800 font-medium">বর্তমান কন্টেন্ট সেভ আছে</span>
                </div>
                <div class="mt-3 text-sm text-green-700">
                    <p><strong>সর্বশেষ আপডেট:</strong> {{ $whyChooseUsSection->updated_at->format('d M, Y H:i') }}</p>
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
                    আপনার "কেন আমাদের বেছে নিবেন" সেকশনে কোন কন্টেন্ট সেট করা নেই। উপরের ফর্ম ব্যবহার করে সমস্ত কন্টেন্ট যোগ করুন।
                </p>
            </div>
        @endif
    </div>

    <script>
    // Default data
    const defaultFeatures = [
        {
            icon: "🎓",
            title: "বিশেষজ্ঞ প্রশিক্ষক",
            description: "শিল্পে অভিজ্ঞ এবং প্রত্যয়িত প্রশিক্ষকদের কাছ থেকে শিখুন যারা বাস্তব-বিশ্বের জ্ঞান নিয়ে আসেন"
        },
        {
            icon: "📚",
            title: "ব্যবহারিক কারিকুলাম",
            description: "তাত্ত্বিক ধারণা থেকে বাস্তব প্রয়োগ পর্যন্ত হাতে-কলমে শেখার অভিজ্ঞতা"
        },
        {
            icon: "💻",
            title: "লাইভ ক্লাস",
            description: "ইন্টারেক্টিভ লাইভ সেশন এবং তাত্ক্ষণিক সন্দেহ সমাধানের সুযোগ"
        },
        {
            icon: "📱",
            title: "লাইফটাইম এক্সেস",
            description: "কোর্স সম্পূর্ণ করার পরও লাইফটাইম কন্টেন্ট এবং আপডেট এক্সেস পান"
        },
        {
            icon: "🤝",
            title: "ক্যারিয়ার সাপোর্ট",
            description: "জব প্লেসমেন্ট সহায়তা, রিজিউমি বিল্ডিং এবং ইন্টারভিউ প্রস্তুতি"
        },
        {
            icon: "🏆",
            title: "প্রমাণীকরণ সার্টিফিকেট",
            description: "শিল্প-স্বীকৃত সার্টিফিকেট যা আপনার ক্যারিয়ারের সম্ভাবনা বৃদ্ধি করে"
        }
    ];

    const defaultStats = [
        {
            number: "১০,০০০+",
            label: "সন্তুষ্ট শিক্ষার্থী"
        },
        {
            number: "৫০০+",
            label: "বিশেষজ্ঞ প্রশিক্ষক"
        },
        {
            number: "২০০+",
            label: "কোর্স সংগ্রহ"
        },
        {
            number: "৯৫%",
            label: "সাফল্যের হার"
        }
    ];

    // Reset features to default
    function resetFeatures() {
        if (confirm('আপনি কি নিশ্চিত যে আপনি ডিফল্ট ফিচারস সেট করতে চান? বর্তমান ডাটা মুছে যাবে।')) {
            const container = document.getElementById('features-container');
            container.innerHTML = '';
            
            defaultFeatures.forEach((feature, index) => {
                const featureHtml = `
                    <div class="feature-item mb-4 p-4 border border-gray-200 rounded-lg">
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div class="md:col-span-1">
                                <label class="block text-sm font-medium text-gray-700 mb-2">আইকন</label>
                                <input type="text" name="features[${index}][icon]" 
                                       value="${feature.icon}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-center"
                                       maxlength="10">
                            </div>
                            <div class="md:col-span-3">
                                <label class="block text-sm font-medium text-gray-700 mb-2">টাইটেল</label>
                                <input type="text" name="features[${index}][title]" 
                                       value="${feature.title}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                            </div>
                            <div class="md:col-span-8">
                                <label class="block text-sm font-medium text-gray-700 mb-2">বর্ণনা</label>
                                <textarea name="features[${index}][description]" 
                                          required
                                          rows="2"
                                          class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">${feature.description}</textarea>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += featureHtml;
            });
        }
    }

    // Reset stats to default
    function resetStats() {
        if (confirm('আপনি কি নিশ্চিত যে আপনি ডিফল্ট স্ট্যাটস সেট করতে চান? বর্তমান ডাটা মুছে যাবে।')) {
            const container = document.getElementById('stats-container');
            container.innerHTML = '';
            
            defaultStats.forEach((stat, index) => {
                const statHtml = `
                    <div class="stat-item mb-4 p-4 border border-gray-200 rounded-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">সংখ্যা</label>
                                <input type="text" name="stats[${index}][number]" 
                                       value="${stat.number}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">লেবেল</label>
                                <input type="text" name="stats[${index}][label]" 
                                       value="${stat.label}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += statHtml;
            });
        }
    }

    // Real-time preview update for title and subtitle
    document.addEventListener('DOMContentLoaded', function() {
        const titlePart1Input = document.getElementById('title_part_1');
        const titlePart2Input = document.getElementById('title_part_2');
        const subtitlePart1Input = document.getElementById('subtitle_part_1');
        const subtitlePart2Input = document.getElementById('subtitle_part_2');

        function updatePreview() {
            // Title Part 1
            document.getElementById('preview-title-part-1').textContent = 
                titlePart1Input.value || 'কেন আমাদের';
            
            // Title Part 2
            document.getElementById('preview-title-part-2').textContent = 
                titlePart2Input.value || 'বেছে নিবেন?';
            
            // Subtitle Part 1
            document.getElementById('preview-subtitle-part-1').textContent = 
                subtitlePart1Input.value || 'আমরা আপনাকে অফার করি';
            
            // Subtitle Part 2
            document.getElementById('preview-subtitle-part-2').textContent = 
                subtitlePart2Input.value || 'সেরা শিক্ষার অভিজ্ঞতা';
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