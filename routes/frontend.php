<?php

use App\Http\Controllers\EnrollController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SelfTestController;
use App\Http\Controllers\SSLsslcommerzController;
use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/account-delete-request', [HomeController::class, 'accountDeleteRequest'])->name('account.delete.request');

Route::get('/about-us', [HomeController::class, 'about'])->name('about');
Route::get('/notice', [HomeController::class, 'notice'])->name('notice');
Route::get('/instructors', [HomeController::class, 'instructors'])->name('instructors');
Route::get('/courses', [HomeController::class, 'courses'])->name('courses');
Route::get('/course/{slug}', [HomeController::class, 'courses_details'])->name('courses_details');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::post('/contact', [HomeController::class, 'contact_store'])->name('contact.store');

Route::get('/smart-test', [SelfTestController::class, 'index'])->name('self.index');

Route::get('/privacy-policy', [HomeController::class, 'privacy'])->name('privacy');
Route::get('/terms-conditions', [HomeController::class, 'terms'])->name('terms');
Route::get('/refund-policy', [HomeController::class, 'refund'])->name('refund');


Route::middleware(['auth'])->group(function () {
    // enroll
    Route::get('/enroll/{slug}', [EnrollController::class, 'enroll'])->name('enroll');
    Route::post('/enroll/validate-coupon', [EnrollController::class, 'validateCoupon'])->name('enroll.validate-coupon');
    Route::post('/enroll/process', [EnrollController::class, 'processEnrollment'])->name('enroll.process');
    Route::get('/enroll/success/{orderId}', [EnrollController::class, 'enrollmentSuccess'])->name('enroll.success');

    Route::post('/enroll/free', [EnrollController::class, 'enrollFree'])->name('enroll.free');

    Route::post('/enroll/sslcommerz-init', [SSLsslcommerzController::class, 'proccess'])->name('sslcommerz.process');

    // selft test
    Route::get('/self-test/{id}', [SelfTestController::class, 'subject'])->name('self.subject');
    Route::get('/self/start-exam', [SelfTestController::class, 'start_exam'])->name('self.start_exam');
    Route::post('/self/exam-submit', [SelfTestController::class, 'submit_exam'])->name('self.exam_submit');
    Route::get('/self/result/{id}', [SelfTestController::class, 'show_result'])->name('self.result');
});

// SSLCommerz gateway/server callbacks — must stay unauthenticated: the IPN is a
// server-to-server call from SSLCommerz with no Laravel session, and success/fail/
// cancel are browser redirects from the gateway that also carry no session.
Route::match(['get', 'post'], '/payment/success', [SSLsslcommerzController::class, 'success'])->name('sslcommerz.success');
Route::match(['get', 'post'], '/payment/cancel', [SSLsslcommerzController::class, 'cancel'])->name('sslcommerz.cancel');
Route::post('/payment/fail', [SSLsslcommerzController::class, 'cancel'])->name('sslcommerz.fail');
Route::post('/payment/ipn', [SSLsslcommerzController::class, 'ipn'])->name('sslcommerz.ipn');
