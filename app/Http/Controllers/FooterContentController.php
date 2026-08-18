<?php

namespace App\Http\Controllers;

use App\Models\FooterContent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FooterContentController extends Controller
{
    public function index()
    {
        $footerContent = FooterContent::first();
        return view('admin.footer-content.index', compact('footerContent'));
    }

    public function store(Request $request)
    {
        $request->validate([
            // Brand Section
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'brand_description' => 'required|string|max:500',
            'play_store_url' => 'nullable|url',
            'app_store_url' => 'nullable|url',
            
            // Contact Section
            'address' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            
            // Support Links
            'privacy_policy_url' => 'required|string|max:255',
            'terms_conditions_url' => 'required|string|max:255',
            'refund_policy_url' => 'required|string|max:255',
            
            // Quick Links
            'about_us_url' => 'required|string|max:255',
            'courses_url' => 'required|string|max:255',
            'notice_url' => 'required|string|max:255',
            'contact_url' => 'required|string|max:255',
            
            // Social Media Links
            'facebook_url' => 'nullable|url',
            'youtube_url' => 'nullable|url',
            'linkedin_url' => 'nullable|url',
            'twitter_url' => 'nullable|url',
            'instagram_url' => 'nullable|url',
            
            // Copyright
            'copyright_text' => 'required|string|max:255',
        ]);

        // Handle logo upload
        $logoPath = null;
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('footer', 'public');
        }

        // Check if footer content already exists
        $footerContent = FooterContent::first();

        $data = [
            'brand_description' => $request->brand_description,
            'play_store_url' => $request->play_store_url,
            'app_store_url' => $request->app_store_url,
            'address' => $request->address,
            'phone' => $request->phone,
            'email' => $request->email,
            'privacy_policy_url' => $request->privacy_policy_url,
            'terms_conditions_url' => $request->terms_conditions_url,
            'refund_policy_url' => $request->refund_policy_url,
            'about_us_url' => $request->about_us_url,
            'courses_url' => $request->courses_url,
            'notice_url' => $request->notice_url,
            'contact_url' => $request->contact_url,
            'facebook_url' => $request->facebook_url,
            'youtube_url' => $request->youtube_url,
            'linkedin_url' => $request->linkedin_url,
            'twitter_url' => $request->twitter_url,
            'instagram_url' => $request->instagram_url,
            'copyright_text' => $request->copyright_text,
        ];

        if ($logoPath) {
            // Delete old logo if exists
            if ($footerContent && $footerContent->logo_path) {
                Storage::disk('public')->delete($footerContent->logo_path);
            }
            $data['logo_path'] = $logoPath;
        }

        if ($footerContent) {
            // Update existing
            $footerContent->update($data);
            $message = 'ফুটার কন্টেন্ট সফলভাবে আপডেট করা হয়েছে!';
        } else {
            // Create new
            FooterContent::create($data);
            $message = 'ফুটার কন্টেন্ট সফলভাবে তৈরি করা হয়েছে!';
        }

        return redirect()->route('admin.footer-content.index')
            ->with('success', $message);
    }
}