@extends('admin.dashboard.layout')

@section('content')
    <div class="mx-auto px-4 py-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900 ">Create Notice</h1>
                <p class="text-gray-600  mt-1">Create a new notice or announcement</p>
            </div>
            <a href="{{ route('admin.notices.index') }}" 
               class="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition duration-200">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Notices
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

        <!-- Create Form -->
        <div class="bg-white  rounded-lg shadow-sm border border-gray-200 ">
            <div class="p-6">
                <form action="{{ route('admin.notices.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    
                    <div class="grid grid-cols-1 gap-6 mb-6">
                        <!-- Title -->
                        <div>
                            <label for="title" class="block text-sm font-medium text-gray-700  mb-2">
                                Notice Title *
                            </label>
                            <input type="text" id="title" name="title" value="{{ old('title') }}" required
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                   placeholder="Enter notice title">
                        </div>

                        <!-- Description -->
                        <div>
                            <label for="description" class="block text-sm font-medium text-gray-700  mb-2">
                                Description
                            </label>
                            <textarea id="description" name="description" rows="4"
                                      class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                      placeholder="Enter notice description (optional)">{{ old('description') }}</textarea>
                        </div>

                        <!-- Link -->
                        <div>
                            <label for="link" class="block text-sm font-medium text-gray-700  mb-2">
                                External Link
                            </label>
                            <input type="url" id="link" name="link" value="{{ old('link') }}"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                   placeholder="https://example.com">
                            <p class="text-xs text-gray-500 mt-1">Optional external link for this notice</p>
                        </div>

                        <!-- PDF File -->
                        <div>
                            <label for="pdf_file" class="block text-sm font-medium text-gray-700  mb-2">
                                PDF File
                            </label>
                            <input type="file" id="pdf_file" name="pdf_file" accept=".pdf"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500   file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                            <p class="text-xs text-gray-500 mt-1">Upload PDF file (Max: 10MB)</p>
                        </div>

                        <!-- Publish Date -->
                        <div>
                            <label for="publish_date" class="block text-sm font-medium text-gray-700  mb-2">
                                Publish Date
                            </label>
                            <input type="datetime-local" id="publish_date" name="publish_date" value="{{ old('publish_date') }}"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                            <p class="text-xs text-gray-500 mt-1">Schedule when to publish this notice</p>
                        </div>

                        <!-- Expire Date -->
                        <div>
                            <label for="expire_date" class="block text-sm font-medium text-gray-700  mb-2">
                                Expire Date
                            </label>
                            <input type="datetime-local" id="expire_date" name="expire_date" value="{{ old('expire_date') }}"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                            <p class="text-xs text-gray-500 mt-1">Set expiration date for this notice</p>
                        </div>

                        <!-- Active Status -->
                        <div>
                            <div class="flex items-center">
                                <input type="checkbox" id="is_active" name="is_active" value="1" 
                                       {{ old('is_active', true) ? 'checked' : '' }}
                                       class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500  ">
                                <label for="is_active" class="ml-2 text-sm font-medium text-gray-700 ">
                                    Active (Publish this notice immediately)
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Preview Section -->
                    <div class="mb-6 p-4 bg-gray-50  rounded-lg">
                        <h4 class="text-sm font-medium text-gray-900  mb-3">Preview</h4>
                        <div class="space-y-2 text-sm text-gray-600 ">
                            <div><strong>Title:</strong> <span id="preview-title">{{ old('title', 'Your notice title will appear here') }}</span></div>
                            <div><strong>Description:</strong> <span id="preview-description">{{ old('description', 'Notice description will appear here') }}</span></div>
                            <div><strong>Link:</strong> <span id="preview-link">{{ old('link', 'No link provided') }}</span></div>
                            <div><strong>PDF:</strong> <span id="preview-pdf">{{ old('pdf_file') ? 'PDF file attached' : 'No PDF file' }}</span></div>
                            <div><strong>Publish Date:</strong> <span id="preview-publish">{{ old('publish_date', 'Immediately') }}</span></div>
                            <div><strong>Expire Date:</strong> <span id="preview-expire">{{ old('expire_date', 'Never') }}</span></div>
                            <div><strong>Status:</strong> <span id="preview-status" class="{{ old('is_active', true) ? 'text-green-600' : 'text-red-600' }}">{{ old('is_active', true) ? 'Active' : 'Inactive' }}</span></div>
                        </div>
                    </div>

                    <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200 ">
                        <a href="{{ route('admin.notices.index') }}"
                           class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200 0">
                            Cancel
                        </a>
                        <button type="submit"
                                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200">
                            Create Notice
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
<script>
// Real-time preview update
document.addEventListener('DOMContentLoaded', function() {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const linkInput = document.getElementById('link');
    const pdfInput = document.getElementById('pdf_file');
    const publishInput = document.getElementById('publish_date');
    const expireInput = document.getElementById('expire_date');
    const activeInput = document.getElementById('is_active');

    function updatePreview() {
        // Title
        document.getElementById('preview-title').textContent = 
            titleInput.value || 'Your notice title will appear here';
        
        // Description
        document.getElementById('preview-description').textContent = 
            descriptionInput.value || 'Notice description will appear here';
        
        // Link
        document.getElementById('preview-link').textContent = 
            linkInput.value || 'No link provided';
        
        // PDF
        const pdfPreview = document.getElementById('preview-pdf');
        if (pdfInput.files && pdfInput.files[0]) {
            pdfPreview.textContent = pdfInput.files[0].name;
            pdfPreview.className = 'text-green-600';
        } else {
            pdfPreview.textContent = 'No PDF file';
            pdfPreview.className = '';
        }
        
        // Publish Date
        const publishPreview = document.getElementById('preview-publish');
        if (publishInput.value) {
            const date = new Date(publishInput.value);
            publishPreview.textContent = date.toLocaleString();
        } else {
            publishPreview.textContent = 'Immediately';
        }
        
        // Expire Date
        const expirePreview = document.getElementById('preview-expire');
        if (expireInput.value) {
            const date = new Date(expireInput.value);
            expirePreview.textContent = date.toLocaleString();
        } else {
            expirePreview.textContent = 'Never';
        }
        
        // Status
        const statusPreview = document.getElementById('preview-status');
        if (activeInput.checked) {
            statusPreview.textContent = 'Active';
            statusPreview.className = 'text-green-600';
        } else {
            statusPreview.textContent = 'Inactive';
            statusPreview.className = 'text-red-600';
        }
    }

    // Add event listeners
    titleInput.addEventListener('input', updatePreview);
    descriptionInput.addEventListener('input', updatePreview);
    linkInput.addEventListener('input', updatePreview);
    pdfInput.addEventListener('change', updatePreview);
    publishInput.addEventListener('change', updatePreview);
    expireInput.addEventListener('change', updatePreview);
    activeInput.addEventListener('change', updatePreview);

    // Initial preview update
    updatePreview();
});
</script>
@endpush