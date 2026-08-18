@extends('admin.dashboard.layout')

@section('content')
<main class="p-6">
    <div class=" bg-white p-6 rounded-xl shadow">
        <h2 class="text-xl font-semibold mb-4">বিষয় যোগ করুন</h2>

        <form action="{{ route('admin.subject.store') }}" method="POST" enctype="multipart/form-data" class="flex gap-3 mb-6">
            @csrf
            <input type="text" name="name" placeholder="বিষয়ের নাম (যেমন: বাংলা)" class="border rounded-lg px-3 py-2 w-1/3" required>
            <input type="file" name="icon" accept="image/*" class="border rounded-lg px-3 py-2 w-1/3">
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">সংরক্ষণ</button>
        </form>

        <h2 class="text-lg font-semibold mb-3">বিষয় তালিকা</h2>

        <ul id="subjectList" class="space-y-2">
            @foreach($subjects as $subject)
            <li data-id="{{ $subject->id }}" class="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg cursor-move">
                <div class="flex items-center gap-3">
                    @if($subject->icon)
                        <img src="{{ asset('storage/' . $subject->icon) }}" alt="{{ $subject->name }}" class="w-8 h-8 rounded-full object-cover">
                    @else
                        <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">📘</div>
                    @endif
                    <span class="font-medium">{{ $subject->name }}</span>
                </div>

                <div class="flex gap-2 items-center">
                    <!-- Edit -->
                    <form action="{{ route('admin.subject.update', $subject) }}" method="POST" enctype="multipart/form-data" class="flex items-center gap-2">
                        @csrf @method('PUT')
                        <input type="text" name="name" value="{{ $subject->name }}" class="border px-2 py-1 rounded w-28">
                        <input type="file" name="icon" class="border px-2 py-1 rounded w-40">
                        <button class="text-blue-600 hover:underline">Update</button>
                    </form>

                    <!-- Delete -->
                    <button onclick="confirmDelete({{ $subject->id }})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </li>
            @endforeach
        </ul>
    </div>

    <!-- Delete Confirmation Modal -->
    <div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-40 hidden justify-center items-center">
        <div class="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <h3 class="text-lg font-semibold mb-4">আপনি কি নিশ্চিত মুছতে চান?</h3>
            <div class="flex justify-center gap-4">
                <button id="cancelDelete" class="bg-gray-300 px-4 py-2 rounded-lg">না</button>
                <form id="deleteForm" method="POST" class="inline">
                    @csrf @method('DELETE')
                    <button class="bg-red-600 text-white px-4 py-2 rounded-lg">হ্যাঁ</button>
                </form>
            </div>
        </div>
    </div>

</main>

<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"></script>
<script>
    const el = document.getElementById('subjectList');
    new Sortable(el, {
        animation: 150,
        onEnd: function (evt) {
            let order = [];
            document.querySelectorAll('#subjectList li').forEach((li) => {
                order.push(li.dataset.id);
            });

            fetch('{{ route('admin.subject.reorder') }}', {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ order })
            });
        }
    });

    // Delete modal
    function confirmDelete(id) {
        const modal = document.getElementById('deleteModal');
        const form = document.getElementById('deleteForm');
        form.action = `/admin/panel/subject/${id}`;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    document.getElementById('cancelDelete').addEventListener('click', () => {
        document.getElementById('deleteModal').classList.add('hidden');
    });
</script>
@endsection
