<?php

namespace App\Http\Controllers;

use App\Models\Instructor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class InstructorController extends Controller
{
    public function index()
    {
        $instructors = Instructor::orderBy('order')->get();
        return view('admin.instructor.index', compact('instructors'));
    }


    public function create()
{
    return view('admin.instructor.create');
}

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:instructors,email',
            'phone' => 'nullable|string|max:20',
            'bio' => 'nullable|string',
            'education' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'is_active' => 'boolean'
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('instructors', $imageName, 'public');
            $validated['image'] = $imagePath;
        }

        // Set order (last position)
        $validated['order'] = Instructor::max('order') + 1;

        Instructor::create($validated);

        return redirect()->route('admin.instructors.index')
            ->with('success', 'শিক্ষক সফলভাবে তৈরি করা হয়েছে।');
    }

    public function show(Instructor $instructor)
    {
        return view('admin.instructor.show', compact('instructor'));
    }

    public function edit(Instructor $instructor)
    {
        return view('admin.instructor.edit', compact('instructor'));
    }

    public function update(Request $request, Instructor $instructor)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:instructors,email,' . $instructor->id,
            'phone' => 'nullable|string|max:20',
            'bio' => 'nullable|string',
            'education' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'is_active' => 'boolean'
        ]);

        // Handle image update
        if ($request->hasFile('image')) {
            // Delete old image
            if ($instructor->image) {
                Storage::disk('public')->delete($instructor->image);
            }
            
            // Store new image
            $image = $request->file('image');
            $imageName = time() . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('instructors', $imageName, 'public');
            $validated['image'] = $imagePath;
        }

        // Handle image removal
        if ($request->has('remove_image') && $request->remove_image) {
            if ($instructor->image) {
                Storage::disk('public')->delete($instructor->image);
            }
            $validated['image'] = null;
        }

        $instructor->update($validated);

        return redirect()->route('admin.instructors.index')
            ->with('success', 'শিক্ষক সফলভাবে আপডেট করা হয়েছে।');
    }

    public function destroy(Instructor $instructor)
    {
        // Delete image
        if ($instructor->image) {
            Storage::disk('public')->delete($instructor->image);
        }

        $instructor->delete();

        return redirect()->route('admin.instructors.index')
            ->with('success', 'শিক্ষক সফলভাবে মুছে ফেলা হয়েছে।');
    }

    public function updateOrder(Request $request)
    {
        foreach ($request->order as $orderData) {
            Instructor::where('id', $orderData['id'])->update(['order' => $orderData['order']]);
        }

        return response()->json(['success' => true]);
    }
}