<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\ExamSubmission;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentWrittenExamController extends Controller
{
    public function exam($id)
    {
        // Get all exams for this course with status active and not expired
        $exams = Exam::where('course_id', $id)
            ->where(function ($query) {
                $query->where('status', 'active')
                    ->orWhere(function ($q) {
                        $q->where('status', '!=', 'expired')
                            ->where('deadline', '>', now());
                    });
            })
            ->with([
                'submissions' => function ($query) {
                    $query->where('student_id', auth()->id());
                }
            ])
            ->orderBy('deadline', 'desc')
            ->get()
            ->map(function ($exam) {
                // Add additional info for frontend
                $exam->is_submitted = $exam->submissions->isNotEmpty();
                $exam->is_expired = $exam->deadline < now();
                $exam->can_submit = !$exam->is_expired && $exam->status == 'active' && !$exam->is_submitted;
                $exam->submission = $exam->submissions->first();
                $exam->formatted_deadline = $exam->deadline->format('d M, Y h:i A');
                $exam->remaining_days = now()->diffInDays($exam->deadline, false);

                return $exam;
            });

        return Inertia::render('student/exam', [
            'exams' => $exams,
            'course_id' => $id
        ]);
    }


    public function show($course_id, $exam_id)
    {
        $exam = Exam::where('course_id', $course_id)
            ->where('id', $exam_id)
            ->with([
                'submissions' => function ($query) {
                    $query->where('student_id', auth()->id());
                }
            ])
            ->firstOrFail();

        $exam->is_submitted = $exam->submissions->isNotEmpty();
        $exam->is_expired = $exam->deadline < now();
        $exam->can_submit = !$exam->is_expired && $exam->status == 'active' && !$exam->is_submitted;
        $exam->submission = $exam->submissions->first();

        return Inertia::render('student/exam-show', [
            'exam' => $exam,
            'course_id' => $course_id
        ]);
    }



    public function submit(Request $request, $course_id, $exam_id)
    {
        $request->validate([
            'answer_file' => 'required|file|mimes:pdf,doc,docx|max:10240' // 10MB max
        ]);

        $exam = Exam::where('course_id', $course_id)
            ->where('id', $exam_id)
            ->firstOrFail();

        if ($exam->deadline < now()) {
            return redirect()->back()->with('error', 'পরীক্ষার মেয়াদ উত্তীর্ণ হয়ে গেছে!');
        }

        if ($exam->status !== 'active') {
            return redirect()->back()->with('error', 'পরীক্ষাটি বর্তমানে সক্রিয় নয়!');
        }


        $existingSubmission = ExamSubmission::where('exam_id', $exam_id)
            ->where('student_id', auth()->id())
            ->first();

        if ($existingSubmission) {
            return redirect()->back()->with('error', 'আপনি ইতিমধ্যে এই পরীক্ষা সাবমিট করেছেন!');
        }


        $file = $request->file('answer_file');
        $filename = time() . '_' . auth()->id() . '_' . $file->getClientOriginalName();
        $filePath = $file->storeAs('exam_submissions/' . $exam_id, $filename, 'public');


        $submission = ExamSubmission::create([
            'exam_id' => $exam_id,
            'student_id' => auth()->id(),
            'answer_file' => $filePath,
            'submitted_at' => now()
        ]);


        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'পরীক্ষা সফলভাবে সাবমিট করা হয়েছে!',
                'submission' => $submission
            ]);
        }

        return redirect()->route('student.written.exam', $course_id)
            ->with('success', 'পরীক্ষা সফলভাবে সাবমিট করা হয়েছে!');
    }
}