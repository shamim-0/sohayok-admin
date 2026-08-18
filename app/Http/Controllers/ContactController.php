<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $contact = Contact::latest()->paginate(10);
        return view('admin.contact.index', compact('contact'));
    }

    /**
     * Admin: Show single message (for AJAX modal)
     */
    public function show($id)
    {
        $contact = Contact::findOrFail($id);
        return response()->json($contact);
    }

    /**
     * Admin: Mark message as read
     */
    public function mark_as_read($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->update(['status' => 1]);

        return redirect()->route('admin.contact')->with('success', 'Message marked as read successfully.');
    }

    /**
     * Admin: Delete contact message
     */
    public function destroy_contact($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();

        return redirect()->route('admin.contact')->with('success', 'Message deleted successfully.');
    }
}