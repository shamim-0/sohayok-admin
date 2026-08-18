<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class GoogleLoginController extends Controller
{


    public function handleGoogleCallback(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'name' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'google_id' => $request->google_id ?? null,
                'password' => bcrypt(Str::random(32)),
                'avatar' => $request->avatar ?? null,
            ]);
        }

        // tokrn will be generated here randomly for now, you can implement sanctum or passport for better token management
        $token = Str::random(60);

        // $token = ge

        return response()->json([
            'success' => true,
            'token' => $token,
            'user' => $user,
        ]);
    }
}
