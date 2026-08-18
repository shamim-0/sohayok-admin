<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Instructor;
use App\Models\CourseInstructor;
use Illuminate\Http\Request;

class CourseInstructorController extends Controller
{
    public function instructor(Course $course)
    {
        $instructors = Instructor::all();
        $course->load('instructors');


        $courseinstructors = CourseInstructor::where('course_id', $course->id)
            ->with('instructor')
            ->orderBy('order', 'asc')
            ->get();



        return view('admin.courses.instructor', compact('course', 'instructors', 'courseinstructors'));
    }

    public function addInstructor(Request $request, Course $course)
    {
        $request->validate([
            'instructor_id' => 'required|exists:instructors,id'
        ]);

        // Check if instructor already exists for this course
        $existing = CourseInstructor::where('course_id', $course->id)
            ->where('instructor_id', $request->instructor_id)
            ->first();

        if ($existing) {
            return redirect()->back()->with('error', 'ইন্সট্রাক্টর ইতিমধ্যেই এই কোর্সে রয়েছেন!');
        }

        // Get the maximum order for this course
        $maxOrder = CourseInstructor::where('course_id', $course->id)->max('order');
        $newOrder = $maxOrder ? $maxOrder + 1 : 0;

        CourseInstructor::create([
            'course_id' => $course->id,
            'instructor_id' => $request->instructor_id,
            'order' => $newOrder
        ]);

        return redirect()->back()->with('success', 'ইন্সট্রাক্টর সফলভাবে যোগ করা হয়েছে!');
    }

    public function removeInstructor( $course,  $instructor)
    {




        CourseInstructor::where('course_id', $course)
            ->where('id', $instructor)
            ->delete();

        // Reorder remaining instructors
        $this->reorderInstructors($course);

        return redirect()->back()->with('success', 'ইন্সট্রাক্টর সফলভাবে সরানো হয়েছে!');
    }

    public function updateOrder(Request $request, Course $course)
    {
        $request->validate([
            'instructors' => 'required|array'
        ]);

        foreach ($request->instructors as $index => $courseInstructor) {
            $cn = CourseInstructor::find($courseInstructor);
            $cn->order = $index+1;
            $cn->save();
        }

        return response()->json(['success' => true]);
    }

    private function reorderInstructors($courseId)
    {
        $instructors = CourseInstructor::where('course_id', $courseId)
            ->orderBy('order')
            ->get();

        foreach ($instructors as $index => $courseInstructor) {
            $courseInstructor->update(['order' => $index]);
        }
    }
}