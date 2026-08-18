@extends('admin.dashboard.layout')

@section('content')
<div class="flex-1 p-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">কোর্স ফিচার ব্যবস্থাপনা</h1>
            <p class="text-gray-600 mt-1">{{ $course->title }} - ফিচার যোগ করুন/আপডেট করুন</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3">
            <a href="{{ route('admin.courses.index') }}"
               class="text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300 bg-white hover:bg-gray-50 shadow-sm">
                <i class="fas fa-arrow-left mr-2"></i> ফিরে যান
            </a>
        </div>
    </div>

    <!-- Success/Error Messages -->
    @if(session('success'))
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center">
            <i class="fas fa-check-circle mr-2"></i>
            {{ session('success') }}
        </div>
    @endif

    @if(session('error'))
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center">
            <i class="fas fa-exclamation-circle mr-2"></i>
            {{ session('error') }}
        </div>
    @endif

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Add Feature Form -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <i class="fas fa-plus-circle mr-2 text-green-600"></i>
                নতুন ফিচার যোগ করুন
            </h2>
            
            <form action="{{ route('admin.courses.features.store', $course->id) }}" method="POST" class="space-y-4">
                @csrf
                
                <div>
                    <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                        ফিচার টাইটেল <span class="text-red-500">*</span>
                    </label>
                    <input type="text" 
                           name="title" 
                           id="title" 
                           value="{{ old('title') }}"
                           class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                           placeholder="যেমন: রেকর্ডেড ক্লাস"
                           required>
                    @error('title')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>

                <div>
                    <label for="value" class="block text-sm font-medium text-gray-700 mb-2">
                        ভ্যালু <span class="text-red-500">*</span>
                    </label>
                    <input type="text" 
                           name="value" 
                           id="value" 
                           value="{{ old('value') }}"
                           class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                           placeholder="যেমন: 800+"
                           required>
                    @error('value')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>

                <div>
                    <label for="icon" class="block text-sm font-medium text-gray-700 mb-2">
                        আইকন (Font Awesome)
                    </label>
                    <input type="text" 
                           name="icon" 
                           id="icon" 
                           value="{{ old('icon') }}"
                           class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                           placeholder="যেমন: fas fa-video">
                    <p class="mt-1 text-sm text-gray-500">Font Awesome ক্লাস দিন। খালি রাখলে অটো সিলেক্ট হবে।</p>
                    @error('icon')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>

                <button type="submit" 
                        class="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md">
                    <i class="fas fa-save mr-2"></i>
                    ফিচার সেভ করুন
                </button>
            </form>
        </div>

        <!-- Features List -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-between">
                <span>
                    <i class="fas fa-list mr-2 text-blue-600"></i>
                    ফিচার লিস্ট
                </span>
                <span class="text-sm font-normal text-gray-500">
                    {{ $course->features->count() }} টি ফিচার
                </span>
            </h2>

            @if($course->features->count() > 0)
                <div id="features-list" class="space-y-3">
                    @foreach($course->features as $feature)
                        <div class="feature-item border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all duration-300"
                             data-feature-id="{{ $feature->id }}">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-3">
                                    <!-- Drag Handle -->
                                    <div class="drag-handle cursor-move text-gray-400 hover:text-gray-600 transition-colors duration-300">
                                        <i class="fas fa-grip-vertical"></i>
                                    </div>
                                    
                                    <!-- Feature Icon -->
                                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <i class="{{ $feature->icon_class }} text-blue-600"></i>
                                    </div>
                                    
                                    <!-- Feature Details -->
                                    <div>
                                        <div class="flex items-center space-x-2">
                                            <h3 class="font-semibold text-gray-800">{{ $feature->title }}</h3>
                                            @if(!$feature->is_active)
                                                <span class="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">নিষ্ক্রিয়</span>
                                            @endif
                                        </div>
                                        <p class="text-gray-600">{{ $feature->value }}</p>
                                    </div>
                                </div>
                                
                                <!-- Actions -->
                                <div class="flex items-center space-x-2">
                                    <!-- Edit Button -->
                                    <button onclick="openEditModal({{ $feature }})"
                                            class="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all duration-300 tooltip"
                                            data-tooltip="এডিট">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    
                                    <!-- Toggle Status -->
                                    <form action="{{ route('admin.courses.features.toggle', [$course->id, $feature->id]) }}" method="POST" class="inline">
                                        @csrf
                                        <button type="submit"
                                                class="bg-{{ $feature->is_active ? 'yellow' : 'green' }}-600 hover:bg-{{ $feature->is_active ? 'yellow' : 'green' }}-700 text-white p-2 rounded-lg transition-all duration-300 tooltip"
                                                data-tooltip="{{ $feature->is_active ? 'নিষ্ক্রিয় করুন' : 'সক্রিয় করুন' }}">
                                            <i class="fas fa-{{ $feature->is_active ? 'eye-slash' : 'eye' }}"></i>
                                        </button>
                                    </form>
                                    
                                    <!-- Delete Button -->
                                    <button type="button" 
                                            onclick="openDeleteModal({{ $feature->id }}, '{{ $feature->title }}')"
                                            class="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-all duration-300 tooltip"
                                            data-tooltip="ডিলিট">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>

                <!-- Save Order Button -->
                <div class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p class="text-sm text-gray-600 mb-3">ফিচারগুলিকে ড্রাগ এন্ড ড্রপ করে অর্ডার পরিবর্তন করুন</p>
                    <button id="save-order-btn"
                            class="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md">
                        <i class="fas fa-save mr-2"></i>
                        অর্ডার সেভ করুন
                    </button>
                </div>
            @else
                <div class="text-center py-8">
                    <i class="fas fa-list-alt text-gray-300 text-5xl mb-4"></i>
                    <p class="text-gray-500 text-lg">কোনো ফিচার যোগ করা হয়নি</p>
                    <p class="text-gray-400 text-sm mt-2">বাম পাশ থেকে ফিচার যোগ করুন</p>
                </div>
            @endif
        </div>
    </div>
