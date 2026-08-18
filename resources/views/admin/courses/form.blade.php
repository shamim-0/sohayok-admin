<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Left Column -->
    <div class="lg:col-span-2 space-y-6">
        <!-- Title -->
        <div>
            <label for="title" class="block text-sm font-medium text-gray-700 mb-2">কোর্সের শিরোনাম</label>
            <input type="text" name="title" id="title" value="{{ old('title', $course->title ?? '') }}" 
                   class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required>
            @error('title')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
        </div>

        <!-- Slug -->
        <div>
            <label for="slug" class="block text-sm font-medium text-gray-700 mb-2">Slug</label>
            <input type="text" name="slug" id="slug" value="{{ old('slug', $course->slug ?? '') }}" 
                   class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
            @error('slug')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
            <p class="text-gray-500 text-xs mt-1">খালি রাখলে স্বয়ংক্রিয়ভাবে তৈরি হবে</p>
        </div>

        <!-- Description -->
        <div>
            <label for="description" class="block text-sm font-medium text-gray-700 mb-2">বর্ণনা</label>
            <textarea name="description" id="description" rows="4"
                      class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required>{{ old('description', $course->description ?? '') }}</textarea>
            @error('description')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
        </div>

        <!-- More Description -->
        <div>
            <label for="more_description" class="block text-sm font-medium text-gray-700 mb-2">বিস্তারিত বর্ণনা</label>
            <textarea name="more_description" id="more_description" rows="6"
                      class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">{{ old('more_description', $course->more_description ?? '') }}</textarea>
            @error('more_description')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
        </div>

        <!-- Social Links -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- WhatsApp Link -->
            <div>
                <label for="whatsapp_link" class="block text-sm font-medium text-gray-700 mb-2">WhatsApp Group Link</label>
                <input type="url" name="whatsapp_link" id="whatsapp_link" value="{{ old('whatsapp_link', $course->whatsapp_link ?? '') }}" 
                       class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                @error('whatsapp_link')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Facebook Link -->
            <div>
                <label for="facebook_link" class="block text-sm font-medium text-gray-700 mb-2">Facebook Group Link</label>
                <input type="url" name="facebook_link" id="facebook_link" value="{{ old('facebook_link', $course->facebook_link ?? '') }}" 
                       class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                @error('facebook_link')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Telegram Link -->
            <div class="md:col-span-2">
                <label for="telegram_link" class="block text-sm font-medium text-gray-700 mb-2">Telegram Channel Link</label>
                <input type="url" name="telegram_link" id="telegram_link" value="{{ old('telegram_link', $course->telegram_link ?? '') }}" 
                       class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                @error('telegram_link')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>
        </div>
    </div>

    <!-- Right Column -->
    <div class="space-y-6">
        <!-- Thumbnail -->
        <div>
            <label for="thumbnail" class="block text-sm font-medium text-gray-700 mb-2">থাম্বনেইল</label>
            <div class="bg-gray-50 border border-gray-300 rounded-xl p-4 text-center">
                @if(isset($course) && $course->thumbnail)
                    <img id="thumbnailPreview" src="{{ $course->thumbnail }}" alt="Thumbnail Preview" class="w-full h-48 object-cover rounded-lg mb-3">
                @else
                    <img id="thumbnailPreview" src="https://via.placeholder.com/400x300?text=Thumbnail+Preview" alt="Thumbnail Preview" class="w-full h-48 object-cover rounded-lg mb-3">
                @endif
                <input type="file" name="thumbnail" id="thumbnail" accept="image/*" 
                       class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                       onchange="previewImage(this)">
                @error('thumbnail')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>
        </div>

        <!-- Category -->
        <div>
            <label for="category_id" class="block text-sm font-medium text-gray-700 mb-2">ক্যাটাগরি</label>
            <select name="category_id" id="category_id" 
                    class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required>
                <option value="" class="bg-white">ক্যাটাগরি নির্বাচন করুন</option>
                @foreach($categories as $category)
                    <option value="{{ $category->id }}" {{ old('category_id', $course->category_id ?? '') == $category->id ? 'selected' : '' }} class="bg-white">
                        {{ $category->name }}
                    </option>
                @endforeach
            </select>
            @error('category_id')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
        </div>

        <!-- Status -->
        <div>
            <label for="status" class="block text-sm font-medium text-gray-700 mb-2">স্ট্যাটাস</label>
            <select name="status" id="status" 
                    class="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required>
                <option value="draft" {{ old('status', $course->status ?? 'draft') == 'draft' ? 'selected' : '' }} class="bg-white">খসড়া</option>
                <option value="published" {{ old('status', $course->status ?? '') == 'published' ? 'selected' : '' }} class="bg-white">প্রকাশিত</option>
                <option value="archived" {{ old('status', $course->status ?? '') == 'archived' ? 'selected' : '' }} class="bg-white">আর্কাইভড</option>
            </select>
            @error('status')
                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
            @enderror
        </div>

        <!-- Pricing -->
        <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">মূল্য নির্ধারণ</h3>
            
            <!-- Regular Price -->
            <div class="mb-4">
                <label for="price" class="block text-sm font-medium text-gray-700 mb-2">নিয়মিত মূল্য</label>
                <div class="relative">
                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">৳</span>
                    <input type="number" name="price" id="price" value="{{ old('price', $course->price ?? '0') }}" step="0.01" min="0"
                           class="w-full bg-white border border-gray-300 rounded-xl pl-8 pr-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" required>
                </div>
                @error('price')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Offer Price -->
            <div>
                <label for="offer_price" class="block text-sm font-medium text-gray-700 mb-2">অফার মূল্য (ঐচ্ছিক)</label>
                <div class="relative">
                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">৳</span>
                    <input type="number" name="offer_price" id="offer_price" value="{{ old('offer_price', $course->offer_price ?? '') }}" step="0.01" min="0"
                           class="w-full bg-white border border-gray-300 rounded-xl pl-8 pr-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                </div>
                @error('offer_price')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
                <p class="text-gray-500 text-xs mt-1">খালি রাখলে কোন অফার মূল্য থাকবে না</p>
            </div>
        </div>
    </div>
</div>

<div class="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
    <a href="{{ route('admin.courses.index') }}" 
       class="px-6 py-3 text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 rounded-xl font-medium transition-all duration-300 bg-white hover:bg-gray-50 text-center">
        বাতিল
    </a>
    <button type="submit" 
            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 border border-blue-400 shadow-lg hover:shadow-blue-500/25">
        <i class="fas {{ isset($course) ? 'fa-save' : 'fa-plus-circle' }} mr-2"></i>
        {{ isset($course) ? 'কোর্স আপডেট করুন' : 'কোর্স তৈরি করুন' }}
    </button>
</div>

<script>
    // Auto-generate slug from title
    document.getElementById('title').addEventListener('input', function() {
        const title = this.value;
        const slugInput = document.getElementById('slug');
        
        // Only auto-generate if slug is empty or matches the previous auto-generated value
        if (!slugInput.value || slugInput.value === slugify(document.getElementById('title').defaultValue)) {
            slugInput.value = slugify(title);
        }
    });

    function slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }

    // Thumbnail preview
    function previewImage(input) {
        const preview = document.getElementById('thumbnailPreview');
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
</script>