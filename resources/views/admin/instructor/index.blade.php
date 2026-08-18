@extends('admin.dashboard.layout')

@section('content')
<div class="flex-1 p-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">শিক্ষক ব্যবস্থাপনা</h1>
            <p class="text-gray-600">আপনার প্রতিষ্ঠানের সকল শিক্ষক পরিচালনা করুন</p>
        </div>
        <a href="{{ route('admin.instructors.create') }}"
            class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400">
            <i class="fas fa-plus-circle mr-2"></i> নতুন শিক্ষক যোগ করুন
        </a>
    </div>

    <!-- Success Message -->
    @if(session('success'))
    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-6">
        <div class="flex items-center">
            <i class="fas fa-check-circle mr-2"></i>
            <span>{{ session('success') }}</span>
        </div>
    </div>
    @endif

    <!-- Instructors Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ক্রম
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            শিক্ষক
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            যোগাযোগ
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            অবস্থা
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            কর্ম
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200" id="instructorsContainer">
                    @foreach($instructors as $instructor)
                    <tr class="instructor-row hover:bg-gray-50 transition-colors duration-150 cursor-move" 
                        data-id="{{ $instructor->id }}">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div class="flex items-center">
                                <i class="fas fa-sort mr-2 text-gray-400"></i>
                                {{ $instructor->order }}
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                    <img class="h-10 w-10 rounded-full object-cover border-2 border-blue-200"
                                        src="{{ $instructor->image_url }}"
                                        alt="{{ $instructor->name }}">
                                </div>
                                <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">{{ $instructor->name }}</div>
                                    <div class="text-sm text-gray-500">{{ $instructor->education ?? 'শিক্ষা তথ্য নেই' }}</div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{ $instructor->email }}</div>
                            <div class="text-sm text-gray-500">{{ $instructor->phone ?? 'ফোন নম্বর নেই' }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {{ $instructor->is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                                <i class="fas fa-circle mr-1 text-xs"></i>
                                {{ $instructor->is_active ? 'সক্রিয়' : 'নিষ্ক্রিয়' }}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div class="flex items-center space-x-2">
                                <a href="{{ route('admin.instructors.edit', $instructor) }}"
                                    class="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                    title="সম্পাদনা">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <button type="button" 
                                        onclick="openDeleteModal({{ $instructor->id }}, '{{ $instructor->name }}')"
                                        class="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-lg transition-all duration-200"
                                        title="মুছুন">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        @if($instructors->isEmpty())
        <div class="text-center py-12">
            <i class="fas fa-users text-4xl text-gray-300 mb-4"></i>
            <p class="text-gray-500 text-lg">কোন শিক্ষক পাওয়া যায়নি</p>
            <p class="text-gray-400 text-sm mt-2">নতুন শিক্ষক যোগ করুন শুরু করতে</p>
        </div>
        @endif
    </div>
</div>

<!-- Delete Confirmation Modal -->
<div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
    <div class="bg-white rounded-xl shadow-lg p-6 max-w-md w-full mx-4">
        <div class="flex items-center mb-4">
            <div class="flex-shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                <i class="fas fa-exclamation-triangle text-red-600"></i>
            </div>
            <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">শিক্ষক মুছুন</h3>
                <p class="text-sm text-gray-500">আপনি কি নিশ্চিত যে আপনি এই শিক্ষককে মুছতে চান?</p>
            </div>
        </div>
        
        <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p class="text-sm text-red-700">
                "<span id="instructorName" class="font-semibold"></span>" কে মুছে ফেলা হবে। এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।
            </p>
        </div>
        
        <div class="flex justify-end space-x-3">
            <button type="button" 
                    onclick="closeDeleteModal()"
                    class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                বাতিল করুন
            </button>
            <form id="deleteForm" method="POST" class="inline">
                @csrf
                @method('DELETE')
                <button type="submit" 
                        class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200">
                    মুছুন
                </button>
            </form>
        </div>
    </div>
</div>

<!-- Success Toast -->
<div id="toast" class="fixed top-4 right-4 z-50 hidden">
    <div class="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl shadow-lg max-w-sm">
        <div class="flex items-center">
            <i class="fas fa-check-circle text-green-500 text-xl mr-3"></i>
            <p id="toastMessage" class="text-sm font-medium"></p>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"></script>
<script>
    let sortable = null;
    let currentInstructorId = null;

    // Initialize Sortable
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('instructorsContainer');
        if (container) {
            sortable = new Sortable(container, {
                animation: 150,
                ghostClass: 'bg-blue-50',
                onEnd: function(evt) {
                    updateOrder();
                }
            });
        }
    });

    // Delete Modal Functions
    function openDeleteModal(id, name) {
        currentInstructorId = id;
        document.getElementById('instructorName').textContent = name;
        
        // Fix the route parameter issue
        const deleteForm = document.getElementById('deleteForm');
        const baseUrl = "{{ route('admin.instructors.destroy', ':id') }}";
        deleteForm.action = baseUrl.replace(':id', id);
        
        document.getElementById('deleteModal').classList.remove('hidden');
    }

    function closeDeleteModal() {
        document.getElementById('deleteModal').classList.add('hidden');
        currentInstructorId = null;
    }

    // Update order after drag
    function updateOrder() {
        const rows = document.querySelectorAll('.instructor-row');
        const order = [];
        
        rows.forEach((row, index) => {
            order.push({
                id: row.dataset.id,
                order: index + 1
            });
        });

        fetch("{{ route('admin.instructors.update-order') }}", {
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
                showToast('ক্রম সফলভাবে আপডেট করা হয়েছে।');
                // Update order numbers in UI
                updateOrderNumbers();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showToast('ক্রম আপডেট করতে সমস্যা হয়েছে।', 'error');
        });
    }

    // Update order numbers in UI
    function updateOrderNumbers() {
        const rows = document.querySelectorAll('.instructor-row');
        rows.forEach((row, index) => {
            const orderCell = row.querySelector('td:first-child .text-sm');
            if (orderCell) {
                // Keep the sort icon and update only the number
                const sortIcon = row.querySelector('td:first-child .fa-sort');
                orderCell.innerHTML = '';
                orderCell.appendChild(sortIcon.cloneNode(true));
                orderCell.appendChild(document.createTextNode(' ' + (index + 1)));
            }
        });
    }

    // Toast notification
    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        toastMessage.textContent = message;
        
        if (type === 'success') {
            toast.className = 'fixed top-4 right-4 z-50';
            toast.innerHTML = `
                <div class="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl shadow-lg max-w-sm">
                    <div class="flex items-center">
                        <i class="fas fa-check-circle text-green-500 text-xl mr-3"></i>
                        <p class="text-sm font-medium">${message}</p>
                    </div>
                </div>
            `;
        } else {
            toast.className = 'fixed top-4 right-4 z-50';
            toast.innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl shadow-lg max-w-sm">
                    <div class="flex items-center">
                        <i class="fas fa-exclamation-circle text-red-500 text-xl mr-3"></i>
                        <p class="text-sm font-medium">${message}</p>
                    </div>
                </div>
            `;
        }
        
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }

    // Close modal when clicking outside
    document.getElementById('deleteModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeDeleteModal();
        }
    });
</script>

<style>
    .instructor-row {
        transition: all 0.3s ease;
    }
    
    .sortable-ghost {
        opacity: 0.4;
        background-color: #f0f9ff;
    }
    
    .sortable-chosen {
        background-color: #f0f9ff;
    }
</style>
@endsection