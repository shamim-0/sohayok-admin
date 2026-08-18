@extends('admin.dashboard.layout')

@section('content')

<main class="p-6 bg-gray-50 min-h-screen"> <div class="max-w-7xl mx-auto space-y-6"></div>   
   
   <!-- Header Section -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">প্রশ্ন ব্যাংক</h1>
            <p class="text-gray-600 mt-1">Manage and organize your question database</p>
        </div>
        <div class="flex gap-3">
            <a href="{{ route('admin.question.add') }}" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 shadow-md">
                <i class="fas fa-plus"></i>
                প্রশ্ন যোগ করুন
            </a>
            <a href="{{ route('admin.question.import') }}" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2 shadow-md">
                <i class="fas fa-file-import"></i>
                ইম্পর্ট করুন
            </a>
        </div>
    </div>

    <!-- Filter Section -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <i class="fas fa-filter text-blue-500"></i>
            Filter Questions
        </h2>
        <form action="{{ route('admin.question.index') }}" method="GET" class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">বিষয় নির্বাচন করুন</label>
                <select name="subject_id" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
                    <option value="">সকল বিষয়</option>
                    @foreach($subjects as $subject)
                        <option value="{{ $subject->id }}" {{ request('subject_id') == $subject->id ? 'selected' : '' }}>
                            {{ $subject->name }}
                        </option>
                    @endforeach
                </select>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">টপিক নির্বাচন করুন</label>
                <select name="topic_id" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
                    <option value="">সকল টপিক</option>
                    @foreach($subjects as $subject)
                        @foreach($subject->topics as $topic)
                            <option value="{{ $topic->id }}" {{ request('topic_id') == $topic->id ? 'selected' : '' }}>
                                {{ $subject->name }} - {{ $topic->name }}
                            </option>
                        @endforeach
                    @endforeach
                </select>
            </div>

            <div class="flex items-end">
                <button class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition shadow-md flex items-center justify-center gap-2">
                    <i class="fas fa-search"></i>
                    Filter Questions
                </button>
            </div>
        </form>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-500">Total Questions</p>
                    <p class="text-2xl font-bold text-gray-800">{{ count($questions)}}</p>
                </div>
                <div class="p-3 bg-blue-100 rounded-xl">
                    <i class="fas fa-question-circle text-blue-600 text-xl"></i>
                </div>
            </div>
        </div>
        
        <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-500">Subjects</p>
                    <p class="text-2xl font-bold text-gray-800">{{ $subjects->count() }}</p>
                </div>
                <div class="p-3 bg-green-100 rounded-xl">
                    <i class="fas fa-book text-green-600 text-xl"></i>
                </div>
            </div>
        </div>
        
        <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-500">This Page</p>
                    <p class="text-2xl font-bold text-gray-800">{{ $questions->count() }}</p>
                </div>
                <div class="p-3 bg-purple-100 rounded-xl">
                    <i class="fas fa-file-alt text-purple-600 text-xl"></i>
                </div>
            </div>
        </div>
        
        <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-gray-500">Last Added</p>
                    <p class="text-lg font-bold text-gray-800">Today</p>
                </div>
                <div class="p-3 bg-orange-100 rounded-xl">
                    <i class="fas fa-clock text-orange-600 text-xl"></i>
                </div>
            </div>
        </div>
    </div>

    <!-- Question Cards -->
    <div class="space-y-4">
        @if($questions->count() > 0)
            @foreach($questions as $index => $q)
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-start gap-3">
                            <div class="bg-blue-100 text-blue-700 font-bold rounded-lg w-8 h-8 flex items-center justify-center mt-1">
                                {{ $questions->firstItem() + $index }}
                            </div>
                            <p class="font-semibold text-gray-800 text-lg leading-relaxed">{{ $q->question }}</p>
                        </div>
                        <div class="flex gap-2">
                            <button onclick="toggleEdit({{ $q->id }})" class="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-2 rounded-lg transition flex items-center gap-1">
                                <i class="fas fa-edit text-sm"></i>
                                Edit
                            </button>
                            <button onclick="confirmDelete({{ $q->id }})" class="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition flex items-center gap-1">
                                <i class="fas fa-trash text-sm"></i>
                                Delete
                            </button>
                        </div>
                    </div>

                    <!-- MCQ Options -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <div class="px-4 py-3 rounded-xl border {{ $q->correct_answer=='A'?'border-green-500 bg-green-50 font-semibold':'border-gray-200 bg-gray-50' }} transition">
                            <span class="{{ $q->correct_answer=='A'?'text-green-700':'text-gray-700' }}">A. {{ $q->option_a }}</span>
                            @if($q->correct_answer=='A')
                                <i class="fas fa-check-circle text-green-500 float-right mt-1"></i>
                            @endif
                        </div>
                        <div class="px-4 py-3 rounded-xl border {{ $q->correct_answer=='B'?'border-green-500 bg-green-50 font-semibold':'border-gray-200 bg-gray-50' }} transition">
                            <span class="{{ $q->correct_answer=='B'?'text-green-700':'text-gray-700' }}">B. {{ $q->option_b }}</span>
                            @if($q->correct_answer=='B')
                                <i class="fas fa-check-circle text-green-500 float-right mt-1"></i>
                            @endif
                        </div>
                        <div class="px-4 py-3 rounded-xl border {{ $q->correct_answer=='C'?'border-green-500 bg-green-50 font-semibold':'border-gray-200 bg-gray-50' }} transition">
                            <span class="{{ $q->correct_answer=='C'?'text-green-700':'text-gray-700' }}">C. {{ $q->option_c }}</span>
                            @if($q->correct_answer=='C')
                                <i class="fas fa-check-circle text-green-500 float-right mt-1"></i>
                            @endif
                        </div>
                        <div class="px-4 py-3 rounded-xl border {{ $q->correct_answer=='D'?'border-green-500 bg-green-50 font-semibold':'border-gray-200 bg-gray-50' }} transition">
                            <span class="{{ $q->correct_answer=='D'?'text-green-700':'text-gray-700' }}">D. {{ $q->option_d }}</span>
                            @if($q->correct_answer=='D')
                                <i class="fas fa-check-circle text-green-500 float-right mt-1"></i>
                            @endif
                        </div>
                    </div>

                    @if($q->explain)
                        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
                            <div class="flex items-center gap-2 text-blue-700 font-medium mb-1">
                                <i class="fas fa-info-circle"></i>
                                Explanation
                            </div>
                            <p class="text-gray-700">{{ $q->explain }}</p>
                        </div>
                    @endif

                    <!-- Edit Form -->
                    <form id="editForm-{{ $q->id }}" action="{{ route('admin.question.update', $q->id) }}" method="POST" class="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200 hidden">
                        @csrf @method('PUT')
                        <h3 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <i class="fas fa-edit text-blue-500"></i>
                            Edit Question
                        </h3>
                        
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Question</label>
                                <textarea name="question" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" rows="2" required>{{ $q->question }}</textarea>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Option A</label>
                                    <input type="text" name="option_a" value="{{ $q->option_a }}" class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Option B</label>
                                    <input type="text" name="option_b" value="{{ $q->option_b }}" class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Option C</label>
                                    <input type="text" name="option_c" value="{{ $q->option_c }}" class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Option D</label>
                                    <input type="text" name="option_d" value="{{ $q->option_d }}" class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Correct Answer</label>
                                    <select name="correct_answer" class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
                                        <option value="A" {{ $q->correct_answer == 'A' ? 'selected' : '' }}>Option A</option>
                                        <option value="B" {{ $q->correct_answer == 'B' ? 'selected' : '' }}>Option B</option>
                                        <option value="C" {{ $q->correct_answer == 'C' ? 'selected' : '' }}>Option C</option>
                                        <option value="D" {{ $q->correct_answer == 'D' ? 'selected' : '' }}>Option D</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Explanation (Optional)</label>
                                    <textarea name="explain" class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition" rows="2">{{ $q->explain }}</textarea>
                                </div>
                            </div>
                            
                            <div class="flex justify-end gap-3 pt-2">
                                <button type="button" onclick="toggleEdit({{ $q->id }})" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition">
                                    Cancel
                                </button>
                                <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition flex items-center gap-2 shadow-md">
                                    <i class="fas fa-save"></i>
                                    Update Question
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            @endforeach

            <!-- Pagination -->
            <div class="mt-6 flex justify-center">
                <div class="bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
                    {{ $questions->links() }}
                </div>
            </div>
        @else
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div class="max-w-md mx-auto">
                    <i class="fas fa-inbox text-4xl text-gray-300 mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-700 mb-2">No Questions Found</h3>
                    <p class="text-gray-500 mb-4">No questions match your current filter criteria. Try adjusting your filters or add new questions.</p>
                    <a href="{{ route('admin.question.add') }}" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2">
                        <i class="fas fa-plus"></i>
                       প্রশ্ন যোগ করুন
                    </a>
                </div>
            </div>
        @endif
    </div>
