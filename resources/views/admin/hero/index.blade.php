@extends('admin.dashboard.layout')

@section('content')
    <div class="mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900">সেটিংস</h1>
                <p class="text-gray-600 mt-1">আপনার হিরো সেকশন কন্টেন্ট ম্যানেজ করুন</p>
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

        <!-- Hero Content Form -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
                <h5 class="text-lg font-semibold text-gray-900">হিরো সেকশন কন্টেন্ট</h5>
                <p class="text-sm text-gray-600 mt-1">আপনার ওয়েবসাইটের মূল হিরো সেকশনের টাইটেল এবং সাবটাইটেল সেট করুন</p>
            </div>

            <div class="p-6">
                <form action="{{ route('admin.hero.store') }}" method="POST">
                    @csrf
                    
                    <div class="grid grid-cols-1 gap-6 mb-6">
                        <!-- Title -->
                        <div>
                            <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                                টাইটেল *
                            </label>
                            <input type="text" id="title" name="title" 
                                   value="{{ old('title', $hero->title ?? '') }}" 
                                   required
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                   placeholder="আপনার মূল টাইটেল লিখুন">
                            <p class="text-xs text-gray-500 mt-1">এটি হিরো সেকশনের প্রধান হেডলাইন হিসেবে দেখাবে</p>
                        </div>

                        <!-- Subtitle -->
                        <div>
                            <label for="subtitle" class="block text-sm font-medium text-gray-700 mb-2">
                                সাবটাইটেল
                            </label>
                            <textarea id="subtitle" name="subtitle" rows="3"
                                      class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                      placeholder="আপনার সাবটাইটেল বা সংক্ষিপ্ত বিবরণ লিখুন">{{ old('subtitle', $hero->subtitle ?? '') }}</textarea>
                            <p class="text-xs text-gray-500 mt-1">এটি টাইটেলের নিচে ছোট বিবরণ হিসেবে দেখাবে (ঐচ্ছিক)</p>
                        </div>
                    </div>

                    <!-- Preview Section -->
                    <div class="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 class="text-sm font-medium text-gray-900 mb-3">প্রিভিউ</h4>
                        <div class="text-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                            <h2 id="preview-title" class="text-2xl md:text-4xl font-bold mb-4">
                                {{ old('title', $hero->title ?? 'আপনার টাইটেল এখানে দেখাবে') }}
                            </h2>
                            <p id="preview-subtitle" class="text-lg md:text-xl opacity-90">
                                {{ old('subtitle', $hero->subtitle ?? 'আপনার সাবটাইটেল এখানে দেখাবে') }}
                            </p>
                        </div>
                    </div>

                    <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                        <button type="submit"
                                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200">
                            @if($hero)
                                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                আপডেট করুন
                            @else
                                <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                তৈরি করুন
                            @endif
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Current Content Info -->
        @if($hero)
            <div class="mt-6 bg-green-50 rounded-lg border border-green-200 p-6">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-green-800 font-medium">বর্তমান কন্টেন্ট সেভ আছে</span>
                </div>
                <div class="mt-2 text-sm text-green-700">
                    <p><strong>সর্বশেষ আপডেট:</strong> {{ $hero->updated_at->format('d M, Y H:i') }}</p>
                    <p><strong>টাইটেল:</strong> {{ $hero->title }}</p>
                    @if($hero->subtitle)
                        <p><strong>সাবটাইটেল:</strong> {{ $hero->subtitle }}</p>
                    @endif
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
                    আপনার হিরো সেকশনে কোন কন্টেন্ট সেট করা নেই। উপরের ফর্ম ব্যবহার করে টাইটেল এবং সাবটাইটেল যোগ করুন।
                </p>
            </div>
        @endif
    </div>


<script>
// Real-time preview update
document.addEventListener('DOMContentLoaded', function() {
    const titleInput = document.getElementById('title');
    const subtitleInput = document.getElementById('subtitle');

    function updatePreview() {
        // Title
        document.getElementById('preview-title').textContent = 
            titleInput.value || 'আপনার টাইটেল এখানে দেখাবে';
        
        // Subtitle
        document.getElementById('preview-subtitle').textContent = 
            subtitleInput.value || 'আপনার সাবটাইটেল এখানে দেখাবে';
    }

    // Add event listeners
    titleInput.addEventListener('input', updatePreview);
    subtitleInput.addEventListener('input', updatePreview);

    // Initial preview update
    updatePreview();
});
</script>
@endsection
