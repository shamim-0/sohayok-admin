@extends('admin.dashboard.layout')

@section('content')
    <div class="flex-1 p-6 overflow-y-auto">
        <!-- Header -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
                <h1 class="text-2xl font-bold text-gray-800">ব্যবহারকারী ব্যবস্থাপনা</h1>
                <p class="text-gray-600">আপনার প্রতিষ্ঠানের সকল ব্যবহারকারী পরিচালনা করুন</p>
            </div>
            <a href="{{ route('admin.users.create') }}"
                class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400">
                <i class="fas fa-plus-circle mr-2"></i> নতুন ব্যবহারকারী যোগ করুন
            </a>
        </div>

        <!-- Stats Overview -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-gray-600 font-medium">মোট ব্যবহারকারী</p>
                        <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $users->total() }}</h3>
                    </div>
                    <div class="bg-blue-100 p-3 rounded-xl border border-blue-200">
                        <i class="fas fa-users text-blue-500 text-xl"></i>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-gray-600 font-medium">আজ সক্রিয়</p>
                        <h3 class="text-2xl font-bold text-gray-800 mt-1">২৪</h3>
                    </div>
                    <div class="bg-green-100 p-3 rounded-xl border border-green-200">
                        <i class="fas fa-user-check text-green-500 text-xl"></i>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-gray-600 font-medium">শিক্ষার্থী</p>
                        <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $users->where('role', 'student')->count() }}</h3>
                    </div>
                    <div class="bg-purple-100 p-3 rounded-xl border border-purple-200">
                        <i class="fas fa-user-graduate text-purple-500 text-xl"></i>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-gray-600 font-medium">শিক্ষক</p>
                        <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $users->where('role', 'teacher')->count() }}</h3>
                    </div>
                    <div class="bg-orange-100 p-3 rounded-xl border border-orange-200">
                        <i class="fas fa-chalkboard-teacher text-orange-500 text-xl"></i>
                    </div>
                </div>
            </div>
        </div>

        <!-- Search and Filters -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
            <form class="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <div class="relative flex-1 w-full">
                    <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <input type="text" name="query" placeholder="নাম, ইমেইল বা প্রতিষ্ঠান দ্বারা ব্যবহারকারী খুঁজুন..."
                        class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500">
                </div>
                <button class="px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500">খুজুন</button>
            </form>
        </div>

        <!-- Users Table -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ব্যবহারকারী প্রোফাইল</th>
                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">যোগাযোগ তথ্য</th>
                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">শিক্ষা</th>
                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">প্রতিষ্ঠান</th>
                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">স্ট্যাটাস</th>
                            <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">কর্ম</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        @foreach($users as $user)
                            <tr class="hover:bg-blue-50 transition-colors duration-200">
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="relative">
                                            <img class="h-12 w-12 rounded-full bg-gray-200"
                                                src="{{ $user->avatar ?? "https://www.svgrepo.com/show/508699/landscape-placeholder.svg" }}"
                                                alt="{{ $user->name }}">
                                            <div class="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div class="ml-4">
                                            <div class="text-sm font-semibold text-gray-800">{{ $user->name }}</div>
                                            <div class="text-sm text-gray-600">{{ $user->email }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-800 font-medium">{{ $user->phone ?? 'N/A' }}</div>
                                    <div class="text-sm text-gray-600">{{ $user->email }}</div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="bg-purple-100 p-2 rounded-lg mr-3 border border-purple-200">
                                            <i class="fas fa-graduation-cap text-purple-500 text-sm"></i>
                                        </div>
                                        <div>
                                            <div class="text-sm font-medium text-gray-800">
                                                {{ $user->current_education ?? 'নির্দিষ্ট করা হয়নি' }}</div>
                                            <div class="text-xs text-gray-500">শিক্ষার স্তর</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="bg-orange-100 p-2 rounded-lg mr-3 border border-orange-200">
                                            <i class="fas fa-university text-orange-500 text-sm"></i>
                                        </div>
                                        <div>
                                            <div class="text-sm font-medium text-gray-800">
                                                {{ $user->institute_name ?? 'নির্দিষ্ট করা হয়নি' }}</div>
                                            <div class="text-xs text-gray-500">প্রতিষ্ঠান</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                        <i class="fas fa-circle mr-1 text-xs"></i>
                                        সক্রিয়
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center space-x-2">
                                        <a href="{{ route('admin.users.show', $user) }}"
                                            class="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-200 group border border-transparent hover:border-blue-200"
                                            title="দেখুন">
                                            <i class="fas fa-eye group-hover:scale-110 transition-transform"></i>
                                        </a>
                                        <a href="{{ route('admin.users.edit', $user) }}"
                                            class="p-2 text-gray-500 hover:text-green-600 hover:bg-green-100 rounded-lg transition-all duration-200 group border border-transparent hover:border-green-200"
                                            title="সম্পাদনা">
                                            <i class="fas fa-edit group-hover:scale-110 transition-transform"></i>
                                        </a>
                                        <button onclick="openDeleteModal({{ $user->id }}, '{{ $user->name }}')"
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
                        {{ $users->firstItem() }} থেকে {{ $users->lastItem() }} পর্যন্ত দেখানো হচ্ছে, মোট {{ $users->total() }} ফলাফল
                    </div>
                    <div class="flex space-x-1">
                        {{ $users->links() }}
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
                <p class="text-gray-700 mb-6">আপনি কি নিশ্চিত যে আপনি "<span id="userName"
                        class="font-semibold text-gray-800"></span>" ব্যবহারকারীকে মুছে ফেলতে চান? সমস্ত সংশ্লিষ্ট ডেটা স্থায়ীভাবে মুছে ফেলা হবে।</p>
                <div class="flex justify-end space-x-3">
                    <button onclick="closeDeleteModal()"
                        class="px-6 py-2.5 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors duration-200 font-medium">
                        বাতিল
                    </button>
                    <form id="deleteForm" method="POST" class="inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit"
                            class="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors duration-200 flex items-center border border-red-500">
                            <i class="fas fa-trash mr-2"></i>
                            ব্যবহারকারী মুছুন
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <script>
            function openDeleteModal(userId, userName) {
                document.getElementById('userName').textContent = userName;
                document.getElementById('deleteForm').action = `/admin/users/${userId}`;
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

        <style>
            .pagination {
                display: flex;
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .pagination li {
                margin: 0 2px;
            }

            .pagination li a,
            .pagination li span {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 40px;
                height: 40px;
                padding: 0 12px;
                border-radius: 10px;
                font-size: 14px;
                font-weight: 500;
                text-decoration: none;
                transition: all 0.2s ease;
            }

            .pagination li a {
                color: #6b7280;
                border: 1px solid #d1d5db;
                background: #f9fafb;
            }

            .pagination li a:hover {
                background: #e5e7eb;
                border-color: #9ca3af;
            }

            .pagination li.active span {
                background: #3b82f6;
                color: white;
                border-color: #3b82f6;
            }

            .pagination li.disabled span {
                color: #9ca3af;
                border-color: #d1d5db;
                background: #f3f4f6;
            }
        </style>
    </div>
@endsection