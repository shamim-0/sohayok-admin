<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Chapter;
use App\Models\Order;
use App\Models\StudentChapterProgress;
use App\Models\StudentProgress;
use Illuminate\Http\Request;

class ClassessController extends Controller
{

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

    public function index($id, $user_id)
    {
        $order = Order::where('course_id', $id)
            ->where('user_id', $user_id)
            ->where('status', 'completed')
            ->first();

        if (!$order) {
            return response()->json(['error' => 'এই কোর্স এ আপনার এক্সেস নেই'], 403);
        }

        $chapters = Chapter::where('course_id', $id)
            ->with([
                'lessons' => function ($query) use ($id) {
                    $query->orderBy('order');
                },
                'lessons.result'
            ])
            ->orderBy('order')
            ->get();


        $studentProgress = $this->getStudentProgress($id, $user_id);
        return response()->json([
            'chapters' => $chapters,
            'studentProgress' => $studentProgress,
            'course_id' => $id
        ]);
    }
}