</div>

<!-- Edit Feature Modal -->
<div id="editModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden z-50">
    <div class="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4">
        <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <i class="fas fa-edit mr-2 text-blue-600"></i>
            ফিচার এডিট করুন
        </h3>
        
        <form id="editForm" method="POST" class="space-y-4">
            @csrf
            @method('PUT')
            
            <div>
                <label for="edit_title" class="block text-sm font-medium text-gray-700 mb-2">
                    ফিচার টাইটেল
                </label>
                <input type="text" 
                       name="title" 
                       id="edit_title" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                       required>
            </div>

            <div>
                <label for="edit_value" class="block text-sm font-medium text-gray-700 mb-2">
                    ভ্যালু
                </label>
                <input type="text" 
                       name="value" 
                       id="edit_value" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                       required>
            </div>

            <div>
                <label for="edit_icon" class="block text-sm font-medium text-gray-700 mb-2">
                    আইকন (Font Awesome)
                </label>
                <input type="text" 
                       name="icon" 
                       id="edit_icon" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                       placeholder="যেমন: fas fa-video">
            </div>

            <div class="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                <button type="button" 
                        onclick="closeEditModal()"
                        class="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300">
                    বাতিল
                </button>
                <button type="submit" 
                        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300">
                    <i class="fas fa-save mr-2"></i>
                    আপডেট করুন
                </button>
            </div>
        </form>
    </div>
</div>

<!-- Delete Confirmation Modal -->
<div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden z-50">
    <div class="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4">
        <div class="text-center">
            <!-- Warning Icon -->
            <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                <i class="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-800 mb-2">ফিচার ডিলিট করুন</h3>
            <p class="text-gray-600 mb-6" id="deleteModalText">
                আপনি কি নিশ্চিত যে আপনি এই ফিচারটি ডিলিট করতে চান?
            </p>
            
            <div class="flex items-center justify-center space-x-3">
                <button type="button" 
                        onclick="closeDeleteModal()"
                        class="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300">
                    বাতিল
                </button>
                <form id="deleteForm" method="POST" class="inline">
                    @csrf
                    @method('DELETE')
                    <button type="submit" 
                            class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium flex items-center transition-all duration-300">
                        <i class="fas fa-trash mr-2"></i>
                        ডিলিট করুন
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Include SortableJS -->
<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"></script>

