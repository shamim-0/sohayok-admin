@extends('admin.dashboard.layout')

@section('content')
<div class="flex-1 p-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">কোর্স ব্যবস্থাপনা</h1>
            <p class="text-gray-600">আপনার প্রতিষ্ঠানের সকল কোর্স পরিচালনা করুন</p>
        </div>
        <a href="{{ route('admin.courses.create') }}"
            class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400">
            <i class="fas fa-plus-circle mr-2"></i> নতুন কোর্স যোগ করুন
        </a>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-600 font-medium">মোট কোর্স</p>
                    <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $courses->total() }}</h3>
                </div>
                <div class="bg-blue-100 p-3 rounded-xl border border-blue-200">
                    <i class="fas fa-book text-blue-500 text-xl"></i>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-600 font-medium">প্রকাশিত</p>
                    <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $courses->where('status', 'published')->count() }}</h3>
                </div>
                <div class="bg-green-100 p-3 rounded-xl border border-green-200">
                    <i class="fas fa-check-circle text-green-500 text-xl"></i>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-600 font-medium">খসড়া</p>
                    <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $courses->where('status', 'draft')->count() }}</h3>
                </div>
                <div class="bg-yellow-100 p-3 rounded-xl border border-yellow-200">
                    <i class="fas fa-edit text-yellow-500 text-xl"></i>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-600 font-medium">আর্কাইভড</p>
                    <h3 class="text-2xl font-bold text-gray-800 mt-1">{{ $courses->where('status', 'archived')->count() }}</h3>
                </div>
                <div class="bg-red-100 p-3 rounded-xl border border-red-200">
                    <i class="fas fa-archive text-red-500 text-xl"></i>
                </div>
            </div>
        </div>
    </div>


    <!-- Courses Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
        <div class="">
            <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">কোর্স তথ্য</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ক্যাটাগরি</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">মূল্য</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">স্ট্যাটাস</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">অ্যাকশন</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    @foreach($courses as $course)
                        <tr class="hover:bg-blue-50 transition-colors duration-200">
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-12 w-12">
                                        <img class="h-12 w-12 rounded-lg object-cover border border-gray-200" 
                                             src="{{ $course->thumbnail ? $course->thumbnail : 'https://via.placeholder.com/150' }}" 
                                             alt="{{ $course->title }} ">
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-semibold text-gray-800">{{ $course->title }}</div>
                                        <div class="text-sm text-gray-600">{{ Str::limit($course->description, 50) }}</div>
                                        <div class="text-xs text-gray-500 mt-1">{{ $course->created_at->format('M d, Y') }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center">
                                    <div class="bg-purple-100 p-2 rounded-lg mr-3 border border-purple-200">
                                         <img class="h-8" src="{{ asset('storage/'. $course->category->image) }}" alt="">
                                    </div>
                                    <div>
                                        <div class="text-sm font-medium text-gray-800">{{ $course->category->name }}</div>
                                        <div class="text-xs text-gray-500">ক্যাটাগরি</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm font-semibold text-gray-800">
                                    ৳{{ number_format($course->final_price, 2) }}
                                </div>
                                @if($course->offer_price)
                                    <div class="text-xs text-gray-500 line-through">৳{{ number_format($course->price, 2) }}</div>
                                    <div class="text-xs text-green-600 font-medium">{{ $course->discount_percentage }}% ছাড়</div>
                                @endif
                            </td>
                            <td class="px-6 py-4">
                                @php
                                    $statusBadge = $course->status_badge;
                                @endphp
                                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium {{ $statusBadge[0] }} border {{ $statusBadge[0] == 'bg-gray-100 text-gray-800' ? 'border-gray-200' : ($statusBadge[0] == 'bg-green-100 text-green-800' ? 'border-green-200' : 'border-red-200') }}">
                                    <i class="fas fa-circle mr-1 text-xs {{ $statusBadge[0] == 'bg-gray-100 text-gray-800' ? 'text-gray-500' : ($statusBadge[0] == 'bg-green-100 text-green-800' ? 'text-green-500' : 'text-red-500') }}"></i>
                                    {{ $statusBadge[1] }}
                                </span>
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center space-x-2">
                                    <a href="{{ route('admin.courses.show', $course) }}"
                                        class="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-all duration-200 group border border-transparent hover:border-blue-200"
                                        title="দেখুন">
                                        <i class="fas fa-eye group-hover:scale-110 transition-transform"></i>
                                    </a>
                                    <a href="{{ route('admin.courses.edit', $course) }}"
                                        class="p-2 text-gray-500 hover:text-green-600 hover:bg-green-100 rounded-lg transition-all duration-200 group border border-transparent hover:border-green-200"
                                        title="সম্পাদনা">
                                        <i class="fas fa-edit group-hover:scale-110 transition-transform"></i>
                                    </a>
                                    <button onclick="openDeleteModal({{ $course->id }}, '{{ $course->title }}')"
                                        class="p-2 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-lg transition-all duration-200 group border border-transparent hover:border-red-200"
                                        title="মুছুন">
                                        <i class="fas fa-trash group-hover:scale-110 transition-transform"></i>
                                    </button>
                                    
                                    <a href="{{ route('admin.courses.content', $course) }}" class="p-2 text-gray-500 hover:text-green-600 hover:bg-green-100 rounded-lg transition-all duration-200 group border border-transparent hover:border-green-200">
                                         <i class="fas fa-chart-bar mr-2"></i>
                                    </a>
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
                    {{ $courses->firstItem() }} থেকে {{ $courses->lastItem() }} পর্যন্ত দেখানো হচ্ছে, মোট {{ $courses->total() }} ফলাফল
                </div>
                <div class="flex space-x-1">
                    {{ $courses->links() }}
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
            <p class="text-gray-700 mb-6">আপনি কি নিশ্চিত যে আপনি "<span id="courseName"
                    class="font-semibold text-gray-800"></span>" কোর্সটি মুছে ফেলতে চান? সমস্ত সংশ্লিষ্ট ডেটা স্থায়ীভাবে মুছে ফেলা হবে।</p>
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
                        কোর্স মুছুন
                    </button>
                </form>
            </div>
        </div>
    </div>

    <script>
        function openDeleteModal(courseId, courseName) {
            document.getElementById('courseName').textContent = courseName;
            document.getElementById('deleteForm').action = `/admin/courses/${courseId}`;
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
</div>
@endsection