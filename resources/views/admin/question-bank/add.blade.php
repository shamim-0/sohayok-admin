@extends('admin.dashboard.layout')

@section('content')
<main class="p-6 mx-auto">
    <div class="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 class="text-2xl font-bold text-gray-800">প্রশ্ন যোগ করুন</h2>

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

            <textarea name="question" placeholder="প্রশ্ন লিখুন" class="border rounded px-3 py-2 col-span-1 md:col-span-2 focus:ring-2 focus:ring-blue-400" rows="2" required></textarea>

            <input type="text" name="option_a" placeholder="Option A" class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
            <input type="text" name="option_b" placeholder="Option B" class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
            <input type="text" name="option_c" placeholder="Option C" class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">
            <input type="text" name="option_d" placeholder="Option D" class="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400">

            <select name="correct_answer" class="border rounded px-3 py-2 w-1/3 focus:ring-2 focus:ring-green-400" required>
                <option value="">সঠিক উত্তর</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>

            <textarea name="explain" placeholder="ব্যাখ্যা (ঐচ্ছিক)" class="border rounded px-3 py-2 col-span-1 md:col-span-2 focus:ring-2 focus:ring-gray-300" rows="3"></textarea>

            <button class="col-span-1 md:col-span-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">সংরক্ষণ</button>
        </form>
    </div>
</main>
@endsection
