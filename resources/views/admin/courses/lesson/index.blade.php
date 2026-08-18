@extends('admin.dashboard.layout')

@section('content')
    <div class="min-h-screen bg-gray-50 p-6">
        <!-- Header Section -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div class="mb-4 sm:mb-0">
                <h1 class="text-3xl font-bold text-gray-900">{{ $course->title }}</h1>
                <p class="text-gray-600 mt-2">{{ $chapter->name }}</p>
            </div>
            <button type="button" 
                    onclick="openCreateModal()"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition duration-200">
                <i class="fas fa-plus"></i>
                <span>নতুন লেসন যোগ করুন</span>
            </button>
        </div>

        <!-- Lessons List -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-xl font-semibold text-gray-800">লেসন তালিকা</h2>
            </div>
            <div class="p-6">
                <div id="lessons-container" class="space-y-4">
                    @foreach($lessons as $lesson)
                        <div class="lesson-item bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition duration-200"
                             data-lesson-id="{{ $lesson->id }}">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-4">
                                    <div class="drag-handle cursor-move text-gray-400 hover:text-gray-600 transition duration-200">
                                        <i class="fas fa-bars"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-gray-900">{{ $lesson->title }}</h3>
                                        <div class="flex items-center space-x-2 mt-1">
                                            @switch($lesson->content_type)
                                                @case('video')
                                                    <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                                        <i class="fas fa-video"></i>
                                                        <span>ভিডিও</span>
                                                    </span>
                                                    @if ($lesson->video_type === 'youtube_stream')
                                                        <span class="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                                            <i class="fas fa-tower-broadcast"></i>
                                                            <span>
                                                                লাইভ স্ট্রিম
                                                                @if ($lesson->scheduled_at)
                                                                    • {{ $lesson->scheduled_at->format('d M, h:i A') }}
                                                                @endif
                                                            </span>
                                                        </span>
                                                    @endif
                                                    @break
                                                @case('quiz')
                                                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                                        <i class="fas fa-question-circle"></i>
                                                        <span>কুইজ</span>
                                                    </span>
                                                    @break
                                                @case('lecture_sheet')
                                                    <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                                        <i class="fas fa-file-pdf"></i>
                                                        <span>লেকচার শীট</span>
                                                    </span>
                                                    @break
                                                @case('slide')
                                                    <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                                        <i class="fas fa-images"></i>
                                                        <span>স্লাইড</span>
                                                    </span>
                                                    @break
                                            @endswitch
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-2">

                                    @if ($lesson->content_type == 'quiz')
                                        <a href="{{ route('admin.courses.lesson.quiz.question', [$course->id ,$chapter->id, $lesson->id]) }}"  class="edit-lesson bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition duration-200">+ প্রশ্ন</a>
                                    @endif

                                    <button onclick="openEditModal({{ json_encode($lesson) }})"
                                            class="edit-lesson bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-200">
                                            এডিট
                                        <i class="fas fa-edit w-4 h-4"></i>
                                    </button>
                                    <button onclick="openDeleteModal('{{ $lesson->id }}', '{{ $lesson->title }}')"
                                            class="delete-lesson bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200">
                                            ডিলিট
                                        <i class="fas fa-trash w-4 h-4"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>

    <!-- Create Lesson Modal -->
    <div id="createLessonModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 class="text-2xl font-bold text-gray-900">নতুন লেসন যোগ করুন</h3>
                <button onclick="closeCreateModal()" class="text-gray-400 hover:text-gray-600 transition duration-200">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            
            <form id="createLessonForm" enctype="multipart/form-data" class="overflow-y-auto max-h-[60vh]">
                @csrf
                <input type="hidden" name="course_id" value="{{ $course->id }}">
                <input type="hidden" name="chapter_id" value="{{ $chapter->id }}">
                
                <div class="p-6 space-y-6">
                    <!-- Title Input -->
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700 mb-2">লেসন টাইটেল</label>
                        <input type="text" id="title" name="title" required
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                    </div>
                    
                    <!-- Content Type Select -->
                    <div>
                        <label for="content_type" class="block text-sm font-medium text-gray-700 mb-2">কন্টেন্ট টাইপ</label>
                        <select id="content_type" name="content_type" required
                                onchange="toggleContentFields(this.value, 'create')"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            <option value="">নির্বাচন করুন</option>
                            <option value="video">ভিডিও</option>
                            <option value="quiz">কুইজ</option>
                            <option value="lecture_sheet">লেকচার শীট</option>
                            <option value="slide">স্লাইড</option>
                        </select>
                    </div>

                    <!-- Video Content Fields -->
                    <div id="video_fields" class="content-fields hidden space-y-4 bg-gray-50 p-4 rounded-lg">
                        <div>
                            <label for="video_type" class="block text-sm font-medium text-gray-700 mb-2">ভিডিও টাইপ</label>
                            <select id="video_type" name="video_type"
                                    onchange="toggleVideoTypeFields(this.value, 'create')"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                                <option value="">নির্বাচন করুন</option>
                                <option value="youtube">YouTube</option>
                                <option value="hls">HLS</option>
                                <option value="googledrive">Google Drive</option>
                                <option value="facebook">Facebook</option>
                                <option value="youtube_stream">YouTube Stream</option>
                            </select>
                        </div>
                        <div>
                            <label for="video_url" class="block text-sm font-medium text-gray-700 mb-2">ভিডিও URL</label>
                            <input type="url" id="video_url" name="video_url"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                        <div id="stream_schedule_field" class="hidden">
                            <label for="scheduled_at" class="block text-sm font-medium text-gray-700 mb-2">স্ট্রিম শুরুর তারিখ ও সময়</label>
                            <input type="datetime-local" id="scheduled_at" name="scheduled_at"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                    </div>

                    <!-- Quiz Content Fields -->
                    <div id="quiz_fields" class="content-fields hidden space-y-4 bg-gray-50 p-4 rounded-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="time" class="block text-sm font-medium text-gray-700 mb-2">সময় (মিনিট)</label>
                                <input type="number" id="time" name="time"
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            </div>
                            <div>
                                <label for="mark" class="block text-sm font-medium text-gray-700 mb-2">মার্ক</label>
                                <input type="number" id="mark" name="mark"
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="negative_mark" class="block text-sm font-medium text-gray-700 mb-2">নেগেটিভ মার্ক</label>
                                <input type="number" step="0.01" id="negative_mark" name="negative_mark"
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            </div>
                            <div>
                                <label for="passing_mark" class="block text-sm font-medium text-gray-700 mb-2">পাসিং মার্ক</label>
                                <input type="number" id="passing_mark" name="passing_mark"
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            </div>
                        </div>
                    </div>

                    <!-- Lecture Sheet Fields -->
                    <div id="lecture_sheet_fields" class="content-fields hidden space-y-4 bg-gray-50 p-4 rounded-lg">
                        <div>
                            <label for="lecture_sheet_file" class="block text-sm font-medium text-gray-700 mb-2">PDF ফাইল আপলোড করুন</label>
                            <input type="file" id="lecture_sheet_file" name="lecture_sheet_file" accept=".pdf"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                        </div>
                    </div>

                    <!-- Slide Fields -->
                    <div id="slide_fields" class="content-fields hidden space-y-4 bg-gray-50 p-4 rounded-lg">
                        <div>
                            <label for="slide_file" class="block text-sm font-medium text-gray-700 mb-2">স্লাইড ফাইল আপলোড করুন</label>
                            <input type="file" id="slide_file" name="slide_file" accept=".pdf,.ppt,.pptx"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                        </div>
                    </div>
                </div>
                
                <div class="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
                    <button type="button" onclick="closeCreateModal()"
                            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200 font-medium">
                        বাতিল
                    </button>
                    <button type="submit"
                            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 font-medium">
                        সংরক্ষণ করুন
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- Edit Lesson Modal -->
    <div id="editLessonModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 class="text-2xl font-bold text-gray-900">লেসন সম্পাদনা করুন</h3>
                <button onclick="closeEditModal()" class="text-gray-400 hover:text-gray-600 transition duration-200">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            
            <form id="editLessonForm" enctype="multipart/form-data" class="overflow-y-auto max-h-[60vh]">
                @csrf
                @method('PUT')
                <input type="hidden" id="edit_lesson_id" name="id">
                
                <div class="p-6 space-y-6">
                    <!-- Title Input -->
                    <div>
                        <label for="edit_title" class="block text-sm font-medium text-gray-700 mb-2">লেসন টাইটেল</label>
                        <input type="text" id="edit_title" name="title" required
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                    </div>
                    
                    <!-- Content Type Select -->
                    <div>
                        <label for="edit_content_type" class="block text-sm font-medium text-gray-700 mb-2">কন্টেন্ট টাইপ</label>
                        <select id="edit_content_type" name="content_type" required
                                onchange="toggleContentFields(this.value, 'edit')"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            <option value="">নির্বাচন করুন</option>
                            <option value="video">ভিডিও</option>
                            <option value="quiz">কুইজ</option>
                            <option value="lecture_sheet">লেকচার শীট</option>
                            <option value="slide">স্লাইড</option>
                        </select>
                    </div>

                    <!-- Video Content Fields -->
                    <div id="edit_video_fields" class="content-fields hidden space-y-4 bg-gray-50 p-4 rounded-lg">
                        <div>
                            <label for="edit_video_type" class="block text-sm font-medium text-gray-700 mb-2">ভিডিও টাইপ</label>
                            <select id="edit_video_type" name="video_type"
                                    onchange="toggleVideoTypeFields(this.value, 'edit')"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                                <option value="">নির্বাচন করুন</option>
                                <option value="youtube">YouTube</option>
                                <option value="hls">HLS</option>
                                <option value="googledrive">Google Drive</option>
                                <option value="facebook">Facebook</option>
                                <option value="youtube_stream">YouTube Stream</option>
                            </select>
                        </div>
                        <div>
                            <label for="edit_video_url" class="block text-sm font-medium text-gray-700 mb-2">ভিডিও URL</label>
                            <input type="url" id="edit_video_url" name="video_url"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                        <div id="edit_stream_schedule_field" class="hidden">
                            <label for="edit_scheduled_at" class="block text-sm font-medium text-gray-700 mb-2">স্ট্রিম শুরুর তারিখ ও সময়</label>
                            <input type="datetime-local" id="edit_scheduled_at" name="scheduled_at"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                        </div>
                    </div>

                    <!-- Quiz Content Fields -->
                    <div id="edit_quiz_fields" class="content-fields hidden space-y-4 bg-gray-50 p-4 rounded-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="edit_time" class="block text-sm font-medium text-gray-700 mb-2">সময় (মিনিট)</label>
                                <input type="number" id="edit_time" name="time"
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            </div>
                            <div>
                                <label for="edit_mark" class="block text-sm font-medium text-gray-700 mb-2">মার্ক</label>
                                <input type="number" id="edit_mark" name="mark"
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="edit_negative_mark" class="block text-sm font-medium text-gray-700 mb-2">নেগেটিভ মার্ক</label>
                                <input type="number" step="0.01" id="edit_negative_mark" name="negative_mark"
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            </div>
                            <div>
                                <label for="edit_passing_mark" class="block text-sm font-medium text-gray-700 mb-2">পাসিং মার্ক</label>
                                <input type="number" id="edit_passing_mark" name="passing_mark"
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
                            </div>
                        </div>
                    </div>

                    <!-- Lecture Sheet Fields -->
                    <div id="edit_lecture_sheet_fields" class="content-fields hidden space-y-4 bg-gray-50 p-4 rounded-lg">
                        <div>
                            <label for="edit_lecture_sheet_file" class="block text-sm font-medium text-gray-700 mb-2">PDF ফাইল আপলোড করুন</label>
                            <input type="file" id="edit_lecture_sheet_file" name="lecture_sheet_file" accept=".pdf"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                            <div id="current_lecture_sheet" class="mt-2 text-sm text-gray-600"></div>
                        </div>
                    </div>

                    <!-- Slide Fields -->
                    <div id="edit_slide_fields" class="content-fields hidden space-y-4 bg-gray-50 p-4 rounded-lg">
                        <div>
                            <label for="edit_slide_file" class="block text-sm font-medium text-gray-700 mb-2">স্লাইড ফাইল আপলোড করুন</label>
                            <input type="file" id="edit_slide_file" name="slide_file" accept=".pdf,.ppt,.pptx"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                            <div id="current_slide" class="mt-2 text-sm text-gray-600"></div>
                        </div>
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

    <!-- Delete Confirmation Modal -->
    <div id="deleteLessonModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div class="p-6 border-b border-gray-200">
                <h3 class="text-xl font-bold text-gray-900">লেসন ডিলিট করুন</h3>
            </div>
            <div class="p-6">
                <p class="text-gray-700 mb-2">আপনি কি "<span id="delete_lesson_title" class="font-semibold"></span>" লেসনটি ডিলিট করতে চান?</p>
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
    </div>



