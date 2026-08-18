<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        $banners = Banner::with('course')
            ->orderBy('order')
            ->get();
            

        return view('admin.banners.index', compact('courses', 'banners'));
    }

    public function add(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id'
        ]);

        // Check if course already exists in banners
        $existing = Banner::where('course_id', $request->course_id)->first();
        if ($existing) {
            return redirect()->back()->with('error', 'এই কোর্সটি ইতিমধ্যেই ব্যানারে রয়েছে!');
        }

        // Get the maximum order
        $maxOrder = Banner::max('order');
        $newOrder = $maxOrder ? $maxOrder + 1 : 0;

        Banner::create([
            'course_id' => $request->course_id,
            'order' => $newOrder
        ]);

        return redirect()->back()->with('success', 'কোর্সটি সফলভাবে ব্যানারে যোগ করা হয়েছে!');
    }

    public function remove(Banner $banner)
    {
        $courseTitle = $banner->course->title;
        $banner->delete();

        // Reorder remaining banners
        $this->reorderBanners();

        return redirect()->back()->with('success', $courseTitle . ' কোর্সটি সফলভাবে ব্যানার থেকে সরানো হয়েছে!');
    }

    public function updateOrder(Request $request)
    {
        $request->validate([
            'banners' => 'required|array'
        ]);

        \DB::beginTransaction();
        
        try {
            foreach ($request->banners as $index => $bannerId) {
                Banner::where('id', $bannerId)
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

    public function toggleStatus(Banner $banner)
    {
        $banner->update([
            'is_active' => !$banner->is_active
        ]);

        $status = $banner->is_active ? 'activated' : 'deactivated';

        return redirect()->back()->with('success', "Banner successfully {$status}!");
    }

    private function reorderBanners()
    {
        $banners = Banner::orderBy('order')->get();
        
        foreach ($banners as $index => $banner) {
            $banner->update(['order' => $index]);
        }
    }
}