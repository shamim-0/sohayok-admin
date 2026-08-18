<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\PopularCourse;
use Illuminate\Http\Request;

class PopularCourseController extends Controller
{
    public function popularcourse()
    {
        $courses = Course::all();
        $popularCourses = PopularCourse::with('course')
            ->orderBy('order')
            ->get();
            
        return view('admin.courses.popular.index', compact('courses', 'popularCourses'));
    }

    public function add(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id'
        ]);

        // Check if course already exists in popular courses
        $existing = PopularCourse::where('course_id', $request->course_id)->first();
        if ($existing) {
            return redirect()->back()->with('error', 'এই কোর্সটি ইতিমধ্যেই জনপ্রিয় কোর্স তালিকায় রয়েছে!');
        }

        // Get the maximum order
        $maxOrder = PopularCourse::max('order');
        $newOrder = $maxOrder ? $maxOrder + 1 : 0;

        PopularCourse::create([
            'course_id' => $request->course_id,
            'order' => $newOrder
        ]);

        return redirect()->back()->with('success', 'কোর্সটি সফলভাবে জনপ্রিয় কোর্স তালিকায় যোগ করা হয়েছে!');
    }

    public function remove(PopularCourse $popularCourse)
    {
        $courseTitle = $popularCourse->course->title;
        $popularCourse->delete();

        // Reorder remaining courses
        $this->reorderPopularCourses();

        return redirect()->back()->with('success', $courseTitle . ' কোর্সটি সফলভাবে জনপ্রিয় কোর্স তালিকা থেকে সরানো হয়েছে!');
    }

    public function updateOrder(Request $request)
    {
        $request->validate([
            'courses' => 'required|array'
        ]);

        \DB::beginTransaction();
        
        try {
            foreach ($request->courses as $index => $popularCourseId) {
                PopularCourse::where('id', $popularCourseId)
                    ->update(['order' => $index]);
            }
            
            \DB::commit();
            
            return response()->json([
                'success' => true,
                'message' => 'অর্ডার সফলভাবে আপডেট করা হয়েছে!'
            ]);
            
        } catch (\Exception $e) {
            \DB::rollBack();
            
            return response()->json([
                'success' => false,
                'message' => 'অর্ডার আপডেট করতে সমস্যা হয়েছে!'
            ], 500);
        }
    }

    private function reorderPopularCourses()
    {
        $popularCourses = PopularCourse::orderBy('order')->get();
        
        foreach ($popularCourses as $index => $popularCourse) {
            $popularCourse->update(['order' => $index]);
        }
    }
}