<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CourseContentController extends Controller
{
    public function content(Course $course)
    {
        $chapters = Chapter::where('course_id', $course->id)
            ->with('lessons')
            ->orderBy('order')
            ->get();

        return view('admin.courses.content.index', compact('course', 'chapters'));
    }
    public function chapter(Course $course)
    {



        return view('admin.courses.content.chapter', compact('course'));
    }

    public function chapter_store(Course $course, Request $request)
    {
        $validated = $request->validate([
            'chapter_name' => 'required|string|max:255',
        ]);


        // Create the chapter
        Chapter::create([
            'course_id' => $course->id,
            'name' => $validated['chapter_name'],
        ]);

        return redirect()
            ->route('admin.courses.content', $course)
            ->with('success', 'চ্যাপটার সফলভাবে যোগ করা হয়েছে!');
    }


    public function chapter_edit($course_id, $chapter_id)
    {

        $chapter = Chapter::find($chapter_id);

        $course = Course::find($course_id);

        return view('admin.courses.content.chapter_edit', compact('chapter', 'course'));
    }


    public function chapter_update($course_id, $chapter_id, Request $request)
    {
        $chapter = Chapter::find($chapter_id);
        $chapter->name = $request->input('chapter_name');
        $chapter->save();

        return redirect()->route('admin.courses.content', $course_id)
            ->with('success', 'চ্যাপটার সফলভাবে আপডেট করা হয়েছে!');
    }



    public function chapter_destroy($chapter_id)
    {
        $chapter = Chapter::find($chapter_id)->delete();

        return redirect()->back()->with('success', 'চ্যাপটার সফলভাবে মুছে ফেলা হয়েছে!');
    }


    public function reorder(Request $request, Course $course)
    {
        $request->validate([
            'chapters' => 'required|array',
            'chapters.*.id' => 'required|exists:chapters,id',
            'chapters.*.order' => 'required|integer'
        ]);

        try {
            DB::transaction(function () use ($request, $course) {
                foreach ($request->chapters as $chapterData) {
                    Chapter::where('id', $chapterData['id'])
                        ->where('course_id', $course->id)
                        ->update(['order' => $chapterData['order']]);
                }
            });

            return response()->json([
                'success' => true,
                'message' => 'Chapters reordered successfully'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to reorder chapters'
            ], 500);
        }
    }


}
