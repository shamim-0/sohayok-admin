@extends('admin.dashboard.layout')

@section('content')
<div class="flex-1 p-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">নতুন শিক্ষক যোগ করুন</h1>
            <p class="text-gray-600 mt-1">আপনার প্রতিষ্ঠানে নতুন শিক্ষক তৈরি করুন</p>
        </div>
        <a href="{{ route('admin.instructors.index') }}" 
           class="text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 bg-white hover:bg-gray-50 shadow-sm">
            <i class="fas fa-arrow-left mr-2"></i> শিক্ষক তালিকায় ফিরে যান
        </a>
    </div>

    <!-- Create Instructor Form -->
    <form action="{{ route('admin.instructors.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div class="md:col-span-2">
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">পূর্ণ নাম *</label>
                    <input type="text" name="name" id="name" value="{{ old('name') }}" required
                           class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                    @error('name')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">ইমেইল *</label>
                    <input type="email" name="email" id="email" value="{{ old('email') }}" required
                           class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                    @error('email')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Phone -->
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">ফোন নম্বর</label>
                    <input type="tel" name="phone" id="phone" value="{{ old('phone') }}"
                           class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                    @error('phone')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Education -->
                <div class="md:col-span-2">
                    <label for="education" class="block text-sm font-medium text-gray-700 mb-2">শিক্ষাগত যোগ্যতা</label>
                    <input type="text" name="education" id="education" value="{{ old('education') }}"
                           class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                    @error('education')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Image -->
                <div class="md:col-span-2">
                    <label for="image" class="block text-sm font-medium text-gray-700 mb-2">প্রোফাইল ছবি</label>
                    <input type="file" name="image" id="image" accept="image/*"
                           class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                    @error('image')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                    <p class="text-gray-500 text-xs mt-1">PNG, JPG, JPEG ফরম্যাট, সর্বোচ্চ 2MB</p>
                </div>

                <!-- Bio -->
                <div class="md:col-span-2">
                    <label for="bio" class="block text-sm font-medium text-gray-700 mb-2">বায়ো</label>
                    <textarea name="bio" id="bio" rows="4"
                              class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">{{ old('bio') }}</textarea>
                    @error('bio')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Status -->
                <div class="md:col-span-2">
                    <label for="is_active" class="block text-sm font-medium text-gray-700 mb-2">স্ট্যাটাস</label>
                    <select name="is_active" id="is_active"
                            class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                        <option value="1" {{ old('is_active', true) ? 'selected' : '' }}>সক্রিয়</option>
                        <option value="0" {{ !old('is_active', true) ? 'selected' : '' }}>নিষ্ক্রিয়</option>
                    </select>
                    @error('is_active')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>
            </div>

            <div class="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-3">
                <a href="{{ route('admin.instructors.index') }}"
                   class="px-6 py-3 text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 rounded-xl font-medium transition-all duration-300 bg-white hover:bg-gray-50">
                    বাতিল
                </a>
                <button type="submit"
                        class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 border border-blue-400 shadow-lg hover:shadow-blue-500/25">
                    <i class="fas fa-save mr-2"></i>
                    সংরক্ষণ করুন
                </button>
            </div>
        </div>
    </form>
</div>
@endsection