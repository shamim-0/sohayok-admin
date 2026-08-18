<?php

namespace App\Http\Controllers;

use App\Models\ReviewPageSection;
use Illuminate\Http\Request;

class ReviewPageSectionController extends Controller
{
    public function index()
    {
        $reviewPageSection = ReviewPageSection::first();
        return view('admin.review-page-section.index', compact('reviewPageSection'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title_part_1' => 'required|string|max:255',
            'title_part_2' => 'required|string|max:255',
            'subtitle_part_1' => 'required|string|max:255',
            'subtitle_part_2' => 'required|string|max:255',
        ]);

        // Check if review page section content already exists
        $reviewPageSection = ReviewPageSection::first();

        if ($reviewPageSection) {
            // Update existing
            $reviewPageSection->update([
                'title_part_1' => $request->title_part_1,
                'title_part_2' => $request->title_part_2,
                'subtitle_part_1' => $request->subtitle_part_1,
                'subtitle_part_2' => $request->subtitle_part_2,
            ]);
            
            $message = 'রিভিউ পেজ সেকশন কন্টেন্ট সফলভাবে আপডেট করা হয়েছে!';
        } else {
            // Create new
            ReviewPageSection::create([
                'title_part_1' => $request->title_part_1,
                'title_part_2' => $request->title_part_2,
                'subtitle_part_1' => $request->subtitle_part_1,
                'subtitle_part_2' => $request->subtitle_part_2,
            ]);
            
            $message = 'রিভিউ পেজ সেকশন কন্টেন্ট সফলভাবে তৈরি করা হয়েছে!';
        }

        return redirect()->route('admin.review-page-section.index')
            ->with('success', $message);
    }
}