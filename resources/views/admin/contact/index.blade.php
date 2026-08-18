@extends('admin.dashboard.layout')

@section('content')
<div class="flex-1 p-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
            <h1 class="text-2xl font-bold text-gray-800">ম্যাসেজ</h1>
            <p class="text-gray-600 mt-1">যোগাযোগ ম্যাসেজ দেখুন</p>
        </div>
        <div class="flex items-center gap-3">
            <div class="bg-blue-50 px-3 py-2 rounded-lg">
                <span class="text-blue-600 font-semibold">মোট ম্যাসেজ: {{ $contact->total() }}</span>
            </div>
            <div class="bg-red-50 px-3 py-2 rounded-lg">
                @php
                    $unreadCount = \App\Models\Contact::where('status', 0)->count();
                @endphp
                <span class="text-red-600 font-semibold">নতুন: {{ $unreadCount }}</span>
            </div>
        </div>
    </div>

    <!-- Messages List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <!-- Table Header -->
        <div class="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700">
            <div class="col-span-1">#</div>
            <div class="col-span-2">নাম</div>
            <div class="col-span-2">ইমেইল</div>
            <div class="col-span-2">ফোন</div>
            <div class="col-span-3">বার্তা</div>
            <div class="col-span-1">স্ট্যাটাস</div>
            <div class="col-span-1">একশন</div>
        </div>

        <!-- Messages -->
        <div class="divide-y divide-gray-200">
            @forelse($contact as $index => $message)
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors duration-200 
                {{ $message->status == 0 ? 'bg-blue-50' : '' }}">
                <!-- Serial - Mobile View -->
                <div class="md:hidden flex justify-between items-center mb-2">
                    <span class="text-gray-600 font-medium">#{{ $index + 1 + (($contact->currentPage() - 1) * $contact->perPage()) }}</span>
                    <div class="flex items-center gap-2">
                        @if($message->status == 0)
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            নতুন
                        </span>
                        @else
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            পড়া
                        </span>
                        @endif
                    </div>
                </div>

                <!-- Name -->
                <div class="md:col-span-2">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {{ substr($message->name, 0, 1) }}
                        </div>
                        <div>
                            <span class="text-gray-800 font-medium block">{{ $message->name }}</span>
                            <span class="md:hidden text-xs text-gray-500">{{ $message->email }}</span>
                        </div>
                    </div>
                </div>

                <!-- Email - Hidden on mobile -->
                <div class="hidden md:block md:col-span-2">
                    <a href="mailto:{{ $message->email }}" class="text-blue-600 hover:text-blue-800 hover:underline">
                        {{ $message->email }}
                    </a>
                </div>

                <!-- Phone -->
                <div class="md:col-span-2">
                    <a href="tel:{{ $message->phone }}" class="text-gray-700 hover:text-gray-900">
                        {{ $message->phone }}
                    </a>
                </div>

                <!-- Message -->
                <div class="md:col-span-3">
                    <div class="group relative">
                        <p class="text-gray-600 line-clamp-2 cursor-help" title="{{ $message->mesage }}">
                            {{ Str::limit($message->mesage, 80) }}
                        </p>
                        <div class="text-xs text-gray-500 mt-1">
                            {{ $message->created_at->format('M d, Y h:i A') }}
                        </div>
                    </div>
                </div>

                <!-- Status - Hidden on mobile -->
                <div class="hidden md:block md:col-span-1">
                    @if($message->status == 0)
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        নতুন
                    </span>
                    @else
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        পড়া
                    </span>
                    @endif
                </div>

                <!-- Actions -->
                <div class="md:col-span-1">
                    <div class="flex items-center gap-2 justify-end md:justify-start">
                        <!-- View Button -->
                        <button onclick="viewMessage({{ $message->id }})" 
                                class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                title="ম্যাসেজ দেখুন">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                        </button>

                        <!-- Mark as Read/Unread -->
                        @if($message->status == 0)
                        <form action="{{ route('contact.mark.read', $message->id) }}" method="POST" class="inline">
                            @csrf
                            <button type="submit" 
                                    class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                                    title="পড়া হিসেবে মার্ক করুন">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                            </button>
                        </form>
                        @endif

                        <!-- Delete Button -->
                        <form action="{{ route('contact.destroy', $message->id) }}" method="POST" class="inline" 
                              onsubmit="return confirm('আপনি কি এই ম্যাসেজটি ডিলিট করতে চান?')">
                            @csrf
                            @method('DELETE')
                            <button type="submit" 
                                    class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                    title="ম্যাসেজ ডিলিট করুন">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            @empty
            <!-- Empty State -->
            <div class="col-span-12 py-12 text-center">
                <div class="max-w-md mx-auto">
                    <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">কোন ম্যাসেজ নেই</h3>
                    <p class="text-gray-500">এখনও কোন যোগাযোগ ম্যাসেজ পাওয়া যায়নি।</p>
                </div>
            </div>
            @endforelse
        </div>

        <!-- Pagination -->
        @if($contact->hasPages())
        <div class="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="text-sm text-gray-700">
                    দেখানো হচ্ছে {{ $contact->firstItem() }} থেকে {{ $contact->lastItem() }} পর্যন্ত, মোট {{ $contact->total() }} ম্যাসেজের মধ্যে
                </div>
                <div class="flex items-center gap-1">
                    <!-- Previous Page Link -->
                    @if($contact->onFirstPage())
                    <span class="px-3 py-1 text-gray-400 bg-gray-100 rounded-lg cursor-not-allowed">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </span>
                    @else
                    <a href="{{ $contact->previousPageUrl() }}" class="px-3 py-1 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </a>
                    @endif

                    <!-- Page Numbers -->
                    @foreach($contact->getUrlRange(1, $contact->lastPage()) as $page => $url)
                        @if($page == $contact->currentPage())
                        <span class="px-3 py-1 text-white bg-blue-600 border border-blue-600 rounded-lg font-medium">
                            {{ $page }}
                        </span>
                        @else
                        <a href="{{ $url }}" class="px-3 py-1 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            {{ $page }}
                        </a>
                        @endif
                    @endforeach

                    <!-- Next Page Link -->
                    @if($contact->hasMorePages())
                    <a href="{{ $contact->nextPageUrl() }}" class="px-3 py-1 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                    @else
                    <span class="px-3 py-1 text-gray-400 bg-gray-100 rounded-lg cursor-not-allowed">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </span>
                    @endif
                </div>
            </div>
        </div>
        @endif
    </div>
