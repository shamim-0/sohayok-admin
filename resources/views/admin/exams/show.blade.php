@extends('admin.dashboard.layout')

@section('content')
    <div class="container mx-auto px-4 py-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
                <h1 class="text-2xl font-bold text-gray-900">পরীক্ষার বিবরণ</h1>
                <p class="text-gray-600 mt-1">{{ $course->title }} - {{ $exam->title }}</p>
            </div>
            <div class="flex space-x-3 mt-4 md:mt-0">
                <a href="{{ route('admin.courses.exams.index', $course) }}"
                    class="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    পরীক্ষা সমূহ
                </a>
                <a href="{{ route('admin.courses.exams.edit', [$course, $exam]) }}"
                    class="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                        </path>
                    </svg>
                    এডিট
                </a>
            </div>
        </div>

        <!-- Success/Error Messages -->
        @if (session('success'))
            <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-green-800">{{ session('success') }}</span>
                </div>
            </div>
        @endif

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Exam Details -->
            <div class="lg:col-span-2">
                <div class="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h5 class="text-lg font-semibold text-gray-900">পরীক্ষার তথ্য</h5>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-500 mb-1">বিষয়</label>
                                <p class="text-gray-900 font-medium">{{ $exam->subject }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-500 mb-1">শিরোনাম</label>
                                <p class="text-gray-900 font-medium">{{ $exam->title }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-500 mb-1">মোট মার্ক</label>
                                <p class="text-gray-900 font-medium">{{ $exam->total_marks }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-500 mb-1">পাশের মার্ক</label>
                                <p class="text-gray-900 font-medium">{{ $exam->passing_marks }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-500 mb-1">ডেডলাইন</label>
                                <p class="text-gray-900 font-medium">{{ $exam->deadline->format('d M, Y h:i A') }}</p>
                                @if ($exam->isExpired())
                                    <span class="inline-block mt-1 px-2 py-1 text-xs bg-red-100 text-red-800 rounded">মেয়াদ
                                        উত্তীর্ণ</span>
                                @else
                                    <span
                                        class="inline-block mt-1 px-2 py-1 text-xs bg-green-100 text-green-800 rounded">{{ now()->diffInDays($exam->deadline) }}
                                        দিন বাকি</span>
                                @endif
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-500 mb-1">স্ট্যাটাস</label>
                                <span
                                    class="inline-flex px-2 py-1 text-xs rounded-full 
                                @if ($exam->status == 'active') bg-green-100 text-green-800
                                @elseif($exam->status == 'inactive') bg-yellow-100 text-yellow-800
                                @else bg-red-100 text-red-800 @endif">
                                    {{ ucfirst($exam->status) }}
                                </span>
                            </div>
                            <div class="md:col-span-2">
                                <label class="block text-sm font-medium text-gray-500 mb-1">নির্দেশনা</label>
                                <div class="p-3 bg-gray-50 rounded-lg">
                                    <p class="text-gray-700">{{ $exam->instruction ?? 'কোন নির্দেশনা নেই' }}</p>
                                </div>
                            </div>
                            @if ($exam->question_file)
                                <div class="md:col-span-2">
                                    <label class="block text-sm font-medium text-gray-500 mb-1">প্রশ্নপত্র</label>
                                    <a href="{{ Storage::url($exam->question_file) }}" target="_blank"
                                        class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                            </path>
                                        </svg>
                                        প্রশ্নপত্র দেখুন
                                    </a>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>

            <!-- Summary Cards -->
            <div class="lg:col-span-1">
                <div class="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h5 class="text-lg font-semibold text-gray-900">সারাংশ</h5>
                    </div>
                    <div class="p-6 space-y-4">
                        <div class="text-center p-4 bg-blue-50 rounded-lg">
                            <div class="text-2xl font-bold text-blue-600">{{ $submissions->count() }}</div>
                            <div class="text-sm text-gray-600">মোট সাবমিশন</div>
                        </div>

                        <div class="text-center p-4 bg-green-50 rounded-lg">
                            <div class="text-2xl font-bold text-green-600">
                                {{ $submissions->where('obtained_marks', '>=', $exam->passing_marks)->count() }}
                            </div>
                            <div class="text-sm text-gray-600">পাশ করেছে</div>
                        </div>

                        <div class="text-center p-4 bg-red-50 rounded-lg">
                            <div class="text-2xl font-bold text-red-600">
                                {{ $submissions->where('obtained_marks', '<', $exam->passing_marks)->whereNotNull('obtained_marks')->count() }}
                            </div>
                            <div class="text-sm text-gray-600">ফেল করেছে</div>
                        </div>

                        <div class="text-center p-4 bg-yellow-50 rounded-lg">
                            <div class="text-2xl font-bold text-yellow-600">
                                {{ $submissions->whereNull('obtained_marks')->count() }}
                            </div>
                            <div class="text-sm text-gray-600">মার্ক প্রদান করা হয়নি</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Submissions List -->
        <div class="mt-6">
            <div class="bg-white rounded-lg shadow-sm border border-gray-200">
                <div class="px-6 py-4 border-b border-gray-200">
                    <h5 class="text-lg font-semibold text-gray-900">সাবমিশন সমূহ</h5>
                </div>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    শিক্ষার্থী</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    সাবমিটের তারিখ</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    উত্তরপত্র</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    প্রাপ্ত মার্ক</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ফলাফল</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    অ্যাকশন</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            @forelse($submissions as $submission)
                                <tr class="hover:bg-gray-50 transition">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">{{ $submission->student->name }}
                                        </div>
                                        <div class="text-xs text-gray-500">{{ $submission->student->email }}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">
                                            {{ $submission->submitted_at->format('d M, Y h:i A') }}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        @if ($submission->answer_file)
                                            <a href="{{ Storage::url($submission->answer_file) }}" target="_blank"
                                                class="text-blue-600 hover:text-blue-900 text-sm inline-flex items-center">
                                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                    </path>
                                                </svg>
                                                দেখুন
                                            </a>
                                        @else
                                            <span class="text-gray-400 text-sm">ফাইল নেই</span>
                                        @endif
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        @if ($submission->obtained_marks)
                                            <span
                                                class="text-sm font-medium text-gray-900">{{ $submission->obtained_marks }}/{{ $exam->total_marks }}</span>
                                        @else
                                            <span class="text-sm text-yellow-600">মার্ক দেওয়া হয়নি</span>
                                        @endif
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        @if ($submission->obtained_marks)
                                            <span
                                                class="px-2 py-1 text-xs rounded-full 
                                        @if ($submission->isPassed()) bg-green-100 text-green-800
                                        @else bg-red-100 text-red-800 @endif">
                                                {{ $submission->isPassed() ? 'পাশ' : 'ফেল' }}
                                            </span>
                                        @else
                                            <span
                                                class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">পেন্ডিং</span>
                                        @endif
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                                        <button
                                            onclick="showGradeModal('{{ $submission->id }}', '{{ $submission->student->name }}', '{{ $submission->obtained_marks }}')"
                                            class="text-blue-600 hover:text-blue-900">
                                            মার্ক দিন
                                        </button>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="6" class="px-6 py-12 text-center">
                                        <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                            </path>
                                        </svg>
                                        <p class="mt-3 text-gray-500">কোন সাবমিশন নেই</p>
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Grade Modal -->
    <div id="gradeModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-medium text-gray-900">মার্ক প্রদান করুন</h3>
                    <button onclick="hideGradeModal()" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <form id="gradeForm" method="POST">
                    @csrf
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">শিক্ষার্থী</label>
                            <p id="studentName" class="text-gray-900 font-medium"></p>
                        </div>
                        <div>
                            <label for="obtained_marks" class="block text-sm font-medium text-gray-700 mb-2">
                                প্রাপ্ত মার্ক (সর্বোচ্চ {{ $exam->total_marks }})
                            </label>
                            <input type="number" name="obtained_marks" id="obtained_marks"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                min="0" max="{{ $exam->total_marks }}" required>
                        </div>
                        <div>
                            <label for="feedback" class="block text-sm font-medium text-gray-700 mb-2">ফিডব্যাক
                                (ঐচ্ছিক)</label>
                            <textarea name="feedback" id="feedback" rows="3"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end space-x-3">
                        <button type="button" onclick="hideGradeModal()"
                            class="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                            বাতিল
                        </button>
                        <button type="submit" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                            সাবমিট
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script>
        function showGradeModal(submissionId, studentName, obtainedMarks) {
            document.getElementById('studentName').textContent = studentName;
            document.getElementById('obtained_marks').value = obtainedMarks || '';
            document.getElementById('feedback').value = '';

            const formAction =
                "{{ route('admin.courses.exams.grade', ['course' => $course, 'exam' => $exam, 'submission' => 'PLACEHOLDER']) }}"
                .replace('PLACEHOLDER', submissionId);
            document.getElementById('gradeForm').action = formAction;

            document.getElementById('gradeModal').classList.remove('hidden');
        }

        function hideGradeModal() {
            document.getElementById('gradeModal').classList.add('hidden');
        }

        document.getElementById('gradeModal')?.addEventListener('click', function(e) {
            if (e.target === this) hideGradeModal();
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') hideGradeModal();
        });
    </script>
@endsection
