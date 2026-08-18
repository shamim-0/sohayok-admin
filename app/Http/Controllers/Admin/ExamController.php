<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Exam;
use App\Models\ExamSubmission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ExamController extends Controller
{
    public function index(Course $course)
    {
        $exams = Exam::where('course_id', $course->id)
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        
        return view('admin.exams.index', compact('course', 'exams'));
    }

    public function create(Course $course)
    {
        return view('admin.exams.create', compact('course'));
    }

    public function store(Request $request, Course $course)
    {
        $request->validate([
            'subject' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'instruction' => 'nullable|string',
            'total_marks' => 'required|integer|min:1',
            'passing_marks' => 'required|integer|min:1|max:' . $request->total_marks,
            'deadline' => 'required|date|after:now',
            'status' => 'required|in:active,inactive,expired',
            'question_file' => 'nullable|file|mimes:pdf,doc,docx|max:10240' // 10MB max
        ]);

        $examData = $request->except('question_file');
        $examData['course_id'] = $course->id;
        $examData['created_by'] = auth()->id();

        if ($request->hasFile('question_file')) {
            $file = $request->file('question_file');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('exams/questions', $filename, 'public');
            $examData['question_file'] = $path;
        }

        Exam::create($examData);

        return redirect()->route('admin.courses.exams.index', $course)
            ->with('success', 'পরীক্ষা সফলভাবে তৈরি করা হয়েছে!');
    }

    public function show(Course $course, Exam $exam)
    {
        $submissions = $exam->submissions()->with('student')->get();
        return view('admin.exams.show', compact('course', 'exam', 'submissions'));
    }

    public function edit(Course $course, Exam $exam)
    {
        return view('admin.exams.edit', compact('course', 'exam'));
    }

    public function update(Request $request, Course $course, Exam $exam)
    {
        $request->validate([
            'subject' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'instruction' => 'nullable|string',
            'total_marks' => 'required|integer|min:1',
            'passing_marks' => 'required|integer|min:1|max:' . $request->total_marks,
            'deadline' => 'required|date',
            'status' => 'required|in:active,inactive,expired',
            'question_file' => 'nullable|file|mimes:pdf,doc,docx|max:10240'
        ]);

        $examData = $request->except('question_file');

        if ($request->hasFile('question_file')) {
            // Delete old file
            if ($exam->question_file) {
                Storage::disk('public')->delete($exam->question_file);
            }
            
            $file = $request->file('question_file');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('exams/questions', $filename, 'public');
            $examData['question_file'] = $path;
        }

        $exam->update($examData);

        return redirect()->route('admin.courses.exams.index', $course)
            ->with('success', 'পরীক্ষা সফলভাবে আপডেট করা হয়েছে!');
    }

    public function destroy(Course $course, Exam $exam)
    {
        // Delete question file
        if ($exam->question_file) {
            Storage::disk('public')->delete($exam->question_file);
        }
        
        $exam->delete();

        return redirect()->route('admin.courses.exams.index', $course)
            ->with('success', 'পরীক্ষা সফলভাবে মুছে ফেলা হয়েছে!');
    }

    public function submissions(Course $course, Exam $exam)
    {
        $submissions = $exam->submissions()->with('student')->paginate(20);
        return view('admin.exams.submissions', compact('course', 'exam', 'submissions'));
    }

    public function gradeSubmission(Request $request, Course $course, Exam $exam, ExamSubmission $submission)
    {
        $request->validate([
            'obtained_marks' => 'required|integer|min:0|max:' . $exam->total_marks,
            'feedback' => 'nullable|string'
        ]);

        $submission->update([
            'obtained_marks' => $request->obtained_marks,
            'feedback' => $request->feedback
        ]);

        return redirect()->back()->with('success', 'মার্ক প্রদান সফলভাবে সম্পন্ন হয়েছে!');
    }
}