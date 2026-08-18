<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use Illuminate\Http\Request;

class HeroController extends Controller
{
    public function index()
    {
        $hero = Hero::first();
        return view('admin.hero.index', compact('hero'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:500',
        ]);

        // Check if hero content already exists
        $hero = Hero::first();

        if ($hero) {
            // Update existing
            $hero->update([
                'title' => $request->title,
                'subtitle' => $request->subtitle,
            ]);
            
            $message = 'হিরো কন্টেন্ট সফলভাবে আপডেট করা হয়েছে!';
        } else {
            // Create new
            Hero::create([
                'title' => $request->title,
                'subtitle' => $request->subtitle,
            ]);
            
            $message = 'হিরো কন্টেন্ট সফলভাবে তৈরি করা হয়েছে!';
        }

        return redirect()->route('admin.hero.index')
            ->with('success', $message);
    }
}