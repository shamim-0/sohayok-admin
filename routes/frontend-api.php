<?php

use App\Http\Controllers\API\BannerApiController;
use App\Http\Controllers\API\CategoryApiController;
use App\Http\Controllers\API\ClassessController;
use App\Http\Controllers\API\CommentController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\DashboardAPIController;
use App\Http\Controllers\API\EnrollController;
use App\Http\Controllers\API\GoogleLoginController;
use App\Http\Controllers\API\QuizExamController;
use App\Http\Controllers\API\AppVersionApiController;
use App\Http\Controllers\API\SmartTestAPICOntroller;
use App\Http\Controllers\API\SslcommerzController;



Route::post('/api/auth/google', [GoogleLoginController::class, 'handleGoogleCallback']);

// App version / force update check
Route::get('/api/v1/check-app-version', [AppVersionApiController::class, 'check']);

Route::get('/api/banner', [BannerApiController::class, 'index']);
Route::get('/api/categories', [CategoryApiController::class, 'index']);
Route::get('/api/popular-courses', [CategoryApiController::class, 'popularCourses']);


Route::get('/api/courses', [CategoryApiController::class, 'allCourses']);
Route::get('/course/details/{slug}', [CategoryApiController::class, 'courses_details']);

// smart test 
Route::get('/api/smart-test', [SmartTestAPICOntroller::class, 'index']);
Route::get('/api/smart-test/subject/{id}', [SmartTestAPICOntroller::class, 'subject']);
Route::get('/api/self/start-exam', [SmartTestAPICOntroller::class, 'start_exam']);
Route::post('/api/self/exam-submit', [SmartTestAPICOntroller::class, 'submit_exam']);






// enroll routes

Route::get('/api/enroll/{slug}', [EnrollController::class, 'enroll']);
Route::post('/api/enroll/process', [EnrollController::class, 'processEnrollment']);
Route::post('/api/enroll/free', [EnrollController::class, 'freeEnrollment']);
Route::post('/api/enroll/sslcommerz-init', [SslcommerzController::class, 'init']);
Route::get('/api/enroll/sslcommerz-status/{orderId}', [SslcommerzController::class, 'status']);


Route::get('/api/check/enroll/{user_id}/{course_id}', [EnrollController::class, 'check_enroll']);



// dashboard routes

Route::get('/api/dashboard/student/dashboard/{user_id}', [DashboardAPIController::class, 'index']);
Route::get('/api/dashboard/student/courses/{user_id}', [DashboardAPIController::class, 'courses']);
Route::get('/api/dashboard/student/progress/{user_id}', [DashboardAPIController::class, 'progress']);
Route::get('/api/student/profile/{user_id}', [DashboardAPIController::class, 'profile']);

// profile update postb api 
Route::post('/api/student/profile/update/{user_id}', [DashboardAPIController::class, 'updateProfile']);




// class api controler 

Route::get('/api/student/class/{id}/{user_id}', [ClassessController::class, 'index']);



Route::get('/api/student/class/start-quiz/{lessonId}/{courseId}', [QuizExamController::class, 'start_quiz']);
Route::post('/api/student/class/submit-quiz', [QuizExamController::class, 'submit_quiz']);


Route::get('/student/quiz/results/{lesson_id}/{user_id}', [QuizExamController::class, 'get_user_results']);


// comment
Route::get('/api/comments', [CommentController::class, 'index']);
Route::post('/api/student/class/store-comment', [CommentController::class, 'store']);


Route::post('/api/student/contact/store', [ContactController::class, 'contact_store']);


Route::get('/api/instructor', [ContactController::class, 'instructor']);