</div>

<!-- Message View Modal -->
<div id="messageModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 hidden">
    <div class="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div class="flex justify-between items-center p-6 border-b border-gray-200">
            <h3 class="text-xl font-bold text-gray-800">ম্যাসেজ ডিটেইলস</h3>
            <button onclick="closeModal()" class="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
        
        <div class="p-6 space-y-6 overflow-y-auto max-h-[60vh]">
            <!-- Sender Info -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">নাম</label>
                    <p id="modalName" class="text-gray-900 font-semibold"></p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">ইমেইল</label>
                    <a id="modalEmail" class="text-blue-600 hover:underline"></a>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">ফোন</label>
                    <a id="modalPhone" class="text-gray-900 hover:text-gray-700"></a>
                </div>
            </div>

            <!-- Message -->
            <div>
                <label class="block text-sm font-medium text-gray-500 mb-3">বার্তা</label>
                <div id="modalMessage" class="p-4 bg-gray-50 rounded-lg text-gray-700 leading-relaxed whitespace-pre-wrap"></div>
            </div>

            <!-- Timestamp -->
            <div class="flex justify-between items-center pt-4 border-t border-gray-200">
                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">পাঠানোর সময়</label>
                    <p id="modalTime" class="text-gray-600 text-sm"></p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-500 mb-1">স্ট্যাটাস</label>
                    <span id="modalStatus" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"></span>
                </div>
            </div>
        </div>

        <div class="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
            <button onclick="closeModal()" class="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                বন্ধ করুন
            </button>
        </div>
    </div>
</div>

<style>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Smooth transitions */
* {
    transition-property: color, background-color, border-color, transform, box-shadow;
    transition-duration: 200ms;
}

/* Responsive design */
@media (max-width: 768px) {
    .grid > div {
        margin-bottom: 0.5rem;
    }
}
</style>

<script>
function viewMessage(messageId) {
    // Fetch message details via AJAX
    fetch(`/admin/panel/contact/${messageId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('modalName').textContent = data.name;
            document.getElementById('modalEmail').textContent = data.email;
            document.getElementById('modalEmail').href = `mailto:${data.email}`;
            document.getElementById('modalPhone').textContent = data.phone;
            document.getElementById('modalPhone').href = `tel:${data.phone}`;
            document.getElementById('modalMessage').textContent = data.mesage;
            document.getElementById('modalTime').textContent = new Date(data.created_at).toLocaleString('bn-BD');
            
            const statusElement = document.getElementById('modalStatus');
            if (data.status == 0) {
                statusElement.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800';
                statusElement.textContent = 'নতুন';
            } else {
                statusElement.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800';
                statusElement.textContent = 'পড়া';
            }
            
            document.getElementById('messageModal').classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error fetching message:', error);
            alert('ম্যাসেজ লোড করতে সমস্যা হয়েছে।');
        });
}

function closeModal() {
    document.getElementById('messageModal').classList.add('hidden');
}

// Close modal when clicking outside
document.getElementById('messageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
</script>
@endsection