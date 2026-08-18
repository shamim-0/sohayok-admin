@extends('admin.dashboard.layout')

@section('content')
    <div class="flex-1 p-6 overflow-y-auto">
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
                <h1 class="text-2xl font-bold text-gray-800">কোর্স কনটেন্ট ব্যবস্থাপনা</h1>
                <p class="text-gray-600">আপনার প্রতিষ্ঠানের সকল কোর্স পরিচালনা করুন</p>
            </div>
            <div class="flex gap-3">
                <a href="{{ route('admin.courses.content.chapter', $course) }}"
                    class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400">
                    <i class="fas fa-plus-circle mr-2"></i> নতুন চ্যাপটার যোগ করুন
                </a>
            </div>
        </div>

        <!-- Success/Error Messages -->
        <div id="reorder-message" class="hidden mb-4 p-4 rounded-lg"></div>

        <!-- Chapters List -->
        <div class="grid" id="chapters-container">
            @foreach ($chapters as $item)
                <div class="chapter-item bg-white  shadow-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-move"
                    data-id="{{ $item->id }}" draggable="true">
                    <div class="p-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-4">
                                <!-- Drag Icon -->
                                <div class="drag-handle text-gray-400 hover:text-gray-600 cursor-move">
                                    <i class="fas fa-grip-vertical text-lg"></i>
                                </div>

                                <!-- Chapter Number -->
                                <div class="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg font-bold text-sm order-number">
                                    {{ $item->order }}
                                </div>

                                <!-- Chapter Name -->
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-800">{{ $item->name }}</h3>
                                    <p class="text-gray-500 text-sm">{{ count($item->lessons) ?? 0 }}টি লেসন</p>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex items-center space-x-2">
                                <!-- Edit Button -->
                                <a href="{{ route('admin.courses.content.chapter.edit', [$course->id, $item->id]) }}"
                                    class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center shadow-md hover:shadow-lg transition-all duration-300 text-sm">
                                    <i class="fas fa-edit mr-2"></i> এডিট
                                </a>

                                <!-- Delete Button -->
                                <button type="button" onclick="showDeleteModal({{ $item->id }}, '{{ $item->name }}')"
                                    class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium flex items-center shadow-md hover:shadow-lg transition-all duration-300 text-sm">
                                    <i class="fas fa-trash mr-2"></i> ডিলিট
                                </button>

                                <!-- Plus Icon for Adding Content -->
                                <a href="{{ route('admin.courses.lesson.index', [$course->id, $item->id]) }}"
                                    class="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300">
                                    <i class="fas fa-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach

            <!-- Empty State -->
            @if($chapters->count() == 0)
                <div class="bg-white rounded-xl shadow-md border border-gray-200 p-12 text-center">
                    <div class="max-w-md mx-auto">
                        <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-book-open text-3xl text-gray-400"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-700 mb-2">কোন চ্যাপটার নেই</h3>
                        <p class="text-gray-500 mb-6">আপনার কোর্সে এখনও কোন চ্যাপটার যোগ করা হয়নি। প্রথম চ্যাপটার যোগ করুন।</p>
                        <a href="{{ route('admin.courses.content.chapter', $course) }}"
                            class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300">
                            <i class="fas fa-plus-circle mr-2"></i> প্রথম চ্যাপটার যোগ করুন
                        </a>
                    </div>
                </div>
            @endif
        </div>

    </div>






    <!-- Delete Confirmation Modal -->
    <div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4">
            <div class="text-center">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-exclamation-triangle text-2xl text-red-600"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">চ্যাপটার ডিলিট করুন</h3>
                <p class="text-gray-600 mb-4" id="deleteModalText">আপনি কি নিশ্চিত যে আপনি এই চ্যাপটার ডিলিট করতে চান?</p>

                <div class="flex space-x-3 justify-center">
                    <button type="button" onclick="hideDeleteModal()"
                        class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                        বাতিল করুন
                    </button>
                    <form id="deleteForm" method="POST" class="inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit"
                            class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                            ডিলিট করুন
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>




    <script>
        // Drag and Drop functionality
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.getElementById('chapters-container');
            const chapters = document.querySelectorAll('.chapter-item');
            let draggedItem = null;

            // Add event listeners to all chapter items
            chapters.forEach(chapter => {
                chapter.addEventListener('dragstart', function(e) {
                    draggedItem = this;
                    setTimeout(() => {
                        this.style.opacity = '0.5';
                    }, 0);
                    e.dataTransfer.effectAllowed = 'move';
                });

                chapter.addEventListener('dragend', function() {
                    this.style.opacity = '1';
                    chapters.forEach(ch => {
                        ch.style.transform = 'none';
                        ch.classList.remove('drag-over');
                    });
                });

                chapter.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                });

                chapter.addEventListener('dragenter', function(e) {
                    e.preventDefault();
                    this.classList.add('drag-over');
                    this.style.transform = 'translateY(-5px)';
                });

                chapter.addEventListener('dragleave', function() {
                    this.classList.remove('drag-over');
                    this.style.transform = 'none';
                });

                chapter.addEventListener('drop', function(e) {
                    e.preventDefault();
                    this.classList.remove('drag-over');
                    this.style.transform = 'none';

                    if (draggedItem !== this) {
                        const allChapters = Array.from(container.querySelectorAll('.chapter-item'));
                        const draggedIndex = allChapters.indexOf(draggedItem);
                        const targetIndex = allChapters.indexOf(this);

                        if (draggedIndex < targetIndex) {
                            this.after(draggedItem);
                        } else {
                            this.before(draggedItem);
                        }

                        // Update order numbers and save to database
                        updateChapterOrder();
                    }
                });
            });

            // Update chapter order numbers and save to server
            function updateChapterOrder() {
                const chapters = container.querySelectorAll('.chapter-item');
                const chapterData = [];

                chapters.forEach((chapter, index) => {
                    const orderNumber = chapter.querySelector('.order-number');
                    orderNumber.textContent = index + 1;

                    chapterData.push({
                        id: chapter.getAttribute('data-id'),
                        order: index + 1
                    });
                });

                // Send AJAX request to update order in database
                saveChapterOrder(chapterData);
            }

            // Save new order to server
            function saveChapterOrder(chapterData) {
                const messageDiv = document.getElementById('reorder-message');

                fetch('{{ route("admin.courses.content.chapters.reorder", $course) }}', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': '{{ csrf_token() }}'
                    },
                    body: JSON.stringify({
                        chapters: chapterData
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        showMessage('অর্ডার সফলভাবে আপডেট করা হয়েছে!', 'success');
                    } else {
                        showMessage('অর্ডার আপডেট করতে সমস্যা হয়েছে।', 'error');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    showMessage('নেটওয়ার্ক সমস্যা হয়েছে। আবার চেষ্টা করুন।', 'error');
                });
            }

            // Show success/error message
            function showMessage(message, type) {
                const messageDiv = document.getElementById('reorder-message');
                messageDiv.textContent = message;
                messageDiv.className = `mb-4 p-4 rounded-lg ${
                    type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`;
                messageDiv.classList.remove('hidden');

                setTimeout(() => {
                    messageDiv.classList.add('hidden');
                }, 3000);
            }
        });

        // Delete Modal Functions
        function showDeleteModal(chapterId, chapterName) {
            const modal = document.getElementById('deleteModal');
            const modalText = document.getElementById('deleteModalText');
            const deleteForm = document.getElementById('deleteForm');

            modalText.textContent = `আপনি কি নিশ্চিত যে আপনি "${chapterName}" চ্যাপটার ডিলিট করতে চান?`;
            deleteForm.action = `/admin/courses/content/chapter/destroy/${chapterId}`;

            modal.classList.remove('hidden');
        }

        function hideDeleteModal() {
            const modal = document.getElementById('deleteModal');
            modal.classList.add('hidden');
        }

        // Close modal when clicking outside
        document.getElementById('deleteModal').addEventListener('click', function (e) {
            if (e.target === this) {
                hideDeleteModal();
            }
        });
    </script>

    <style>
        .chapter-item {
            transition: all 0.3s ease;
            user-select: none;
        }

        .chapter-item.drag-over {
            border: 2px dashed #3b82f6;
            background-color: #f0f9ff;
        }

        .drag-handle {
            transition: color 0.2s ease;
        }

        .drag-handle:hover {
            color: #4b5563;
        }

        .chapter-item:active {
            cursor: grabbing;
        }
    </style>
@endsection
