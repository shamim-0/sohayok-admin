<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use App\Models\QuizQuestion;
use App\Models\QuizResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class QuizExamController extends Controller
{
    public function start_quiz($lessonId, $courseId)
    {
        $questions = QuizQuestion::where('lesson_id', $lessonId)->get();
        $exam = Lesson::find($lessonId);

        return Inertia::render('student/quiz/index', compact('questions', 'exam'));

    }




    public function submit_quiz(Request $request)
    {
        // Validate the request data
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


        $alreadySubmitted = QuizResult::where('user_id', Auth::id())
            ->where('lesson_id', $validated['lesson_id'])
            ->exists();

        if ($alreadySubmitted) {
            return redirect()->back()->with('error', 'আপনি এই কুইজটি ইতিমধ্যে সম্পন্ন করেছেন।');
        }


        $quizResult = QuizResult::create([
            'user_id' => Auth::id(),
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

         return redirect("/student/quiz/results/{$validated['lesson_id']}");
    }


    public function get_user_results($lesson_id)
    {
        $result = QuizResult::where('user_id', Auth::id())
            ->where('lesson_id', $lesson_id)
            ->latest()
            ->first();

        // Get the questions for this lesson
        $questions = QuizQuestion::where('lesson_id', $lesson_id)->get();


        // dd($result);

        return Inertia::render('student/quiz/result', [
            'result' => $result,
            'questions' => $questions
        ]);
    }
public function check_results($lesson_id)
{
    $result = QuizResult::where('user_id', Auth::id())
        ->where('lesson_id', $lesson_id)
        ->latest()
        ->first();

    return response()->json(['result' => $result]);
}

    public function get_quiz_statistics($course_id)
    {
        $stats = QuizResult::where('user_id', Auth::id())
            ->where('course_id', $course_id)
            ->selectRaw('
                              COUNT(*) as total_attempts,
                              AVG(obtained_marks) as average_marks,
                              MAX(obtained_marks) as highest_marks,
                              SUM(CASE WHEN passing_status = "passed" THEN 1 ELSE 0 END) as passed_attempts
                          ')
            ->first();

        return response()->json([
            'success' => true,
            'statistics' => $stats
        ]);
    }
}
