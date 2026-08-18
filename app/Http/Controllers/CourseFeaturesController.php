<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseFeature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CourseFeaturesController extends Controller
{
    // Show features management page
    public function features($course)
    {
        $course = Course::with('features')->findOrFail($course);
        return view('admin.courses.features', compact('course'));
    }

    // Store new feature
    public function store(Request $request, $course)
    {
        $course = Course::findOrFail($course);

        $request->validate([
            'title' => 'required|string|max:255',
            'value' => 'required|string|max:255',
            'icon' => 'nullable|string|max:255',
        ]);

        try {
            // Get the highest order number
            $maxOrder = CourseFeature::where('course_id', $course->id)->max('order');
            
            CourseFeature::create([
                'course_id' => $course->id,
                'title' => $request->title,
                'value' => $request->value,
                'icon' => $request->icon,
                'order' => $maxOrder + 1,
                'is_active' => true,
            ]);

            return redirect()->route('admin.courses.features', $course->id)
                ->with('success', 'ফিচার সফলভাবে যোগ হয়েছে।');

        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'ফিচার যোগ করতে সমস্যা হয়েছে: ' . $e->getMessage());
        }
    }

    // Update feature
    public function update(Request $request, $course, $feature)
    {
        $feature = CourseFeature::where('course_id', $course)->findOrFail($feature);

        $request->validate([
            'title' => 'required|string|max:255',
            'value' => 'required|string|max:255',
            'icon' => 'nullable|string|max:255',
        ]);

        try {
            $feature->update([
                'title' => $request->title,
                'value' => $request->value,
                'icon' => $request->icon,
            ]);

            return redirect()->route('admin.courses.features', $course)
                ->with('success', 'ফিচার সফলভাবে আপডেট হয়েছে।');

        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'ফিচার আপডেট করতে সমস্যা হয়েছে: ' . $e->getMessage());
        }
    }

    // Delete feature
    public function destroy($course, $feature)
    {
        $feature = CourseFeature::where('course_id', $course)->findOrFail($feature);

        try {
            $feature->delete();

            // Reorder remaining features
            $this->reorderFeatures($course);

            return redirect()->route('admin.courses.features', $course)
                ->with('success', 'ফিচার সফলভাবে ডিলিট হয়েছে।');

        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'ফিচার ডিলিট করতে সমস্যা হয়েছে: ' . $e->getMessage());
        }
    }

    // Update feature order
    public function updateOrder(Request $request, $course)
    {
        $request->validate([
            'order' => 'required|array',
        ]);

        try {
            DB::transaction(function () use ($request, $course) {
                foreach ($request->order as $index => $featureId) {
                    CourseFeature::where('course_id', $course)
                                ->where('id', $featureId)
                                ->update(['order' => $index + 1]);
                }
            });

            return response()->json(['success' => true, 'message' => 'অর্ডার সফলভাবে আপডেট হয়েছে।']);

        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'অর্ডার আপডেট করতে সমস্যা হয়েছে।'], 500);
        }
    }

    // Toggle feature status
    public function toggleStatus($course, $feature)
    {
        $feature = CourseFeature::where('course_id', $course)->findOrFail($feature);

        try {
            $feature->update([
                'is_active' => !$feature->is_active
            ]);

            $status = $feature->is_active ? 'এনাবল' : 'ডিসএবল';
            return redirect()->back()
                ->with('success', "ফিচার সফলভাবে {$status} হয়েছে।");

        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'স্ট্যাটাস পরিবর্তন করতে সমস্যা হয়েছে।');
        }
    }

    // Reorder features after deletion
    private function reorderFeatures($courseId)
    {
        $features = CourseFeature::where('course_id', $courseId)
                                ->orderBy('order')
                                ->get();

        foreach ($features as $index => $feature) {
            $feature->update(['order' => $index + 1]);
        }
    }
}