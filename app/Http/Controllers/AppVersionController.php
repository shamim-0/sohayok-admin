<?php

namespace App\Http\Controllers;

use App\Models\AppVersion;
use Illuminate\Http\Request;

class AppVersionController extends Controller
{
    public function index()
    {
        $appVersion = AppVersion::first();
        return view('admin.app-version.index', compact('appVersion'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'version_name' => 'required|string|max:20',
            'version_code' => 'required|integer|min:1',
            'min_version_code' => 'required|integer|min:1|lte:version_code',
            'update_url' => 'nullable|url|max:255',
            'update_message' => 'nullable|string|max:1000',
        ]);

        $data = [
            'version_name' => $request->version_name,
            'version_code' => $request->version_code,
            'min_version_code' => $request->min_version_code,
            'is_force_update' => $request->boolean('is_force_update'),
            'update_url' => $request->update_url,
            'update_message' => $request->update_message,
        ];

        $appVersion = AppVersion::first();

        if ($appVersion) {
            $appVersion->update($data);
            $message = 'অ্যাপ ভার্সন তথ্য সফলভাবে আপডেট করা হয়েছে!';
        } else {
            AppVersion::create($data);
            $message = 'অ্যাপ ভার্সন তথ্য সফলভাবে সংরক্ষণ করা হয়েছে!';
        }

        return redirect()->route('admin.app-version.index')
            ->with('success', $message);
    }
}
