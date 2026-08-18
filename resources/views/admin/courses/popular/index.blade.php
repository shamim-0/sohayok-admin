@extends('admin.dashboard.layout')

@section('content')
    <div class="px-4 py-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900 ">জনপ্রিয় কোর্স</h1>
                <p class="text-gray-600  mt-1">জনপ্রিয় কোর্স পরিচালনা করুন</p>
            </div>
        </div>

        <!-- Success/Error Messages -->
        @if(session('success'))
            <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-green-800">{{ session('success') }}</span>
                </div>
                <button type="button" class="text-green-600 hover:text-green-800" onclick="this.parentElement.remove()">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        @endif

        @if(session('error'))
            <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-red-800">{{ session('error') }}</span>
                </div>
                <button type="button" class="text-red-600 hover:text-red-800" onclick="this.parentElement.remove()">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        @endif

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Add Popular Course Form -->
            <div class="lg:col-span-1">
                <div class="bg-white  rounded-lg shadow-sm border border-gray-200 ">
                    <div class="px-6 py-4 border-b border-gray-200 ">
                        <h5 class="text-lg font-semibold text-gray-900 ">জনপ্রিয় কোর্স যোগ করুন</h5>
                    </div>
                    <div class="p-6">
                        <form action="{{ route('admin.courses.popular.add') }}" method="POST">
                            @csrf
                            <div class="mb-4">
                                <label for="course_id" class="block text-sm font-medium text-gray-700  mb-2">
                                    কোর্স নির্বাচন করুন
                                </label>
                                <select class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  " 
                                        id="course_id" 
                                        name="course_id" 
                                        required>
                                    <option value="">কোর্স নির্বাচন করুন</option>
                                    @foreach($courses as $course)
                                        @if(!$course->is_popular)
                                            <option value="{{ $course->id }}">{{ $course->title }}</option>
                                        @endif
                                    @endforeach
                                </select>
                                @php
                                    $availableCourses = $courses->where('is_popular', false)->count();
                                @endphp
                                @if($availableCourses === 0)
                                    <p class="text-sm text-red-500 mt-2">❌ সমস্ত কোর্স ইতিমধ্যেই জনপ্রিয় তালিকায় রয়েছে</p>
                                @else
                                    <p class="text-sm text-green-500 mt-2">✅ মোট {{ $availableCourses }} টি কোর্স পাওয়া যাচ্ছে</p>
                                @endif
                            </div>
                            <button type="submit" 
                                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    {{ $availableCourses === 0 ? 'disabled' : '' }}>
                                <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                যোগ করুন
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Statistics -->
                <div class="mt-6 bg-white  rounded-lg shadow-sm border border-gray-200  p-6">
                    <h5 class="text-lg font-semibold text-gray-900  mb-4">পরিসংখ্যান</h5>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600 ">মোট কোর্স</span>
                            <span class="font-semibold text-gray-900 ">{{ $courses->count() }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600 ">জনপ্রিয় কোর্স</span>
                            <span class="font-semibold text-green-600">{{ $popularCourses->count() }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600 ">অন্যান্য কোর্স</span>
                            <span class="font-semibold text-blue-600">{{ $courses->count() - $popularCourses->count() }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Popular Courses List -->
            <div class="lg:col-span-2">
                <div class="bg-white  rounded-lg shadow-sm border border-gray-200 ">
                    <div class="px-6 py-4 border-b border-gray-200  flex justify-between items-center">
                        <div>
                            <h5 class="text-lg font-semibold text-gray-900 ">জনপ্রিয় কোর্স তালিকা</h5>
                            <p class="text-sm text-gray-600  mt-1">কোর্সগুলো ড্রাগ করে অর্ডার পরিবর্তন করুন</p>
                        </div>
                        <div class="bg-blue-100  text-blue-800  px-3 py-1 rounded-full text-sm font-medium">
                            মোট: {{ $popularCourses->count() }}
                        </div>
                    </div>
                    <div class="p-6">
                        @if($popularCourses->count() > 0)
                            <div id="popular-courses-list" class="space-y-3">
                                @foreach($popularCourses as $popularCourse)
                                    <div class="popular-course-item flex items-center justify-between p-4 bg-white  rounded-lg border border-gray-200  transition-all duration-200 hover:shadow-md group"
                                         data-popular-course-id="{{ $popularCourse->id }}">
                                        <div class="flex items-center space-x-4 flex-1">
                                            <div class="drag-handle cursor-move text-gray-400 hover:text-gray-600  transition-colors duration-200 p-2 rounded hover:bg-gray-100 ">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
                                                </svg>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <h6 class="font-medium text-gray-900  truncate">{{ $popularCourse->course->title }}</h6>
                                                <div class="flex items-center space-x-4 mt-1">
                                                    <span class="text-xs bg-blue-100 text-blue-800   px-2 py-1 rounded">
                                                        অর্ডার: {{ $popularCourse->order + 1 }}
                                                    </span>
                                                    <span class="text-xs text-gray-500">
                                                        যোগ: {{ $popularCourse->created_at->format('d M, Y') }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" 
                                                onclick="showDeleteModal({{ $popularCourse->id }}, '{{ addslashes($popularCourse->course->title) }}')"
                                                class="delete-btn inline-flex items-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition duration-200">
                                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                            </svg>
                                            সরান
                                        </button>
                                    </div>
                                @endforeach
                            </div>

                            <!-- Instructions -->
                            <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-yellow-800 text-sm">ইনস্ট্রাকশন: কোর্সগুলোর অর্ডার পরিবর্তন করতে ড্রাগ অ্যান্ড ড্রপ ব্যবহার করুন</span>
                                </div>
                            </div>
                        @else
                            <div class="text-center py-12">
                                <div class="w-24 h-24 mx-auto bg-gray-100  rounded-full flex items-center justify-center mb-4">
                                    <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                                    </svg>
                                </div>
                                <h3 class="text-lg font-medium text-gray-900  mb-2">কোন জনপ্রিয় কোর্স নেই</h3>
                                <p class="text-gray-500  mb-6">প্রথমে কিছু কোর্স জনপ্রিয় তালিকায় যোগ করুন</p>
                                <div class="bg-blue-50 /20 border border-blue-200  rounded-lg p-4 max-w-md mx-auto">
                                    <p class="text-sm text-blue-800 ">
                                        <strong>পরবর্তী ধাপ:</strong> বাম পাশের ফর্ম থেকে কোর্স সিলেক্ট করে "যোগ করুন" বাটনে ক্লিক করুন
                                    </p>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white  rounded-lg shadow-xl max-w-md w-full transform transition-all duration-300 scale-95">
            <div class="p-6">
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
                    <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                </div>
                <div class="text-center">
                    <h3 class="text-lg font-semibold text-gray-900  mb-2">জনপ্রিয় কোর্স সরান</h3>
                    <p class="text-gray-600  mb-4">
                        আপনি কি নিশ্চিত যে আপনি "<span id="courseName" class="font-semibold text-red-600"></span>" কে জনপ্রিয় কোর্স তালিকা থেকে সরাতে চান?
                    </p>
                    <p class="text-sm text-gray-500  mb-6">
                        এই কাজটি undo করা যাবে না।
                    </p>
                </div>
                <div class="flex justify-center space-x-3">
                    <button type="button" 
                            onclick="hideDeleteModal()"
                            class="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200 border border-gray-300">
                        বাতিল করুন
                    </button>
                    <form id="deleteForm" method="POST" class="flex-1">
                        @csrf
                        @method('DELETE')
                        <button type="submit" 
                                class="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition duration-200">
                            হ্যাঁ, সরান
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>



<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"></script>
<script>
// Delete Modal Functions
let currentPopularCourseId = null;

function showDeleteModal(popularCourseId, courseName) {
    currentPopularCourseId = popularCourseId;
    
    document.getElementById('courseName').textContent = courseName;
    
    // Correct way to set the form action
    const deleteUrl = `{{ url('admin/panel/courses/popular/remove') }}/${popularCourseId}`;
    document.getElementById('deleteForm').action = deleteUrl;
    
    const modal = document.getElementById('deleteModal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.querySelector('.transform').classList.remove('scale-95');
        modal.querySelector('.transform').classList.add('scale-100');
    }, 50);
}

function hideDeleteModal() {
    const modal = document.getElementById('deleteModal');
    modal.querySelector('.transform').classList.remove('scale-100');
    modal.querySelector('.transform').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    currentPopularCourseId = null;
}

// Alternative: Simple form without modal (if modal still doesn't work)
function confirmDelete(popularCourseId, courseName) {
    if (confirm(`আপনি কি নিশ্চিত যে আপনি "${courseName}" কে জনপ্রিয় কোর্স তালিকা থেকে সরাতে চান?`)) {
        // Create a form and submit it
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = `{{ url('admin/panel/courses/popular/remove') }}/${popularCourseId}`;
        
        const csrfToken = document.createElement('input');
        csrfToken.type = 'hidden';
        csrfToken.name = '_token';
        csrfToken.value = '{{ csrf_token() }}';
        
        const methodField = document.createElement('input');
        methodField.type = 'hidden';
        methodField.name = '_method';
        methodField.value = 'DELETE';
        
        form.appendChild(csrfToken);
        form.appendChild(methodField);
        document.body.appendChild(form);
        form.submit();
    }
}

// Drag and Drop Functionality
document.addEventListener('DOMContentLoaded', function() {
    const popularCoursesList = document.getElementById('popular-courses-list');
    
    if (popularCoursesList) {
        const sortable = new Sortable(popularCoursesList, {
            handle: '.drag-handle',
            animation: 150,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            onStart: function(evt) {
                evt.item.classList.add('dragging', 'shadow-lg', 'z-50');
            },
            onEnd: function(evt) {
                evt.item.classList.remove('dragging', 'shadow-lg', 'z-50');
                updateCourseOrder();
            }
        });

        function updateCourseOrder() {
            const courseItems = popularCoursesList.querySelectorAll('.popular-course-item');
            const popularCourseIds = Array.from(courseItems).map(item => 
                item.getAttribute('data-popular-course-id')
            );

            // Show loading state
            courseItems.forEach(item => {
                item.classList.add('opacity-60', 'cursor-wait');
            });

            fetch('{{ route("admin.courses.popular.update-order") }}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    courses: popularCourseIds
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Remove loading state
                courseItems.forEach(item => {
                    item.classList.remove('opacity-60', 'cursor-wait');
                });

                if (data.success) {
                    // Show success feedback and update order numbers
                    courseItems.forEach((item, index) => {
                        const orderElement = item.querySelector('.bg-blue-100');
                        if (orderElement) {
                            orderElement.textContent = `অর্ডার: ${index + 1}`;
                        }
                        item.classList.add('bg-green-50',  'border-green-200');
                        setTimeout(() => {
                            item.classList.remove('bg-green-50', 'border-green-200');
                        }, 2000);
                    });
                    
                    // Show temporary success message
                    showTempMessage('অর্ডার সফলভাবে আপডেট করা হয়েছে!', 'success');
                } else {
                    throw new Error(data.message || 'Server returned error');
                }
            })
            .catch(error => {
                console.error('Error updating order:', error);
                
                // Remove loading state
                courseItems.forEach(item => {
                    item.classList.remove('opacity-60', 'cursor-wait');
                });
                
                showTempMessage('অর্ডার আপডেট করতে সমস্যা হয়েছে!', 'error');
            });
        }

        function showTempMessage(message, type) {
            const existingMessage = document.querySelector('.temp-message');
            if (existingMessage) {
                existingMessage.remove();
            }

            const bgColor = type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200';
            const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';

            const messageDiv = document.createElement('div');
            messageDiv.className = `temp-message fixed top-4 right-4 ${bgColor} ${textColor} border rounded-lg px-4 py-3 shadow-lg z-50 transform transition-all duration-300 translate-x-full`;
            messageDiv.innerHTML = `
                <div class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        ${type === 'success' ? 
                            '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>' :
                            '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>'
                        }
                    </svg>
                    ${message}
                </div>
            `;

            document.body.appendChild(messageDiv);

            // Animate in
            setTimeout(() => {
                messageDiv.classList.remove('translate-x-full');
            }, 100);

            // Remove after 3 seconds
            setTimeout(() => {
                messageDiv.classList.add('translate-x-full');
                setTimeout(() => {
                    messageDiv.remove();
                }, 300);
            }, 3000);
        }
    }
});

// Close modal when clicking outside
document.getElementById('deleteModal').addEventListener('click', function(e) {
    if (e.target === this) {
        hideDeleteModal();
    }
});

// Keyboard support for modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideDeleteModal();
    }
});
</script>

<style>
.sortable-ghost {
    opacity: 0.4;
    background-color: #f3f4f6;
    border: 2px dashed #d1d5db;
}



.sortable-chosen {
    transform: rotate(2deg);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.sortable-drag {
    opacity: 0.8;
}

.dragging {
    z-index: 9999;
}

.drag-handle:active {
    cursor: grabbing;
}
</style>
@endsection