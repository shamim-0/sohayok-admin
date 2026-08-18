<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LessonController extends Controller
{
    public function index($course_id, $chapter_id)
    {
        $course = Course::findOrFail($course_id);
        $chapter = Chapter::findOrFail($chapter_id);
        $lessons = Lesson::where('chapter_id', $chapter_id)
            ->orderBy('order')
            ->get();

        return view('admin.courses.lesson.index', compact('course', 'chapter', 'lessons'));
    }

    public function store(Request $request)
    {
        $lessonData = $request->only([
            'course_id',
            'chapter_id',
            'title',
            'content_type',
            'video_type',
            'video_url',
            'scheduled_at',
            'time',
            'mark',
            'negative_mark',
            'passing_mark'
        ]);

        // Set order
        $lastOrder = Lesson::where('chapter_id', $request->chapter_id)->max('order');
        $lessonData['order'] = $lastOrder + 1;




        // Handle file uploads

        if ($request->hasFile('lecture_sheet_file')) {
            $file = $request->file('lecture_sheet_file');
            $destination = public_path('uploads/course/content/');

            // Make sure directory exists
            if (!file_exists($destination)) {
                mkdir($destination, 0755, true);
            }

            // Create unique name
            $filename = time() . '_' . $file->getClientOriginalName();

            // Move file
            $file->move($destination, $filename);

            // Save info
            $lessonData['file_path'] = 'uploads/course/content/' . $filename;
            $lessonData['file_name'] = $file->getClientOriginalName();
        }

        if ($request->hasFile('slide_file')) {
            $file = $request->file('slide_file');
            $destination = public_path('uploads/course/content/');

            if (!file_exists($destination)) {
                mkdir($destination, 0755, true);
            }

            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move($destination, $filename);

            $lessonData['file_path'] = 'uploads/course/content/' . $filename;
            $lessonData['file_name'] = $file->getClientOriginalName();
        }


        Lesson::create($lessonData);




        return response()->json(['success' => true]);
    }

    public function update(Request $request, $id)
    {


        $lesson = Lesson::find($id);
        $lessonData = $request->only([
            'title',
            'content_type',
            'video_type',
            'video_url',
            'scheduled_at',
            'time',
            'mark',
            'negative_mark',
            'passing_mark'
        ]);


        // Update lecture sheet file
        if ($request->hasFile('lecture_sheet_file')) {
            // Delete old file if exists
            if (!empty($lesson->lecture_sheet_path) && file_exists(public_path($lesson->lecture_sheet_path))) {
                unlink(public_path($lesson->lecture_sheet_path));
            }

            $file = $request->file('lecture_sheet_file');
            $destination = public_path('uploads/course/content/');

            if (!file_exists($destination)) {
                mkdir($destination, 0755, true);
            }

            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move($destination, $filename);

            $lessonData['file_path'] = 'uploads/course/content/' . $filename;
            $lessonData['file_name'] = $file->getClientOriginalName();
        }

        // Update slide file
        if ($request->hasFile('slide_file')) {
            // Delete old file if exists
            if (!empty($lesson->slide_path) && file_exists(public_path($lesson->slide_path))) {
                unlink(public_path($lesson->slide_path));
            }

            $file = $request->file('slide_file');
            $destination = public_path('uploads/course/content/');

            if (!file_exists($destination)) {
                mkdir($destination, 0755, true);
            }

            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move($destination, $filename);

            $lessonData['file_path'] = 'uploads/course/content/' . $filename;
            $lessonData['file_name'] = $file->getClientOriginalName();
        }



        $lesson->update($lessonData);


        return response()->json(['success' => true]);
    }

    public function destroy($id)
    {
        $lesson = Lesson::findOrFail($id);

        // Delete associated file
        if ($lesson->file_path) {
            Storage::disk('public')->delete($lesson->file_path);
        }

        $lesson->delete();

        return response()->json(['success' => true]);
    }

    public function reorder(Request $request)
    {
        $order = $request->input('order');

        foreach ($order as $item) {
            Lesson::where('id', $item['id'])->update(['order' => $item['order']]);
        }

        return response()->json(['success' => true]);
    }
}