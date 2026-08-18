<?php

use App\Http\Controllers\Auth\GoogleLoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;





Route::get('/auth/google', [GoogleLoginController::class, 'redirectToGoogle'])
    ->name('google.login');

Route::get('/auth/google/callback', [GoogleLoginController::class, 'handleGoogleCallback'])
    ->name('google.callback');

    
Route::get('/admin/login', function () {
    return Inertia::render('auth/admin-login');
});






// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

require __DIR__ . '/settings.php';
require __DIR__ . '/frontend.php';
require __DIR__ . '/frontend-api.php';
require __DIR__ . '/student.php';
require __DIR__ . '/admin.php';
