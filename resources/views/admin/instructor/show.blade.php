@extends('admin.dashboard.layout')

@section('content')
<div class="flex-1 p-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">শিক্ষক বিস্তারিত</h1>
            <p class="text-gray-600 mt-1">{{ $instructor->name }} - এর সম্পূর্ণ তথ্য</p>
        </div>
        <div class="flex items-center space-x-3">
            <a href="{{ route('admin.instructors.edit', $instructor) }}"
               class="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300 border border-green-400">
                <i class="fas fa-edit mr-2"></i> সম্পাদনা করুন
            </a>
            <a href="{{ route('admin.instructors.index') }}" 
               class="text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 bg-white hover:bg-gray-50 shadow-sm">
                <i class="fas fa-arrow-left mr-2"></i> তালিকায় ফিরে যান
            </a>
        </div>
    </div>

    <!-- Instructor Details -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left Column - Profile -->
        <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <!-- Profile Image -->
                <div class="text-center mb-6">
                    <img class="h-32 w-32 rounded-full object-cover border-4 border-blue-200 mx-auto mb-4"
                         src="{{ $instructor->image_url }}"
                         alt="{{ $instructor->name }}">
                    <h2 class="text-xl font-bold text-gray-800">{{ $instructor->name }}</h2>
                    <p class="text-gray-600">{{ $instructor->education ?? 'শিক্ষাগত যোগ্যতা নেই' }}</p>
                    
                    <!-- Status Badge -->
                    <div class="mt-3">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium {{ $instructor->is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                            <i class="fas fa-circle mr-1 text-xs"></i>
                            {{ $instructor->is_active ? 'সক্রিয়' : 'নিষ্ক্রিয়' }}
                        </span>
                    </div>
                </div>

                <!-- Contact Information -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">যোগাযোগ তথ্য</h3>
                    
                    <div class="flex items-center text-gray-600">
                        <i class="fas fa-envelope text-blue-500 w-6"></i>
                        <span class="ml-3">{{ $instructor->email }}</span>
                    </div>
                    
                    @if($instructor->phone)
                    <div class="flex items-center text-gray-600">
                        <i class="fas fa-phone text-green-500 w-6"></i>
                        <span class="ml-3">{{ $instructor->phone }}</span>
                    </div>
                    @endif

                    <div class="flex items-center text-gray-600">
                        <i class="fas fa-sort text-purple-500 w-6"></i>
                        <span class="ml-3">ক্রম: {{ $instructor->order }}</span>
                    </div>

                    <div class="flex items-center text-gray-600">
                        <i class="fas fa-calendar text-orange-500 w-6"></i>
                        <span class="ml-3">যোগদান: {{ $instructor->created_at->format('d M, Y') }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Column - Details -->
        <div class="lg:col-span-2">
            <!-- Bio Section -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <i class="fas fa-user-circle text-blue-500 mr-2"></i>
                    ব্যক্তিগত তথ্য
                </h3>
                
                @if($instructor->bio)
                <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p class="text-gray-700 leading-relaxed">{{ $instructor->bio }}</p>
                </div>
                @else
                <div class="text-center py-8 text-gray-500">
                    <i class="fas fa-info-circle text-3xl mb-3 text-gray-300"></i>
                    <p>কোন বায়ো তথ্য যোগ করা হয়নি</p>
                </div>
                @endif
            </div>

            <!-- Additional Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Education Info -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <i class="fas fa-graduation-cap text-purple-500 mr-2"></i>
                        শিক্ষাগত যোগ্যতা
                    </h3>
                    @if($instructor->education)
                    <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
                        <p class="text-purple-800 font-medium">{{ $instructor->education }}</p>
                    </div>
                    @else
                    <div class="text-center py-4 text-gray-500">
                        <i class="fas fa-book text-xl mb-2 text-gray-300"></i>
                        <p class="text-sm">শিক্ষাগত যোগ্যতা যোগ করা হয়নি</p>
                    </div>
                    @endif
                </div>

                <!-- Account Status -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <i class="fas fa-chart-bar text-green-500 mr-2"></i>
                        অ্যাকাউন্ট স্ট্যাটাস
                    </h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">স্ট্যাটাস:</span>
                            <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium {{ $instructor->is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                                {{ $instructor->is_active ? 'সক্রিয়' : 'নিষ্ক্রিয়' }}
                            </span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">ক্রম নম্বর:</span>
                            <span class="font-semibold text-gray-800">{{ $instructor->order }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">যোগদান তারিখ:</span>
                            <span class="text-gray-800">{{ $instructor->created_at->format('d M, Y') }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">সর্বশেষ আপডেট:</span>
                            <span class="text-gray-800">{{ $instructor->updated_at->format('d M, Y') }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">দ্রুত কর্ম</h3>
                <div class="flex flex-col sm:flex-row gap-3">
                    <a href="{{ route('admin.instructors.edit', $instructor) }}"
                       class="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-green-400">
                        <i class="fas fa-edit mr-2"></i> শিক্ষক সম্পাদনা
                    </a>
                    <form action="{{ route('admin.instructors.destroy', $instructor) }}" method="POST" class="flex-1">
                        @csrf
                        @method('DELETE')
                        <button type="submit" 
                                onclick="return confirm('আপনি কি নিশ্চিত যে আপনি {{ $instructor->name }} কে মুছতে চান? এই কাজটি পূর্বাবস্থায় ফিরিয়ে আনা যাবে না।')"
                                class="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-red-400">
                            <i class="fas fa-trash mr-2"></i> শিক্ষক মুছুন
                        </button>
                    </form>
                    <a href="{{ route('admin.instructors.index') }}"
                       class="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400">
                        <i class="fas fa-list mr-2"></i> সকল শিক্ষক
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Success Message -->
@if(session('success'))
<div class="fixed top-4 right-4 z-50">
    <div class="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl shadow-lg max-w-sm">
        <div class="flex items-center">
            <i class="fas fa-check-circle text-green-500 text-xl mr-3"></i>
            <p class="text-sm font-medium">{{ session('success') }}</p>
        </div>
    </div>
</div>
@endif

<style>
    .leading-relaxed {
        line-height: 1.6;
    }
</style>
@endsection