@extends('admin.dashboard.layout')

@section('content')
    <div class="mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
                <p class="text-gray-600 mt-1">Manage your website content and sections</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Hero Section -->
            <a href="{{ route('admin.hero.index') }}" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-blue-500 group">
                <div class="flex items-start">
                    <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-star text-lg"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="font-semibold text-gray-900 text-lg mb-1">Hero Section</h3>
                        <p class="text-gray-600 text-sm">Manage the main banner and headline</p>
                    </div>
                </div>
            </a>

            <!-- Category Section -->
            <a href="{{ route('admin.category-section.index') }}" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-green-500 group">
                <div class="flex items-start">
                    <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-layer-group text-lg"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="font-semibold text-gray-900 text-lg mb-1">Category Section</h3>
                        <p class="text-gray-600 text-sm">Organize course categories</p>
                    </div>
                </div>
            </a>

            <!-- Popular Course Section -->
            <a href="{{ route('admin.popular-course-section.index') }}" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-red-500 group">
                <div class="flex items-start">
                    <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-fire text-lg"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="font-semibold text-gray-900 text-lg mb-1">Popular Courses</h3>
                        <p class="text-gray-600 text-sm">Manage trending courses</p>
                    </div>
                </div>
            </a>

            <!-- Instructor Section -->
            <a href="{{ route('admin.instructor-section.index') }}" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-purple-500 group">
                <div class="flex items-start">
                    <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-chalkboard-teacher text-lg"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="font-semibold text-gray-900 text-lg mb-1">Instructor Section</h3>
                        <p class="text-gray-600 text-sm">Manage teacher profiles</p>
                    </div>
                </div>
            </a>

            <!-- Why Choose Us Section -->
            <a href="{{ route('admin.why-choose-us-section.index') }}" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-yellow-500 group">
                <div class="flex items-start">
                    <div class="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-award text-lg"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="font-semibold text-gray-900 text-lg mb-1">Why Choose Us</h3>
                        <p class="text-gray-600 text-sm">Highlight unique features</p>
                    </div>
                </div>
            </a>

            <!-- Footer Section -->
            <a href="{{ route('admin.footer-content.index') }}" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-gray-500 group">
                <div class="flex items-start">
                    <div class="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-gray-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-shoe-prints text-lg"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="font-semibold text-gray-900 text-lg mb-1">Footer Section</h3>
                        <p class="text-gray-600 text-sm">Manage footer content and links</p>
                    </div>
                </div>
            </a>

            <!-- Review Section -->
            <a href="{{ route('admin.review-page-section.index') }}" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-indigo-500 group">
                <div class="flex items-start">
                    <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-star-half-stroke text-lg"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="font-semibold text-gray-900 text-lg mb-1">Review Section</h3>
                        <p class="text-gray-600 text-sm">Manage student testimonials</p>
                    </div>
                </div>
            </a>

            <!-- App Version / Force Update -->
            <a href="{{ route('admin.app-version.index') }}" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-pink-500 group">
                <div class="flex items-start">
                    <div class="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                        <i class="fa-solid fa-mobile-screen-button text-lg"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="font-semibold text-gray-900 text-lg mb-1">App Version</h3>
                        <p class="text-gray-600 text-sm">Control force / flexible app updates</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
@endsection