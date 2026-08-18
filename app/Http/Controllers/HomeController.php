<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Category;
use App\Models\CategorySection;
use App\Models\Chapter;
use App\Models\Contact;
use App\Models\Course;
use App\Models\CourseInstructor;
use App\Models\Hero;
use App\Models\Instructor;
use App\Models\InstructorSection;
use App\Models\Notice;
use App\Models\Order;
use App\Models\PopularCourse;
use App\Models\PopularCourseSection;
use App\Models\Review;
use App\Models\ReviewPageSection;
use App\Models\User;
use App\Models\WhyChooseUsSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {

        $email = $request->input('email');
        $token = $request->input('token');
        $name = $request->input('name');


        if ($email && $token) {
            $user = User::where('email', $email)->first();

            if ($user) {
                Auth::login($user);
            } else {
                // Create user with email, random password hash, and random google_id
                $randomPassword = bin2hex(random_bytes(16));
                $randomGoogleId = bin2hex(random_bytes(8));
                $user = User::create([
                    'email' => $email,
                    'name' => $name,
                    'password' => bcrypt($randomPassword),
                    'google_id' => $randomGoogleId,
                ]);
                Auth::login($user);
            }

            return redirect()->route('home');
        }

        $banner = Hero::first();
        $hero = Banner::with('course')->orderBy('order')->get();

        $categorysection = CategorySection::first();
        $categories = Category::all();

        $courses = PopularCourse::with(['course', 'course.orders'])->orderBy('order')->get();
        $coursecontent = PopularCourseSection::first();


        $instructorcontent = InstructorSection::first();
        $instructors = Instructor::orderBy('order')->get();

        $whywe = WhyChooseUsSection::first();

        $review = Review::orderBy('order')->get();
        $reviewcontent = ReviewPageSection::first();



        return Inertia::render('home/index', compact('banner', 'hero', 'categorysection', 'categories', 'courses', 'coursecontent', 'instructors', 'instructorcontent', 'whywe', 'review', 'reviewcontent'));
    }
    public function about()
    {
        return Inertia::render('about/index');
    }



    public function accountDeleteRequest()
    {
        return Inertia::render('account_delete_request/index');
    }


    public function privacy()
    {
        return Inertia::render('pages/privacy');
    }
    public function terms()
    {
        return Inertia::render('pages/terms');
    }
    public function refund()
    {
        return Inertia::render('pages/refund');
    }


    public function notice()
    {

        $notices = Notice::orderBy('order')->get();


        return Inertia::render('notice/index', compact('notices'));
    }
    public function instructors()
    {

        $instructors = Instructor::orderBy('order')->get();
        $instructorcontent = InstructorSection::first();

        return Inertia::render('instructors/index', compact('instructors', 'instructorcontent'));
    }








    // ------------------------------------------------------------------------------------
    public function contact()
    {
        return Inertia::render('contact/index');
    }

    /**
     * Store contact message
     */
    public function contact_store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:15|min:11',
            'mesage' => 'required|string|min:10'
        ]);

        Contact::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'mesage' => $validated['mesage'],
            'status' => 0,
        ]);

        return redirect()->back()->with([
            'success' => 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।'
        ]);
    }

    public function contact_messages()
    {
        $messages = Contact::latest()->get();

        return Inertia::render('Admin/ContactMessages', [
            'messages' => $messages
        ]);
    }


    public function mark_as_read($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->markAsRead();

        return redirect()->back()->with('success', 'Message marked as read.');
    }

    public function destroy_contact($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();

        return redirect()->back()->with('success', 'Message deleted successfully.');
    }


    // --------------------------------------------------------------------------------




    public function courses(Request $request)
    {
        $query = Course::with('category', 'orders')->latest();

        // Search functionality
        if ($request->has('search') && $request->search != '') {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        // Category filter
        if ($request->has('category') && $request->category != '') {
            $query->where('category_id', $request->category);
        }

        $courses = $query->get();
        $categories = Category::latest()->get();

        return Inertia::render('courses/index', compact('courses', 'categories'));
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


        return Inertia::render('courses/courses_details', compact('course', 'chapters', 'instructors', 'isEnrolled'));
    }
}
