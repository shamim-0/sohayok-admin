@extends('admin.dashboard.layout')

@section('content')
<div class="flex-1 p-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">নতুন ব্যবহারকারী যোগ করুন</h1>
            <p class="text-gray-600 mt-1">আপনার প্রতিষ্ঠানে নতুন ব্যবহারকারী তৈরি করুন</p>
        </div>
        <a href="{{ route('admin.users.index') }}" 
           class="text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 bg-white hover:bg-gray-50 shadow-sm">
            <i class="fas fa-arrow-left mr-2"></i> ব্যবহারকারীদের তালিকায় ফিরে যান
        </a>
    </div>

    <!-- Create User Form -->
    <form action="{{ route('admin.users.store') }}" method="POST">
        @csrf
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="relative">
                @include('admin.users.form')
            </div>
        </div>
    </form>
</div>
@endsection