@extends('admin.dashboard.layout')

@section('content')
<main class="p-6  mx-auto">
    <div class="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 class="text-2xl font-bold text-gray-800">Excel থেকে প্রশ্ন ইমপোর্ট</h2>

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
</main>
@endsection
