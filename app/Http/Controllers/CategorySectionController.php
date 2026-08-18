<?php

namespace App\Http\Controllers;

use App\Models\CategorySection;
use Illuminate\Http\Request;

class CategorySectionController extends Controller
{
    public function index()
    {
        $categorySection = CategorySection::first();
        return view('admin.category-section.index', compact('categorySection'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title_part_1' => 'required|string|max:255',
            'title_part_2' => 'required|string|max:255',
            'subtitle_part_1' => 'required|string|max:255',
            'subtitle_part_2' => 'required|string|max:255',
        ]);

        // Check if category section content already exists
        $categorySection = CategorySection::first();

        if ($categorySection) {
            // Update existing
            $categorySection->update([
                'title_part_1' => $request->title_part_1,
                'title_part_2' => $request->title_part_2,
                'subtitle_part_1' => $request->subtitle_part_1,
                'subtitle_part_2' => $request->subtitle_part_2,
            ]);
            
            $message = 'ক্যাটাগরি সেকশন কন্টেন্ট সফলভাবে আপডেট করা হয়েছে!';
        } else {
            // Create new
            CategorySection::create([
                'title_part_1' => $request->title_part_1,
                'title_part_2' => $request->title_part_2,
                'subtitle_part_1' => $request->subtitle_part_1,
                'subtitle_part_2' => $request->subtitle_part_2,
            ]);
            
            $message = 'ক্যাটাগরি সেকশন কন্টেন্ট সফলভাবে তৈরি করা হয়েছে!';
        }

        return redirect()->route('admin.category-section.index')
            ->with('success', $message);
    }
}