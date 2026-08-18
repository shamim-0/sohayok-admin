@extends('admin.dashboard.layout')

@section('content')
    <div class=" mx-auto px-4 py-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900 ">Banners</h1>
                <p class="text-gray-600  mt-1">Manage featured courses for banners</p>
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
            <!-- Add Banner Form -->
            <div class="lg:col-span-1">
                <div class="bg-white  rounded-lg shadow-sm border border-gray-200 ">
                    <div class="px-6 py-4 border-b border-gray-200 ">
                        <h5 class="text-lg font-semibold text-gray-900 ">Add to Banner</h5>
                    </div>
                    <div class="p-6">
                        <form action="{{ route('admin.banners.add') }}" method="POST">
                            @csrf
                            <div class="mb-4">
                                <label for="course_id" class="block text-sm font-medium text-gray-700  mb-2">
                                    Select Course
                                </label>
                                <select class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " 
                                        id="course_id" 
                                        name="course_id" 
                                        required>
                                    <option value="">Select a course</option>
                                    @foreach($courses as $course)
                                        @if(!$course->is_in_banner)
                                            <option value="{{ $course->id }}">{{ $course->title }}</option>
                                        @endif
                                    @endforeach
                                </select>
                                @php
                                    $availableCourses = $courses->where('is_in_banner', false)->count();
                                @endphp
                                @if($availableCourses === 0)
                                    <p class="text-sm text-red-500 mt-2">❌ All courses are already in banners</p>
                                @else
                                    <p class="text-sm text-green-500 mt-2">✅ {{ $availableCourses }} courses available</p>
                                @endif
                            </div>
                            <button type="submit" 
                                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    {{ $availableCourses === 0 ? 'disabled' : '' }}>
                                <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                Add to Banner
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Statistics -->
                <div class="mt-6 bg-white  rounded-lg shadow-sm border border-gray-200  p-6">
                    <h5 class="text-lg font-semibold text-gray-900  mb-4">Statistics</h5>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600 ">Total Courses</span>
                            <span class="font-semibold text-gray-900 ">{{ $courses->count() }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600 ">Banner Courses</span>
                            <span class="font-semibold text-green-600">{{ $banners->count() }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600 ">Available Courses</span>
                            <span class="font-semibold text-blue-600">{{ $courses->count() - $banners->count() }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Banners List -->
            <div class="lg:col-span-2">
                <div class="bg-white  rounded-lg shadow-sm border border-gray-200 ">
                    <div class="px-6 py-4 border-b border-gray-200  flex justify-between items-center">
                        <div>
                            <h5 class="text-lg font-semibold text-gray-900 ">Banner Courses</h5>
                            <p class="text-sm text-gray-600  mt-1">Drag to reorder banner courses</p>
                        </div>
                        <div class="bg-blue-100  text-blue-800  px-3 py-1 rounded-full text-sm font-medium">
                            Total: {{ $banners->count() }}
                        </div>
                    </div>
                    <div class="p-6">
                        @if($banners->count() > 0)
                            <div id="banners-list" class="space-y-3">
                                @foreach($banners as $banner)
                                    <div class="banner-item flex items-center justify-between p-4 bg-white  rounded-lg border border-gray-200  transition-all duration-200 hover:shadow-md group"
                                         data-banner-id="{{ $banner->id }}">
                                        <div class="flex items-center space-x-4 flex-1">
                                            <div class="drag-handle cursor-move text-gray-400 hover:text-gray-600  transition-colors duration-200 p-2 rounded hover:bg-gray-100 ">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
                                                </svg>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <h6 class="font-medium text-gray-900 ">{{ $banner->course->title }}</h6>
                                                <div class="flex items-center space-x-4 mt-1">
                                                    <span class="text-xs bg-blue-100 text-blue-800   px-2 py-1 rounded">
                                                        Order: {{ $banner->order + 1 }}
                                                    </span>
                                                    <span class="text-xs text-gray-500">
                                                        Added: {{ $banner->created_at->format('d M, Y') }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <!-- Toggle Status -->
                                            <form action="{{ route('admin.banners.toggle-status', $banner) }}" method="POST" class="inline">
                                                @csrf
                                                <button type="submit" 
                                                        class="inline-flex items-center p-2 text-gray-600 hover:text-gray-800   transition duration-150"
                                                        title="{{ $banner->is_active ? 'Deactivate' : 'Activate' }}">
                                                    @if($banner->is_active)
                                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    @else
                                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                                        </svg>
                                                    @endif
                                                </button>
                                            </form>

                                            <!-- Status Badge -->
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                                {{ $banner->is_active ? 'bg-green-100 text-green-800 ' : 'bg-red-100 text-red-800  ' }}">
                                                {{ $banner->is_active ? 'Active' : 'Inactive' }}
                                            </span>

                                            <!-- Delete Button with Simple Confirmation -->
                                            <form action="{{ route('admin.banners.remove', $banner) }}" method="POST" class="inline">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" 
                                                        onclick="return confirm('Are you sure you want to remove \"{{ $banner->course->title }}\" from banners?')"
                                                        class="delete-btn inline-flex items-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition duration-200">
                                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                    </svg>
                                                    Remove
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                @endforeach
                            </div>

                            <!-- Instructions -->
                            <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-yellow-800 text-sm">Instruction: Drag and drop to reorder banner courses</span>
                                </div>
                            </div>
                        @else
                            <div class="text-center py-12">
                                <div class="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                    <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                    </svg>
                                </div>
                                <h3 class="text-lg font-medium text-gray-900  mb-2">No banner courses</h3>
                                <p class="text-gray-500  mb-6">Add courses to display in banners</p>
                                <div class="bg-blue-50 /20 border border-blue-200  rounded-lg p-4 max-w-md mx-auto">
                                    <p class="text-sm text-blue-800 ">
                                        <strong>Next Step:</strong> Select a course from the left form and click "Add to Banner"
                                    </p>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>


<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"></script>
<script>
// Drag and Drop Functionality
document.addEventListener('DOMContentLoaded', function() {
    const bannersList = document.getElementById('banners-list');
    
    if (bannersList) {
        const sortable = new Sortable(bannersList, {
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
                updateBannerOrder();
            }
        });

        function updateBannerOrder() {
            const bannerItems = bannersList.querySelectorAll('.banner-item');
            const bannerIds = Array.from(bannerItems).map(item => 
                item.getAttribute('data-banner-id')
            );

            // Show loading state
            bannerItems.forEach(item => {
                item.classList.add('opacity-60', 'cursor-wait');
            });

            fetch('{{ route("admin.banners.update-order") }}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    banners: bannerIds
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
                bannerItems.forEach(item => {
                    item.classList.remove('opacity-60', 'cursor-wait');
                });

                if (data.success) {
                    // Show success feedback and update order numbers
                    bannerItems.forEach((item, index) => {
                        const orderElement = item.querySelector('.bg-blue-100');
                        if (orderElement) {
                            orderElement.textContent = `Order: ${index + 1}`;
                        }
                        item.classList.add('bg-green-50',  'border-green-200');
                        setTimeout(() => {
                            item.classList.remove('bg-green-50', 'border-green-200', );
                        }, 2000);
                    });
                    
                    showTempMessage('Banner order updated successfully!', 'success');
                } else {
                    throw new Error(data.message || 'Server returned error');
                }
            })
            .catch(error => {
                console.error('Error updating order:', error);
                
                // Remove loading state
                bannerItems.forEach(item => {
                    item.classList.remove('opacity-60', 'cursor-wait');
                });
                
                showTempMessage('Error updating banner order!', 'error');
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