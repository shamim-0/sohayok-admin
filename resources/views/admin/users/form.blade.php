<!-- resources/views/admin/users/form.blade.php -->
<div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Name -->
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">পুরো নাম</label>
            <input type="text" name="name" id="name" value="{{ old('name', $user->name ?? '') }}" 
                   class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required>
            @error('name')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
        </div>

        <!-- Email -->
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">ইমেইল ঠিকানা</label>
            <input type="email" name="email" id="email" value="{{ old('email', $user->email ?? '') }}" 
                   class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required>
            @error('email')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
        </div>

        <!-- Phone -->
        <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">ফোন নম্বর</label>
            <input type="text" name="phone" id="phone" value="{{ old('phone', $user->phone ?? '') }}" 
                   class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
            @error('phone')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
        </div>

        <!-- Role -->
        <div>
            <label for="role" class="block text-sm font-medium text-gray-700 mb-2">ভূমিকা</label>
            <select name="role" id="role" 
                    class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required>
                <option value="" class="bg-white">ভূমিকা নির্বাচন করুন</option>
                <option value="student" {{ old('role', $user->role ?? '') == 'student' ? 'selected' : '' }} class="bg-white">শিক্ষার্থী</option>
                <option value="teacher" {{ old('role', $user->role ?? '') == 'teacher' ? 'selected' : '' }} class="bg-white">শিক্ষক</option>
                <option value="admin" {{ old('role', $user->role ?? '') == 'admin' ? 'selected' : '' }} class="bg-white">এডমিন</option>
            </select>
            @error('role')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
        </div>

        <!-- Current Education -->
        <div>
            <label for="current_education" class="block text-sm font-medium text-gray-700 mb-2">বর্তমান শিক্ষা</label>
            <select name="current_education" id="current_education" 
                    class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                <option value="" class="bg-white">শিক্ষার স্তর নির্বাচন করুন</option>
                <option value="High School" {{ old('current_education', $user->current_education ?? '') == 'High School' ? 'selected' : '' }} class="bg-white">উচ্চ মাধ্যমিক</option>
                <option value="Undergraduate" {{ old('current_education', $user->current_education ?? '') == 'Undergraduate' ? 'selected' : '' }} class="bg-white">স্নাতক</option>
                <option value="Graduate" {{ old('current_education', $user->current_education ?? '') == 'Graduate' ? 'selected' : '' }} class="bg-white">স্নাতকোত্তর</option>
                <option value="Postgraduate" {{ old('current_education', $user->current_education ?? '') == 'Postgraduate' ? 'selected' : '' }} class="bg-white">ডক্টরেট</option>
                <option value="PhD" {{ old('current_education', $user->current_education ?? '') == 'PhD' ? 'selected' : '' }} class="bg-white">পিএইচডি</option>
            </select>
            @error('current_education')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
        </div>

        <!-- Institute Name -->
        <div class="md:col-span-2">
            <label for="institute_name" class="block text-sm font-medium text-gray-700 mb-2">প্রতিষ্ঠানের নাম</label>
            <input type="text" name="institute_name" id="institute_name" value="{{ old('institute_name', $user->institute_name ?? '') }}" 
                   class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
            @error('institute_name')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
        </div>

        <!-- Password -->
        <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">পাসওয়ার্ড</label>
            <input type="password" name="password" id="password" 
                   class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
                   {{ isset($user) ? '' : 'required' }}>
            @error('password')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
            @if(isset($user))
                <p class="text-gray-500 text-xs mt-1">শুধুমাত্র পাসওয়ার্ড পরিবর্তন করতে চাইলে পূরণ করুন</p>
            @endif
        </div>

        <!-- Confirm Password -->
        <div>
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-2">পাসওয়ার্ড নিশ্চিত করুন</label>
            <input type="password" name="password_confirmation" id="password_confirmation" 
                   class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                   {{ isset($user) ? '' : 'required' }}>
        </div>
    </div>

    <div class="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
        <a href="{{ route('admin.users.index') }}" 
           class="px-6 py-3 text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 rounded-xl font-medium transition-all duration-300 bg-white hover:bg-gray-50 text-center">
            বাতিল
        </a>
        <button type="submit" 
                class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 border border-blue-400 shadow-lg hover:shadow-blue-500/25">
            <i class="fas {{ isset($user) ? 'fa-save' : 'fa-plus-circle' }} mr-2"></i>
            {{ isset($user) ? 'ব্যবহারকারী আপডেট করুন' : 'ব্যবহারকারী তৈরি করুন' }}
        </button>
    </div>
</div>