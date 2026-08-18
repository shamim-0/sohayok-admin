<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::orderBy('order')->get();
        return view('admin.reviews.index', compact('reviews'));
    }

    public function create()
    {
        return view('admin.reviews.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'school_college' => 'required|string|max:255',
            'comment' => 'required|string|min:10|max:1000',
            'rating' => 'required|integer|min:1|max:5',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_active' => 'boolean',
        ]);

        $data = [
            'name' => $request->name,
            'school_college' => $request->school_college,
            'comment' => $request->comment,
            'rating' => $request->rating,
            'is_active' => $request->has('is_active'),
        ];

        // Handle image upload
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $filePath = $file->storeAs('reviews', $fileName, 'public');
            $data['image'] = $filePath;
        }

        Review::create($data);

        return redirect()->route('admin.reviews.index')
            ->with('success', 'Review created successfully!');
    }

    public function edit(Review $review)
    {
        return view('admin.reviews.edit', compact('review'));
    }

    public function update(Request $request, Review $review)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'school_college' => 'required|string|max:255',
            'comment' => 'required|string|min:10|max:1000',
            'rating' => 'required|integer|min:1|max:5',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_active' => 'boolean',
        ]);

        $data = [
            'name' => $request->name,
            'school_college' => $request->school_college,
            'comment' => $request->comment,
            'rating' => $request->rating,
            'is_active' => $request->has('is_active'),
        ];

        // Handle image upload
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($review->image) {
                Storage::disk('public')->delete($review->image);
            }

            $file = $request->file('image');
            $fileName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $filePath = $file->storeAs('reviews', $fileName, 'public');
            $data['image'] = $filePath;
        }

        $review->update($data);

        return redirect()->route('admin.reviews.index')
            ->with('success', 'Review updated successfully!');
    }

    public function destroy(Review $review)
    {
        // Delete associated image
        if ($review->image) {
            Storage::disk('public')->delete($review->image);
        }

        $review->delete();

        return redirect()->route('admin.reviews.index')
            ->with('success', 'Review deleted successfully!');
    }

    public function toggleStatus(Review $review)
    {
        $review->update([
            'is_active' => !$review->is_active
        ]);

        $status = $review->is_active ? 'activated' : 'deactivated';

        return redirect()->route('admin.reviews.index')
            ->with('success', "Review successfully {$status}!");
    }

    public function updateOrder(Request $request)
    {
        $request->validate([
            'reviews' => 'required|array'
        ]);

          foreach ($request->reviews as $index => $courseInstructor) {
            $cn = Review::find($courseInstructor);
            $cn->order = $index + 1;
            $cn->save();
        }

        return response()->json(['success' => true, 'message' => 'Order updated successfully!']);
    }

    public function bulkDelete(Request $request)
    {
        $request->validate([
            'ids' => 'required|array',
            'ids.*' => 'exists:reviews,id'
        ]);

        $reviews = Review::whereIn('id', $request->ids)->get();

        foreach ($reviews as $review) {
            if ($review->image) {
                Storage::disk('public')->delete($review->image);
            }
            $review->delete();
        }

        return response()->json([
            'success' => true,
            'message' => 'Selected reviews deleted successfully!'
        ]);
    }
}