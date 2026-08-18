<?php

namespace App\Http\Controllers;

use App\Models\WhyChooseUsSection;
use Illuminate\Http\Request;

class WhyChooseUsSectionController extends Controller
{
    public function index()
    {
        $whyChooseUsSection = WhyChooseUsSection::first();
        return view('admin.why-choose-us-section.index', compact('whyChooseUsSection'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title_part_1' => 'required|string|max:255',
            'title_part_2' => 'required|string|max:255',
            'subtitle_part_1' => 'required|string|max:255',
            'subtitle_part_2' => 'required|string|max:255',
            'features' => 'required|array',
            'features.*.icon' => 'required|string|max:10',
            'features.*.title' => 'required|string|max:255',
            'features.*.description' => 'required|string|max:500',
            'stats' => 'required|array',
            'stats.*.number' => 'required|string|max:50',
            'stats.*.label' => 'required|string|max:255',
        ]);

        // Prepare features data
        $features = [];
        foreach ($request->features as $feature) {
            $features[] = [
                'icon' => $feature['icon'],
                'title' => $feature['title'],
                'description' => $feature['description'],
            ];
        }

        // Prepare stats data
        $stats = [];
        foreach ($request->stats as $stat) {
            $stats[] = [
                'number' => $stat['number'],
                'label' => $stat['label'],
            ];
        }

        // Check if why choose us section content already exists
        $whyChooseUsSection = WhyChooseUsSection::first();

        if ($whyChooseUsSection) {
            // Update existing
            $whyChooseUsSection->update([
                'title_part_1' => $request->title_part_1,
                'title_part_2' => $request->title_part_2,
                'subtitle_part_1' => $request->subtitle_part_1,
                'subtitle_part_2' => $request->subtitle_part_2,
                'features' => $features,
                'stats' => $stats,
            ]);
            
            $message = 'কেন আমাদের বেছে নিবেন সেকশন কন্টেন্ট সফলভাবে আপডেট করা হয়েছে!';
        } else {
            // Create new
            WhyChooseUsSection::create([
                'title_part_1' => $request->title_part_1,
                'title_part_2' => $request->title_part_2,
                'subtitle_part_1' => $request->subtitle_part_1,
                'subtitle_part_2' => $request->subtitle_part_2,
                'features' => $features,
                'stats' => $stats,
            ]);
            
            $message = 'কেন আমাদের বেছে নিবেন সেকশন কন্টেন্ট সফলভাবে তৈরি করা হয়েছে!';
        }

        return redirect()->route('admin.why-choose-us-section.index')
            ->with('success', $message);
    }
}