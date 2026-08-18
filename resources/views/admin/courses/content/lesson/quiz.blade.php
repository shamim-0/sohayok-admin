@extends('admin.dashboard.layout')

@section('content')
    <div class="min-h-screen bg-gray-50 p-6">
        <!-- Header Section -->
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div class="mb-4 lg:mb-0">
                <h1 class="text-3xl font-bold text-gray-900">{{ $course->title }}</h1>
                <div class="flex items-center space-x-2 mt-2 text-gray-600">
                    <span>{{ $chapter->name }}</span>
                    <i class="fas fa-chevron-right text-sm"></i>
                    <span class="font-semibold">{{ $lesson->title }}</span>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button type="button" onclick="openCreateModal()"
                        class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition duration-200">
                    <i class="fas fa-plus"></i>
                    <span>নতুন প্রশ্ন যোগ করুন</span>
                </button>
                <button type="button" onclick="openImportModal()"
                        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition duration-200">
                    <i class="fas fa-file-excel"></i>
                    <span>এক্সেল ফাইল ইমপোর্ট করুন</span>
                </button>
            </div>
        </div>

        <!-- Questions List -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-xl font-semibold text-gray-800">কুইজ প্রশ্ন তালিকা</h2>
                <p class="text-gray-600 text-sm mt-1">মোট প্রশ্ন: {{ $questions->count() }} টি</p>
            </div>
            <div class="p-6">
                <div id="questions-container" class="space-y-6">
                    @foreach($questions as $question)
                        <div class="question-item bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-200"
                             data-question-id="{{ $question->id }}">
                            <div class="flex justify-between items-start">
                                <div class="flex-1">
                                    <div class="flex items-start space-x-3">
                                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-1">
                                            {{ $loop->iteration }}
                                        </span>
                                        <div class="flex-1">
                                            <h3 class="font-semibold text-gray-900 text-lg mb-4">{{ $question->question }}</h3>
                                            
                                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                <div class="flex items-center space-x-3 p-3 rounded-lg border {{ $question->correct_answer === 'a' ? 'border-green-500 bg-green-50' : 'border-gray-200' }}">
                                                    <span class="bg-gray-200 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold">ক</span>
                                                    <span class="text-gray-700">{{ $question->option_a }}</span>
                                                    @if($question->correct_answer === 'a')
                                                        <i class="fas fa-check text-green-500 ml-auto"></i>
                                                    @endif
                                                </div>
                                                <div class="flex items-center space-x-3 p-3 rounded-lg border {{ $question->correct_answer === 'b' ? 'border-green-500 bg-green-50' : 'border-gray-200' }}">
                                                    <span class="bg-gray-200 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold">খ</span>
                                                    <span class="text-gray-700">{{ $question->option_b }}</span>
                                                    @if($question->correct_answer === 'b')
                                                        <i class="fas fa-check text-green-500 ml-auto"></i>
                                                    @endif
                                                </div>
                                                <div class="flex items-center space-x-3 p-3 rounded-lg border {{ $question->correct_answer === 'c' ? 'border-green-500 bg-green-50' : 'border-gray-200' }}">
                                                    <span class="bg-gray-200 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold">গ</span>
                                                    <span class="text-gray-700">{{ $question->option_c }}</span>
                                                    @if($question->correct_answer === 'c')
                                                        <i class="fas fa-check text-green-500 ml-auto"></i>
                                                    @endif
                                                </div>
                                                <div class="flex items-center space-x-3 p-3 rounded-lg border {{ $question->correct_answer === 'd' ? 'border-green-500 bg-green-50' : 'border-gray-200' }}">
                                                    <span class="bg-gray-200 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold">ঘ</span>
                                                    <span class="text-gray-700">{{ $question->option_d }}</span>
                                                    @if($question->correct_answer === 'd')
                                                        <i class="fas fa-check text-green-500 ml-auto"></i>
                                                    @endif
                                                </div>
                                            </div>

                                            @if($question->explain)
                                                <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                                    <h4 class="font-semibold text-yellow-800 mb-2">ব্যাখ্যা:</h4>
                                                    <p class="text-yellow-700">{{ $question->explain }}</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-2 ml-4">
                                    <button onclick="openEditModal({{ json_encode($question) }})"
                                            class="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition duration-200">
                                        <i class="fas fa-edit w-4 h-4"></i>
                                    </button>
                                    <button onclick="openDeleteModal('{{ $question->id }}', '{{ Str::limit($question->question, 50) }}')"
                                            class="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition duration-200">
                                        <i class="fas fa-trash w-4 h-4"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    @endforeach

                    @if($questions->isEmpty())
                        <div class="text-center py-12">
                            <i class="fas fa-question-circle text-4xl text-gray-300 mb-4"></i>
                            <p class="text-gray-500 text-lg">কোন প্রশ্ন পাওয়া যায়নি</p>
                            <p class="text-gray-400 text-sm mt-2">নতুন প্রশ্ন যোগ করুন অথবা এক্সেল ফাইল ইমপোর্ট করুন</p>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>

    <!-- Create Question Modal -->
    <div id="createQuestionModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 class="text-2xl font-bold text-gray-900">নতুন প্রশ্ন যোগ করুন</h3>
                <button onclick="closeCreateModal()" class="text-gray-400 hover:text-gray-600 transition duration-200">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            
            <form id="createQuestionForm" class="overflow-y-auto max-h-[60vh]">
                @csrf
                <input type="hidden" name="chapter_id" value="{{ $chapter->id }}">
                <input type="hidden" name="lesson_id" value="{{ $lesson->id }}">
                
                <div class="p-6 space-y-6">
                    <!-- Question Input -->
                    <div>
                        <label for="question" class="block text-sm font-medium text-gray-700 mb-2">প্রশ্ন</label>
                        <textarea id="question" name="question" rows="3" required
                                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
                                  placeholder="প্রশ্নটি লিখুন..."></textarea>
                    </div>
                    
                    <!-- Options Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="option_a" class="block text-sm font-medium text-gray-700 mb-2">অপশন ক</label>
                            <input type="text" id="option_a" name="option_a" required
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                        <div>
                            <label for="option_b" class="block text-sm font-medium text-gray-700 mb-2">অপশন খ</label>
                            <input type="text" id="option_b" name="option_b" required
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                        <div>
                            <label for="option_c" class="block text-sm font-medium text-gray-700 mb-2">অপশন গ</label>
                            <input type="text" id="option_c" name="option_c" required
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                        <div>
                            <label for="option_d" class="block text-sm font-medium text-gray-700 mb-2">অপশন ঘ</label>
                            <input type="text" id="option_d" name="option_d" required
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                    </div>

                    <!-- Correct Answer -->
                    <div>
                        <label for="correct_answer" class="block text-sm font-medium text-gray-700 mb-2">সঠিক উত্তর</label>
                        <select id="correct_answer" name="correct_answer" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            <option value="">সঠিক উত্তর নির্বাচন করুন</option>
                            <option value="a">অপশন ক</option>
                            <option value="b">অপশন খ</option>
                            <option value="c">অপশন গ</option>
                            <option value="d">অপশন ঘ</option>
                        </select>
                    </div>

                    <!-- Explanation -->
                    <div>
                        <label for="explain" class="block text-sm font-medium text-gray-700 mb-2">ব্যাখ্যা (ঐচ্ছিক)</label>
                        <textarea id="explain" name="explain" rows="3"
                                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
                                  placeholder="প্রশ্নের ব্যাখ্যা লিখুন..."></textarea>
                    </div>
                </div>
                
                <div class="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
                    <button type="button" onclick="closeCreateModal()"
                            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200 font-medium">
                        বাতিল
                    </button>
                    <button type="submit"
                            class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 font-medium">
                        সংরক্ষণ করুন
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Edit Question Modal -->
    <div id="editQuestionModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 class="text-2xl font-bold text-gray-900">প্রশ্ন সম্পাদনা করুন</h3>
                <button onclick="closeEditModal()" class="text-gray-400 hover:text-gray-600 transition duration-200">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            
            <form id="editQuestionForm" class="overflow-y-auto max-h-[60vh]">
                @csrf
                @method('PUT')
                <input type="hidden" id="edit_question_id" name="id">
                
                <div class="p-6 space-y-6">
                    <!-- Question Input -->
                    <div>
                        <label for="edit_question" class="block text-sm font-medium text-gray-700 mb-2">প্রশ্ন</label>
                        <textarea id="edit_question" name="question" rows="3" required
                                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
                                  placeholder="প্রশ্নটি লিখুন..."></textarea>
                    </div>
                    
                    <!-- Options Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="edit_option_a" class="block text-sm font-medium text-gray-700 mb-2">অপশন ক</label>
                            <input type="text" id="edit_option_a" name="option_a" required
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                        <div>
                            <label for="edit_option_b" class="block text-sm font-medium text-gray-700 mb-2">অপশন খ</label>
                            <input type="text" id="edit_option_b" name="option_b" required
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                        <div>
                            <label for="edit_option_c" class="block text-sm font-medium text-gray-700 mb-2">অপশন গ</label>
                            <input type="text" id="edit_option_c" name="option_c" required
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                        <div>
                            <label for="edit_option_d" class="block text-sm font-medium text-gray-700 mb-2">অপশন ঘ</label>
                            <input type="text" id="edit_option_d" name="option_d" required
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                    </div>

                    <!-- Correct Answer -->
                    <div>
                        <label for="edit_correct_answer" class="block text-sm font-medium text-gray-700 mb-2">সঠিক উত্তর</label>
                        <select id="edit_correct_answer" name="correct_answer" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            <option value="">সঠিক উত্তর নির্বাচন করুন</option>
                            <option value="a">অপশন ক</option>
                            <option value="b">অপশন খ</option>
                            <option value="c">অপশন গ</option>
                            <option value="d">অপশন ঘ</option>
                        </select>
                    </div>

                    <!-- Explanation -->
                    <div>
                        <label for="edit_explain" class="block text-sm font-medium text-gray-700 mb-2">ব্যাখ্যা (ঐচ্ছিক)</label>
                        <textarea id="edit_explain" name="explain" rows="3"
                                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
                                  placeholder="প্রশ্নের ব্যাখ্যা লিখুন..."></textarea>
                    </div>
                </div>
                
                <div class="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
                    <button type="button" onclick="closeEditModal()"
                            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200 font-medium">
                        বাতিল
                    </button>
                    <button type="submit"
                            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 font-medium">
                        আপডেট করুন
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Import Excel Modal -->
    <div id="importExcelModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 class="text-2xl font-bold text-gray-900">এক্সেল ফাইল ইমপোর্ট করুন</h3>
                <button onclick="closeImportModal()" class="text-gray-400 hover:text-gray-600 transition duration-200">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            
            <form id="importExcelForm" enctype="multipart/form-data">
                @csrf
                <input type="hidden" name="chapter_id" value="{{ $chapter->id }}">
                <input type="hidden" name="lesson_id" value="{{ $lesson->id }}">
                
                <div class="p-6 space-y-6">
                    <!-- File Upload -->
                    <div>
                        <label for="excel_file" class="block text-sm font-medium text-gray-700 mb-2">এক্সেল ফাইল নির্বাচন করুন</label>
                        <input type="file" id="excel_file" name="excel_file" accept=".xlsx,.xls,.csv" required
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                    </div>

                    <!-- Excel Format Guide -->
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 class="font-semibold text-blue-800 mb-2">এক্সেল ফাইল ফরম্যাট:</h4>
                        <div class="text-sm text-blue-700 space-y-1">
                            <p>কলামগুলো এই ক্রমে থাকতে হবে:</p>
                            <p><strong>question, option_a, option_b, option_c, option_d, correct_answer, explain</strong></p>
                            <p class="mt-2 text-xs">সঠিক উত্তর অবশ্যই a, b, c, বা d হতে হবে</p>
                        </div>
                    </div>

                    <!-- Download Template -->
                    <div class="text-center">
                        <a href="#" onclick="downloadTemplate()"
                           class="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium">
                            <i class="fas fa-download"></i>
                            <span>টেমপ্লেট ডাউনলোড করুন</span>
                        </a>
                    </div>
                </div>
                
                <div class="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
                    <button type="button" onclick="closeImportModal()"
                            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200 font-medium">
                        বাতিল
                    </button>
                    <button type="submit"
                            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 font-medium">
                        ইমপোর্ট করুন
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div id="deleteQuestionModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div class="p-6 border-b border-gray-200">
                <h3 class="text-xl font-bold text-gray-900">প্রশ্ন ডিলিট করুন</h3>
            </div>
            <div class="p-6">
                <p class="text-gray-700 mb-2">আপনি কি "<span id="delete_question_text" class="font-semibold"></span>" প্রশ্নটি ডিলিট করতে চান?</p>
                <p class="text-red-600 text-sm">এই কাজটি undo করা যাবে না।</p>
            </div>
            <div class="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <button onclick="closeDeleteModal()"
                        class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200 font-medium">
                    বাতিল
                </button>
                <button onclick="confirmDelete()"
                        class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 font-medium">
                    ডিলিট করুন
                </button>
            </div>
        </div>



