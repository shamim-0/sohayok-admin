<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SubjectController extends Controller
{
    public function index()
    {
        $subjects = Subject::orderBy('order')->get();
        return view('admin.question-bank.subject', compact('subjects'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'nullable|image|mimes:png,jpg,jpeg,svg|max:2048',
        ]);

        $path = null;
        if ($request->hasFile('icon')) {
            $path = $request->file('icon')->store('subjects', 'public');
        }

        $order = Subject::max('order') + 1;

        Subject::create([
            'name' => $request->name,
            'icon' => $path,
            'order' => $order,
        ]);

        return back()->with('success', 'বিষয় সফলভাবে সংরক্ষিত হয়েছে।');
    }

    public function update(Request $request, Subject $subject)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'nullable|image|mimes:png,jpg,jpeg,svg|max:2048',
        ]);

        if ($request->hasFile('icon')) {
            if ($subject->icon && Storage::disk('public')->exists($subject->icon)) {
                Storage::disk('public')->delete($subject->icon);
            }
            $path = $request->file('icon')->store('subjects', 'public');
            $subject->icon = $path;
        }

        $subject->name = $request->name;
        $subject->save();

        return back()->with('success', 'বিষয় সফলভাবে আপডেট হয়েছে।');
    }

    public function destroy(Subject $subject)
    {
        if ($subject->icon && Storage::disk('public')->exists($subject->icon)) {
            Storage::disk('public')->delete($subject->icon);
        }
        $subject->delete();
        return back()->with('success', 'বিষয় মুছে ফেলা হয়েছে।');
    }

    public function reorder(Request $request)
    {
        foreach ($request->order as $index => $id) {
            Subject::where('id', $id)->update(['order' => $index + 1]);
        }
        return response()->json(['success' => true]);
    }
}
