<?php

namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\SelfExamResult;
use App\Models\Subject;
use App\Models\Topic;
use Illuminate\Http\Request;

class SmartTestAPICOntroller extends Controller
{
    public function index()
    {
        $subjects = Subject::orderBy('order')->get();
        return response()->json([
            'subjects' => $subjects
        ]);

    }

    public function subject($id)
    {
        $subject = Subject::find($id);
        $topics = Topic::where('subject_id', $id)->orderBy('order')->get();

        return response()->json([
            'subject' => $subject,
            'topics' => $topics
        ]);
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

        return response()->json([
            'questions' => $questions,
            'time' => $time,
            'negative' => $negative,
            'subject' => $subject,
        ]);
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
            'user_id' => 'required',
        ]);

        $result = SelfExamResult::create([
            'user_id' =>  $data['user_id'],
            'subject' => $data['subject'],
            'correct' => $data['correct'],
            'wrong' => $data['wrong'],
            'obtain_mark' => $data['obtain_mark'],
            'answersheet' => $data['answersheet'],
            'taken_time' => $data['taken_time'],
        ]);

        return response()->json([
            'message' => 'Exam submitted successfully',
            'result' => $result
        ]);
    }
}