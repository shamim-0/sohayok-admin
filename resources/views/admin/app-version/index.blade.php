@extends('admin.dashboard.layout')

@section('content')
    <div class="mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div class="mb-4 md:mb-0">
                <h1 class="text-2xl font-bold text-gray-900">অ্যাপ ভার্সন / ফোর্স আপডেট</h1>
                <p class="text-gray-600 mt-1">Flutter অ্যাপের ভার্সন নিয়ন্ত্রণ করুন — কখন ঐচ্ছিক এবং কখন বাধ্যতামূলক আপডেট দেখাবে</p>
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

        <!-- Explanation -->
        <div class="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
            <p class="font-medium mb-1">কীভাবে কাজ করে:</p>
            <ul class="list-disc list-inside space-y-1">
                <li>ইউজারের অ্যাপ ভার্সন কোড <strong>মিনিমাম ভার্সন কোড</strong>-এর চেয়ে কম হলে — বাধ্যতামূলক (force) আপডেট দেখাবে, স্কিপ করা যাবে না।</li>
                <li>ইউজারের ভার্সন কোড মিনিমামের সমান বা বেশি কিন্তু <strong>লেটেস্ট ভার্সন কোড</strong>-এর চেয়ে কম হলে — ঐচ্ছিক (flexible) আপডেট দেখাবে, ব্যাকগ্রাউন্ডে ডাউনলোড হবে।</li>
                <li>"বাধ্যতামূলক আপডেট" টগলটি চালু করলে — মিনিমাম ভার্সন যাই হোক না কেন, সবার জন্য এখনই বাধ্যতামূলক আপডেট দেখাবে (জরুরি সিকিউরিটি ফিক্সের জন্য)।</li>
            </ul>
        </div>

        <!-- App Version Form -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
                <h5 class="text-lg font-semibold text-gray-900">ভার্সন কনফিগারেশন</h5>
                <p class="text-sm text-gray-600 mt-1">এই ভার্সন কোডগুলো Android অ্যাপের build.gradle-এর versionCode-এর সাথে মিলবে</p>
            </div>

            <div class="p-6">
                <form action="{{ route('admin.app-version.store') }}" method="POST">
                    @csrf

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <!-- Version Name -->
                        <div>
                            <label for="version_name" class="block text-sm font-medium text-gray-700 mb-2">
                                লেটেস্ট ভার্সন নাম *
                            </label>
                            <input type="text" id="version_name" name="version_name"
                                   value="{{ old('version_name', $appVersion->version_name ?? '') }}"
                                   required placeholder="যেমন: 1.3.0"
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </div>

                        <!-- Version Code -->
                        <div>
                            <label for="version_code" class="block text-sm font-medium text-gray-700 mb-2">
                                লেটেস্ট ভার্সন কোড *
                            </label>
                            <input type="number" id="version_code" name="version_code" min="1"
                                   value="{{ old('version_code', $appVersion->version_code ?? '') }}"
                                   required placeholder="যেমন: 15"
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </div>

                        <!-- Min Version Code -->
                        <div>
                            <label for="min_version_code" class="block text-sm font-medium text-gray-700 mb-2">
                                মিনিমাম ভার্সন কোড *
                            </label>
                            <input type="number" id="min_version_code" name="min_version_code" min="1"
                                   value="{{ old('min_version_code', $appVersion->min_version_code ?? '') }}"
                                   required placeholder="যেমন: 12"
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <p class="text-xs text-gray-500 mt-1">এর চেয়ে পুরনো ভার্সনে থাকা ইউজারদের বাধ্যতামূলক আপডেট দেখাবে</p>
                        </div>

                        <!-- Force Update Toggle -->
                        <div class="flex items-center pt-6">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="hidden" name="is_force_update" value="0">
                                <input type="checkbox" name="is_force_update" value="1"
                                       {{ old('is_force_update', $appVersion->is_force_update ?? false) ? 'checked' : '' }}
                                       class="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500">
                                <span class="ml-2 text-sm font-medium text-gray-700">সবার জন্য এখনই বাধ্যতামূলক আপডেট (kill-switch)</span>
                            </label>
                        </div>

                        <!-- Update URL -->
                        <div class="md:col-span-2">
                            <label for="update_url" class="block text-sm font-medium text-gray-700 mb-2">
                                Play Store URL
                            </label>
                            <input type="url" id="update_url" name="update_url"
                                   value="{{ old('update_url', $appVersion->update_url ?? '') }}"
                                   placeholder="https://play.google.com/store/apps/details?id=com.sohayok.app"
                                   class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </div>

                        <!-- Update Message -->
                        <div class="md:col-span-2">
                            <label for="update_message" class="block text-sm font-medium text-gray-700 mb-2">
                                আপডেট মেসেজ (ঐচ্ছিক)
                            </label>
                            <textarea id="update_message" name="update_message" rows="3"
                                      placeholder="যেমন: নতুন ফিচার ও পারফরম্যান্স উন্নতির জন্য অ্যাপটি আপডেট করুন।"
                                      class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">{{ old('update_message', $appVersion->update_message ?? '') }}</textarea>
                        </div>
                    </div>

                    <div class="flex justify-end pt-4 border-t border-gray-200">
                        <button type="submit"
                                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200">
                            @if($appVersion)
                                আপডেট করুন
                            @else
                                সংরক্ষণ করুন
                            @endif
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Current Status -->
        @if($appVersion)
            <div class="mt-6 bg-green-50 rounded-lg border border-green-200 p-6">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-green-800 font-medium">বর্তমান কনফিগারেশন সেভ আছে</span>
                </div>
                <div class="mt-2 text-sm text-green-700">
                    <p><strong>সর্বশেষ আপডেট:</strong> {{ $appVersion->updated_at->format('d M, Y H:i') }}</p>
                    <p><strong>লেটেস্ট ভার্সন:</strong> {{ $appVersion->version_name }} (কোড: {{ $appVersion->version_code }})</p>
                    <p><strong>মিনিমাম ভার্সন কোড:</strong> {{ $appVersion->min_version_code }}</p>
                    <p><strong>কিল-সুইচ:</strong> {{ $appVersion->is_force_update ? 'চালু' : 'বন্ধ' }}</p>
                </div>
            </div>
        @else
            <div class="mt-6 bg-yellow-50 rounded-lg border border-yellow-200 p-6">
                <div class="flex items-center">
                    <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-yellow-800 font-medium">এখনো কোনো ভার্সন কনফিগারেশন সেট করা নেই</span>
                </div>
                <p class="mt-2 text-sm text-yellow-700">
                    কনফিগারেশন সেট না করা পর্যন্ত API কখনো আপডেট রিকোয়ারমেন্ট দেখাবে না।
                </p>
            </div>
        @endif
    </div>
@endsection