<script>
    let questionToDelete = null;

    // Modal Functions
    function openCreateModal() {
        document.getElementById('createQuestionModal').classList.remove('hidden');
    }

    function closeCreateModal() {
        document.getElementById('createQuestionModal').classList.add('hidden');
        document.getElementById('createQuestionForm').reset();
    }

    function openEditModal(questionData) {
        document.getElementById('edit_question_id').value = questionData.id;
        document.getElementById('edit_question').value = questionData.question;
        document.getElementById('edit_option_a').value = questionData.option_a;
        document.getElementById('edit_option_b').value = questionData.option_b;
        document.getElementById('edit_option_c').value = questionData.option_c;
        document.getElementById('edit_option_d').value = questionData.option_d;
        document.getElementById('edit_correct_answer').value = questionData.correct_answer;
        document.getElementById('edit_explain').value = questionData.explain || '';
        
        document.getElementById('editQuestionModal').classList.remove('hidden');
    }

    function closeEditModal() {
        document.getElementById('editQuestionModal').classList.add('hidden');
    }

    function openImportModal() {
        document.getElementById('importExcelModal').classList.remove('hidden');
    }

    function closeImportModal() {
        document.getElementById('importExcelModal').classList.add('hidden');
        document.getElementById('importExcelForm').reset();
    }

    function openDeleteModal(questionId, questionText) {
        questionToDelete = questionId;
        document.getElementById('delete_question_text').textContent = questionText;
        document.getElementById('deleteQuestionModal').classList.remove('hidden');
    }

    function closeDeleteModal() {
        document.getElementById('deleteQuestionModal').classList.add('hidden');
        questionToDelete = null;
    }

    // Form Submissions
    document.getElementById('createQuestionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        fetch('{{ route("admin.quiz.questions.store") }}', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                closeCreateModal();
                showNotification(data.message, 'success');
                setTimeout(() => location.reload(), 1000);
            }
        })
        .catch(error => {
            showNotification('প্রশ্ন যোগ করতে সমস্যা হয়েছে', 'error');
            console.error('Error:', error);
        });
    });

    document.getElementById('editQuestionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const questionId = document.getElementById('edit_question_id').value;
        
        fetch(`/admin/courses/quiz-questions/${questionId}`, {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': '{{ csrf_token() }}',
                'X-HTTP-Method-Override': 'PUT'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                closeEditModal();
                showNotification(data.message, 'success');
                setTimeout(() => location.reload(), 1000);
            }
        })
        .catch(error => {
            showNotification('প্রশ্ন আপডেট করতে সমস্যা হয়েছে', 'error');
            console.error('Error:', error);
        });
    });

    document.getElementById('importExcelForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        fetch('{{ route("admin.quiz.questions.import") }}', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                closeImportModal();
                showNotification(data.message, 'success');
                setTimeout(() => location.reload(), 1500);
            } else {
                showNotification(data.message, 'error');
            }
        })
        .catch(error => {
            showNotification('ইমপোর্ট করতে সমস্যা হয়েছে', 'error');
            console.error('Error:', error);
        });
    });

    function confirmDelete() {
        if (!questionToDelete) return;
        
        fetch(`/admin/courses/quiz-questions/${questionToDelete}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': '{{ csrf_token() }}',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                closeDeleteModal();
                showNotification(data.message, 'success');
                setTimeout(() => location.reload(), 1000);
            }
        })
        .catch(error => {
            showNotification('প্রশ্ন ডিলিট করতে সমস্যা হয়েছে', 'error');
            console.error('Error:', error);
        });
    }

    function downloadTemplate() {
        // Create a simple CSV template
        const template = `question,option_a,option_b,option_c,option_d,correct_answer,explain
"২ এর square কত?","৪","৫","৬","৭","a","২ এর square = ২ x ২ = ৪"
"বাংলাদেশের রাজধানী কোনটি?","ঢাকা","চট্টগ্রাম","খুলনা","রাজশাহী","a","বাংলাদেশের রাজধানী ঢাকা"
"পৃথিবীর সবচেয়ে বড় মহাদেশ কোনটি?","এশিয়া","ইউরোপ","আফ্রিকা","উত্তর আমেরিকা","a","এশিয়া পৃথিবীর সবচেয়ে বড় মহাদেশ"`;

        const blob = new Blob([template], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'quiz_questions_template.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white font-semibold z-50 transform transition-transform duration-300 ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Close modals on outside click
    document.addEventListener('click', function(e) {
        if (e.target.id === 'createQuestionModal') closeCreateModal();
        if (e.target.id === 'editQuestionModal') closeEditModal();
        if (e.target.id === 'importExcelModal') closeImportModal();
        if (e.target.id === 'deleteQuestionModal') closeDeleteModal();
    });
</script>


<style>
    .question-item {
        transition: all 0.3s ease;
    }
    
    .question-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
</style>

    </div>
@endsection