<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\PromoCode;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PromoCodeController extends Controller
{
    public function index()
    {
        $promoCodes = PromoCode::with('course')
            ->latest()
            ->get();
        $courses = Course::all();
        
        return view('admin.promo-codes.index', compact('promoCodes', 'courses'));
    }

    public function create()
    {
        $courses = Course::all();
        return view('admin.promo-codes.create', compact('courses'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|string|unique:promo_codes,code|max:50',
            'course_id' => 'nullable|exists:courses,id',
            'discount_amount' => 'required|numeric|min:0',
            'discount_type' => 'required|in:percentage,fixed',
            'valid_from' => 'nullable|date',
            'valid_until' => 'nullable|date|after_or_equal:valid_from',
            'usage_limit' => 'nullable|integer|min:1',
            'description' => 'nullable|string|max:500',
        ]);

        PromoCode::create([
            'code' => strtoupper($request->code),
            'course_id' => $request->course_id,
            'discount_amount' => $request->discount_amount,
            'discount_type' => $request->discount_type,
            'valid_from' => $request->valid_from,
            'valid_until' => $request->valid_until,
            'usage_limit' => $request->usage_limit,
            'description' => $request->description,
            'is_active' => $request->has('is_active'),
        ]);

        return redirect()->route('admin.promo-codes.index')
            ->with('success', 'Promo code successfully created!');
    }

    public function edit(PromoCode $promoCode)
    {
        $courses = Course::all();
        return view('admin.promo-codes.edit', compact('promoCode', 'courses'));
    }

    public function update(Request $request, PromoCode $promoCode)
    {
        $request->validate([
            'code' => [
                'required',
                'string',
                'max:50',
                Rule::unique('promo_codes')->ignore($promoCode->id)
            ],
            'course_id' => 'nullable|exists:courses,id',
            'discount_amount' => 'required|numeric|min:0',
            'discount_type' => 'required|in:percentage,fixed',
            'valid_from' => 'nullable|date',
            'valid_until' => 'nullable|date|after_or_equal:valid_from',
            'usage_limit' => 'nullable|integer|min:1',
            'description' => 'nullable|string|max:500',
        ]);

        $promoCode->update([
            'code' => strtoupper($request->code),
            'course_id' => $request->course_id,
            'discount_amount' => $request->discount_amount,
            'discount_type' => $request->discount_type,
            'valid_from' => $request->valid_from,
            'valid_until' => $request->valid_until,
            'usage_limit' => $request->usage_limit,
            'description' => $request->description,
            'is_active' => $request->has('is_active'),
        ]);

        return redirect()->route('admin.promo-codes.index')
            ->with('success', 'Promo code successfully updated!');
    }

    public function destroy(PromoCode $promoCode)
    {
        $promoCode->delete();

        return redirect()->route('admin.promo-codes.index')
            ->with('success', 'Promo code successfully deleted!');
    }

    public function toggleStatus(PromoCode $promoCode)
    {
        $promoCode->update([
            'is_active' => !$promoCode->is_active
        ]);

        $status = $promoCode->is_active ? 'activated' : 'deactivated';

        return redirect()->route('admin.promo-codes.index')
            ->with('success', "Promo code successfully {$status}!");
    }

    public function bulkDelete(Request $request)
    {
        $request->validate([
            'ids' => 'required|array',
            'ids.*' => 'exists:promo_codes,id'
        ]);

        PromoCode::whereIn('id', $request->ids)->delete();

        return response()->json([
            'success' => true,
            'message' => 'Selected promo codes deleted successfully!'
        ]);
    }
}