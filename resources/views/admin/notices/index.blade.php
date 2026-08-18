@extends('admin.dashboard.layout')

@section('content')
    <div class="mx-auto px-4 py-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900 ">Notices</h1>
                <p class="text-gray-600  mt-1">Manage your notices and announcements</p>
            </div>
            <a href="{{ route('admin.notices.create') }}" 
               class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Create Notice
            </a>
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
                <button type="button" class="text-red-600 " onclick="this.parentElement.remove()">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        @endif

        <!-- Notices List -->
        <div class="bg-white  rounded-lg shadow-sm border border-gray-200 ">
            <div class="px-6 py-4 border-b border-gray-200  flex justify-between items-center">
                <div>
                    <h5 class="text-lg font-semibold text-gray-900 ">All Notices</h5>
                    <p class="text-sm text-gray-600  mt-1">Drag to reorder notices</p>
                </div>
                <div class="bg-blue-100  text-blue-800  px-3 py-1 rounded-full text-sm font-medium">
                    Total: {{ $notices->count() }}
                </div>
            </div>

            <div class="p-6">
                @if($notices->count() > 0)
                    <div id="notices-list" class="space-y-4">
                        @foreach($notices as $notice)
                            <div class="notice-item flex items-start justify-between p-4 bg-white  rounded-lg border border-gray-200  transition-all duration-200  group"
                                 data-notice-id="{{ $notice->id }}">
                                <div class="flex items-start space-x-4 flex-1">
                                    <div class="drag-handle cursor-move text-gray-400   transition-colors duration-200 p-2 rounded  mt-1">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <div class="flex items-start justify-between">
                                            <div class="flex-1">
                                                <h3 class="text-lg font-semibold text-gray-900  mb-2">
                                                    {{ $notice->title }}
                                                </h3>
                                                @if($notice->description)
                                                    <p class="text-gray-600  mb-3 line-clamp-2">
                                                        {{ Str::limit($notice->description, 200) }}
                                                    </p>
                                                @endif
                                                
                                                <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 ">
                                                    <!-- File Type Badges -->
                                                    @if($notice->pdf_file)
                                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 ">
                                                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                                            </svg>
                                                            PDF
                                                        </span>
                                                    @endif

                                                    @if($notice->link)
                                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800  ">
                                                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                                            </svg>
                                                            Link
                                                        </span>
                                                    @endif

                                                    <!-- Status Badges -->
                                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                                        {{ $notice->is_active ? 'bg-green-100 text-green-800 ' : 'bg-red-100 text-red-800 ' }}">
                                                        {{ $notice->is_active ? 'Active' : 'Inactive' }}
                                                    </span>

                                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                                        {{ $notice->is_currently_active ? 'bg-green-100 text-green-800 ' : 'bg-gray-100 text-gray-800 ' }}">
                                                        {{ $notice->is_currently_active ? 'Published' : 'Not Published' }}
                                                    </span>

                                                    <!-- Dates -->
                                                    @if($notice->publish_date)
                                                        <span class="inline-flex items-center">
                                                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                            </svg>
                                                            From: {{ $notice->publish_date->format('M d, Y') }}
                                                        </span>
                                                    @endif

                                                    @if($notice->expire_date)
                                                        <span class="inline-flex items-center">
                                                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                            </svg>
                                                            Until: {{ $notice->expire_date->format('M d, Y') }}
                                                        </span>
                                                    @endif

                                                    <span class="inline-flex items-center">
                                                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>
                                                        Order: {{ $notice->order + 1 }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="flex items-center space-x-2 ml-4">
                                    <!-- PDF Download -->
                                    @if($notice->pdf_file)
                                        <a href="{{ route('admin.notices.download-pdf', $notice) }}" 
                                           class="inline-flex items-center p-2 text-red-600    transition duration-150"
                                           title="Download PDF">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                            </svg>
                                        </a>
                                    @endif

                                    <!-- External Link -->
                                    @if($notice->link)
                                        <a href="{{ $notice->link }}" target="_blank"
                                           class="inline-flex items-center p-2 text-blue-600 hover:text-blue-800 transition duration-150"
                                           title="Open Link">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                        </a>
                                    @endif

                                    <!-- Edit -->
                                    <a href="{{ route('admin.notices.edit', $notice) }}" 
                                       class="inline-flex items-center p-2 text-blue-600 hover:text-blue-800  transition duration-150"
                                       title="Edit">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                    </a>

                                    <!-- Toggle Status -->
                                    <form action="{{ route('admin.notices.toggle-status', $notice) }}" method="POST" class="inline">
                                        @csrf
                                        <button type="submit" 
                                                class="inline-flex items-center p-2 text-yellow-600 hover:text-yellow-800  transition duration-150"
                                                title="{{ $notice->is_active ? 'Deactivate' : 'Activate' }}">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                        </button>
                                    </form>

                                    <!-- Delete -->
                                    <button onclick="confirmDelete({{ $notice->id }}, '{{ addslashes($notice->title) }}')" 
                                            class="inline-flex items-center p-2 text-red-600    transition duration-150"
                                            title="Delete">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @else
                    <div class="text-center py-12">
                        <div class="w-24 h-24 mx-auto bg-gray-100  rounded-full flex items-center justify-center mb-4">
                            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-medium text-gray-900  mb-2">No notices found</h3>
                        <p class="text-gray-500  mb-6">Get started by creating your first notice.</p>
                        <a href="{{ route('admin.notices.create') }}" 
                           class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
                            Create Notice
                        </a>
                    </div>
                @endif
            </div>
        </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white  rounded-lg shadow-xl max-w-md w-full">
            <div class="p-6">
                <div class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                    <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                </div>
                <div class="text-center">
                    <h3 class="text-lg font-semibold text-gray-900  mb-2">Delete Notice</h3>
                    <p class="text-gray-600  mb-4">
                        Are you sure you want to delete "<span id="deleteNoticeTitle" class="font-semibold"></span>"?
                    </p>
                    <p class="text-sm text-gray-500  mb-6">
                        This action cannot be undone.
                    </p>
                </div>
                <div class="flex justify-center space-x-3">
                    <button type="button" onclick="hideDeleteModal()"
                            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200">
                        Cancel
                    </button>
                    <form id="deleteForm" method="POST" class="inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit"
                                class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition duration-200">
                            Yes, Delete
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>



<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"></script>
<script>
// Delete Functions
function confirmDelete(noticeId, title) {
    document.getElementById('deleteNoticeTitle').textContent = title;
    document.getElementById('deleteForm').action = `{{ url('admin/panel/notices') }}/${noticeId}`;
    document.getElementById('deleteModal').classList.remove('hidden');
}

function hideDeleteModal() {
    document.getElementById('deleteModal').classList.add('hidden');
}

// Drag and Drop Functionality
document.addEventListener('DOMContentLoaded', function() {
    const noticesList = document.getElementById('notices-list');
    
    if (noticesList) {
        const sortable = new Sortable(noticesList, {
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
                updateNoticeOrder();
            }
        });

        function updateNoticeOrder() {
            const noticeItems = noticesList.querySelectorAll('.notice-item');
            const noticeIds = Array.from(noticeItems).map(item => 
                item.getAttribute('data-notice-id')
            );

            // Show loading state
            noticeItems.forEach(item => {
                item.classList.add('opacity-60', 'cursor-wait');
            });

            fetch('{{ route("admin.notices.update-order") }}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    notices: noticeIds
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
                noticeItems.forEach(item => {
                    item.classList.remove('opacity-60', 'cursor-wait');
                });

                if (data.success) {
                    // Show success feedback and update order numbers
                    noticeItems.forEach((item, index) => {
                        item.classList.add('bg-green-50',  'border-green-200');
                        setTimeout(() => {
                            item.classList.remove('bg-green-50', 'border-green-200');
                        }, 2000);
                    });
                    
                    showTempMessage('Notice order updated successfully!', 'success');
                } else {
                    throw new Error(data.message || 'Server returned error');
                }
            })
            .catch(error => {
                console.error('Error updating order:', error);
                
                // Remove loading state
                noticeItems.forEach(item => {
                    item.classList.remove('opacity-60', 'cursor-wait');
                });
                
                showTempMessage('Error updating notice order!', 'error');
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

// Keyboard support
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

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
@endsection