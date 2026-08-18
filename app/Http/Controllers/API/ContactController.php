<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\Instructor;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function contact_store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:15|min:11',
            'mesage' => 'required|string|min:10'
        ]);

        Contact::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'mesage' => $validated['mesage'],
            'status' => 0,
        ]);

        return response()->json(['message' => 'আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।']);
    }



    public function instructor()
    {
        $instructors = Instructor::all();
        return response()->json($instructors);
    }
}
