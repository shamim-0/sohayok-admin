<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;
use App\Models\Topic;

class TopicController extends Controller
{
    public function index(Request $request)
    {
        $subjects = Subject::orderBy('order')->get();
        $selectedSubjectId = $request->get('subject_id', $subjects->first()?->id);

        $topics = Topic::where('subject_id', $selectedSubjectId)
            ->orderBy('order')
            ->get();

        return view('admin.question-bank.topic', compact('subjects', 'topics', 'selectedSubjectId'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'subject_id' => 'required|exists:subjects,id',
            'name' => 'required|string|max:255',
        ]);

        $maxOrder = Topic::where('subject_id', $request->subject_id)->max('order') ?? 0;

        Topic::create([
            'subject_id' => $request->subject_id,
            'name' => $request->name,
            'order' => $maxOrder + 1,
        ]);

        return redirect()->back()->with('success', 'টপিক সংরক্ষণ করা হয়েছে।');
    }

    public function update(Request $request, Topic $topic)
    {
        $request->validate(['name' => 'required']);
        $topic->update(['name' => $request->name]);
        return back()->with('success', 'টপিক আপডেট হয়েছে।');
    }

    public function destroy(Topic $topic)
    {
        $topic->delete();
        return back()->with('success', 'টপিক মুছে ফেলা হয়েছে।');
    }

    public function reorder(Request $request)
    {
        foreach ($request->order as $index => $id) {
            Topic::where('id', $id)->update(['order' => $index + 1]);
        }
        return response()->json(['status' => 'success']);
    }
}
