<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\SelfExamResult;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardAPIController extends Controller
{
    public function index($user_id)
    {
        $enrolled = Order::where('user_id', $user_id)->where('status', 'completed')->count();
        return response()->json([
            'enrolled' => $enrolled
        ]);
    }

    public function courses($user_id)
    {
        $courses = Order::where('user_id', $user_id)->with(['course', 'course.exam'])->where('status', 'completed')->get();

        return response()->json([
            'courses' => $courses
        ]);
    }

    public function progress($user_id)
    {
        $results = SelfExamResult::where('user_id', $user_id)
            ->orderBy('created_at', 'desc')
            ->get();
        return response()->json([
            'results' => $results
        ]);
    }


    public function profile($user_id)
    {
        $user = User::find($user_id);
        return response()->json([
            'user' => $user
        ]);
    }
    public function updateProfile($user_id, Request $request)
    {
        $user = User::find($user_id);
        $user->update($request->all());
        return response()->json([
            'user' => $user
        ]);
    }
}
