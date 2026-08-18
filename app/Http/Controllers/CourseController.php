<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Category;
use App\Models\Course;
use App\Models\Instructor;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::with('category')->latest()->paginate(10);
        return view('admin.courses.index', compact('courses'));
    }

    public function create()
    {
        $categories = Category::where('is_active', true)->get();
        return view('admin.courses.create', compact('categories'));
    }

    public function store(Request $request)
    {



        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255',
            'price' => 'required|numeric|min:0',
            'offer_price' => 'nullable|numeric|min:0',
            'status' => 'required|in:draft,published,archived',
            'category_id' => 'required|exists:categories,id',
            'description' => 'required|string',
            'more_description' => 'nullable|string',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp',
            'whatsapp_link' => 'nullable|url',
            'facebook_link' => 'nullable|url',
            'telegram_link' => 'nullable|url',
        ]);

        // Handle thumbnail upload - Simple manual approach
        if ($request->hasFile('thumbnail')) {
            $thumbnail = $request->file('thumbnail');

            if ($thumbnail->isValid()) {
                try {
                    // Create directories if they don't exist
                    $uploadPath = public_path('uploads/courses/thumbnails');
                    if (!file_exists($uploadPath)) {
                        mkdir($uploadPath, 0755, true);
                    }

                    // Generate unique filename
                    $extension = $thumbnail->getClientOriginalExtension();
                    $filename = 'course_' . time() . '_' . Str::random(10) . '.' . $extension;

                    // Move file to destination
                    $thumbnail->move($uploadPath, $filename);

                    // Store relative path for database (without 'uploads/' prefix)
                    $validated['thumbnail'] = '/uploads/courses/thumbnails/' . $filename;

                } catch (\Exception $e) {
                    // If upload fails, set thumbnail to null
                    $validated['thumbnail'] = null;
                }
            } else {
                $validated['thumbnail'] = null;
            }
        } else {
            $validated['thumbnail'] = null;
        }

        Course::create($validated);

        return redirect()->route('admin.courses.index')
            ->with('success', 'কোর্স সফলভাবে তৈরি করা হয়েছে।');
    }

    public function show(Course $course)
    {
        $course->load('category');
        return view('admin.courses.show', compact('course'));
    }
    public function update_Enrolled(Course $course, Request $request)
    {
        


        if ($request->input('enrolled')) {
            $course->enrolled = $request->input('enrolled');
        }
        
        if ($request->input('how_to_buy')) {
            $course->how_to_buy = $request->input('how_to_buy');
        }



        $course->save();

        return redirect()->route('admin.courses.show', $course->id)
            ->with('success', 'শিক্ষার্থীর সংখ্যা সফলভাবে আপডেট হয়েছে।');
    }


    public function show_students(Course $course, Request $request)
    {
        $query = Order::with(['user', 'course'])
            ->where('course_id', $course->id)
            ->where('status', 'completed');

        // Search functionality
        if ($request->has('search') && $request->search != '') {
            $search = $request->search;
            $query->whereHas('user', function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('phone', 'like', "%{$search}%");
            });
        }

        $orders = $query->get();

        // Export functionality
        if ($request->has('export')) {
            return $this->exportStudents($orders, $course);
        }

        return view('admin.courses.show_students', compact('course', 'orders'));
    }

    private function exportStudents($orders, $course)
    {
        $fileName = $course->title . '_students_' . date('Y-m-d') . '.csv';

        $headers = array(
            "Content-type" => "text/csv",
            "Content-Disposition" => "attachment; filename=$fileName",
            "Pragma" => "no-cache",
            "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
            "Expires" => "0"
        );

        $callback = function () use ($orders) {
            $file = fopen('php://output', 'w');

            // Add BOM for UTF-8
            fputs($file, $bom = (chr(0xEF) . chr(0xBB) . chr(0xBF)));

            // Headers
            fputcsv($file, [
                'শিক্ষার্থীর নাম',
                'ইমেইল',
                'ফোন নম্বর',
                'এনরোল তারিখ',
                'পরিশোধিত অর্থ',
                'স্ট্যাটাস'
            ]);

            // Data
            foreach ($orders as $order) {
                fputcsv($file, [
                    $order->user->name,
                    $order->user->email,
                    $order->user->phone ?? 'N/A',
                    $order->created_at->format('d M, Y'),
                    '৳' . number_format($order->amount, 2),
                    'Completed'
                ]);
            }

            fclose($file);
        };

        return Response::stream($callback, 200, $headers);
    }

    public function instructor(Course $course)
    {
        $instructor = Instructor::all();
        $course->load('category');
        return view('admin.courses.instructor', compact('course', ' instructor'));
    }


    public function edit(Course $course)
    {
        $categories = Category::where('is_active', true)->get();
        return view('admin.courses.edit', compact('course', 'categories'));
    }

    public function update(Request $request, Course $course)
    {
        $validated = $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
            ],
            'slug' => [
                'nullable',
                'string',
                'max:255',
            ],
            'price' => 'required|numeric|min:0',
            'offer_price' => 'nullable|numeric|min:0',
            'status' => 'required|in:draft,published,archived',
            'category_id' => 'required|exists:categories,id',
            'description' => 'required|string',
            'more_description' => 'nullable|string',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp',
            'whatsapp_link' => 'nullable|url',
            'facebook_link' => 'nullable|url',
            'telegram_link' => 'nullable|url',
        ]);

        // Handle thumbnail upload
        if ($request->hasFile('thumbnail')) {
            $thumbnail = $request->file('thumbnail');

            if ($thumbnail->isValid()) {
                try {
                    // Create directories if they don't exist
                    $uploadPath = public_path('uploads/courses/thumbnails');
                    if (!file_exists($uploadPath)) {
                        mkdir($uploadPath, 0755, true);
                    }

                    // Delete old thumbnail if exists
                    if ($course->thumbnail && file_exists(public_path('uploads/' . $course->thumbnail))) {
                        unlink(public_path('uploads/' . $course->thumbnail));
                    }

                    // Generate unique filename
                    $extension = $thumbnail->getClientOriginalExtension();
                    $filename = 'course_' . time() . '_' . Str::random(10) . '.' . $extension;

                    // Move file to destination
                    $thumbnail->move($uploadPath, $filename);

                    // Store relative path for database (without 'uploads/' prefix)
                    $validated['thumbnail'] = '/uploads/courses/thumbnails/' . $filename;

                } catch (\Exception $e) {
                    // If upload fails, keep existing thumbnail
                    $validated['thumbnail'] = $course->thumbnail;
                }
            } else {
                $validated['thumbnail'] = $course->thumbnail;
            }
        } else {
            // Keep the existing thumbnail if no new file is uploaded
            $validated['thumbnail'] = $course->thumbnail;
        }

        $course->update($validated);

        return redirect()->route('admin.courses.index')
            ->with('success', 'কোর্স সফলভাবে আপডেট করা হয়েছে।');
    }


    public function destroy(Course $course)
    {
        // Delete thumbnail if exists
        if ($course->thumbnail && file_exists(public_path('uploads/' . $course->thumbnail))) {
            unlink(public_path('uploads/' . $course->thumbnail));
        }

        $course->delete();

        return redirect()->route('admin.courses.index')
            ->with('success', 'কোর্স সফলভাবে মুছে ফেলা হয়েছে।');
    }



    public function routine($course)
    {
        $course = Course::find($course);
        return view('admin.courses.routine', compact('course'));
    }


    public function routineStore(Request $request, $course)
    {
        $course = Course::findOrFail($course);

        $request->validate([
            'routine_pdf' => 'required|file|mimes:pdf|max:10240', // 10MB max
        ]);

        try {
            // Delete old file if exists
            if ($course->routine_pdf) {
                Storage::disk('public')->delete($course->routine_pdf);
            }

            // Store new file
            $filePath = $request->file('routine_pdf')->store('routines', 'public');

            // Update course
            $course->update([
                'routine_pdf' => $filePath
            ]);

            return redirect()->route('admin.courses.routine', $course->id)
                ->with('success', 'রুটিন সফলভাবে আপলোড হয়েছে।');

        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'রুটিন আপলোড করতে সমস্যা হয়েছে: ' . $e->getMessage());
        }
    }

    // Delete routine
    public function routineDestroy($course)
    {
        $course = Course::findOrFail($course);

        try {
            if ($course->routine_pdf) {
                Storage::disk('public')->delete($course->routine_pdf);

                $course->update([
                    'routine_pdf' => null
                ]);

                return redirect()->route('admin.courses.routine', $course->id)
                    ->with('success', 'রুটিন সফলভাবে ডিলিট হয়েছে।');
            }

            return redirect()->back()
                ->with('error', 'কোনো রুটিন পাওয়া যায়নি।');

        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'রুটিন ডিলিট করতে সমস্যা হয়েছে: ' . $e->getMessage());
        }
    }


}
