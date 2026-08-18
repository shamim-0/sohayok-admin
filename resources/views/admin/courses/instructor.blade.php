@extends('admin.dashboard.layout')

@section('content')
    <div class="container mx-auto px-4 py-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900 ">কোর্সের বিবরণ</h1>
                <p class="text-gray-600  mt-1">{{ $course->title }} - ইন্সট্রাক্টর যোগ করুন</p>
            </div>
            <div>
                <a href="{{ route('admin.courses.index') }}" 
                   class="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition duration-200">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    ফিরে যান
                </a>
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
            <!-- Add Instructor Form -->
            <div class="lg:col-span-1">
                <div class="bg-white  rounded-lg shadow-sm border border-gray-200">
                    <div class="px-6 py-4 border-b border-gray-200 ">
                        <h5 class="text-lg font-semibold text-gray-900 ">ইন্সট্রাক্টর যোগ করুন</h5>
                    </div>
                    <div class="p-6">
                        <form action="{{ route('admin.courses.instructor.add', $course) }}" method="POST">
                            @csrf
                            <div class="mb-4">
                                <label for="instructor_id" class="block text-sm font-medium text-gray-700  mb-2">
                                    ইন্সট্রাক্টর নির্বাচন করুন
                                </label>
                                <select class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  " 
                                        id="instructor_id" 
                                        name="instructor_id" 
                                        required>
                                    <option value="">ইন্সট্রাক্টর নির্বাচন করুন</option>
                                    @foreach($instructors as $instructor)
                                        <option value="{{ $instructor->id }}">{{ $instructor->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <button type="submit" 
                                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
                                যোগ করুন
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Instructor List -->
            <div class="lg:col-span-2">
                <div class="bg-white  rounded-lg shadow-sm border border-gray-200 ">
                    <div class="px-6 py-4 border-b border-gray-200 ">
                        <h5 class="text-lg font-semibold text-gray-900 ">কোর্সের ইন্সট্রাক্টরগণ</h5>
                        <p class="text-sm text-gray-600  mt-1">ইন্সট্রাক্টরদের ড্রাগ করে অর্ডার পরিবর্তন করুন</p>
                    </div>
                    <div class="p-6">
                        @if($courseinstructors->count() > 0)
                            <div id="instructor-list" class="space-y-3">
                                @foreach($courseinstructors as $instructor)
                                    <div class="instructor-item flex items-center justify-between p-4 bg-white  rounded-lg border border-gray-200  transition-all duration-200 hover:shadow-md"
                                         data-instructor-id="{{ $instructor->id }}">
                                        <div class="flex items-center space-x-4">
                                            <div class="drag-handle cursor-move text-gray-400 hover:text-gray-600  transition-colors duration-200 p-2 rounded hover:bg-gray-100 ">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
                                                </svg>
                                            </div>
                                            <div class="flex-1">
                                                <h6 class="font-medium text-gray-900 ">{{ $instructor->instructor->name }}</h6>
                                                <p class="text-sm text-gray-600 ">{{ $instructor->instructor->email }}</p>
                                            </div>
                                        </div>
                                        <button type="button" 
                                                onclick="showDeleteModal('{{ $instructor->id }}', '{{ $instructor->name }}')"
                                                class="delete-btn inline-flex items-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition duration-200">
                                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                            </svg>
                                            ডিলিট
                                        </button>
                                    </div>
                                @endforeach
                            </div>
                        @else
                            <div class="text-center py-8">
                                <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                                </svg>
                                <p class="mt-3 text-gray-500 ">কোন ইন্সট্রাক্টর যোগ করা হয়নি</p>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white  rounded-lg shadow-xl max-w-md w-full">
            <div class="p-6">
                <div class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
                    <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                </div>
                <div class="mt-4 text-center">
                    <h3 class="text-lg font-medium text-gray-900 ">ইন্সট্রাক্টর ডিলিট</h3>
                    <p class="mt-2 text-sm text-gray-500 ">
                        আপনি কি নিশ্চিত যে আপনি "<span id="instructorName" class="font-semibold"></span>" কে এই কোর্স থেকে সরাতে চান?
                    </p>
                </div>
                <div class="mt-6 flex justify-center space-x-3">
                    <button type="button" 
                            onclick="hideDeleteModal()"
                            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200">
                        বাতিল করুন
                    </button>
                    <form id="deleteForm" method="POST" class="inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit" 
                                class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition duration-200">
                            হ্যাঁ, ডিলিট
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>



<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"></script>
<script>
// Delete Modal Functions
function showDeleteModal(instructorId, instructorName) {
    document.getElementById('instructorName').textContent = instructorName;
    
    // Correct way to set the form action with both course and instructor parameters
    const deleteUrl = `{{ route('admin.courses.instructor.remove', ['course' => $course, 'instructor' => 'PLACEHOLDER']) }}`.replace('PLACEHOLDER', instructorId);
    document.getElementById('deleteForm').action = deleteUrl;
    
    document.getElementById('deleteModal').classList.remove('hidden');
}

function hideDeleteModal() {
    document.getElementById('deleteModal').classList.add('hidden');
}

// Close modal when clicking outside
document.getElementById('deleteModal').addEventListener('click', function(e) {
    if (e.target === this) {
        hideDeleteModal();
    }
});

// Drag and Drop Functionality
document.addEventListener('DOMContentLoaded', function() {
    const instructorList = document.getElementById('instructor-list');
    
    if (instructorList) {
        const sortable = new Sortable(instructorList, {
            handle: '.drag-handle',
            animation: 150,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            onStart: function(evt) {
                evt.item.classList.add('dragging');
            },
            onEnd: function(evt) {
                evt.item.classList.remove('dragging');
                updateInstructorOrder();
            }
        });

        function updateInstructorOrder() {
            const instructorItems = instructorList.querySelectorAll('.instructor-item');
            const instructorIds = Array.from(instructorItems).map(item => 
                item.getAttribute('data-instructor-id')
            );

            fetch('{{ route("admin.courses.instructor.update-order", $course) }}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                body: JSON.stringify({
                    instructors: instructorIds
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    // Show visual feedback
                    instructorItems.forEach(item => {
                        item.classList.add('bg-green-50');
                        setTimeout(() => {
                            item.classList.remove('bg-green-50');
                        }, 1000);
                    });
                    
                    console.log('Order updated successfully');
                } else {
                    throw new Error('Server returned error');
                }
            })
            .catch(error => {
                console.error('Error updating order:', error);
                alert('অর্ডার আপডেট করতে সমস্যা হয়েছে। পৃষ্ঠাটি রিফ্রেশ করে আবার চেষ্টা করুন।');
            });
        }
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
}

.dark .sortable-ghost {
    background-color: #374151;
}

.sortable-chosen {
    transform: rotate(2deg);
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