<?php

namespace App\Http\Controllers;

use App\Models\PopularCourseSection;
use Illuminate\Http\Request;

class PopularCourseSectionController extends Controller
{
    public function index()
    {
        $popularCourseSection = PopularCourseSection::first();
        return view('admin.popular-course-section.index', compact('popularCourseSection'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title_part_1' => 'required|string|max:255',
            'title_part_2' => 'required|string|max:255',
            'subtitle_part_1' => 'required|string|max:255',
            'subtitle_part_2' => 'required|string|max:255',
        ]);

        // Check if popular course section content already exists
        $popularCourseSection = PopularCourseSection::first();

        if ($popularCourseSection) {
            // Update existing
            $popularCourseSection->update([
                'title_part_1' => $request->title_part_1,
                'title_part_2' => $request->title_part_2,
                'subtitle_part_1' => $request->subtitle_part_1,
                'subtitle_part_2' => $request->subtitle_part_2,
            ]);
            
            $message = 'জনপ্রিয় কোর্স সেকশন কন্টেন্ট সফলভাবে আপডেট করা হয়েছে!';
        } else {
            // Create new
            PopularCourseSection::create([
                'title_part_1' => $request->title_part_1,
                'title_part_2' => $request->title_part_2,
                'subtitle_part_1' => $request->subtitle_part_1,
                'subtitle_part_2' => $request->subtitle_part_2,
            ]);
            
            $message = 'জনপ্রিয় কোর্স সেকশন কন্টেন্ট সফলভাবে তৈরি করা হয়েছে!';
        }

        return redirect()->route('admin.popular-course-section.index')
            ->with('success', $message);
    }
}