<?php

namespace App\Http\Controllers;

use App\Models\Notice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class NoticeController extends Controller
{
    public function index()
    {
        $notices = Notice::orderBy('order')->get();
        return view('admin.notices.index', compact('notices'));
    }

    public function create()
    {
        return view('admin.notices.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'link' => 'nullable|url|max:500',
            'pdf_file' => 'nullable|file|mimes:pdf|max:10240', // 10MB
            'publish_date' => 'nullable|date',
            'expire_date' => 'nullable|date|after_or_equal:publish_date',
            'is_active' => 'boolean',
        ]);

        $data = [
            'title' => $request->title,
            'description' => $request->description,
            'link' => $request->link,
            'publish_date' => $request->publish_date,
            'expire_date' => $request->expire_date,
            'is_active' => $request->has('is_active'),
        ];

        // Handle PDF file upload
        if ($request->hasFile('pdf_file')) {
            $file = $request->file('pdf_file');
            $fileName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $filePath = $file->storeAs('notices', $fileName, 'public');
            $data['pdf_file'] = $filePath;
        }

        Notice::create($data);

        return redirect()->route('admin.notices.index')
            ->with('success', 'Notice created successfully!');
    }

    public function edit(Notice $notice)
    {
        return view('admin.notices.edit', compact('notice'));
    }

    public function update(Request $request, Notice $notice)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'link' => 'nullable|url|max:500',
            'pdf_file' => 'nullable|file|mimes:pdf|max:10240',
            'publish_date' => 'nullable|date',
            'expire_date' => 'nullable|date|after_or_equal:publish_date',
            'is_active' => 'boolean',
        ]);

        $data = [
            'title' => $request->title,
            'description' => $request->description,
            'link' => $request->link,
            'publish_date' => $request->publish_date,
            'expire_date' => $request->expire_date,
            'is_active' => $request->has('is_active'),
        ];

        // Handle PDF file upload
        if ($request->hasFile('pdf_file')) {
            // Delete old file if exists
            if ($notice->pdf_file) {
                Storage::disk('public')->delete($notice->pdf_file);
            }

            $file = $request->file('pdf_file');
            $fileName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
            $filePath = $file->storeAs('notices', $fileName, 'public');
            $data['pdf_file'] = $filePath;
        }

        $notice->update($data);

        return redirect()->route('admin.notices.index')
            ->with('success', 'Notice updated successfully!');
    }

    public function destroy(Notice $notice)
    {
        // Delete associated PDF file
        if ($notice->pdf_file) {
            Storage::disk('public')->delete($notice->pdf_file);
        }

        $notice->delete();

        return redirect()->route('admin.notices.index')
            ->with('success', 'Notice deleted successfully!');
    }

    public function toggleStatus(Notice $notice)
    {
        $notice->update([
            'is_active' => !$notice->is_active
        ]);

        $status = $notice->is_active ? 'activated' : 'deactivated';

        return redirect()->route('admin.notices.index')
            ->with('success', "Notice successfully {$status}!");
    }

    public function updateOrder(Request $request)
    {
        $request->validate([
            'notices' => 'required|array'
        ]);

        // dd($request->all());



        foreach ($request->notices as $index => $courseInstructor) {
            $cn = Notice::find($courseInstructor);
            $cn->order = $index + 1;
            $cn->save();
        }


        return response()->json(['success' => true, 'message' => 'Order updated successfully!']);
    }





    public function downloadPdf(Notice $notice)
    {
        if (!$notice->pdf_file) {
            return redirect()->back()->with('error', 'PDF file not found!');
        }

        return Storage::disk('public')->download($notice->pdf_file);
    }

    public function bulkDelete(Request $request)
    {
        $request->validate([
            'ids' => 'required|array',
            'ids.*' => 'exists:notices,id'
        ]);

        $notices = Notice::whereIn('id', $request->ids)->get();

        foreach ($notices as $notice) {
            if ($notice->pdf_file) {
                Storage::disk('public')->delete($notice->pdf_file);
            }
            $notice->delete();
        }

        return response()->json([
            'success' => true,
            'message' => 'Selected notices deleted successfully!'
        ]);
    }
}