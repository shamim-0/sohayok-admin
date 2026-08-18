@extends('admin.dashboard.layout')

@section('content')
<main class="p-6">
    <div class="space-y-6">

        <!-- Add / Import Question Card -->
        <div class="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 class="text-2xl font-bold text-gray-800">প্রশ্ন যোগ / ইমপোর্ট</h2>

            <!-- Add Question Form -->
            <form action="{{ route('admin.question.store') }}" method="POST" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                @csrf

                <select name="subject_id" class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" required>
                    <option value="">বিষয় নির্বাচন করুন</option>
                    @foreach($subjects as $subject)
                        <option value="{{ $subject->id }}">{{ $subject->name }}</option>
                    @endforeach
                </select>

                <select name="topic_id" class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" required>
                    <option value="">টপিক নির্বাচন করুন</option>
                    @foreach($subjects as $subject)
                        @foreach($subject->topics as $topic)
                            <option value="{{ $topic->id }}">{{ $subject->name }} - {{ $topic->name }}</option>
                        @endforeach
                    @endforeach
                </select>

                <textarea name="question" placeholder="প্রশ্ন লিখুন"
                    class="border rounded px-3 py-2 col-span-1 md:col-span-2 focus:ring-2 focus:ring-blue-400"
                    rows="2" required></textarea>

                <input type="text" name="option_a" placeholder="Option A"
                    class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
                <input type="text" name="option_b" placeholder="Option B"
                    class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
                <input type="text" name="option_c" placeholder="Option C"
                    class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
                <input type="text" name="option_d" placeholder="Option D"
                    class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">

                <select name="correct_answer"
                    class="border rounded px-3 py-2 w-1/3 focus:ring-2 focus:ring-green-400" required>
                    <option value="">সঠিক উত্তর</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>

                <textarea name="explain" placeholder="ব্যাখ্যা (ঐচ্ছিক)"
                    class="border rounded px-3 py-2 col-span-1 md:col-span-2 focus:ring-2 focus:ring-gray-300"
                    rows="3"></textarea>

                <button class="col-span-1 md:col-span-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">সংরক্ষণ</button>
            </form>

            <!-- Import Excel Form -->
            <form action="{{ route('admin.question.import') }}" method="POST" enctype="multipart/form-data" class="flex flex-col md:flex-row gap-3 items-center">
                @csrf
                <select name="subject_id" class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" required>
                    <option value="">বিষয় নির্বাচন</option>
                    @foreach($subjects as $subject)
                        <option value="{{ $subject->id }}">{{ $subject->name }}</option>
                    @endforeach
                </select>

                <select name="topic_id" class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" required>
                    <option value="">টপিক নির্বাচন</option>
                    @foreach($subjects as $subject)
                        @foreach($subject->topics as $topic)
                            <option value="{{ $topic->id }}">{{ $subject->name }} - {{ $topic->name }}</option>
                        @endforeach
                    @endforeach
                </select>

                <input type="file" name="file" class="border px-3 py-2 rounded focus:ring-2 focus:ring-green-400" required>
                <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Excel থেকে ইমপোর্ট</button>
            </form>
        </div>

        <!-- Filter Questions -->
        <div class="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-3 items-center">
            <form action="{{ route('admin.question.index') }}" method="GET" class="flex flex-col md:flex-row gap-3 w-full">
                <select name="subject_id" class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 w-full md:w-1/3">
                    <option value="">বিষয় নির্বাচন করুন</option>
                    @foreach($subjects as $subject)
                        <option value="{{ $subject->id }}" {{ request('subject_id') == $subject->id ? 'selected' : '' }}>
                            {{ $subject->name }}
                        </option>
                    @endforeach
                </select>

                <select name="topic_id" class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 w-full md:w-1/3">
                    <option value="">টপিক নির্বাচন করুন</option>
                    @foreach($subjects as $subject)
                        @foreach($subject->topics as $topic)
                            <option value="{{ $topic->id }}" {{ request('topic_id') == $topic->id ? 'selected' : '' }}>
                                {{ $subject->name }} - {{ $topic->name }}
                            </option>
                        @endforeach
                    @endforeach
                </select>

                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Filter</button>
            </form>
        </div>

        <!-- Question Cards -->
        <div class="space-y-4">
            @foreach($questions as $q)
                <div class="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition">
                    <div class="flex justify-between items-start mb-2">
                        <p class="font-semibold text-gray-800">{{ $q->question }}</p>
                        <div class="flex gap-2">
                            <button onclick="toggleEdit({{ $q->id }})" class="text-blue-600 hover:underline">Edit</button>
                            <button onclick="confirmDelete({{ $q->id }})" class="text-red-500 hover:underline">Delete</button>
                        </div>
                    </div>

                    <!-- MCQ Options -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                        <span class="px-2 py-1 bg-gray-100 rounded {{ $q->correct_answer=='A'?'bg-green-200 font-bold':'' }}">A. {{ $q->option_a }}</span>
                        <span class="px-2 py-1 bg-gray-100 rounded {{ $q->correct_answer=='B'?'bg-green-200 font-bold':'' }}">B. {{ $q->option_b }}</span>
                        <span class="px-2 py-1 bg-gray-100 rounded {{ $q->correct_answer=='C'?'bg-green-200 font-bold':'' }}">C. {{ $q->option_c }}</span>
                        <span class="px-2 py-1 bg-gray-100 rounded {{ $q->correct_answer=='D'?'bg-green-200 font-bold':'' }}">D. {{ $q->option_d }}</span>
                    </div>

                    @if($q->explain)
                        <p class="text-gray-600 text-sm italic">Explain: {{ $q->explain }}</p>
                    @endif

                    <!-- Edit Form -->
                    <form id="editForm-{{ $q->id }}" action="{{ route('admin.question.update', $q->id) }}" method="POST" class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 hidden">
                        @csrf @method('PUT')
                        <input type="text" name="question" value="{{ $q->question }}" class="border px-2 py-1 rounded col-span-1 md:col-span-2" required>
                        <input type="text" name="option_a" value="{{ $q->option_a }}" class="border px-2 py-1 rounded">
                        <input type="text" name="option_b" value="{{ $q->option_b }}" class="border px-2 py-1 rounded">
                        <input type="text" name="option_c" value="{{ $q->option_c }}" class="border px-2 py-1 rounded">
                        <input type="text" name="option_d" value="{{ $q->option_d }}" class="border px-2 py-1 rounded">
                        <select name="correct_answer" class="border px-2 py-1 rounded">
                            <option value="A" {{ $q->correct_answer == 'A' ? 'selected' : '' }}>A</option>
                            <option value="B" {{ $q->correct_answer == 'B' ? 'selected' : '' }}>B</option>
                            <option value="C" {{ $q->correct_answer == 'C' ? 'selected' : '' }}>C</option>
                            <option value="D" {{ $q->correct_answer == 'D' ? 'selected' : '' }}>D</option>
                        </select>
                        <textarea name="explain" class="border px-2 py-1 rounded col-span-1 md:col-span-2" rows="2">{{ $q->explain }}</textarea>
                        <button class="bg-green-600 text-white px-3 py-1 rounded col-span-1 md:col-span-2 hover:bg-green-700 transition">Update</button>
                    </form>
                </div>
            @endforeach
        </div>
    </div>

    <!-- Delete Modal -->
    <div id="deleteModal" class="fixed inset-0 bg-black bg-opacity-40 hidden justify-center items-center z-50">
        <div class="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <h3 class="text-lg font-semibold mb-4">আপনি কি নিশ্চিত মুছতে চান?</h3>
            <div class="flex justify-center gap-4">
                <button id="cancelDelete" class="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400">না</button>
                <form id="deleteForm" method="POST" class="inline">
                    @csrf @method('DELETE')
                    <button class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">হ্যাঁ</button>
                </form>
            </div>
        </div>
    </div>

<script>
    function toggleEdit(id) {
        const form = document.getElementById('editForm-' + id);
        form.classList.toggle('hidden');
    }

    function confirmDelete(id) {
        const modal = document.getElementById('deleteModal');
        const form = document.getElementById('deleteForm');
        form.action = `/admin/panel/question/${id}`;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    document.getElementById('cancelDelete').addEventListener('click', () => {
        document.getElementById('deleteModal').classList.add('hidden');
    });
</script>
@endsection
