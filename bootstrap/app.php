<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\VerifyAdmin;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        $middleware->validateCsrfTokens(except: [
            'payment/cancel',
            'payment/success',
            'payment/fail',
            'payment/ipn',
            'api/auth/google',
            'api/enroll/process',
            'api/enroll/free',
            'api/enroll/sslcommerz-init',
            '/api/self/exam-submit',
            '/api/student/profile/update/*',
            '/api/student/class/submit-quiz',
            '/api/student/class/store-comment',
            '/api/student/contact/store',
        ]);

        $middleware->web(append: [
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);



        $middleware->alias([
            'admin' => VerifyAdmin::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
    })->create();
