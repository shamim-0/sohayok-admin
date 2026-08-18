@extends('admin.dashboard.layout')

@section('content')
    <div class="flex-1 p-6 overflow-y-auto">
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
                <h1 class="text-2xl font-bold text-gray-800">{{ $course->title }}</h1>
                <p class="text-gray-600">নতুন চ্যাপটার যোগ করুন</p>
            </div>
            <a href="{{ route('admin.courses.content', $course) }}"
                class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400">
                <i class="fas fa-plus-circle mr-2"></i> বাতিল করুন
            </a>
        </div>

        <form method="post" action="{{ route('admin.chapters.store', $course) }}" class="bg-white rounded-xl shadow-md p-6">
            @csrf
            <div class="mb-6">
                <label for="chapter_name" class="block text-gray-700 font-medium mb-2">চ্যাপটার নাম</label>
                <input type="text" 
                       id="chapter_name" 
                       name="chapter_name" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                       placeholder="চ্যাপটারের নাম লিখুন"
                       required>
            </div>
            <button type="submit" 
                    class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-medium  flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                <i class="fas fa-save mr-2"></i> সেভ করুন
            </button>
        </form>
    </div>
@endsection