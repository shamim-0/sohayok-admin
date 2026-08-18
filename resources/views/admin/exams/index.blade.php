@extends('admin.dashboard.layout')

@section('content')
<div class="container mx-auto px-4 py-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
            <h1 class="text-2xl font-bold text-gray-900">পরীক্ষা ব্যবস্থাপনা</h1>
            <p class="text-gray-600 mt-1">{{ $course->title }} - পরীক্ষা সমূহ</p>
        </div>
        <div class="flex space-x-3 mt-4 md:mt-0">
            <a href="{{ route('admin.courses.show', $course) }}" 
               class="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                কোর্সে ফিরুন
            </a>
            <a href="{{ route('admin.courses.exams.create', $course) }}" 
               class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                নতুন পরীক্ষা
            </a>
        </div>
    </div>

    <!-- Success/Error Messages -->
    @if(session('success'))
        <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div class="flex items-center">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-green-800">{{ session('success') }}</span>
            </div>
        </div>
    @endif

    <!-- Exams List -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">বিষয়</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">শিরোনাম</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">মোট মার্ক</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">পাশের মার্ক</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ডেডলাইন</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">স্ট্যাটাস</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">সাবমিশন</th>
                        <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">অ্যাকশন</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    @forelse($exams as $exam)
                    <tr class="hover:bg-gray-50 transition">
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">{{ $exam->subject }}</div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-900">{{ $exam->title }}</div>
                            @if($exam->instruction)
                                <div class="text-xs text-gray-500 mt-1">{{ Str::limit($exam->instruction, 50) }}</div>
                            @endif
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{ $exam->total_marks }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{ $exam->passing_marks }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{ $exam->deadline->format('d M, Y h:i A') }}</div>
                            @if($exam->isExpired())
                                <div class="text-xs text-red-600">মেয়াদ উত্তীর্ণ</div>
                            @endif
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="px-2 py-1 text-xs rounded-full 
                                @if($exam->status == 'active') bg-green-100 text-green-800
                                @elseif($exam->status == 'inactive') bg-yellow-100 text-yellow-800
                                @else bg-red-100 text-red-800
                                @endif">
                                {{ ucfirst($exam->status) }}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <a href="{{ route('admin.courses.exams.submissions', [$course, $exam]) }}" 
                               class="text-blue-600 hover:text-blue-900 text-sm">
                                {{ $exam->submissions->count() }} টি সাবমিশন
                            </a>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div class="flex justify-end space-x-2">
                                <a href="{{ route('admin.courses.exams.show', [$course, $exam]) }}" 
                                   class="text-blue-600 hover:text-blue-900" title="দেখুন">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                </a>
                                <a href="{{ route('admin.courses.exams.edit', [$course, $exam]) }}" 
                                   class="text-green-600 hover:text-green-900" title="এডিট">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                    </svg>
                                </a>
                                <button onclick="showDeleteModal('{{ $exam->id }}', '{{ $exam->title }}')" 
                                        class="text-red-600 hover:text-red-900" title="ডিলিট">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="8" class="px-6 py-12 text-center">
                            <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            <p class="mt-3 text-gray-500">কোন পরীক্ষা তৈরি করা হয়নি</p>
                            <a href="{{ route('admin.courses.exams.create', $course) }}" 
                               class="mt-3 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                                প্রথম পরীক্ষা তৈরি করুন
                            </a>
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        @if($exams->hasPages())
            <div class="px-6 py-4 border-t border-gray-200">
                {{ $exams->links() }}
            </div>
        @endif
    </div>
</div>

<!-- Delete Modal -->
<div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div class="p-6">
            <div class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
            </div>
            <div class="mt-4 text-center">
                <h3 class="text-lg font-medium text-gray-900">পরীক্ষা ডিলিট</h3>
                <p class="mt-2 text-sm text-gray-500">
                    আপনি কি নিশ্চিত যে আপনি "<span id="examTitle" class="font-semibold"></span>" ডিলিট করতে চান?
                </p>
            </div>
            <div class="mt-6 flex justify-center space-x-3">
                <button onclick="hideDeleteModal()" 
                        class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg">
                    বাতিল
                </button>
                <form id="deleteForm" method="POST" class="inline">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg">
                        ডিলিট
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
function showDeleteModal(examId, examTitle) {
    document.getElementById('examTitle').textContent = examTitle;
    const deleteUrl = "{{ route('admin.courses.exams.destroy', ['course' => $course, 'exam' => 'PLACEHOLDER']) }}".replace('PLACEHOLDER', examId);
    document.getElementById('deleteForm').action = deleteUrl;
    document.getElementById('deleteModal').classList.remove('hidden');
}

function hideDeleteModal() {
    document.getElementById('deleteModal').classList.add('hidden');
}

document.getElementById('deleteModal')?.addEventListener('click', function(e) {
    if (e.target === this) hideDeleteModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') hideDeleteModal();
});
</script>
@endsection