<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.14.0/Sortable.min.js"></script>
<script>
    let lessonToDelete = null;
    let sortable = null;

    // Modal Functions
    function openCreateModal() {
        document.getElementById('createLessonModal').classList.remove('hidden');
    }

    function closeCreateModal() {
        document.getElementById('createLessonModal').classList.add('hidden');
        document.getElementById('createLessonForm').reset();
        hideAllContentFields('create');
        toggleVideoTypeFields('', 'create');
    }

    function openEditModal(lessonData) {
        document.getElementById('edit_lesson_id').value = lessonData.id;
        document.getElementById('edit_title').value = lessonData.title;
        document.getElementById('edit_content_type').value = lessonData.content_type;
        
        // Trigger content type change to show relevant fields
        toggleContentFields(lessonData.content_type, 'edit');
        
        // Fill content-specific fields
        if (lessonData.content_type === 'video') {
            document.getElementById('edit_video_type').value = lessonData.video_type || '';
            document.getElementById('edit_video_url').value = lessonData.video_url || '';
            toggleVideoTypeFields(lessonData.video_type || '', 'edit');
            document.getElementById('edit_scheduled_at').value = lessonData.scheduled_at
                ? toDatetimeLocalValue(lessonData.scheduled_at)
                : '';
        } else if (lessonData.content_type === 'quiz') {
            document.getElementById('edit_time').value = lessonData.time || '';
            document.getElementById('edit_mark').value = lessonData.mark || '';
            document.getElementById('edit_negative_mark').value = lessonData.negative_mark || '';
            document.getElementById('edit_passing_mark').value = lessonData.passing_mark || '';
        } else if (lessonData.content_type === 'lecture_sheet' && lessonData.file_path) {
            document.getElementById('current_lecture_sheet').innerHTML = 
                `বর্তমান ফাইল: <span class="font-medium">${lessonData.file_name}</span>`;
        } else if (lessonData.content_type === 'slide' && lessonData.file_path) {
            document.getElementById('current_slide').innerHTML = 
                `বর্তমান ফাইল: <span class="font-medium">${lessonData.file_name}</span>`;
        }
        
        document.getElementById('editLessonModal').classList.remove('hidden');
    }

    function closeEditModal() {
        document.getElementById('editLessonModal').classList.add('hidden');
        hideAllContentFields('edit');
    }

    function openDeleteModal(lessonId, lessonTitle) {
        lessonToDelete = lessonId;
        document.getElementById('delete_lesson_title').textContent = lessonTitle;
        document.getElementById('deleteLessonModal').classList.remove('hidden');
    }

    function closeDeleteModal() {
        document.getElementById('deleteLessonModal').classList.add('hidden');
        lessonToDelete = null;
    }

    // Content Type Field Toggling
    function toggleContentFields(contentType, formType) {
        const prefix = formType === 'edit' ? 'edit_' : '';
        const fields = ['video', 'quiz', 'lecture_sheet', 'slide'];
        
        // Hide all fields
        fields.forEach(field => {
            const element = document.getElementById(`${prefix}${field}_fields`);
            if (element) element.classList.add('hidden');
        });
        
        // Show relevant field
        if (contentType) {
            const targetElement = document.getElementById(`${prefix}${contentType}_fields`);
            if (targetElement) targetElement.classList.remove('hidden');
        }
    }

    function hideAllContentFields(formType) {
        const prefix = formType === 'edit' ? 'edit_' : '';
        const fields = ['video', 'quiz', 'lecture_sheet', 'slide'];

        fields.forEach(field => {
            const element = document.getElementById(`${prefix}${field}_fields`);
            if (element) element.classList.add('hidden');
        });
    }

    // Video Type Field Toggling (schedule field only shows for YouTube Stream)
    function toggleVideoTypeFields(videoType, formType) {
        const prefix = formType === 'edit' ? 'edit_' : '';
        const scheduleField = document.getElementById(`${prefix}stream_schedule_field`);
        if (scheduleField) {
            scheduleField.classList.toggle('hidden', videoType !== 'youtube_stream');
        }
    }

    // Converts an ISO datetime string (as returned by the API) into the
    // "YYYY-MM-DDTHH:mm" format required by <input type="datetime-local">
    function toDatetimeLocalValue(isoString) {
        const d = new Date(isoString);
        if (isNaN(d.getTime())) return '';
        const pad = n => String(n).padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    // Form Submissions
    document.getElementById('createLessonForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);

        console.log(formData);
        
        fetch('{{ route("admin.courses.lessons.store") }}', {
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
                location.reload();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error creating lesson');
        });
    });

    document.getElementById('editLessonForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const lessonId = document.getElementById('edit_lesson_id').value;
        
        fetch(`/admin/courses/lessons/${lessonId}`, {
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
                location.reload();
            }
        })
        .catch(error => {
            alert('Error updating lesson');
            console.error('Error:', error);
        });
    });

    function confirmDelete() {
        if (!lessonToDelete) return;
        
        fetch(`/admin/courses/lessons/${lessonToDelete}`, {
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
                location.reload();
            }
        })
        .catch(error => {
            alert('Error deleting lesson');
            console.error('Error:', error);
        });
    }

    // Drag and Drop Initialization
    document.addEventListener('DOMContentLoaded', function() {
        sortable = new Sortable(document.getElementById('lessons-container'), {
            handle: '.drag-handle',
            animation: 150,
            ghostClass: 'opacity-50',
            onEnd: function(evt) {
                const lessonOrder = [];
                document.querySelectorAll('#lessons-container .lesson-item').forEach((item, index) => {
                    lessonOrder.push({
                        id: item.dataset.lessonId,
                        order: index + 1
                    });
                });

                fetch('{{ route("admin.courses.lessons.reorder") }}', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': '{{ csrf_token() }}'
                    },
                    body: JSON.stringify({
                        order: lessonOrder
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Order updated successfully');
                })
                .catch(error => {
                    console.error('Error updating order:', error);
                });
            }
        });
    });


</script>



<style>
    .lesson-item {
        transition: all 0.3s ease;
    }
    
    .lesson-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .sortable-ghost {
        opacity: 0.4;
    }
    
    .sortable-chosen {
        transform: rotate(2deg);
    }
</style>
@endsection