<?php

use App\Http\Controllers\Admin\ExamController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppVersionController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\CategorySectionController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CourseFeaturesController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseContentController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseInstructorController;
use App\Http\Controllers\FooterContentController;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\InstructorSectionController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\NoticeController;
use App\Http\Controllers\OrderManageController;
use App\Http\Controllers\PopularCourseController;
use App\Http\Controllers\PopularCourseSectionController;
use App\Http\Controllers\PromoCodeController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizQuestionController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ReviewPageSectionController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WhyChooseUsSectionController;
use Illuminate\Support\Facades\Route;



Route::middleware(['auth', 'admin'])->group(function () {

    Route::get('/admin/panel', [AdminController::class, 'index'])->name('admin.index');

    Route::prefix('admin/users')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('admin.users.index');
        Route::get('/create', [UserController::class, 'create'])->name('admin.users.create');
        Route::post('/', [UserController::class, 'store'])->name('admin.users.store');
        Route::get('/{user}', [UserController::class, 'show'])->name('admin.users.show');
        Route::get('/{user}/edit', [UserController::class, 'edit'])->name('admin.users.edit');
        Route::put('/{user}', [UserController::class, 'update'])->name('admin.users.update');
        Route::delete('/{user}', [UserController::class, 'destroy'])->name('admin.users.destroy');
    });


    Route::prefix('admin/categories')->group(function () {
        Route::get('/', [CategoryController::class, 'index'])->name('admin.categories.index');
        Route::get('/create', [CategoryController::class, 'create'])->name('admin.categories.create');
        Route::post('/', [CategoryController::class, 'store'])->name('admin.categories.store');
        Route::get('/{category}', [CategoryController::class, 'show'])->name('admin.categories.show');
        Route::get('/{category}/edit', [CategoryController::class, 'edit'])->name('admin.categories.edit');
        Route::put('/{category}', [CategoryController::class, 'update'])->name('admin.categories.update');
        Route::delete('/{category}', [CategoryController::class, 'destroy'])->name('admin.categories.destroy');
    });


    Route::prefix('admin/courses/{course}/exams')->name('admin.courses.exams.')->group(function () {
        Route::get('/', [ExamController::class, 'index'])->name('index');
        Route::get('/create', [ExamController::class, 'create'])->name('create');
        Route::post('/', [ExamController::class, 'store'])->name('store');
        Route::get('/{exam}', [ExamController::class, 'show'])->name('show');
        Route::get('/{exam}/edit', [ExamController::class, 'edit'])->name('edit');
        Route::put('/{exam}', [ExamController::class, 'update'])->name('update');
        Route::delete('/{exam}', [ExamController::class, 'destroy'])->name('destroy');
        Route::get('/{exam}/submissions', [ExamController::class, 'submissions'])->name('submissions');
        Route::post('/{exam}/submissions/{submission}/grade', [ExamController::class, 'gradeSubmission'])->name('grade');
    });



    Route::prefix('admin/courses')->group(function () {
        Route::get('/', [CourseController::class, 'index'])->name('admin.courses.index');
        Route::get('/create', [CourseController::class, 'create'])->name('admin.courses.create');
        Route::post('/', [CourseController::class, 'store'])->name('admin.courses.store');
        Route::get('/{course}', [CourseController::class, 'show'])->name('admin.courses.show');
        Route::post('/update/enrolled/{course}', [CourseController::class, 'update_Enrolled'])->name('admin.courses.update.enrolled');
        Route::get('/students/{course}', [CourseController::class, 'show_students'])->name('admin.courses.student');
        Route::get('/{course}/edit', [CourseController::class, 'edit'])->name('admin.courses.edit');
        Route::put('/{course}', [CourseController::class, 'update'])->name('admin.courses.update');
        Route::delete('/{course}', [CourseController::class, 'destroy'])->name('admin.courses.destroy');


        Route::get('/instructor/{course}', [CourseInstructorController::class, 'instructor'])->name('admin.courses.instructor');
        Route::post('/instructor/{course}/add', [CourseInstructorController::class, 'addInstructor'])->name('admin.courses.instructor.add');
        Route::delete('/instructor/{course}/remove/{instructor}', [CourseInstructorController::class, 'removeInstructor'])->name('admin.courses.instructor.remove');
        Route::post('/instructor/{course}/update-order', [CourseInstructorController::class, 'updateOrder'])->name('admin.courses.instructor.update-order');

        Route::get('/{course}/routine', [CourseController::class, 'routine'])->name('admin.courses.routine');
        Route::post('/{course}/routine', [CourseController::class, 'routineStore'])->name('admin.courses.routine.store');
        Route::delete('/{course}/routine', [CourseController::class, 'routineDestroy'])->name('admin.courses.routine.destroy');


        Route::get('/content/{course}', [CourseContentController::class, 'content'])->name('admin.courses.content');
        Route::get('/content/chapter/{course}', [CourseContentController::class, 'chapter'])->name('admin.courses.content.chapter');
        Route::get('/content/chapter/edit/{course_id}/{chapter_id}', [CourseContentController::class, 'chapter_edit'])->name('admin.courses.content.chapter.edit');
        Route::post('/content/chapter/{course}', [CourseContentController::class, 'chapter_store'])->name('admin.chapters.store');
        Route::post('/content/chapter/store/{course_id}/{chapter_id}', [CourseContentController::class, 'chapter_update'])
            ->name('admin.chapters.update');
        Route::delete('/content/chapter/destroy/{chapter_id}', [CourseContentController::class, 'chapter_destroy'])->name('admin.courses.content.chapter.destroy');
        Route::post('/admin/courses/{course}/chapters/reorder', [CourseContentController::class, 'reorder'])->name('admin.courses.content.chapters.reorder');



        Route::get('/content/lesson/{course_id}/{chapter_id}', [LessonController::class, 'index'])->name('admin.courses.lesson.index');
        Route::post('/courses/lessons', [LessonController::class, 'store'])->name('admin.courses.lessons.store');
        Route::put('/lessons/{id}', [LessonController::class, 'update'])->name('admin.courses.lessons.update');
        Route::delete('/lessons/{id}', [LessonController::class, 'destroy'])->name('admin.courses.lessons.destroy');
        Route::post('/courses/lessons/reorder', [LessonController::class, 'reorder'])->name('admin.courses.lessons.reorder');


        Route::get('/content/lesson/quiz-question/{course_id}/{chapter_id}/{lesson_id}', [QuizQuestionController::class, 'index'])->name('admin.courses.lesson.quiz.question');
        Route::post('/quiz-questions', [QuizQuestionController::class, 'store'])->name('admin.quiz.questions.store');
        Route::put('/quiz-questions/{id}', [QuizQuestionController::class, 'update'])->name('admin.quiz.questions.update');
        Route::delete('/quiz-questions/{id}', [QuizQuestionController::class, 'destroy'])->name('admin.quiz.questions.destroy');
        Route::post('/quiz-questions/import', [QuizQuestionController::class, 'import'])->name('admin.quiz.questions.import');

    });



    Route::prefix('/admin/courses/{course}')->group(function () {
        Route::get('/features', [CourseFeaturesController::class, 'features'])->name('admin.courses.features');
        Route::post('/features', [CourseFeaturesController::class, 'store'])->name('admin.courses.features.store');
        Route::put('/features/{feature}', [CourseFeaturesController::class, 'update'])->name('admin.courses.features.update');
        Route::delete('/features/{feature}', [CourseFeaturesController::class, 'destroy'])->name('admin.courses.features.destroy');
        Route::post('/features/order', [CourseFeaturesController::class, 'updateOrder'])->name('admin.courses.features.order');
        Route::post('/features/{feature}/toggle', [CourseFeaturesController::class, 'toggleStatus'])->name('admin.courses.features.toggle');
    });



    Route::prefix('/admin/panel/courses')->group(function () {
        Route::get('/popular', [PopularCourseController::class, 'popularcourse'])->name('admin.courses.popularcourse');
        Route::post('/popular/add', [PopularCourseController::class, 'add'])->name('admin.courses.popular.add');
        Route::delete('/popular/remove/{popularCourse}', [PopularCourseController::class, 'remove'])->name('admin.courses.popular.remove');
        Route::post('/popular/update-order', [PopularCourseController::class, 'updateOrder'])->name('admin.courses.popular.update-order');
    });
    Route::prefix('/admin/panel/contact')->group(function () {
        Route::get('/', [ContactController::class, 'index'])->name('admin.contact');
        Route::get('/{id}', [ContactController::class, 'show'])->name('contact.show');
        Route::post('/contact/{id}/mark-read', [ContactController::class, 'mark_as_read'])->name('contact.mark.read');
        Route::delete('/contact/{id}', [ContactController::class, 'destroy_contact'])->name('contact.destroy');
    });




    Route::prefix('/admin/instructor')->name('admin.instructors.')->group(function () {
        Route::get('/', [InstructorController::class, 'index'])->name('index');
        Route::get('/create', [InstructorController::class, 'create'])->name('create');
        Route::post('/', [InstructorController::class, 'store'])->name('store');
        Route::get('/{instructor}', [InstructorController::class, 'show'])->name('show');
        Route::get('/{instructor}/edit', [InstructorController::class, 'edit'])->name('edit');
        Route::put('/{instructor}', [InstructorController::class, 'update'])->name('update');
        Route::delete('/{instructor}', [InstructorController::class, 'destroy'])->name('destroy');
        Route::post('/update-order', [InstructorController::class, 'updateOrder'])->name('update-order');
    });








    Route::prefix('/admin/panel')->group(function () {
        // Promo Codes Routes
        Route::get('/promo-codes', [PromoCodeController::class, 'index'])->name('admin.promo-codes.index');
        Route::get('/promo-codes/create', [PromoCodeController::class, 'create'])->name('admin.promo-codes.create');
        Route::post('/promo-codes', [PromoCodeController::class, 'store'])->name('admin.promo-codes.store');
        Route::get('/promo-codes/{promoCode}/edit', [PromoCodeController::class, 'edit'])->name('admin.promo-codes.edit');
        Route::put('/promo-codes/{promoCode}', [PromoCodeController::class, 'update'])->name('admin.promo-codes.update');
        Route::delete('/promo-codes/{promoCode}', [PromoCodeController::class, 'destroy'])->name('admin.promo-codes.destroy');
        Route::post('/promo-codes/{promoCode}/toggle-status', [PromoCodeController::class, 'toggleStatus'])->name('admin.promo-codes.toggle-status');
        Route::post('/promo-codes/bulk-delete', [PromoCodeController::class, 'bulkDelete'])->name('admin.promo-codes.bulk-delete');
    });













    Route::prefix('/admin/panel')->group(function () {
        // Notices Routes
        Route::get('/notices', [NoticeController::class, 'index'])->name('admin.notices.index');
        Route::get('/notices/create', [NoticeController::class, 'create'])->name('admin.notices.create');
        Route::post('/notices', [NoticeController::class, 'store'])->name('admin.notices.store');
        Route::get('/notices/{notice}/edit', [NoticeController::class, 'edit'])->name('admin.notices.edit');
        Route::put('/notices/{notice}', [NoticeController::class, 'update'])->name('admin.notices.update');
        Route::delete('/notices/{notice}', [NoticeController::class, 'destroy'])->name('admin.notices.destroy');
        Route::post('/notices/{notice}/toggle-status', [NoticeController::class, 'toggleStatus'])->name('admin.notices.toggle-status');
        Route::post('/notices/update-order', [NoticeController::class, 'updateOrder'])->name('admin.notices.update-order');
        Route::get('/notices/{notice}/download-pdf', [NoticeController::class, 'downloadPdf'])->name('admin.notices.download-pdf');
        Route::post('/notices/bulk-delete', [NoticeController::class, 'bulkDelete'])->name('admin.notices.bulk-delete');
    });







    Route::prefix('/admin/panel')->group(function () {
        // Reviews Routes
        Route::get('/reviews', [ReviewController::class, 'index'])->name('admin.reviews.index');
        Route::get('/reviews/create', [ReviewController::class, 'create'])->name('admin.reviews.create');
        Route::post('/reviews', [ReviewController::class, 'store'])->name('admin.reviews.store');
        Route::get('/reviews/{review}/edit', [ReviewController::class, 'edit'])->name('admin.reviews.edit');
        Route::put('/reviews/{review}', [ReviewController::class, 'update'])->name('admin.reviews.update');
        Route::delete('/reviews/{review}', [ReviewController::class, 'destroy'])->name('admin.reviews.destroy');
        Route::post('/reviews/{review}/toggle-status', [ReviewController::class, 'toggleStatus'])->name('admin.reviews.toggle-status');
        Route::post('/reviews/update-order', [ReviewController::class, 'updateOrder'])->name('admin.reviews.update-order');
        Route::post('/reviews/bulk-delete', [ReviewController::class, 'bulkDelete'])->name('admin.reviews.bulk-delete');
    });








    Route::prefix('/admin/panel')->group(function () {
        // Banners Routes
        Route::get('/banners', [BannerController::class, 'index'])->name('admin.banners.index');
        Route::post('/banners/add', [BannerController::class, 'add'])->name('admin.banners.add');
        Route::delete('/banners/remove/{banner}', [BannerController::class, 'remove'])->name('admin.banners.remove');
        Route::post('/banners/update-order', [BannerController::class, 'updateOrder'])->name('admin.banners.update-order');
        Route::post('/banners/{banner}/toggle-status', [BannerController::class, 'toggleStatus'])->name('admin.banners.toggle-status');
    });


    Route::prefix('/admin/panel')->group(function () {
        Route::get('/setting', [SettingController::class, 'index'])->name('admin.panel.setting');
    });

    Route::prefix('/admin/panel')->group(function () {
        // Hero Routes
        Route::get('/hero', [HeroController::class, 'index'])->name('admin.hero.index');
        Route::post('/hero', [HeroController::class, 'store'])->name('admin.hero.store');
    });



    Route::prefix('/admin/panel')->group(function () {
        // App Version / Force Update Routes
        Route::get('/app-version', [AppVersionController::class, 'index'])->name('admin.app-version.index');
        Route::post('/app-version', [AppVersionController::class, 'store'])->name('admin.app-version.store');
    });


    Route::prefix('/admin/panel')->group(function () {
        // Category Section Routes
        Route::get('/category-section', [CategorySectionController::class, 'index'])->name('admin.category-section.index');
        Route::post('/category-section', [CategorySectionController::class, 'store'])->name('admin.category-section.store');
    });


    Route::prefix('/admin/panel')->group(function () {
        // Popular Course Section Routes
        Route::get('/popular-course-section', [PopularCourseSectionController::class, 'index'])->name('admin.popular-course-section.index');
        Route::post('/popular-course-section', [PopularCourseSectionController::class, 'store'])->name('admin.popular-course-section.store');
    });



    Route::prefix('/admin/panel')->group(function () {
        // Instructor Section Routes
        Route::get('/instructor-section', [InstructorSectionController::class, 'index'])->name('admin.instructor-section.index');
        Route::post('/instructor-section', [InstructorSectionController::class, 'store'])->name('admin.instructor-section.store');
    });




    Route::prefix('/admin/panel')->group(function () {
        // Why Choose Us Section Routes
        Route::get('/why-choose-us-section', [WhyChooseUsSectionController::class, 'index'])->name('admin.why-choose-us-section.index');
        Route::post('/why-choose-us-section', [WhyChooseUsSectionController::class, 'store'])->name('admin.why-choose-us-section.store');
    });




    Route::prefix('/admin/panel')->group(function () {
        // Footer Content Routes
        Route::get('/footer-content', [FooterContentController::class, 'index'])->name('admin.footer-content.index');
        Route::post('/footer-content', [FooterContentController::class, 'store'])->name('admin.footer-content.store');
    });



    Route::prefix('/admin/panel')->group(function () {
        // Review Page Section Routes
        Route::get('/review-page-section', [ReviewPageSectionController::class, 'index'])->name('admin.review-page-section.index');
        Route::post('/review-page-section', [ReviewPageSectionController::class, 'store'])->name('admin.review-page-section.store');
    });



    Route::prefix('/admin/panel')->group(function () {
        Route::get('/orders', [OrderManageController::class, 'index'])->name('admin.orders.index');
        Route::get('/orders/create', [OrderManageController::class, 'create'])->name('admin.orders.create');
        Route::post('/orders', [OrderManageController::class, 'store'])->name('admin.orders.store');
        Route::get('/orders/{order}', [OrderManageController::class, 'show'])->name('admin.orders.show');
        Route::get('/orders/{order}/edit', [OrderManageController::class, 'edit'])->name('admin.orders.edit');
        Route::put('/orders/{order}', [OrderManageController::class, 'update'])->name('admin.orders.update');
        Route::delete('/orders/{order}', [OrderManageController::class, 'destroy'])->name('admin.orders.destroy');
        Route::post('/orders/{order}/status', [OrderManageController::class, 'updateStatus'])->name('admin.orders.status.update');
    });




    Route::prefix('/admin/panel')->group(function () {
        Route::get('/subject', [SubjectController::class, 'index'])->name('admin.subject.index');
        Route::post('/subject', [SubjectController::class, 'store'])->name('admin.subject.store');
        Route::put('/subject/{subject}', [SubjectController::class, 'update'])->name('admin.subject.update');
        Route::delete('/subject/{subject}', [SubjectController::class, 'destroy'])->name('admin.subject.destroy');
        Route::post('/subject/reorder', [SubjectController::class, 'reorder'])->name('admin.subject.reorder');
    });


    Route::prefix('/admin/panel')->group(function () {
        // Topic routes
        Route::get('/topic', [TopicController::class, 'index'])->name('admin.topic.index');
        Route::post('/topic', [TopicController::class, 'store'])->name('admin.topic.store');
        Route::put('/topic/{topic}', [TopicController::class, 'update'])->name('admin.topic.update');
        Route::delete('/topic/{topic}', [TopicController::class, 'destroy'])->name('admin.topic.destroy');
        Route::post('/topic/reorder', [TopicController::class, 'reorder'])->name('admin.topic.reorder');
    });



    Route::prefix('/admin/panel')->group(function () {
        Route::get('/question', [QuestionController::class, 'index'])->name('admin.question.index');
        Route::get('/question/add', [QuestionController::class, 'add'])->name('admin.question.add');
        Route::get('/question/import', [QuestionController::class, 'importPage'])->name('admin.question.import.page');
        Route::post('/question/store', [QuestionController::class, 'store'])->name('admin.question.store');
        Route::post('/question/import', [QuestionController::class, 'import'])->name('admin.question.import');
        Route::put('/question/{id}', [QuestionController::class, 'update'])->name('admin.question.update');
        Route::delete('/question/{id}', [QuestionController::class, 'destroy'])->name('admin.question.destroy');
    });


});
