<?php

use App\Http\Controllers\ClassessController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\QuizExamController;
use App\Http\Controllers\StudentWrittenExamController;
use App\Models\StudentController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth'])->group(function () {

Route::get('/student/dashboard', [StudentController::class, 'index'])->name('dashboard');      //Done

Route::get('/student/courses', [StudentController::class, 'courses'])->name('student.courses');    //Done
Route::get('/student/exam/{id}', [StudentWrittenExamController::class, 'exam'])->name('student.exam'); 
Route::get('/student/exam/show/{course_id}/{exam_id}', [StudentWrittenExamController::class, 'show'])->name('student.exam.show');
Route::post('/student/written-exam/{course_id}/exam/{exam_id}/submit', [StudentWrittenExamController::class, 'submit'])->name('written.exam.submit');


Route::get('/student/profile', [StudentController::class, 'profile'])->name('student.profile');  //Done
Route::post('/student/profile', [StudentController::class, 'updateProfile'])->name('student.profile.update');
Route::get('/student/progress', [StudentController::class, 'progress'])->name('student.progress');


Route::get('/student/class/{id}', [ClassessController::class, 'index'])->name('student.classes');
Route::post('/student/progress/update', [ClassessController::class, 'updateLessonProgress'])->name('student.progress.update');
Route::get('/student/progress/{courseId}', [ClassessController::class, 'getCourseProgress'])->name('student.progress.get');



Route::post('/student/class/store-comment', [CommentController::class, 'store'])->name('student.comment');
Route::post('/student/class/store-comment-reply', [CommentController::class, 'store_reply'])->name('student.comment');

Route::get('/comments', [CommentController::class, 'index'])->name('student.comments');
Route::delete('/comment/{id}', [CommentController::class, 'destroy'])->name('student.comment.destroy');
Route::delete('/reply/{id}', [CommentController::class, 'destroy_reply'])->name('student.comment.destroy_reply');


Route::get('/student/class/start-quiz/{lessonId}/{courseId}', [QuizExamController::class, 'start_quiz'])->name('student.start_quiz');
Route::post('/student/class/submit-quiz', [QuizExamController::class, 'submit_quiz']);
Route::get('/student/quiz/results/{lesson_id}', [QuizExamController::class, 'get_user_results']);
Route::get('/student/quiz/statistics/{course_id}', [QuizExamController::class, 'get_quiz_statistics']);
Route::get('/student/quiz/results-check/{lesson_id}', [QuizExamController::class, 'check_results']);

});