<style>
    .tooltip {
        position: relative;
    }
    
    .tooltip::before {
        content: attr(data-tooltip);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
    }
    
    .tooltip:hover::before {
        opacity: 1;
    }
    
    .feature-item {
        transition: all 0.3s ease;
    }
    
    .feature-item.sortable-ghost {
        opacity: 0.5;
        background: #f3f4f6;
    }
    
    .feature-item.sortable-chosen {
        background: #eff6ff;
        border-color: #3b82f6;
    }
    
    .drag-handle:hover {
        color: #4b5563;
    }

    /* Modal animations */
    .modal-enter {
        opacity: 0;
        transform: scale(0.95);
    }
    
    .modal-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 300ms, transform 300ms;
    }
    
    .modal-exit {
        opacity: 1;
    }
    
    .modal-exit-active {
        opacity: 0;
        transform: scale(0.95);
        transition: opacity 300ms, transform 300ms;
    }
</style>

<script>
    let currentFeatureId = null;
    let currentDeleteFeatureId = null;

    // Initialize Sortable
    document.addEventListener('DOMContentLoaded', function() {
        const featuresList = document.getElementById('features-list');
        if (featuresList) {
            new Sortable(featuresList, {
                handle: '.drag-handle',
                ghostClass: 'sortable-ghost',
                chosenClass: 'sortable-chosen',
                animation: 150,
                onEnd: function(evt) {
                    console.log('Order changed');
                }
            });
        }

        // Add animation to modals
        const modals = document.querySelectorAll('[id$="Modal"]');
        modals.forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    if (this.id === 'editModal') {
                        closeEditModal();
                    } else if (this.id === 'deleteModal') {
                        closeDeleteModal();
                    }
                }
            });
        });
    });

    // Save order
    document.getElementById('save-order-btn')?.addEventListener('click', function() {
        const featureItems = document.querySelectorAll('.feature-item');
        const order = Array.from(featureItems).map(item => item.dataset.featureId);
        
        // Show loading state
        const saveBtn = document.getElementById('save-order-btn');
        const originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> সেভ হচ্ছে...';
        saveBtn.disabled = true;

        fetch("{{ route('admin.courses.features.order', $course->id) }}", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: JSON.stringify({ order: order })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showNotification('অর্ডার সফলভাবে সেভ হয়েছে!', 'success');
            } else {
                showNotification('অর্ডার সেভ করতে সমস্যা হয়েছে!', 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('নেটওয়ার্ক সমস্যা!', 'error');
        })
        .finally(() => {
            // Restore button state
            saveBtn.innerHTML = originalText;
            saveBtn.disabled = false;
        });
    });

    // Edit modal functions
    function openEditModal(feature) {
        currentFeatureId = feature.id;
        document.getElementById('edit_title').value = feature.title;
        document.getElementById('edit_value').value = feature.value;
        document.getElementById('edit_icon').value = feature.icon || '';
        
        // Set form action
        document.getElementById('editForm').action = `/admin/courses/{{ $course->id }}/features/${feature.id}`;
        
        // Show modal with animation
        const modal = document.getElementById('editModal');
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'scale(1)';
        }, 10);
    }

    function closeEditModal() {
        const modal = document.getElementById('editModal');
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.95)';
        setTimeout(() => {
            modal.classList.add('hidden');
            currentFeatureId = null;
        }, 300);
    }

    // Delete modal functions
    function openDeleteModal(featureId, featureTitle) {
        currentDeleteFeatureId = featureId;
        
        // Update modal text
        document.getElementById('deleteModalText').textContent = 
            `আপনি কি নিশ্চিত যে আপনি "${featureTitle}" ফিচারটি ডিলিট করতে চান? এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।`;
        
        // Set form action
        document.getElementById('deleteForm').action = `/admin/courses/{{ $course->id }}/features/${featureId}`;
        
        // Show modal with animation
        const modal = document.getElementById('deleteModal');
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'scale(1)';
        }, 10);
    }

    function closeDeleteModal() {
        const modal = document.getElementById('deleteModal');
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.95)';
        setTimeout(() => {
            modal.classList.add('hidden');
            currentDeleteFeatureId = null;
        }, 300);
    }

    // Handle delete form submission
    document.getElementById('deleteForm')?.addEventListener('submit', function(e) {
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> ডিলিট হচ্ছে...';
        submitBtn.disabled = true;
        
        // Form will submit normally, no need for AJAX since we want page refresh
    });

    // Notification function
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.custom-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `custom-notification fixed top-4 right-4 px-6 py-3 rounded-xl font-medium text-white z-50 transition-all duration-300 transform translate-x-full ${
            type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`;
        notification.textContent = message;
        
        // Add icon based on type
        const icon = document.createElement('i');
        icon.className = type === 'success' ? 'fas fa-check-circle mr-2' : 'fas fa-exclamation-circle mr-2';
        notification.insertBefore(icon, notification.firstChild);
        
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
            notification.classList.add('translate-x-0');
        }, 10);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('translate-x-0');
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }

    // Common icons suggestions
    const commonIcons = [
        'fas fa-video', 'fas fa-broadcast-tower', 'fas fa-file-pdf', 
        'fas fa-clipboard-list', 'fas fa-headset', 'fas fa-clock',
        'fas fa-calendar-alt', 'fas fa-book', 'fas fa-graduation-cap',
        'fas fa-certificate', 'fas fa-trophy', 'fas fa-star',
        'fas fa-users', 'fas fa-chalkboard-teacher', 'fas fa-mobile-alt'
    ];

    // Add icon suggestions functionality
    function setupIconSuggestions() {
        const iconInput = document.getElementById('icon');
        const editIconInput = document.getElementById('edit_icon');
        
        [iconInput, editIconInput].forEach(input => {
            if (input) {
                // Create suggestions dropdown
                const dropdown = document.createElement('div');
                dropdown.className = 'absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg hidden';
                dropdown.id = `${input.id}-suggestions`;
                
                commonIcons.forEach(icon => {
                    const item = document.createElement('div');
                    item.className = 'px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center';
                    item.innerHTML = `<i class="${icon} mr-3 text-gray-600 w-5"></i> <span class="text-sm">${icon}</span>`;
                    item.addEventListener('click', function() {
                        input.value = icon;
                        dropdown.classList.add('hidden');
                    });
                    dropdown.appendChild(item);
                });
                
                input.parentNode.appendChild(dropdown);
                
                input.addEventListener('focus', function() {
                    dropdown.classList.remove('hidden');
                });
                
                input.addEventListener('blur', function() {
                    setTimeout(() => {
                        dropdown.classList.add('hidden');
                    }, 200);
                });
                
                input.addEventListener('input', function() {
                    const value = this.value.toLowerCase();
                    const items = dropdown.querySelectorAll('div');
                    let hasVisible = false;
                    
                    items.forEach(item => {
                        const iconClass = item.querySelector('span').textContent;
                        if (iconClass.includes(value)) {
                            item.style.display = 'flex';
                            hasVisible = true;
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    
                    dropdown.classList.toggle('hidden', !hasVisible);
                });
            }
        });
    }

    // Initialize icon suggestions
    setupIconSuggestions();

    // Escape key to close modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (!document.getElementById('editModal').classList.contains('hidden')) {
                closeEditModal();
            }
            if (!document.getElementById('deleteModal').classList.contains('hidden')) {
                closeDeleteModal();
            }
        }
    });

    // Prevent form submission on enter in input fields
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !this.form.id.includes('editForm') && !this.form.id.includes('deleteForm')) {
                e.preventDefault();
            }
        });
    });
</script>
@endsection