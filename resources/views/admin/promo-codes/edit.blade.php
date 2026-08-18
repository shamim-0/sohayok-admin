@extends('admin.dashboard.layout')

@section('content')
    <div class="mx-auto px-4 py-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900 ">Edit Promo Code</h1>
                <p class="text-gray-600  mt-1">Update promo code details</p>
            </div>
            <a href="{{ route('admin.promo-codes.index') }}" 
               class="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition duration-200">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Promo Codes
            </a>
        </div>

        <!-- Success/Error Messages -->
        @if ($errors->any())
            <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-red-800 font-medium">Please fix the following errors:</span>
                </div>
                <ul class="mt-2 list-disc list-inside text-red-700">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <!-- Edit Form -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 ">
            <div class="p-6">
                <form action="{{ route('admin.promo-codes.update', $promoCode) }}" method="POST">
                    @csrf
                    @method('PUT')
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <!-- Code -->
                        <div class="md:col-span-2">
                            <label for="code" class="block text-sm font-medium text-gray-700  mb-2">
                                Promo Code *
                            </label>
                            <input type="text" id="code" name="code" value="{{ old('code', $promoCode->code) }}" required
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500   font-mono uppercase"
                                   placeholder="SUMMER2024">
                            <p class="text-xs text-gray-500 mt-1">Unique code (letters, numbers, hyphens only)</p>
                        </div>

                        <!-- Course -->
                        <div class="md:col-span-2">
                            <label for="course_id" class="block text-sm font-medium text-gray-700  mb-2">
                                Course (Optional)
                            </label>
                            <select id="course_id" name="course_id"
                                    class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                                <option value="">All Courses</option>
                                @foreach($courses as $course)
                                    <option value="{{ $course->id }}" 
                                        {{ old('course_id', $promoCode->course_id) == $course->id ? 'selected' : '' }}>
                                        {{ $course->title }}
                                    </option>
                                @endforeach
                            </select>
                            <p class="text-xs text-gray-500 mt-1">Leave empty to apply to all courses</p>
                        </div>

                        <!-- Discount Type & Amount -->
                        <div>
                            <label for="discount_type" class="block text-sm font-medium text-gray-700  mb-2">
                                Discount Type *
                            </label>
                            <select id="discount_type" name="discount_type" required
                                    class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                                <option value="percentage" {{ old('discount_type', $promoCode->discount_type) == 'percentage' ? 'selected' : '' }}>Percentage (%)</option>
                                <option value="fixed" {{ old('discount_type', $promoCode->discount_type) == 'fixed' ? 'selected' : '' }}>Fixed Amount (৳)</option>
                            </select>
                        </div>

                        <div>
                            <label for="discount_amount" class="block text-sm font-medium text-gray-700  mb-2">
                                Discount Amount *
                            </label>
                            <input type="number" id="discount_amount" name="discount_amount" 
                                   value="{{ old('discount_amount', $promoCode->discount_amount) }}" 
                                   required step="0.01" min="0"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                   placeholder="0.00">
                        </div>

                        <!-- Validity Dates -->
                        <div>
                            <label for="valid_from" class="block text-sm font-medium text-gray-700  mb-2">
                                Valid From (Optional)
                            </label>
                            <input type="date" id="valid_from" name="valid_from" 
                                   value="{{ old('valid_from', $promoCode->valid_from ? $promoCode->valid_from->format('Y-m-d') : '') }}"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                        </div>

                        <div>
                            <label for="valid_until" class="block text-sm font-medium text-gray-700  mb-2">
                                Valid Until (Optional)
                            </label>
                            <input type="date" id="valid_until" name="valid_until" 
                                   value="{{ old('valid_until', $promoCode->valid_until ? $promoCode->valid_until->format('Y-m-d') : '') }}"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                        </div>

                        <!-- Usage Limit -->
                        <div class="md:col-span-2">
                            <label for="usage_limit" class="block text-sm font-medium text-gray-700  mb-2">
                                Usage Limit (Optional)
                            </label>
                            <input type="number" id="usage_limit" name="usage_limit" 
                                   value="{{ old('usage_limit', $promoCode->usage_limit) }}" min="1"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                   placeholder="Leave empty for unlimited usage">
                            <p class="text-xs text-gray-500 mt-1">Current usage: {{ $promoCode->used_count }} times</p>
                        </div>

                        <!-- Description -->
                        <div class="md:col-span-2">
                            <label for="description" class="block text-sm font-medium text-gray-700  mb-2">
                                Description (Optional)
                            </label>
                            <textarea id="description" name="description" rows="3"
                                      class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                      placeholder="Brief description of this promo code">{{ old('description', $promoCode->description) }}</textarea>
                        </div>

                        <!-- Active Status -->
                        <div class="md:col-span-2">
                            <div class="flex items-center">
                                <input type="checkbox" id="is_active" name="is_active" value="1" 
                                       {{ old('is_active', $promoCode->is_active) ? 'checked' : '' }}
                                       class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500  ">
                                <label for="is_active" class="ml-2 text-sm font-medium text-gray-700 ">
                                    Active (Can be used immediately)
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Stats -->
                    <div class="mb-6 p-4 bg-gray-50  rounded-lg">
                        <h4 class="text-sm font-medium text-gray-900  mb-3">Promo Code Statistics</h4>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                                <span class="text-gray-600 ">Created:</span>
                                <span class="text-gray-900  ml-1">{{ $promoCode->created_at->format('M d, Y') }}</span>
                            </div>
                            <div>
                                <span class="text-gray-600 ">Used:</span>
                                <span class="text-gray-900  ml-1">{{ $promoCode->used_count }} times</span>
                            </div>
                            <div>
                                <span class="text-gray-600 ">Status:</span>
                                <span class="ml-1 {{ $promoCode->is_valid ? 'text-green-600' : 'text-red-600' }}">
                                    {{ $promoCode->is_valid ? 'Valid' : 'Invalid' }}
                                </span>
                            </div>
                            <div>
                                <span class="text-gray-600 ">Type:</span>
                                <span class="text-gray-900  ml-1">{{ ucfirst($promoCode->discount_type) }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200 ">
                        <a href="{{ route('admin.promo-codes.index') }}"
                           class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200   ">
                            Cancel
                        </a>
                        <button type="submit"
                                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200">
                            Update Promo Code
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection