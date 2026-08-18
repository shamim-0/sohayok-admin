@extends('admin.dashboard.layout')

@section('content')
<div class="container mx-auto px-4 py-6">
    <div class="flex items-center justify-between mb-6">
        <div>
            <h1 class="text-2xl font-bold text-gray-900">সাবমিশন সমূহ</h1>
            <p class="text-gray-600 mt-1">{{ $course->title }} - {{ $exam->title }}</p>
        </div>
        <div class="flex space-x-3">
            <a href="{{ route('admin.courses.exams.show', [$course, $exam]) }}" 
               class="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg">
                পরীক্ষায় ফিরুন
            </a>
        </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ক্রমিক</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">শিক্ষার্থীর নাম</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ইমেইল</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">সাবমিটের তারিখ</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">উত্তরপত্র</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">প্রাপ্ত মার্ক</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ফলাফল</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ফিডব্যাক</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">অ্যাকশন</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    @forelse($submissions as $index => $submission)
                    <tr class="hover:bg-gray-50 transition">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $index + 1 }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">{{ $submission->student->name }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ $submission->student->email }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {{ $submission->submitted_at->format('d M, Y h:i A') }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            @if($submission->answer_file)
                                <a href="{{ Storage::url($submission->answer_file) }}" target="_blank" 
                                   class="text-blue-600 hover:text-blue-900 text-sm inline-flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    দেখুন
                                </a>
                            @else
                                <span class="text-gray-400 text-sm">ফাইল নেই</span>
                            @endif
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            @if($submission->obtained_marks)
                                <span class="text-sm font-medium text-gray-900">{{ $submission->obtained_marks }}/{{ $exam->total_marks }}</span>
                            @else
                                <span class="text-sm text-yellow-600">মার্ক দেওয়া হয়নি</span>
                            @endif
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            @if($submission->obtained_marks)
                                <span class="px-2 py-1 text-xs rounded-full 
                                    @if($submission->isPassed()) bg-green-100 text-green-800
                                    @else bg-red-100 text-red-800
                                    @endif">
                                    {{ $submission->isPassed() ? 'পাশ' : 'ফেল' }}
                                </span>
                            @else
                                <span class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">পেন্ডিং</span>
                            @endif
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-600 max-w-xs">
                                {{ Str::limit($submission->feedback, 50) ?? '-' }}
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                            <button onclick="showGradeModal('{{ $submission->id }}', '{{ $submission->student->name }}', '{{ $submission->obtained_marks }}', '{{ $submission->feedback }}')" 
                                    class="inline-flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition">
                                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                </svg>
                                মার্ক দিন
                            </button>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="9" class="px-6 py-12 text-center">
                            <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            <p class="mt-3 text-gray-500">কোন সাবমিশন নেই</p>
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        @if($submissions->hasPages())
            <div class="px-6 py-4 border-t border-gray-200">
                {{ $submissions->links() }}
            </div>
        @endif
    </div>
</div>

<!-- Grade Modal (same as show page) -->
<!-- Include the same grade modal from show.blade.php -->
@endsection