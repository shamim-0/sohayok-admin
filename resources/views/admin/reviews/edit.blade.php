@extends('admin.dashboard.layout')

@section('content')
    <div class="container mx-auto px-4 py-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900 ">Edit Review</h1>
                <p class="text-gray-600  mt-1">Update review details</p>
            </div>
            <a href="{{ route('admin.reviews.index') }}" 
               class="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition duration-200">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Reviews
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
                <form action="{{ route('admin.reviews.update', $review) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <!-- Left Column - Form Fields -->
                        <div class="lg:col-span-2 space-y-6">
                            <!-- Name -->
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700  mb-2">
                                    Student Name *
                                </label>
                                <input type="text" id="name" name="name" value="{{ old('name', $review->name) }}" required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                       placeholder="Enter student name">
                            </div>

                            <!-- School/College -->
                            <div>
                                <label for="school_college" class="block text-sm font-medium text-gray-700  mb-2">
                                    School/College Name *
                                </label>
                                <input type="text" id="school_college" name="school_college" value="{{ old('school_college', $review->school_college) }}" required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                       placeholder="Enter school or college name">
                            </div>

                            <!-- Rating -->
                            <div>
                                <label class="block text-sm font-medium text-gray-700  mb-2">
                                    Rating *
                                </label>
                                <div class="flex items-center space-x-2">
                                    @for($i = 1; $i <= 5; $i++)
                                        <label class="cursor-pointer">
                                            <input type="radio" name="rating" value="{{ $i }}" 
                                                   {{ old('rating', $review->rating) == $i ? 'checked' : '' }}
                                                   class="hidden peer">
                                            <svg class="w-8 h-8 peer-checked:text-yellow-400 text-gray-300 hover:text-yellow-300 transition-colors duration-200" 
                                                 fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                        </label>
                                    @endfor
                                    <span class="ml-2 text-sm font-medium text-gray-600 ">
                                        {{ old('rating', $review->rating) }}/5
                                    </span>
                                </div>
                            </div>

                            <!-- Comment -->
                            <div>
                                <label for="comment" class="block text-sm font-medium text-gray-700  mb-2">
                                    Review Comment *
                                </label>
                                <textarea id="comment" name="comment" rows="5" required
                                          class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                          placeholder="Enter the review comment (minimum 10 characters)">{{ old('comment', $review->comment) }}</textarea>
                                <div class="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>Minimum 10 characters</span>
                                    <span id="charCount">{{ strlen(old('comment', $review->comment)) }}/1000</span>
                                </div>
                            </div>

                            <!-- Active Status -->
                            <div>
                                <div class="flex items-center">
                                    <input type="checkbox" id="is_active" name="is_active" value="1" 
                                           {{ old('is_active', $review->is_active) ? 'checked' : '' }}
                                           class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ">
                                    <label for="is_active" class="ml-2 text-sm font-medium text-gray-700 ">
                                        Active (Show this review publicly)
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- Right Column - Image Upload & Preview -->
                        <div class="space-y-6">
                            <!-- Image Upload -->
                            <div>
                                <label for="image" class="block text-sm font-medium text-gray-700  mb-2">
                                    Student Photo
                                </label>
                                <input type="file" id="image" name="image" accept="image/*"
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500   file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                                <p class="text-xs text-gray-500 mt-1">Upload student photo (JPG, PNG, GIF, Max: 2MB)</p>
                                
                                <!-- Current Image Preview -->
                                @if($review->image)
                                    <div class="mt-4 p-4 bg-green-50  rounded-lg border border-green-200 ">
                                        <p class="text-sm text-green-800  font-medium mb-2">Current Photo:</p>
                                        <div class="flex items-center space-x-4">
                                            <img src="{{ Storage::url($review->image) }}" 
                                                 alt="{{ $review->name }}"
                                                 class="w-16 h-16 rounded-full object-cover border-2 border-green-200 ">
                                            <div class="text-sm text-green-700 ">
                                                <p>{{ basename($review->image) }}</p>
                                                <p class="text-xs">Upload new image to replace</p>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                            </div>

                            <!-- Live Preview -->
                            <div class="bg-gray-50  rounded-lg p-4 border border-gray-200">
                                <h4 class="text-sm font-medium text-gray-900  mb-3">Preview</h4>
                                <div class="space-y-3">
                                    <!-- Profile -->
                                    <div class="flex items-center space-x-3">
                                        <div id="preview-image" class="flex-shrink-0">
                                            @if($review->image)
                                                <img src="{{ Storage::url($review->image) }}" 
                                                     alt="{{ $review->name }}"
                                                     class="w-12 h-12 rounded-full object-cover border-2 border-gray-200">
                                            @else
                                                <div class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
                                                    {{ substr($review->name, 0, 1) }}
                                                </div>
                                            @endif
                                        </div>
                                        <div>
                                            <h5 id="preview-name" class="font-semibold text-gray-900 ">{{ $review->name }}</h5>
                                            <p id="preview-school" class="text-sm text-gray-600 ">{{ $review->school_college }}</p>
                                        </div>
                                    </div>

                                    <!-- Rating -->
                                    <div id="preview-rating" class="flex items-center space-x-1">
                                        @for($i = 1; $i <= 5; $i++)
                                            <svg class="w-4 h-4 {{ $i <= $review->rating ? 'text-yellow-400' : 'text-gray-300' }}" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                        @endfor
                                        <span class="text-sm text-gray-600  ml-1">{{ $review->formatted_rating }}/5</span>
                                    </div>

                                    <!-- Comment Preview -->
                                    <div>
                                        <p id="preview-comment" class="text-sm text-gray-700  leading-relaxed line-clamp-3">
                                            "{{ $review->comment }}"
                                        </p>
                                    </div>

                                    <!-- Status -->
                                    <div>
                                        <span id="preview-status" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                            {{ $review->is_active ? 'bg-green-100 text-green-800  ' : 'bg-red-100 text-red-800  ' }}">
                                            {{ $review->is_active ? 'Active' : 'Inactive' }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Review Statistics -->
                    <div class="mb-6 p-4 bg-gray-50  rounded-lg">
                        <h4 class="text-sm font-medium text-gray-900  mb-3">Review Statistics</h4>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                                <span class="text-gray-600 ">Created:</span>
                                <span class="text-gray-900  ml-1">{{ $review->created_at->format('M d, Y') }}</span>
                            </div>
                            <div>
                                <span class="text-gray-600 ">Last Updated:</span>
                                <span class="text-gray-900  ml-1">{{ $review->updated_at->format('M d, Y') }}</span>
                            </div>
                            <div>
                                <span class="text-gray-600 ">Order:</span>
                                <span class="text-gray-900  ml-1">{{ $review->order + 1 }}</span>
                            </div>
                            <div>
                                <span class="text-gray-600 ">Status:</span>
                                <span class="ml-1 {{ $review->is_active ? 'text-green-600' : 'text-red-600' }}">
                                    {{ $review->is_active ? 'Active' : 'Inactive' }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200 ">
                        <a href="{{ route('admin.reviews.index') }}"
                           class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200  ">
                            Cancel
                        </a>
                        <button type="submit"
                                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200">
                            Update Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>



<script>
// Real-time preview update
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const schoolInput = document.getElementById('school_college');
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const commentInput = document.getElementById('comment');
    const imageInput = document.getElementById('image');
    const activeInput = document.getElementById('is_active');
    const charCount = document.getElementById('charCount');

    function updatePreview() {
        // Name
        document.getElementById('preview-name').textContent = nameInput.value || 'Student Name';
        
        // School/College
        document.getElementById('preview-school').textContent = schoolInput.value || 'School/College';
        
        // Rating
        const selectedRating = document.querySelector('input[name="rating"]:checked')?.value || 5;
        const ratingPreview = document.getElementById('preview-rating');
        ratingPreview.innerHTML = '';
        
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('svg');
            star.className = `w-4 h-4 ${i <= selectedRating ? 'text-yellow-400' : 'text-gray-300'}`;
            star.setAttribute('fill', 'currentColor');
            star.setAttribute('viewBox', '0 0 20 20');
            star.innerHTML = '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>';
            ratingPreview.appendChild(star);
        }
        
        const ratingText = document.createElement('span');
        ratingText.className = 'text-sm text-gray-600  ml-1';
        ratingText.textContent = `${selectedRating}/5`;
        ratingPreview.appendChild(ratingText);
        
        // Comment
        const commentPreview = document.getElementById('preview-comment');
        commentPreview.textContent = commentInput.value ? `"${commentInput.value}"` : '"Review comment will appear here"';
        
        // Character count
        charCount.textContent = `${commentInput.value.length}/1000`;
        
        // Image preview
        const imagePreview = document.getElementById('preview-image');
        if (imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview" class="w-12 h-12 rounded-full object-cover border-2 border-gray-200">`;
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else if (!imageInput.files || imageInput.files.length === 0) {
            // Keep current image or show initial
            const currentImage = `{{ $review->image ? Storage::url($review->image) : '' }}`;
            if (currentImage) {
                imagePreview.innerHTML = `<img src="${currentImage}" alt="{{ $review->name }}" class="w-12 h-12 rounded-full object-cover border-2 border-gray-200">`;
            } else {
                const initial = nameInput.value ? nameInput.value.charAt(0).toUpperCase() : 'S';
                imagePreview.innerHTML = `<div class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">${initial}</div>`;
            }
        }
        
        // Status
        const statusPreview = document.getElementById('preview-status');
        if (activeInput.checked) {
            statusPreview.textContent = 'Active';
            statusPreview.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800  ';
        } else {
            statusPreview.textContent = 'Inactive';
            statusPreview.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800  ';
        }
    }

    // Add event listeners
    nameInput.addEventListener('input', updatePreview);
    schoolInput.addEventListener('input', updatePreview);
    ratingInputs.forEach(input => {
        input.addEventListener('change', updatePreview);
    });
    commentInput.addEventListener('input', updatePreview);
    imageInput.addEventListener('change', updatePreview);
    activeInput.addEventListener('change', updatePreview);

    // Initial preview update
    updatePreview();
});
</script>

<style>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>


@endsection