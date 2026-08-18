@extends('admin.dashboard.layout')

@section('content')
    <div class="mx-auto px-4 py-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900 ">Edit Notice</h1>
                <p class="text-gray-600  mt-1">Update notice details</p>
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

        <!-- Edit Form -->
        <div class="bg-white  rounded-lg shadow-sm border border-gray-200 ">
            <div class="p-6">
                <form action="{{ route('admin.notices.update', $notice) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    
                    <div class="grid grid-cols-1 gap-6 mb-6">
                        <!-- Title -->
                        <div>
                            <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                                Notice Title *
                            </label>
                            <input type="text" id="title" name="title" value="{{ old('title', $notice->title) }}" required
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                   placeholder="Enter notice title">
                        </div>

                        <!-- Description -->
                        <div>
                            <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea id="description" name="description" rows="4"
                                      class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                      placeholder="Enter notice description (optional)">{{ old('description', $notice->description) }}</textarea>
                        </div>

                        <!-- Link -->
                        <div>
                            <label for="link" class="block text-sm font-medium text-gray-700 mb-2">
                                External Link
                            </label>
                            <input type="url" id="link" name="link" value="{{ old('link', $notice->link) }}"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  "
                                   placeholder="https://example.com">
                            <p class="text-xs text-gray-500 mt-1">Optional external link for this notice</p>
                        </div>

                        <!-- PDF File -->
                        <div>
                            <label for="pdf_file" class="block text-sm font-medium text-gray-700 mb-2">
                                PDF File
                            </label>
                            <input type="file" id="pdf_file" name="pdf_file" accept=".pdf"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500   file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                            <p class="text-xs text-gray-500 mt-1">Upload new PDF file (Max: 10MB)</p>
                            
                            @if($notice->pdf_file)
                                <div class="mt-2 p-2 bg-green-50  rounded border border-green-200 ">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <svg class="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                            </svg>
                                            <span class="text-sm text-green-800 ">Current PDF: {{ basename($notice->pdf_file) }}</span>
                                        </div>
                                        <a href="{{ route('admin.notices.download-pdf', $notice) }}" 
                                           class="text-green-600 hover:text-green-800   text-sm">
                                            Download
                                        </a>
                                    </div>
                                </div>
                            @endif
                        </div>

                        <!-- Publish Date -->
                        <div>
                            <label for="publish_date" class="block text-sm font-medium text-gray-700 mb-2">
                                Publish Date
                            </label>
                            <input type="datetime-local" id="publish_date" name="publish_date" 
                                   value="{{ old('publish_date', $notice->publish_date ? $notice->publish_date->format('Y-m-d\TH:i') : '') }}"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                            <p class="text-xs text-gray-500 mt-1">Schedule when to publish this notice</p>
                        </div>

                        <!-- Expire Date -->
                        <div>
                            <label for="expire_date" class="block text-sm font-medium text-gray-700 mb-2">
                                Expire Date
                            </label>
                            <input type="datetime-local" id="expire_date" name="expire_date" 
                                   value="{{ old('expire_date', $notice->expire_date ? $notice->expire_date->format('Y-m-d\TH:i') : '') }}"
                                   class="w-full px-3 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  ">
                            <p class="text-xs text-gray-500 mt-1">Set expiration date for this notice</p>
                        </div>

                        <!-- Active Status -->
                        <div>
                            <div class="flex items-center">
                                <input type="checkbox" id="is_active" name="is_active" value="1" 
                                       {{ old('is_active', $notice->is_active) ? 'checked' : '' }}
                                       class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500  ">
                                <label for="is_active" class="ml-2 text-sm font-medium text-gray-700 ">
                                    Active (Publish this notice immediately)
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Notice Statistics -->
                    <div class="mb-6 p-4 bg-gray-50  rounded-lg">
                        <h4 class="text-sm font-medium text-gray-900  mb-3">Notice Statistics</h4>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                                <span class="text-gray-600 ">Created:</span>
                                <span class="text-gray-900  ml-1">{{ $notice->created_at->format('M d, Y') }}</span>
                            </div>
                            <div>
                                <span class="text-gray-600 ">Last Updated:</span>
                                <span class="text-gray-900  ml-1">{{ $notice->updated_at->format('M d, Y') }}</span>
                            </div>
                            <div>
                                <span class="text-gray-600 ">Status:</span>
                                <span class="ml-1 {{ $notice->is_currently_active ? 'text-green-600' : 'text-red-600' }}">
                                    {{ $notice->is_currently_active ? 'Published' : 'Not Published' }}
                                </span>
                            </div>
                            <div>
                                <span class="text-gray-600 ">Type:</span>
                                <span class="text-gray-900  ml-1">
                                    @if($notice->pdf_file)
                                        PDF
                                    @elseif($notice->link)
                                        Link
                                    @else
                                        Text
                                    @endif
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200 ">
                        <a href="{{ route('admin.notices.index') }}"
                           class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200  ">
                            Cancel
                        </a>
                        <button type="submit"
                                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200">
                            Update Notice
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection