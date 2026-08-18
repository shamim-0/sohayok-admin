@extends('admin.dashboard.layout')

@section('content')
<div class="flex-1 p-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">ক্যাটাগরির বিবরণ</h1>
            <p class="text-gray-600 mt-1">{{ $category->name }} - প্রোফাইল তথ্য</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3">
            <a href="{{ route('admin.categories.edit', $category) }}" 
               class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 border border-blue-400 shadow-lg hover:shadow-blue-500/25">
                <i class="fas fa-edit mr-2"></i> সম্পাদনা
            </a>
            <a href="{{ route('admin.categories.index') }}" 
               class="text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 bg-white hover:bg-gray-50 shadow-sm">
                <i class="fas fa-arrow-left mr-2"></i> ফিরে যান
            </a>
        </div>
    </div>

    <!-- Category Profile Card -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <!-- Category Header -->
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <div class="bg-blue-100 p-6 rounded-xl border border-blue-200">
               <img class="h-12" src="{{ asset('storage/'. $category->image) }}" alt="">
            </div>
            <div class="text-center sm:text-left">
                <h2 class="text-2xl font-bold text-gray-800">{{ $category->name }}</h2>
                <p class="text-gray-600 text-lg">{{ $category->slug }}</p>
                <div class="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium {{ $category->is_active ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-gray-100 text-gray-800 border border-gray-200' }}">
                        <i class="fas fa-circle mr-2 text-xs {{ $category->is_active ? 'text-green-500' : 'text-gray-500' }}"></i>
                        {{ $category->is_active ? 'সক্রিয়' : 'নিষ্ক্রিয়' }}
                    </span>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                        <i class="fas fa-calendar-alt mr-2"></i>
                        {{ $category->created_at->format('M d, Y') }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Category Details Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Left Column -->
            <div class="space-y-6">
                <!-- Slug -->
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div class="flex items-center mb-3">
                        <div class="bg-purple-100 p-2 rounded-lg mr-3 border border-purple-200">
                            <i class="fas fa-link text-purple-500"></i>
                        </div>
                        <label class="text-sm font-medium text-gray-600">Slug</label>
                    </div>
                    <code class="text-gray-800 text-lg font-medium pl-11 bg-gray-100 px-3 py-1 rounded border border-gray-300">{{ $category->slug }}</code>
                </div>

                <!-- Courses Count -->
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div class="flex items-center mb-3">
                        <div class="bg-green-100 p-2 rounded-lg mr-3 border border-green-200">
                            <i class="fas fa-book text-green-500"></i>
                        </div>
                        <label class="text-sm font-medium text-gray-600">কোর্স সংখ্যা</label>
                    </div>
                    <p class="text-gray-800 text-2xl font-bold pl-11">{{ $category->courses_count ?? 0 }}</p>
                </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-6">
                <!-- Description -->
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div class="flex items-center mb-3">
                        <div class="bg-orange-100 p-2 rounded-lg mr-3 border border-orange-200">
                            <i class="fas fa-align-left text-orange-500"></i>
                        </div>
                        <label class="text-sm font-medium text-gray-600">বর্ণনা</label>
                    </div>
                    <p class="text-gray-800 text-lg pl-11">{{ $category->description ?? 'কোন বর্ণনা নেই' }}</p>
                </div>

                <!-- Last Updated -->
                <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div class="flex items-center mb-3">
                        <div class="bg-blue-100 p-2 rounded-lg mr-3 border border-blue-200">
                            <i class="fas fa-clock text-blue-500"></i>
                        </div>
                        <label class="text-sm font-medium text-gray-600">সর্বশেষ আপডেট</label>
                    </div>
                    <p class="text-gray-800 text-lg font-medium pl-11">{{ $category->updated_at->format('M d, Y h:i A') }}</p>
                </div>
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="mt-8 pt-6 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">দ্রুত কর্ম</h3>
            <div class="flex flex-wrap gap-3">
                <a href="{{ route('admin.categories.edit', $category) }}" 
                   class="flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg border border-blue-200 transition-colors duration-200">
                    <i class="fas fa-edit mr-2"></i> সম্পাদনা করুন
                </a>
                <button onclick="openDeleteModal({{ $category->id }}, '{{ $category->name }}')"
                   class="flex items-center px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg border border-red-200 transition-colors duration-200">
                    <i class="fas fa-trash mr-2"></i> মুছে ফেলুন
                </button>
                
            </div>
        </div>
    </div>
</div>

<!-- Delete Confirmation Modal -->
<div id="deleteModal"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 hidden transition-opacity duration-300">
    <div class="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 w-full max-w-md mx-4 transform transition-transform duration-300 scale-95"
        id="modalContent">
        <div class="flex items-center mb-4">
            <div class="bg-red-100 p-3 rounded-xl mr-4 border border-red-200">
                <i class="fas fa-exclamation-triangle text-red-500 text-xl"></i>
            </div>
            <div>
                <h3 class="text-lg font-semibold text-gray-800">মুছে ফেলার নিশ্চিতকরণ</h3>
                <p class="text-gray-600">এই কর্মটি পূর্বাবস্থায় ফেরানো যাবে না</p>
            </div>
        </div>
        <p class="text-gray-700 mb-6">আপনি কি নিশ্চিত যে আপনি "<span id="categoryName"
                class="font-semibold text-gray-800"></span>" ক্যাটাগরিটি মুছে ফেলতে চান? সমস্ত সংশ্লিষ্ট ডেটা স্থায়ীভাবে মুছে ফেলা হবে।</p>
        <div class="flex justify-end space-x-3">
            <button onclick="closeDeleteModal()"
                class="px-6 py-2.5 text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 rounded-xl font-medium transition-colors duration-200">
                বাতিল
            </button>
            <form id="deleteForm" method="POST" class="inline">
                @csrf
                @method('DELETE')
                <button type="submit"
                    class="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors duration-200 flex items-center border border-red-500">
                    <i class="fas fa-trash mr-2"></i>
                    ক্যাটাগরি মুছুন
                </button>
            </form>
        </div>
    </div>
</div>

<script>
    function openDeleteModal(categoryId, categoryName) {
        document.getElementById('categoryName').textContent = categoryName;
        document.getElementById('deleteForm').action = `/admin/categories/${categoryId}`;
        document.getElementById('deleteModal').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('modalContent').classList.remove('scale-95');
            document.getElementById('modalContent').classList.add('scale-100');
        }, 50);
    }

    function closeDeleteModal() {
        document.getElementById('modalContent').classList.remove('scale-100');
        document.getElementById('modalContent').classList.add('scale-95');
        setTimeout(() => {
            document.getElementById('deleteModal').classList.add('hidden');
        }, 300);
    }

    document.getElementById('deleteModal').addEventListener('click', function (e) {
        if (e.target.id === 'deleteModal') {
            closeDeleteModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !document.getElementById('deleteModal').classList.contains('hidden')) {
            closeDeleteModal();
        }
    });
</script>
@endsection