</div>

<!-- Delete Modal -->
<div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-50 hidden justify-center items-center z-50 transition-opacity duration-300">
    <div class="bg-white p-6 rounded-2xl shadow-xl w-96 mx-4 transform transition-transform duration-300 scale-95" id="modalContent">
        <div class="text-center">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <i class="fas fa-exclamation-triangle text-red-600 text-xl"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Delete Question</h3>
            <p class="text-gray-600 mb-6">Are you sure you want to delete this question? This action cannot be undone.</p>
            <div class="flex justify-center gap-3">
                <button id="cancelDelete" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-300 transition flex-1">
                    Cancel
                </button>
                <form id="deleteForm" method="POST" class="flex-1">
                    @csrf @method('DELETE')
                    <button class="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition w-full">
                        Delete
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>


<!-- ====== Script Section ====== -->
<script>
    // Toggle edit form visibility
    function toggleEdit(id) {
        const form = document.getElementById('editForm-' + id);
        form.classList.toggle('hidden');

        // Smooth scroll when form opens
        if (!form.classList.contains('hidden')) {
            form.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }

    // Confirm delete modal
    function confirmDelete(id) {
        const modal = document.getElementById('deleteModal');
        const modalContent = document.getElementById('modalContent');
        const form = document.getElementById('deleteForm');

        // Set form action dynamically
        form.action = `/admin/panel/question/${id}`;

        // Show modal with animation
        modal.classList.remove('hidden');
        setTimeout(() => {
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 10);
    }

    // Cancel delete and close modal
    document.getElementById('cancelDelete').addEventListener('click', () => {
        const modal = document.getElementById('deleteModal');
        const modalContent = document.getElementById('modalContent');

        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');

        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    });

    // Close modal when clicking outside the content
    document.getElementById('deleteModal').addEventListener('click', function (e) {
        if (e.target === this) {
            document.getElementById('cancelDelete').click();
        }
    });
</script>

<!-- ====== Style Section ====== -->
<style>
    /* ====== Custom Pagination Styling ====== */
    .pagination {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 8px;
    }

    .pagination li {
        display: inline-block;
    }

    .pagination li a,
    .pagination li span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        font-weight: 500;
        transition: all 0.2s ease;
    }

    .pagination li a {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        color: #4b5563;
        text-decoration: none;
    }

    .pagination li a:hover {
        background: #f3f4f6;
        border-color: #d1d5db;
    }

    .pagination li.active span {
        background: #3b82f6;
        color: #ffffff;
        border: 1px solid #3b82f6;
    }

    .pagination li.disabled span {
        background: #f9fafb;
        color: #9ca3af;
        border: 1px solid #e5e7eb;
    }
</style>


@endsection