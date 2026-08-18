<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\SelfExamResult;
use App\Models\Subject;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SelfTestController extends Controller
{
    public function index()
    {

        $subjects = Subject::orderBy('order')->get();


        return Inertia::render('student/self-test/index', compact('subjects'));
    }
    public function subject($id)
    {
        $subject = Subject::find($id);
        $topics = Topic::where('subject_id', $id)->orderBy('order')->get();
        return Inertia::render('student/self-test/subject', compact('subject', 'topics'));
    }
    public function start_exam(Request $request)
    {

        $topic = $request->topic;
        $questions_number = $request->questions;
        $time = $request->time;
        $negative = $request->negative;
        $subject = $request->subject;


        $questions = Question::where('topic_id', $topic)
            ->inRandomOrder()
            ->take($questions_number)
            ->get();

        return Inertia::render('student/self/exam', compact('questions', 'time', 'negative', 'subject'));

    }





    public function submit_exam(Request $request)
    {
        $data = $request->validate([
            'correct' => 'required|integer',
            'wrong' => 'required|integer',
            'obtain_mark' => 'required|numeric',
            'answersheet' => 'required|array',
            'taken_time' => 'required|integer',
            'subject' => 'required|string',
        ]);

        $result = SelfExamResult::create([
            'user_id' => Auth::id(),
            'subject' => $data['subject'],
            'correct' => $data['correct'],
            'wrong' => $data['wrong'],
            'obtain_mark' => $data['obtain_mark'],
            'answersheet' => $data['answersheet'],
            'taken_time' => $data['taken_time'],
        ]);

        // Redirect to result page with the result ID
        return redirect()->route('self.result', ['id' => $result->id])
            ->with('success', 'পরীক্ষা সফলভাবে জমা হয়েছে!');
    }



public function show_result($id)
{
    $result = SelfExamResult::findOrFail($id);
    $answers = $result->answersheet;

    // এখানে প্রশ্নগুলো বের করবো যেগুলোর ID আছে answersheet এ
    $questionIds = array_keys($answers);
    $questions = Question::whereIn('id', $questionIds)->get();

    return Inertia::render('student/self/result', [
        'result' => $result,
        'questions' => $questions,
    ]);
}




}
