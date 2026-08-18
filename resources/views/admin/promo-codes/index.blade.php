@extends('admin.dashboard.layout')

@section('content')
    <div class="mx-auto px-4 py-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900 ">Promo Codes</h1>
                <p class="text-gray-600  mt-1">Manage your promo codes and discounts</p>
            </div>
            <button onclick="openCreateModal()" 
                    class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Create Promo Code
            </button>
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

        <!-- Promo Codes List -->
        <div class="bg-white  rounded-lg shadow-sm border border-gray-200 ">
            <div class="px-6 py-4 border-b border-gray-200  flex justify-between items-center">
                <div>
                    <h5 class="text-lg font-semibold text-gray-900 ">All Promo Codes</h5>
                    <p class="text-sm text-gray-600  mt-1">Manage and track your discount codes</p>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="bg-blue-100  text-blue-800  px-3 py-1 rounded-full text-sm font-medium">
                        Total: {{ $promoCodes->count() }}
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50 ">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
                                <input type="checkbox" id="selectAll" class="rounded border-gray-300">
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
                                Code
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
                                Course & Discount
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
                                Validity
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
                                Usage
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
                                Status
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white  divide-y divide-gray-200 ">
                        @forelse($promoCodes as $promoCode)
                            <tr class="hover:bg-gray-50  transition duration-150">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <input type="checkbox" value="{{ $promoCode->id }}" class="promo-checkbox rounded border-gray-300">
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <span class="font-mono text-sm font-semibold text-gray-900  bg-gray-100  px-2 py-1 rounded">
                                            {{ $promoCode->code }}
                                        </span>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex flex-col space-y-1">
                                        <span class="text-sm font-medium text-gray-900 ">
                                            {{ $promoCode->course ? $promoCode->course->title : 'All Courses' }}
                                        </span>
                                        <span class="text-xs text-blue-600  font-semibold">
                                            {{ $promoCode->discount_text }} OFF
                                            <span class="text-gray-500 text-xs ml-1">
                                                ({{ ucfirst($promoCode->discount_type) }})
                                            </span>
                                        </span>
                                        @if($promoCode->description)
                                            <span class="text-xs text-gray-500 truncate max-w-xs">
                                                {{ $promoCode->description }}
                                            </span>
                                        @endif
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900  space-y-1">
                                        @if($promoCode->valid_from)
                                            <div>From: {{ $promoCode->valid_from->format('M d, Y') }}</div>
                                        @endif
                                        @if($promoCode->valid_until)
                                            <div>Until: {{ $promoCode->valid_until->format('M d, Y') }}</div>
                                        @endif
                                        @if(!$promoCode->valid_from && !$promoCode->valid_until)
                                            <span class="text-gray-400">No expiry</span>
                                        @endif
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900 ">
                                        <div class="flex items-center space-x-2">
                                            <span>{{ $promoCode->used_count }} used</span>
                                            @if($promoCode->usage_limit)
                                                <span class="text-gray-400">/</span>
                                                <span>{{ $promoCode->usage_limit }} max</span>
                                            @else
                                                <span class="text-gray-400">∞ unlimited</span>
                                            @endif
                                        </div>
                                        @if($promoCode->usage_limit)
                                            @php
                                                $usagePercentage = ($promoCode->used_count / $promoCode->usage_limit) * 100;
                                            @endphp
                                            <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
                                                <div class="bg-blue-600 h-2 rounded-full" style="width: {{ $usagePercentage }}%"></div>
                                            </div>
                                        @endif
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                        {{ $promoCode->is_active ? 'bg-green-100 text-green-800  ' : 'bg-red-100 text-red-800  ' }}">
                                        {{ $promoCode->is_active ? 'Active' : 'Inactive' }}
                                    </span>
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ml-1
                                        {{ $promoCode->is_valid ? 'bg-blue-100 text-blue-800  ' : 'bg-gray-100 text-gray-800  ' }}">
                                        {{ $promoCode->is_valid ? 'Valid' : 'Invalid' }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div class="flex items-center space-x-2">
                                        <button onclick="openEditModal({{ $promoCode->id }})" 
                                                class="text-blue-600 hover:text-blue-900   transition duration-150">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                            </svg>
                                        </button>
                                        <form action="{{ route('admin.promo-codes.toggle-status', $promoCode) }}" method="POST" class="inline">
                                            @csrf
                                            <button type="submit" 
                                                    class="text-yellow-600 hover:text-yellow-900   transition duration-150">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                </svg>
                                            </button>
                                        </form>
                                        <button onclick="confirmDelete({{ $promoCode->id }}, '{{ $promoCode->code }}')" 
                                                class="text-red-600 hover:text-red-900   transition duration-150">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="7" class="px-6 py-12 text-center">
                                    <div class="flex flex-col items-center justify-center">
                                        <svg class="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <h3 class="text-lg font-medium text-gray-900  mb-2">No promo codes found</h3>
                                        <p class="text-gray-500  mb-4">Get started by creating your first promo code.</p>
                                        <button onclick="openCreateModal()" 
                                                class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
                                            Create Promo Code
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            <!-- Bulk Actions -->
            @if($promoCodes->count() > 0)
                <div class="px-6 py-4 border-t border-gray-200  bg-gray-50 ">
                    <div class="flex items-center justify-between">
                        <div class="text-sm text-gray-600 ">
                            <span id="selectedCount">0</span> selected
                        </div>
                        <div class="flex space-x-2">
                            <button id="bulkDeleteBtn" 
                                    onclick="bulkDelete()"
                                    class="inline-flex items-center px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition duration-200 opacity-50 cursor-not-allowed">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                                Delete Selected
                            </button>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>

    <!-- Create/Edit Modal -->
    <div id="promoModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-white  rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-gray-900 " id="modalTitle">Create Promo Code</h3>
                    <button type="button" onclick="closeModal()" class="text-gray-400 hover:text-gray-600 ">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <form id="promoForm" method="POST">
                    @csrf
                    <div id="formMethod" style="display: none;"></div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <!-- Code -->
                        <div class="md:col-span-2">
                            <label for="code" class="block text-sm font-medium text-gray-700  mb-1">
                                Promo Code *
                            </label>
                            <input type="text" id="code" name="code" required
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500   font-mono"
                                   placeholder="SUMMER2024">
                            <p class="text-xs text-gray-500 mt-1">Unique code (letters, numbers, hyphens only)</p>
                        </div>

                        <!-- Course -->
                        <div class="md:col-span-2">
                            <label for="course_id" class="block text-sm font-medium text-gray-700  mb-1">
                                Course (Optional)
                            </label>
                            <select id="course_id" name="course_id"
                                    class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                                <option value="">All Courses</option>
                                @foreach($courses as $course)
                                    <option value="{{ $course->id }}">{{ $course->title }}</option>
                                @endforeach
                            </select>
                            <p class="text-xs text-gray-500 mt-1">Leave empty to apply to all courses</p>
                        </div>

                        <!-- Discount Type & Amount -->
                        <div>
                            <label for="discount_type" class="block text-sm font-medium text-gray-700  mb-1">
                                Discount Type *
                            </label>
                            <select id="discount_type" name="discount_type" required
                                    class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                                <option value="percentage">Percentage (%)</option>
                                <option value="fixed">Fixed Amount (৳)</option>
                            </select>
                        </div>

                        <div>
                            <label for="discount_amount" class="block text-sm font-medium text-gray-700  mb-1">
                                Discount Amount *
                            </label>
                            <input type="number" id="discount_amount" name="discount_amount" required step="0.01" min="0"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                   placeholder="0.00">
                        </div>

                        <!-- Validity Dates -->
                        <div>
                            <label for="valid_from" class="block text-sm font-medium text-gray-700  mb-1">
                                Valid From (Optional)
                            </label>
                            <input type="date" id="valid_from" name="valid_from"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                        </div>

                        <div>
                            <label for="valid_until" class="block text-sm font-medium text-gray-700  mb-1">
                                Valid Until (Optional)
                            </label>
                            <input type="date" id="valid_until" name="valid_until"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                        </div>

                        <!-- Usage Limit -->
                        <div class="md:col-span-2">
                            <label for="usage_limit" class="block text-sm font-medium text-gray-700  mb-1">
                                Usage Limit (Optional)
                            </label>
                            <input type="number" id="usage_limit" name="usage_limit" min="1"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                   placeholder="Leave empty for unlimited usage">
                        </div>

                        <!-- Description -->
                        <div class="md:col-span-2">
                            <label for="description" class="block text-sm font-medium text-gray-700  mb-1">
                                Description (Optional)
                            </label>
                            <textarea id="description" name="description" rows="3"
                                      class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                      placeholder="Brief description of this promo code"></textarea>
                        </div>

                        <!-- Active Status -->
                        <div class="md:col-span-2">
                            <div class="flex items-center">
                                <input type="checkbox" id="is_active" name="is_active" value="1" checked
                                       class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500  ">
                                <label for="is_active" class="ml-2 text-sm font-medium text-gray-700 ">
                                    Active (Can be used immediately)
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200 ">
                        <button type="button" onclick="closeModal()"
                                class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200">
                            Cancel
                        </button>
                        <button type="submit"
                                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200">
                            <span id="submitButtonText">Create Promo Code</span>
                        </button>
                    </div>
                </form>
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
                    <h3 class="text-lg font-semibold text-gray-900  mb-2">Delete Promo Code</h3>
                    <p class="text-gray-600  mb-4">
                        Are you sure you want to delete "<span id="deleteCodeName" class="font-semibold"></span>"?
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



<script>
// Modal Functions
function openCreateModal() {
    document.getElementById('modalTitle').textContent = 'Create Promo Code';
    document.getElementById('submitButtonText').textContent = 'Create Promo Code';
    document.getElementById('promoForm').action = '{{ route("admin.promo-codes.store") }}';
    document.getElementById('formMethod').innerHTML = '';
    document.getElementById('promoForm').reset();
    document.getElementById('promoModal').classList.remove('hidden');
}

function openEditModal(promoCodeId) {
    // Here you would typically fetch the promo code data via AJAX
    // For now, we'll redirect to an edit page or you can implement AJAX
    window.location.href = `/admin/panel/promo-codes/${promoCodeId}/edit`;
}

function closeModal() {
    document.getElementById('promoModal').classList.add('hidden');
}

// Delete Functions
function confirmDelete(promoCodeId, code) {
    document.getElementById('deleteCodeName').textContent = code;
    document.getElementById('deleteForm').action = `{{ url('admin/panel/promo-codes') }}/${promoCodeId}`;
    document.getElementById('deleteModal').classList.remove('hidden');
}

function hideDeleteModal() {
    document.getElementById('deleteModal').classList.add('hidden');
}

// Bulk Actions
document.addEventListener('DOMContentLoaded', function() {
    const selectAll = document.getElementById('selectAll');
    const checkboxes = document.querySelectorAll('.promo-checkbox');
    const bulkDeleteBtn = document.getElementById('bulkDeleteBtn');
    const selectedCount = document.getElementById('selectedCount');

    function updateBulkActions() {
        const selected = document.querySelectorAll('.promo-checkbox:checked');
        selectedCount.textContent = selected.length;
        
        if (selected.length > 0) {
            bulkDeleteBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            bulkDeleteBtn.classList.add('opacity-100', 'cursor-pointer');
        } else {
            bulkDeleteBtn.classList.add('opacity-50', 'cursor-not-allowed');
            bulkDeleteBtn.classList.remove('opacity-100', 'cursor-pointer');
        }
    }

    selectAll.addEventListener('change', function() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
        updateBulkActions();
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateBulkActions);
    });
});

function bulkDelete() {
    const selected = document.querySelectorAll('.promo-checkbox:checked');
    const ids = Array.from(selected).map(checkbox => checkbox.value);

    if (ids.length === 0) return;

    if (confirm(`Are you sure you want to delete ${ids.length} selected promo code(s)?`)) {
        fetch('{{ route("admin.promo-codes.bulk-delete") }}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: JSON.stringify({ ids: ids })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                location.reload();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error deleting promo codes');
        });
    }
}

// Close modals when clicking outside
document.getElementById('promoModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.getElementById('deleteModal').addEventListener('click', function(e) {
    if (e.target === this) hideDeleteModal();
});

// Keyboard support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        hideDeleteModal();
    }
});
</script>
@endsection