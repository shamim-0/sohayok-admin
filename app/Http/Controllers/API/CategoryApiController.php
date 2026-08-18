<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\CategorySection;
use App\Models\Chapter;
use App\Models\Course;
use App\Models\CourseInstructor;
use App\Models\Order;
use App\Models\PopularCourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryApiController extends Controller
{
    public function index()
    {
        $categorysection = CategorySection::first();
        $categories = Category::all();
        return response()->json([ 'categories' => $categories]);
    }

    public function popularCourses()
    {
        $courses = PopularCourse::with(['course', 'course.orders'])->orderBy('order')->get();
        return response()->json($courses);
    }

    public function allCourses(Request $request)
    {
        $query = Course::with('category', 'orders')->latest();

        if ($request->has('search') && $request->search != '') {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        if ($request->has('category') && $request->category != '') {
            $query->where('category_id', $request->category);
        }

        $courses = $query->get();
        $categories = Category::latest()->get();
        return response()->json(['courses' => $courses, 'categories' => $categories]);
    }


    public function courses_details($slug)
    {
        $course = Course::with(['features', 'orders'])->where('slug', $slug)->first();
        $chapters = Chapter::where('course_id', $course->id)->with('lessons')->orderBy('order')->get();


        $instructors = CourseInstructor::with('instructor')->where('course_id', $course->id)->orderBy('order')->get();

        $isEnrolled = null;

        if (Auth::user()) {
            $isEnrolled = Order::where('course_id', $course->id)->where('user_id', Auth::id())->where('status', 'completed')->first();
        }
        return response()->json([
            'course' => $course,
            'chapters' => $chapters,
            'instructors' => $instructors,
            'isEnrolled' => $isEnrolled
        ]);
    }
}
