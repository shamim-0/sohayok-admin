@extends('admin.dashboard.layout')

@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="flex items-center justify-between mb-6">
        <div>
            <h1 class="text-2xl font-bold text-gray-900">নতুন পরীক্ষা তৈরি করুন</h1>
            <p class="text-gray-600 mt-1">{{ $course->title }}</p>
        </div>
        <a href="{{ route('admin.courses.exams.index', $course) }}" 
           class="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg">
            ফিরে যান
        </a>
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <form action="{{ route('admin.courses.exams.store', $course) }}" method="POST" enctype="multipart/form-data">
            @csrf
            
            <div class="p-6 space-y-6">
                <!-- Subject -->
                <div>
                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                        বিষয় <span class="text-red-500">*</span>
                    </label>
                    <input type="text" name="subject" id="subject" 
                           class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('subject') border-red-500 @enderror"
                           value="{{ old('subject') }}" required>
                    @error('subject')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Title -->
                <div>
                    <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                        শিরোনাম <span class="text-red-500">*</span>
                    </label>
                    <input type="text" name="title" id="title" 
                           class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('title') border-red-500 @enderror"
                           value="{{ old('title') }}" required>
                    @error('title')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Instruction -->
                <div>
                    <label for="instruction" class="block text-sm font-medium text-gray-700 mb-2">
                        নির্দেশনা
                    </label>
                    <textarea name="instruction" id="instruction" rows="4" 
                              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('instruction') border-red-500 @enderror">{{ old('instruction') }}</textarea>
                    @error('instruction')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Total Marks -->
                    <div>
                        <label for="total_marks" class="block text-sm font-medium text-gray-700 mb-2">
                            মোট মার্ক <span class="text-red-500">*</span>
                        </label>
                        <input type="number" name="total_marks" id="total_marks" 
                               class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('total_marks') border-red-500 @enderror"
                               value="{{ old('total_marks') }}" required min="1">
                        @error('total_marks')
                            <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                        @enderror
                    </div>

                    <!-- Passing Marks -->
                    <div>
                        <label for="passing_marks" class="block text-sm font-medium text-gray-700 mb-2">
                            পাশের মার্ক <span class="text-red-500">*</span>
                        </label>
                        <input type="number" name="passing_marks" id="passing_marks" 
                               class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('passing_marks') border-red-500 @enderror"
                               value="{{ old('passing_marks') }}" required min="1">
                        @error('passing_marks')
                            <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                        @enderror
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Deadline -->
                    <div>
                        <label for="deadline" class="block text-sm font-medium text-gray-700 mb-2">
                            ডেডলাইন <span class="text-red-500">*</span>
                        </label>
                        <input type="datetime-local" name="deadline" id="deadline" 
                               class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('deadline') border-red-500 @enderror"
                               value="{{ old('deadline') }}" required>
                        @error('deadline')
                            <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                        @enderror
                    </div>

                    <!-- Status -->
                    <div>
                        <label for="status" class="block text-sm font-medium text-gray-700 mb-2">
                            স্ট্যাটাস <span class="text-red-500">*</span>
                        </label>
                        <select name="status" id="status" 
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('status') border-red-500 @enderror"
                                required>
                            <option value="active" {{ old('status') == 'active' ? 'selected' : '' }}>সক্রিয়</option>
                            <option value="inactive" {{ old('status') == 'inactive' ? 'selected' : '' }}>নিষ্ক্রিয়</option>
                            <option value="expired" {{ old('status') == 'expired' ? 'selected' : '' }}>মেয়াদ উত্তীর্ণ</option>
                        </select>
                        @error('status')
                            <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                        @enderror
                    </div>
                </div>

                <!-- Question File -->
                <div>
                    <label for="question_file" class="block text-sm font-medium text-gray-700 mb-2">
                        প্রশ্নপত্র ফাইল (PDF/DOC)
                    </label>
                    <input type="file" name="question_file" id="question_file" 
                           class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 @error('question_file') border-red-500 @enderror"
                           accept=".pdf,.doc,.docx">
                    <p class="mt-1 text-sm text-gray-500">সর্বোচ্চ 10MB ফাইল আপলোড করা যাবে। সমর্থিত ফরম্যাট: PDF, DOC, DOCX</p>
                    @error('question_file')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>
            </div>

            <div class="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                <div class="flex justify-end space-x-3">
                    <a href="{{ route('admin.courses.exams.index', $course) }}" 
                       class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                        বাতিল
                    </a>
                    <button type="submit" 
                            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                        পরীক্ষা তৈরি করুন
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection