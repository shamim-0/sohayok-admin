<?php

namespace App\Http\Controllers;

use App\Models\InstructorSection;
use Illuminate\Http\Request;

class InstructorSectionController extends Controller
{
    public function index()
    {
        $instructorSection = InstructorSection::first();
        return view('admin.instructor-section.index', compact('instructorSection'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title_part_1' => 'required|string|max:255',
            'title_part_2' => 'required|string|max:255',
            'subtitle_part_1' => 'required|string|max:255',
            'subtitle_part_2' => 'required|string|max:255',
        ]);

        // Check if instructor section content already exists
        $instructorSection = InstructorSection::first();

        if ($instructorSection) {
            // Update existing
            $instructorSection->update([
                'title_part_1' => $request->title_part_1,
                'title_part_2' => $request->title_part_2,
                'subtitle_part_1' => $request->subtitle_part_1,
                'subtitle_part_2' => $request->subtitle_part_2,
            ]);
            
            $message = 'ইন্সট্রাক্টর সেকশন কন্টেন্ট সফলভাবে আপডেট করা হয়েছে!';
        } else {
            // Create new
            InstructorSection::create([
                'title_part_1' => $request->title_part_1,
                'title_part_2' => $request->title_part_2,
                'subtitle_part_1' => $request->subtitle_part_1,
                'subtitle_part_2' => $request->subtitle_part_2,
            ]);
            
            $message = 'ইন্সট্রাক্টর সেকশন কন্টেন্ট সফলভাবে তৈরি করা হয়েছে!';
        }

        return redirect()->route('admin.instructor-section.index')
            ->with('success', $message);
    }
}