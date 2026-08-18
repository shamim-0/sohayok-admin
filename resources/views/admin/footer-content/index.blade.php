@extends('admin.dashboard.layout')

@section('content')
    <div class="mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900">ফুটার কন্টেন্ট ম্যানেজমেন্ট</h1>
                <p class="text-gray-600 mt-1">আপনার ওয়েবসাইটের ফুটার সমস্ত কন্টেন্ট ডাইনামিকভাবে ম্যানেজ করুন</p>
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

        @if ($errors->any())
            <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-red-800 font-medium">নিম্নলিখিত ত্রুটিগুলো ঠিক করুন:</span>
                </div>
                <ul class="mt-2 list-disc list-inside text-red-700">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <!-- Footer Content Form -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
                <h5 class="text-lg font-semibold text-gray-900">ফুটার কন্টেন্ট</h5>
                <p class="text-sm text-gray-600 mt-1">আপনার ফুটারের সমস্ত সেকশন ডাইনামিকভাবে কনফিগার করুন</p>
            </div>

            <div class="p-6">
                <form action="{{ route('admin.footer-content.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    
                    <!-- Brand Section -->
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">ব্র্যান্ড সেকশন</h3>
                        
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Logo Upload -->
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    লোগো
                                </label>
                                <div class="flex items-center space-x-4">
                                    @if($footerContent && $footerContent->logo_path)
                                        <div class="w-16 h-16 border rounded-lg overflow-hidden">
                                            <img src="{{ Storage::url($footerContent->logo_path) }}" alt="Current Logo" class="w-full h-full object-contain">
                                        </div>
                                    @endif
                                    <input type="file" name="logo" 
                                           class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                           accept="image/*">
                                </div>
                                <p class="text-xs text-gray-500 mt-1">PNG, JPG, GIF ফাইল (সর্বোচ্চ 2MB)</p>
                            </div>

                            <!-- Brand Description -->
                            <div>
                                <label for="brand_description" class="block text-sm font-medium text-gray-700 mb-2">
                                    ব্র্যান্ড বর্ণনা *
                                </label>
                                <textarea id="brand_description" name="brand_description" 
                                          required
                                          rows="3"
                                          class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                          placeholder="আপনার ব্র্যান্ডের সংক্ষিপ্ত বর্ণনা">{{ old('brand_description', $footerContent->brand_description ?? 'The Leading Academic Platform for Students.') }}</textarea>
                            </div>
                        </div>

                        <!-- App Store Links -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <!-- Play Store URL -->
                            <div>
                                <label for="play_store_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    Google Play Store URL
                                </label>
                                <input type="url" id="play_store_url" name="play_store_url" 
                                       value="{{ old('play_store_url', $footerContent->play_store_url ?? 'https://play.google.com/store/apps/details?id=com.nextive.physicsstudy.bd') }}" 
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="https://play.google.com/store/apps/details?id=...">
                            </div>

                            <!-- App Store URL -->
                            <div>
                                <label for="app_store_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    Apple App Store URL
                                </label>
                                <input type="url" id="app_store_url" name="app_store_url" 
                                       value="{{ old('app_store_url', $footerContent->app_store_url ?? '') }}" 
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="https://apps.apple.com/app/...">
                            </div>
                        </div>
                    </div>

                    <!-- Contact Information -->
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">যোগাযোগ তথ্য</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- Address -->
                            <div>
                                <label for="address" class="block text-sm font-medium text-gray-700 mb-2">
                                    ঠিকানা *
                                </label>
                                <input type="text" id="address" name="address" 
                                       value="{{ old('address', $footerContent->address ?? 'Munshiganj, Bangladesh, 1500.') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="আপনার সম্পূর্ণ ঠিকানা">
                            </div>

                            <!-- Phone -->
                            <div>
                                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                                    ফোন নম্বর *
                                </label>
                                <input type="text" id="phone" name="phone" 
                                       value="{{ old('phone', $footerContent->phone ?? '01969-525350') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="ফোন নম্বর">
                            </div>

                            <!-- Email -->
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                    ইমেইল *
                                </label>
                                <input type="email" id="email" name="email" 
                                       value="{{ old('email', $footerContent->email ?? 'sohayokstorage@gmail.com') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="ইমেইল ঠিকানা">
                            </div>
                        </div>
                    </div>

                    <!-- Support Links -->
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">সাপোর্ট লিংকস</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- Privacy Policy -->
                            <div>
                                <label for="privacy_policy_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    প্রাইভেসি পলিসি URL *
                                </label>
                                <input type="text" id="privacy_policy_url" name="privacy_policy_url" 
                                       value="{{ old('privacy_policy_url', $footerContent->privacy_policy_url ?? '/privacy_policy') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="/privacy_policy">
                            </div>

                            <!-- Terms & Conditions -->
                            <div>
                                <label for="terms_conditions_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    টার্মস এন্ড কন্ডিশন URL *
                                </label>
                                <input type="text" id="terms_conditions_url" name="terms_conditions_url" 
                                       value="{{ old('terms_conditions_url', $footerContent->terms_conditions_url ?? '/terms_conditions') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="/terms_conditions">
                            </div>

                            <!-- Refund Policy -->
                            <div>
                                <label for="refund_policy_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    রিফান্ড পলিসি URL *
                                </label>
                                <input type="text" id="refund_policy_url" name="refund_policy_url" 
                                       value="{{ old('refund_policy_url', $footerContent->refund_policy_url ?? '/refund_policy') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="/refund_policy">
                            </div>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">দ্রুত লিংকস</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <!-- About Us -->
                            <div>
                                <label for="about_us_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    আমাদের সম্পর্কে URL *
                                </label>
                                <input type="text" id="about_us_url" name="about_us_url" 
                                       value="{{ old('about_us_url', $footerContent->about_us_url ?? '/about-us') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="/about-us">
                            </div>

                            <!-- Courses -->
                            <div>
                                <label for="courses_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    সকল কোর্স URL *
                                </label>
                                <input type="text" id="courses_url" name="courses_url" 
                                       value="{{ old('courses_url', $footerContent->courses_url ?? '/courses') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="/courses">
                            </div>

                            <!-- Notice -->
                            <div>
                                <label for="notice_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    নোটিশ URL *
                                </label>
                                <input type="text" id="notice_url" name="notice_url" 
                                       value="{{ old('notice_url', $footerContent->notice_url ?? '/notice') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="/notice">
                            </div>

                            <!-- Contact -->
                            <div>
                                <label for="contact_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    যোগাযোগ URL *
                                </label>
                                <input type="text" id="contact_url" name="contact_url" 
                                       value="{{ old('contact_url', $footerContent->contact_url ?? '/contact') }}" 
                                       required
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="/contact">
                            </div>
                        </div>
                    </div>

                    <!-- Social Media Links -->
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">সোশ্যাল মিডিয়া লিংকস</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <!-- Facebook -->
                            <div>
                                <label for="facebook_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    Facebook URL
                                </label>
                                <input type="url" id="facebook_url" name="facebook_url" 
                                       value="{{ old('facebook_url', $footerContent->facebook_url ?? '') }}" 
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="https://facebook.com/yourpage">
                            </div>

                            <!-- YouTube -->
                            <div>
                                <label for="youtube_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    YouTube URL
                                </label>
                                <input type="url" id="youtube_url" name="youtube_url" 
                                       value="{{ old('youtube_url', $footerContent->youtube_url ?? '') }}" 
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="https://youtube.com/yourchannel">
                            </div>

                            <!-- LinkedIn -->
                            <div>
                                <label for="linkedin_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    LinkedIn URL
                                </label>
                                <input type="url" id="linkedin_url" name="linkedin_url" 
                                       value="{{ old('linkedin_url', $footerContent->linkedin_url ?? '') }}" 
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="https://linkedin.com/company/yourcompany">
                            </div>

                            <!-- Twitter -->
                            <div>
                                <label for="twitter_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    Twitter URL
                                </label>
                                <input type="url" id="twitter_url" name="twitter_url" 
                                       value="{{ old('twitter_url', $footerContent->twitter_url ?? '') }}" 
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="https://twitter.com/yourhandle">
                            </div>

                            <!-- Instagram -->
                            <div>
                                <label for="instagram_url" class="block text-sm font-medium text-gray-700 mb-2">
                                    Instagram URL
                                </label>
                                <input type="url" id="instagram_url" name="instagram_url" 
                                       value="{{ old('instagram_url', $footerContent->instagram_url ?? '') }}" 
                                       class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                       placeholder="https://instagram.com/yourprofile">
                            </div>
                        </div>
                    </div>

                    <!-- Copyright -->
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">কপিরাইট টেক্সট</h3>
                        
                        <div>
                            <label for="copyright_text" class="block text-sm font-medium text-gray-700 mb-2">
                                কপিরাইট টেক্সট *
                            </label>
                            <input type="text" id="copyright_text" name="copyright_text" 
                                   value="{{ old('copyright_text', $footerContent->copyright_text ?? '© ' . date('Y') . ' sohayok. All rights reserved.') }}" 
                                   required
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                   placeholder="কপিরাইট টেক্সট">
                            <p class="text-xs text-gray-500 mt-1">বছর স্বয়ংক্রিয়ভাবে যোগ হবে</p>
                        </div>
                    </div>

                    <!-- Live Preview -->
                    <div class="mb-6 p-6 bg-gray-900 text-white rounded-lg border border-gray-700">
                        <h4 class="text-sm font-medium text-white mb-4 text-center">ফুটার - লাইভ প্রিভিউ</h4>
                        
                        <div class="bg-[#0a0a0a] p-6 rounded-lg border border-[#FF014F]/20">
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <!-- Brand Section Preview -->
                                <div class="lg:col-span-1">
                                    <div class="flex items-center space-x-3 mb-4">
                                        @if($footerContent && $footerContent->logo_path)
                                            <img src="{{ Storage::url($footerContent->logo_path) }}" alt="Logo" class="h-10">
                                        @else
                                            <div class="h-10 w-10 bg-[#FF014F] rounded-lg flex items-center justify-center text-white font-bold">L</div>
                                        @endif
                                        <span class="text-white font-semibold">Logo</span>
                                    </div>
                                    <p class="text-gray-300 mb-4 text-sm leading-relaxed" id="preview-brand-description">
                                        {{ old('brand_description', $footerContent->brand_description ?? 'The Leading Academic Platform for Students.') }}
                                    </p>
                                    
                                    @if($footerContent && $footerContent->play_store_url)
                                    <div class="inline-flex items-center space-x-3 bg-[#0a0a0a] border border-[#FF014F]/20 px-4 py-3 rounded-xl">
                                        <svg class="w-5 h-5 text-[#FF014F]" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                        </svg>
                                        <div>
                                            <div class="text-xs text-gray-300">Get Our</div>
                                            <div class="text-sm font-semibold text-white">Mobile App</div>
                                        </div>
                                    </div>
                                    @endif
                                </div>

                                <!-- Contact Preview -->
                                <div>
                                    <h5 class="text-sm font-semibold mb-4 text-[#FF014F]">যোগাযোগ ও সোশ্যাল মিডিয়া</h5>
                                    <div class="space-y-2 text-gray-300 text-sm">
                                        <div class="flex items-start space-x-2">
                                            <span class="text-[#FF014F] text-xs">📍</span>
                                            <span id="preview-address">{{ old('address', $footerContent->address ?? 'Munshiganj, Bangladesh, 1500.') }}</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <span class="text-[#FF014F] text-xs">📞</span>
                                            <span id="preview-phone">{{ old('phone', $footerContent->phone ?? '01969-525350') }}</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <span class="text-[#FF014F] text-xs">📧</span>
                                            <span id="preview-email">{{ old('email', $footerContent->email ?? 'sohayokstorage@gmail.com') }}</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Support Preview -->
                                <div>
                                    <h5 class="text-sm font-semibold mb-4 text-[#FF014F]">সাপোর্ট / সহায়তা</h5>
                                    <div class="space-y-2 text-sm">
                                        <div class="text-gray-300 hover:text-[#FF014F] transition-colors">প্রাইভেসি পলিসি</div>
                                        <div class="text-gray-300 hover:text-[#FF014F] transition-colors">টার্মস এন্ড কন্ডিশন</div>
                                        <div class="text-gray-300 hover:text-[#FF014F] transition-colors">রিফান্ড পলিসি</div>
                                    </div>
                                </div>

                                <!-- Quick Links Preview -->
                                <div>
                                    <h5 class="text-sm font-semibold mb-4 text-[#FF014F]">দ্রুত লিংক</h5>
                                    <div class="space-y-2 text-sm">
                                        <div class="text-gray-300 hover:text-[#FF014F] transition-colors">আমাদের সম্পর্কে</div>
                                        <div class="text-gray-300 hover:text-[#FF014F] transition-colors">সকল কোর্স</div>
                                        <div class="text-gray-300 hover:text-[#FF014F] transition-colors">নোটিশ</div>
                                        <div class="text-gray-300 hover:text-[#FF014F] transition-colors">যোগাযোগ</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom Bar Preview -->
                            <div class="border-t border-[#FF014F]/20 mt-6 pt-4 text-center text-gray-400 text-sm">
                                <p id="preview-copyright">{{ old('copyright_text', $footerContent->copyright_text ?? '© ' . date('Y') . ' sohayok. All rights reserved.') }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                        <button type="submit"
                                class="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200 flex items-center">
                            @if($footerContent)
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                ফুটার কন্টেন্ট আপডেট করুন
                            @else
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                ফুটার কন্টেন্ট তৈরি করুন
                            @endif
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Current Content Info -->
        @if($footerContent)
            <div class="mt-6 bg-blue-50 rounded-lg border border-blue-200 p-6">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-blue-800 font-medium">বর্তমান ফুটার কন্টেন্ট সেভ আছে</span>
                </div>
                <div class="mt-3 text-sm text-blue-700">
                    <p><strong>সর্বশেষ আপডেট:</strong> {{ $footerContent->updated_at->format('d M, Y H:i') }}</p>
                </div>
            </div>
        @else
            <div class="mt-6 bg-yellow-50 rounded-lg border border-yellow-200 p-6">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-yellow-800 font-medium">কোন ফুটার কন্টেন্ট সেট করা নেই</span>
                </div>
                <p class="mt-2 text-sm text-yellow-700">
                    আপনার ফুটারে কোন কন্টেন্ট সেট করা নেই। উপরের ফর্ম ব্যবহার করে সমস্ত ফুটার কন্টেন্ট যোগ করুন।
                </p>
            </div>
        @endif
    </div>

    <script>
    // Real-time preview update
    document.addEventListener('DOMContentLoaded', function() {
        // Brand Description
        const brandDescriptionInput = document.getElementById('brand_description');
        const addressInput = document.getElementById('address');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');
        const copyrightInput = document.getElementById('copyright_text');

        function updatePreview() {
            // Brand Description
            document.getElementById('preview-brand-description').textContent = 
                brandDescriptionInput.value || 'The Leading Academic Platform for Students.';
            
            // Address
            document.getElementById('preview-address').textContent = 
                addressInput.value || 'Munshiganj, Bangladesh, 1500.';
            
            // Phone
            document.getElementById('preview-phone').textContent = 
                phoneInput.value || '01969-525350';
            
            // Email
            document.getElementById('preview-email').textContent = 
                emailInput.value || 'sohayokstorage@gmail.com';
            
            // Copyright
            document.getElementById('preview-copyright').textContent = 
                copyrightInput.value || `© ${new Date().getFullYear()} sohayok. All rights reserved.`;
        }

        // Add event listeners
        brandDescriptionInput.addEventListener('input', updatePreview);
        addressInput.addEventListener('input', updatePreview);
        phoneInput.addEventListener('input', updatePreview);
        emailInput.addEventListener('input', updatePreview);
        copyrightInput.addEventListener('input', updatePreview);

        // Initial preview update
        updatePreview();
    });
    </script>
@endsection