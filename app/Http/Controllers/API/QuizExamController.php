<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use App\Models\QuizQuestion;
use App\Models\QuizResult;
use Illuminate\Http\Request;

class QuizExamController extends Controller
{
    public function start_quiz($lessonId, $courseId)
    {
        $questions = QuizQuestion::where('lesson_id', $lessonId)->get();
        $exam = Lesson::find($lessonId);

        return response()->json([
            'exam' => $exam,
            'questions' => $questions
        ]);
    }



    public function submit_quiz(Request $request)
    {

        $validated = $request->validate([
            'lesson_id' => 'required|exists:lessons,id',
            'course_id' => 'required|exists:courses,id',
            'answers' => 'required|array',
            'negative_mark' => 'nullable|numeric|min:0',
            'total_correct' => 'required|integer|min:0',
            'total_wrong' => 'required|integer|min:0',
            'total_unanswered' => 'required|integer|min:0',
            'total_marks' => 'required|numeric|min:0',
            'total_questions' => 'required|integer|min:1',
            'obtained_marks' => 'required|numeric|min:0',
            'passing_status' => 'required|in:passed,failed',
            'time_spent' => 'required|integer|min:0',
        ]);

        $user_id = $request->input('user_id');


        $alreadySubmitted = QuizResult::where('user_id', $user_id)
            ->where('lesson_id', $validated['lesson_id'])
            ->exists();

        if ($alreadySubmitted) {
            return response()->json(['error' => 'আপনি এই কুইজটি ইতিমধ্যে সম্পন্ন করেছেন।'], 400);
        }


        $quizResult = QuizResult::create([
            'user_id' => $user_id,
            'lesson_id' => $validated['lesson_id'],
            'course_id' => $validated['course_id'],
            'answers' => $validated['answers'],
            'negative_mark' => $validated['negative_mark'] ?? 0,
            'total_correct' => $validated['total_correct'],
            'total_wrong' => $validated['total_wrong'],
            'total_unanswered' => $validated['total_unanswered'],
            'total_marks' => $validated['total_marks'],
            'total_questions' => $validated['total_questions'],
            'obtained_marks' => $validated['obtained_marks'],
            'passing_status' => $validated['passing_status'],
            'time_spent' => $validated['time_spent'],
            'submitted_at' => now(),
        ]);

        return response()->json(['message' => 'কুইজ সফলভাবে সম্পন্ন হয়েছে।', 'quiz_result' => $quizResult]);
    }



    public function get_user_results($lesson_id, $user_id)
    {
        $result = QuizResult::where('user_id', $user_id)
            ->where('lesson_id', $lesson_id)
            ->latest()
            ->first();

        $questions = QuizQuestion::where('lesson_id', $lesson_id)->get();

        return response()->json([
            'result' => $result,
            'questions' => $questions
        ]);
    }
}
