<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::latest()->paginate(10);
        return view('admin.categories.index', compact('categories'));
    }

    public function create()
    {
        return view('admin.categories.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:categories',
            'slug' => 'nullable|string|max:255|unique:categories',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'is_active' => 'boolean'
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('categories', 'public');
            $validated['image'] = $imagePath;
        }

        // Generate slug if empty
        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        Category::create($validated);

        return redirect()->route('admin.categories.index')
            ->with('success', 'ক্যাটাগরি সফলভাবে তৈরি করা হয়েছে।');
    }

    public function show(Category $category)
    {
        return view('admin.categories.show', compact('category'));
    }

    public function edit(Category $category)
    {
        return view('admin.categories.edit', compact('category'));
    }

    public function update(Request $request, Category $category)
    {

        // dd($request->all());

        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('categories')->ignore($category->id)
            ],
            'slug' => [
                'nullable',
                'string',
                'max:255',
                Rule::unique('categories')->ignore($category->id)
            ],
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'is_active' => 'boolean'
        ]);

        // Handle image update
        if ($request->hasFile('image')) {
            // Delete old image
            if ($category->image) {
                Storage::disk('public')->delete($category->image);
            }
            
            // Store new image
            $imagePath = $request->file('image')->store('categories', 'public');
            $validated['image'] = $imagePath;
        }

        // Handle image removal
        if ($request->has('remove_image') && $request->remove_image) {
            if ($category->image) {
                Storage::disk('public')->delete($category->image);
            }
            $validated['image'] = null;
        }

        // Generate slug if empty
        if (empty($validated['slug'])) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        $category->update($validated);

        return redirect()->route('admin.categories.index')
            ->with('success', 'ক্যাটাগরি সফলভাবে আপডেট করা হয়েছে।');
    }

    public function destroy(Category $category)
    {
        // Check if category has courses
        if ($category->courses()->exists()) {
            return redirect()->route('admin.categories.index')
                ->with('error', 'এই ক্যাটাগরিতে কোর্স রয়েছে, তাই মুছে ফেলা যাবে না।');
        }

        // Delete image
        if ($category->image) {
            Storage::disk('public')->delete($category->image);
        }

        $category->delete();

        return redirect()->route('admin.categories.index')
            ->with('success', 'ক্যাটাগরি সফলভাবে মুছে ফেলা হয়েছে।');
    }
}