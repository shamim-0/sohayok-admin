@extends('admin.dashboard.layout')

@section('content')
<main class="p-6">
    <div class=" bg-white p-6 rounded-xl shadow">
        <h2 class="text-xl font-semibold mb-4">নতুন টপিক যোগ করুন</h2>

        <form action="{{ route('admin.topic.store') }}" method="POST" class="flex flex-wrap gap-3 mb-6">
            @csrf
            <select name="subject_id" id="subjectSelect" class="border rounded-lg px-3 py-2 w-1/3" required>
                <option value="">বিষয় নির্বাচন করুন</option>
                @foreach($subjects as $subject)
                    <option value="{{ $subject->id }}" {{ $selectedSubjectId == $subject->id ? 'selected' : '' }}>
                        {{ $subject->name }}
                    </option>
                @endforeach
            </select>

            <input type="text" name="name" placeholder="টপিকের নাম (যেমন: ব্যাকরণ)" class="border rounded-lg px-3 py-2 w-1/3" required>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">সংরক্ষণ</button>
        </form>

        <h2 class="text-lg font-semibold mb-3">টপিক তালিকা ({{ $subjects->firstWhere('id', $selectedSubjectId)?->name }})</h2>

        <ul id="topicList" class="space-y-2">
            @foreach($topics as $topic)
            <li data-id="{{ $topic->id }}" class="flex justify-between items-center bg-white px-4 py-2 rounded-lg cursor-move border">
                <span>{{ $topic->name }}</span>
                <div class="flex gap-2 items-center">
                    <!-- Edit -->
                    <form action="{{ route('admin.topic.update', $topic) }}" method="POST" class="flex items-center gap-2">
                        @csrf @method('PUT')
                        <input type="text" name="name" value="{{ $topic->name }}" class="border px-2 py-1 rounded w-28">
                        <button class="text-blue-600 hover:underline">Update</button>
                    </form>

                    <!-- Delete -->
                    <button onclick="confirmDelete({{ $topic->id }})" class="text-red-500 hover:text-red-700">
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
    // Drag & Drop reorder
    new Sortable(document.getElementById('topicList'), {
        animation: 150,
        onEnd: function (evt) {
            let order = [];
            document.querySelectorAll('#topicList li').forEach((li) => {
                order.push(li.dataset.id);
            });

            fetch('{{ route('admin.topic.reorder') }}', {
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
        form.action = `/admin/panel/topic/${id}`;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    document.getElementById('cancelDelete').addEventListener('click', () => {
        document.getElementById('deleteModal').classList.add('hidden');
    });

    // Change subject => reload page with subject filter
    document.getElementById('subjectSelect').addEventListener('change', function() {
        const subjectId = this.value;
        window.location.href = `?subject_id=${subjectId}`;
    });
</script>
@endsection
