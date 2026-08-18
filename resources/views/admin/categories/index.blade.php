@extends('admin.dashboard.layout')

@section('content')
<div class="flex-1 p-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">ক্যাটাগরি ব্যবস্থাপনা</h1>
            <p class="text-gray-600">আপনার প্রতিষ্ঠানের সকল ক্যাটাগরি পরিচালনা করুন</p>
        </div>
        <a href="{{ route('admin.categories.create') }}"
            class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400">
            <i class="fas fa-plus-circle mr-2"></i> নতুন ক্যাটাগরি যোগ করুন
        </a>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-600 font-medium">মোট ক্যাটাগরি</p>
                    <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $categories->total() }}</h3>
                </div>
                <div class="bg-blue-100 p-3 rounded-xl border border-blue-200">
                    <i class="fas fa-layer-group text-blue-500 text-xl"></i>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-600 font-medium">সক্রিয় ক্যাটাগরি</p>
                    <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $categories->where('is_active', true)->count() }}</h3>
                </div>
                <div class="bg-green-100 p-3 rounded-xl border border-green-200">
                    <i class="fas fa-check-circle text-green-500 text-xl"></i>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-600 font-medium">নিষ্ক্রিয় ক্যাটাগরি</p>
                    <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $categories->where('is_active', false)->count() }}</h3>
                </div>
                <div class="bg-gray-100 p-3 rounded-xl border border-gray-200">
                    <i class="fas fa-pause-circle text-gray-500 text-xl"></i>
                </div>
            </div>
        </div>
    </div>


    <!-- Categories Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ক্যাটাগরি নাম</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Slug</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">বর্ণনা</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">কোর্স সংখ্যা</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">স্ট্যাটাস</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">কর্ম</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    @foreach($categories as $category)
                        <tr class="hover:bg-blue-50 transition-colors duration-200">
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <div class="bg-blue-100 p-3 rounded-lg mr-4 border border-blue-200">
                                        <img class="h-12" src="{{ asset('storage/'. $category->image) }}" alt="">
                                    </div>
                                    <div>
                                        <div class="text-sm font-semibold text-gray-800">{{ $category->name }}</div>
                                        <div class="text-sm text-gray-600">{{ $category->created_at->format('M d, Y') }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <code class="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded border border-gray-200">{{ $category->slug }}</code>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-800 max-w-xs truncate">{{ $category->description ?? 'কোন বর্ণনা নেই' }}</div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <div class="bg-purple-100 p-2 rounded-lg mr-3 border border-purple-200">
                                        <i class="fas fa-book text-purple-500 text-sm"></i>
                                    </div>
                                    <div>
                                        <div class="text-sm font-medium text-gray-800">{{ $category->courses_count ?? 0 }}</div>
                                        <div class="text-xs text-gray-500">কোর্স</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium {{ $category->is_active ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-gray-100 text-gray-800 border border-gray-200' }}">
                                    <i class="fas fa-circle mr-1 text-xs {{ $category->is_active ? 'text-green-500' : 'text-gray-500' }}"></i>
                                    {{ $category->is_active ? 'সক্রিয়' : 'নিষ্ক্রিয়' }}
                                </span>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center space-x-2">
                                    <a href="{{ route('admin.categories.show', $category) }}"
                                        class="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-200 group border border-transparent hover:border-blue-200"
                                        title="দেখুন">
                                        <i class="fas fa-eye group-hover:scale-110 transition-transform"></i>
                                    </a>
                                    <a href="{{ route('admin.categories.edit', $category) }}"
                                        class="p-2 text-gray-500 hover:text-green-600 hover:bg-green-100 rounded-lg transition-all duration-200 group border border-transparent hover:border-green-200"
                                        title="সম্পাদনা">
                                        <i class="fas fa-edit group-hover:scale-110 transition-transform"></i>
                                    </a>
                                    <button onclick="openDeleteModal({{ $category->id }}, '{{ $category->name }}')"
                                        class="p-2 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-lg transition-all duration-200 group border border-transparent hover:border-red-200"
                                        title="মুছুন">
                                        <i class="fas fa-trash group-hover:scale-110 transition-transform"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div class="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="text-sm text-gray-600">
                    {{ $categories->firstItem() }} থেকে {{ $categories->lastItem() }} পর্যন্ত দেখানো হচ্ছে, মোট {{ $categories->total() }} ফলাফল
                </div>
                <div class="flex space-x-1">
                    {{ $categories->links() }}
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

        // Close modal when clicking outside
        document.getElementById('deleteModal').addEventListener('click', function (e) {
            if (e.target.id === 'deleteModal') {
                closeDeleteModal();
            }
        });

        // Add keyboard event listener for ESC key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !document.getElementById('deleteModal').classList.contains('hidden')) {
                closeDeleteModal();
            }
        });
    </script>
</div>
@endsection