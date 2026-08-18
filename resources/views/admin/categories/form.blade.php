<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Name -->
    <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">ক্যাটাগরি নাম</label>
        <input type="text" name="name" id="name" value="{{ old('name', $category->name ?? '') }}" 
               class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required>
        @error('name')
            <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
        @enderror
    </div>

    <!-- Slug -->
    <div>
        <label for="slug" class="block text-sm font-medium text-gray-700 mb-2">Slug</label>
        <input type="text" name="slug" id="slug" value="{{ old('slug', $category->slug ?? '') }}" 
               class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
        @error('slug')
            <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
        @enderror
        <p class="text-gray-500 text-xs mt-1">খালি রাখলে স্বয়ংক্রিয়ভাবে তৈরি হবে</p>
    </div>

    <!-- Image -->
    <div class="md:col-span-2">
        <label for="image" class="block text-sm font-medium text-gray-700 mb-2">ক্যাটাগরি ইমেজ (150x150 px)</label>
        <div class="flex flex-col md:flex-row gap-4 items-start">
            <div class="flex-1">
                <input type="file" name="image" id="image" accept="image/*" 
                       class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                @error('image')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
                <p class="text-gray-500 text-xs mt-1">PNG, JPG, JPEG ফরম্যাট, সর্বোচ্চ 2MB</p>
            </div>
            
            <!-- Image Preview -->
            <div class="flex-shrink-0">
                @if(isset($category) && $category->image)
                    <div class="relative">
                        <img src="{{ asset('storage/' . $category->image) }}" alt="Current Image" 
                             class="w-24 h-24 rounded-lg object-cover border border-gray-300">
                        <div class="mt-2 text-center">
                            <label class="inline-flex items-center text-sm text-gray-600">
                                <input type="checkbox" name="remove_image" value="1" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                                <span class="ml-2">ইমেজ মুছুন</span>
                            </label>
                        </div>
                    </div>
                @else
                    <div class="w-24 h-24 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                        <span class="text-gray-400 text-xs text-center">ইমেজ প্রিভিউ</span>
                    </div>
                @endif
            </div>
        </div>
    </div>

    <!-- Status -->
    <div>
        <label for="is_active" class="block text-sm font-medium text-gray-700 mb-2">স্ট্যাটাস</label>
        <select name="is_active" id="is_active" 
                class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
            <option value="1" {{ old('is_active', $category->is_active ?? true) ? 'selected' : '' }} class="bg-white">সক্রিয়</option>
            <option value="0" {{ !old('is_active', $category->is_active ?? true) ? 'selected' : '' }} class="bg-white">নিষ্ক্রিয়</option>
        </select>
        @error('is_active')
            <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
        @enderror
    </div>
</div>

<div class="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
    <a href="{{ route('admin.categories.index') }}" 
       class="px-6 py-3 text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 rounded-xl font-medium transition-all duration-300 bg-white hover:bg-gray-50 text-center">
        বাতিল
    </a>
    <button type="submit" 
            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 border border-blue-400 shadow-lg hover:shadow-blue-500/25">
        <i class="fas {{ isset($category) ? 'fa-save' : 'fa-plus-circle' }} mr-2"></i>
        {{ isset($category) ? 'ক্যাটাগরি আপডেট করুন' : 'ক্যাটাগরি তৈরি করুন' }}
    </button>
</div>

<script>
    // Auto-generate slug from name
    document.getElementById('name').addEventListener('input', function() {
        const name = this.value;
        const slugInput = document.getElementById('slug');
        
        // Only auto-generate if slug is empty or matches the previous auto-generated value
        if (!slugInput.value || slugInput.value === slugify(document.getElementById('name').defaultValue)) {
            slugInput.value = slugify(name);
        }
    });

    // // Image preview
    document.getElementById('image').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Create or update preview
                let preview = document.querySelector('.image-preview');
                if (!preview) {
                    preview = document.createElement('img');
                    preview.className = 'image-preview w-24 h-24 rounded-lg object-cover border border-gray-300';
                    document.querySelector('[class*="border-dashed"]').replaceWith(preview);
                }
                preview.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    function slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           
            .replace(/[^\w\-]+/g, '')      
            .replace(/\-\-+/g, '-')         
            .replace(/^-+/, '')            
            .replace(/-+$/, '');            
    }
</script>