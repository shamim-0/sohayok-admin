<?php

return [
    'store_id' => env('SSL_COMMERZ_STORE_ID'),
    'store_password' => env('SSL_COMMERZ_STORE_PASSWORD'),
    'mode' => env('SSL_COMMERZ_MODE', 'sandbox'),

    'init_url' => env('SSL_COMMERZ_MODE', 'sandbox') === 'live'
        ? 'https://securepay.sslcommerz.com/gwprocess/v4/api.php'
        : 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php',

    'validation_url' => env('SSL_COMMERZ_MODE', 'sandbox') === 'live'
        ? 'https://seamless.sslcommerz.com/validator/api/validationserverAPI.php'
        : 'https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php',
];
