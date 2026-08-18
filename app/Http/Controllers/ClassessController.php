<?php
// app/Http/Controllers/ClassessController.php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Lesson;
use App\Models\Order;
use App\Models\StudentProgress;
use App\Models\StudentChapterProgress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClassessController extends Controller
{
    public function index(Request $request, $id)
    {
        $order = Order::where('course_id', $id)
            ->where('user_id', Auth::id())
            ->where('status', 'completed')
            ->first();

        if (!$order) {
            return redirect('/')->with('error', 'এই কোর্স এ আপনার এক্সেস নেই');
        }

        $chapters = Chapter::where('course_id', $id)
            ->with(['lessons' => function($query) use ($id) {
                $query->orderBy('order');
            }, 'lessons.result'])
            ->orderBy('order')
            ->get();

        // dd($chapters);

        $studentProgress = $this->getStudentProgress($id, Auth::id());

        $activelesson = $request->activelesson;

        
        return Inertia::render('student/classess/index', [
            'chapters' => $chapters,
            'studentProgress' => $studentProgress,
            'course_id' => $id,
            'currentActiveLesson' => $activelesson
        ]);
    }

    public function updateLessonProgress(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'chapter_id' => 'required|exists:chapters,id',
            'lesson_id' => 'required|exists:lessons,id',
            'is_completed' => 'required|boolean'
        ]);

        try {
            $userId = Auth::id();
            $courseId = $request->course_id;
            $chapterId = $request->chapter_id;
            $lessonId = $request->lesson_id;
            $isCompleted = $request->is_completed;

            // Update lesson progress
            $progress = StudentProgress::updateOrCreate(
                [
                    'user_id' => $userId,
                    'course_id' => $courseId,
                    'lesson_id' => $lessonId
                ],
                [
                    'chapter_id' => $chapterId,
                    'is_completed' => $isCompleted,
                    'completed_at' => $isCompleted ? now() : null
                ]
            );

            // Update chapter progress
            $this->updateChapterProgress($userId, $courseId, $chapterId);

            return response()->json([
                'success' => true,
                'progress' => $progress,
                'message' => $isCompleted ? 'লেসন সম্পূর্ণ হয়েছে!' : 'লেসন অসম্পূর্ণ করা হয়েছে'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'প্রোগ্রেস সেভ করতে সমস্যা হয়েছে'
            ], 500);
        }
    }

    private function updateChapterProgress($userId, $courseId, $chapterId)
    {
        $totalLessons = Lesson::where('chapter_id', $chapterId)->count();
        $completedLessons = StudentProgress::where('user_id', $userId)
            ->where('course_id', $courseId)
            ->where('chapter_id', $chapterId)
            ->where('is_completed', true)
            ->count();

        $progressPercentage = $totalLessons > 0 ? ($completedLessons / $totalLessons) * 100 : 0;

        StudentChapterProgress::updateOrCreate(
            [
                'user_id' => $userId,
                'course_id' => $courseId,
                'chapter_id' => $chapterId
            ],
            [
                'completed_lessons' => $completedLessons,
                'total_lessons' => $totalLessons,
                'progress_percentage' => $progressPercentage,
                'started_at' => $completedLessons > 0 ? now() : null,
                'completed_at' => $completedLessons == $totalLessons && $totalLessons > 0 ? now() : null
            ]
        );
    }

    private function getStudentProgress($courseId, $userId)
    {
        $lessonProgress = StudentProgress::where('user_id', $userId)
            ->where('course_id', $courseId)
            ->get()
            ->keyBy('lesson_id');

        $chapterProgress = StudentChapterProgress::where('user_id', $userId)
            ->where('course_id', $courseId)
            ->get()
            ->keyBy('chapter_id');

        return [
            'lessons' => $lessonProgress,
            'chapters' => $chapterProgress
        ];
    }

    public function getCourseProgress($courseId)
    {
        $userId = Auth::id();
        
        $totalLessons = Lesson::whereHas('chapter', function($query) use ($courseId) {
            $query->where('course_id', $courseId);
        })->count();

        $completedLessons = StudentProgress::where('user_id', $userId)
            ->where('course_id', $courseId)
            ->where('is_completed', true)
            ->count();

        $overallProgress = $totalLessons > 0 ? ($completedLessons / $totalLessons) * 100 : 0;

        $chapterProgress = StudentChapterProgress::where('user_id', $userId)
            ->where('course_id', $courseId)
            ->with('chapter')
            ->get();

        return response()->json([
            'overall_progress' => $overallProgress,
            'completed_lessons' => $completedLessons,
            'total_lessons' => $totalLessons,
            'chapter_progress' => $chapterProgress
        ]);
    }
}