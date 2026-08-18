<?php

namespace App\Models;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Database\Eloquent\Model;


class StudentController extends Model
{
    public function index()
    {
        $enrolled = Order::where('user_id', Auth::id())->where('status', 'completed')->count();
        return Inertia::render('student/dashboard', compact('enrolled'));
    }

    public function courses()
    {

        $courses = Order::where('user_id', Auth::id())->with('course')->where('status', 'completed')->get();
        return Inertia::render('student/course', compact('courses'));
    }


    public function profile()
    {
        $user = User::find(auth()->id());
        return Inertia::render('student/profile', compact('user'));

    }
    public function progress()
    {
        $results = SelfExamResult::where('user_id', auth()->id())
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('student/progress', [
            'results' => $results
        ]);
    }



    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'current_education' => 'nullable|string|max:255',
            'institute_name' => 'nullable|string|max:255',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ]);

        $data = $request->only([
            'name',
            'phone',
            'current_education',
            'institute_name'
        ]);

        if ($request->hasFile('avatar')) {
            // Delete old avatar if exists
            if ($user->avatar && Storage::exists(str_replace(url('/storage/'), '', $user->avatar))) {
                Storage::delete(str_replace(url('/storage/'), '', $user->avatar));
            }

            // Store new avatar
            $avatarPath = $request->file('avatar')->store('avatars', 'public');

            // Save full URL in DB
            $data['avatar'] = url('storage/' . $avatarPath);
        }

        if ($request->has('remove_avatar') && $request->remove_avatar) {
            if ($user->avatar && Storage::exists(str_replace(url('/storage/'), '', $user->avatar))) {
                Storage::delete(str_replace(url('/storage/'), '', $user->avatar));
            }
            $data['avatar'] = null;
        }

        $user->update($data);

        return back()->with('success', 'প্রোফাইল সফলভাবে আপডেট হয়েছে।');
    }


}
