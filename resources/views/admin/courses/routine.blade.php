@extends('admin.dashboard.layout')

@section('content')
    <div class="flex-1 p-6 overflow-y-auto">
        <!-- Header -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
                <h1 class="text-2xl font-bold text-gray-800">কোর্স রুটিন ব্যবস্থাপনা</h1>
                <p class="text-gray-600 mt-1">{{ $course->title }} - রুটিন যোগ করুন/আপডেট করুন</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
                <a href="{{ route('admin.courses.index') }}"
                    class="text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 bg-white hover:bg-gray-50 shadow-sm">
                    <i class="fas fa-arrow-left mr-2"></i> ফিরে যান
                </a>
            </div>
        </div>

        <!-- Success/Error Messages -->
        @if(session('success'))
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center">
                <i class="fas fa-check-circle mr-2"></i>
                {{ session('success') }}
            </div>
        @endif

        @if(session('error'))
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center">
                <i class="fas fa-exclamation-circle mr-2"></i>
                {{ session('error') }}
            </div>
        @endif

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Upload Routine Section -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <i class="fas fa-upload mr-2 text-blue-600"></i>
                    রুটিন আপলোড করুন
                </h2>
                
                <form action="{{ route('admin.courses.routine.store', $course->id) }}" method="POST" enctype="multipart/form-data" class="space-y-6">
                    @csrf
                    
                    <div class="space-y-4">
                        <div>
                            <label for="routine_pdf" class="block text-sm font-medium text-gray-700 mb-2">
                                PDF ফাইল নির্বাচন করুন <span class="text-red-500">*</span>
                            </label>
                            <input type="file" 
                                   name="routine_pdf" 
                                   id="routine_pdf" 
                                   accept=".pdf"
                                   class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                   required>
                            <p class="mt-1 text-sm text-gray-500">শুধুমাত্র PDF ফাইল গ্রহণযোগ্য। সর্বোচ্চ সাইজ: 10MB</p>
                            @error('routine_pdf')
                                <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span class="text-sm text-gray-500">
                            @if($course->routine_pdf)
                                বিদ্যমান রুটিন আপডেট হবে
                            @else
                                নতুন রুটিন যোগ হবে
                            @endif
                        </span>
                        <button type="submit" 
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 shadow-sm hover:shadow-md">
                            <i class="fas fa-save mr-2"></i>
                            {{ $course->routine_pdf ? 'রুটিন আপডেট করুন' : 'রুটিন সেভ করুন' }}
                        </button>
                    </div>
                </form>
            </div>

            <!-- Current Routine Section -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <i class="fas fa-file-pdf mr-2 text-red-600"></i>
                    বর্তমান রুটিন
                </h2>

                @if($course->routine_pdf)
                    <div class="space-y-4">
                        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <i class="fas fa-file-pdf text-red-500 text-2xl mr-3"></i>
                                    <div>
                                        <p class="font-medium text-gray-800">রুটিন PDF</p>
                                        <p class="text-sm text-gray-600">সফলভাবে আপলোডকৃত</p>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <a href="{{ $course->routine_pdf_path }}" 
                                       target="_blank"
                                       class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-all duration-300 text-sm">
                                        <i class="fas fa-eye mr-2"></i> ভিউ
                                    </a>
                                    <a href="{{ $course->routine_pdf_path }}" 
                                       download
                                       class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-all duration-300 text-sm">
                                        <i class="fas fa-download mr-2"></i> ডাউনলোড
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Delete Button -->
                        <form action="{{ route('admin.courses.routine.destroy', $course->id) }}" method="POST" onsubmit="return confirm('আপনি কি নিশ্চিত যে আপনি এই রুটিন ডিলিট করতে চান?')">
                            @csrf
                            @method('DELETE')
                            <button type="submit" 
                                    class="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl font-medium flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md mt-4">
                                <i class="fas fa-trash mr-2"></i>
                                রুটিন ডিলিট করুন
                            </button>
                        </form>
                    </div>
                @else
                    <div class="text-center py-8">
                        <i class="fas fa-file-pdf text-gray-300 text-5xl mb-4"></i>
                        <p class="text-gray-500 text-lg">কোনো রুটিন আপলোড করা হয়নি</p>
                        <p class="text-gray-400 text-sm mt-2">উপরের ফর্ম থেকে রুটিন আপলোড করুন</p>
                    </div>
                @endif
            </div>
        </div>

        <!-- Instructions -->
        <div class="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <i class="fas fa-info-circle mr-2"></i>
                নির্দেশাবলী
            </h3>
            <ul class="text-blue-700 space-y-2 text-sm">
                <li class="flex items-start">
                    <i class="fas fa-check-circle mr-2 mt-1 text-blue-600"></i>
                    শুধুমাত্র PDF ফাইল আপলোড করুন
                </li>
                <li class="flex items-start">
                    <i class="fas fa-check-circle mr-2 mt-1 text-blue-600"></i>
                    ফাইলের সাইজ 10MB এর কম হতে হবে
                </li>
                <li class="flex items-start">
                    <i class="fas fa-check-circle mr-2 mt-1 text-blue-600"></i>
                    যদি আগে থেকে রুটিন থাকে, নতুন আপলোড করলে পুরাতনটি রিপ্লেস হবে
                </li>
                <li class="flex items-start">
                    <i class="fas fa-check-circle mr-2 mt-1 text-blue-600"></i>
                    রুটিন ডিলিট করলে পুনরুদ্ধার করা যাবে না
                </li>
            </ul>
        </div>
    </div>

    <style>
        .file\:bg-blue-50 {
            background-color: #eff6ff;
        }
        .file\:text-blue-700 {
            color: #1d4ed8;
        }
        .hover\:file\:bg-blue-100:hover {
            background-color: #dbeafe;
        }
    </style>
@endsection