<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title inertia>{{ config('app.name', 'সহায়ক SOHAYOK |  বাংলা ব্যাকরণ এবং সাহিত্যের কঠিন পাঠের সহজ উপস্থাপনের অপর নাম') }}</title>

    <!-- ✅ Open Graph Meta Tags -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="সহায়ক SOHAYOK |  বাংলা ব্যাকরণ এবং সাহিত্যের কঠিন পাঠের সহজ উপস্থাপনের অপর নাম">
    <meta property="og:description" content="বাংলা ব্যাকরণ, সাহিত্য ও ভর্তি পরীক্ষার প্রস্তুতি নাও সবচেয়ে সহজভাবে — এক জায়গায় সব কিছু!">
    <meta property="og:image" content="{{ asset('assets/og_sohayok.png') }}">
    <meta property="og:locale" content="bn_BD">

    <!-- ✅ Twitter Card Meta -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="সহায়ক SOHAYOK |  বাংলা ব্যাকরণ এবং সাহিত্যের কঠিন পাঠের সহজ উপস্থাপনের অপর নাম">
    <meta name="twitter:description" content="ভর্তি প্রস্তুতি, সাহিত্য, ব্যাকরণ— এক জায়গায় সব কিছু।">
    <meta name="twitter:image" content="{{ asset('assets/og_sohayok.png') }}">

    <!-- ✅ SEO Meta -->
    <meta name="description" content="বাংলা ব্যাকরণ ও সাহিত্যের কঠিন পাঠের সহজ উপস্থাপনের অপর নাম। ভর্তি প্রস্তুতির জন্য প্রস্তুত হও এখনই!">
    <meta name="keywords" content="বাংলা, ব্যাকরণ, সাহিত্য, ভর্তি প্রস্তুতি, university admission, bangla grammar, bangla literature">
    <meta name="author" content="Sohayok Team">

    <!-- ✅ Fonts & Styles -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="shortcut icon" href="{{ asset('assets/favicon.png') }}" type="image/x-icon">

    <style>
        body {
            font-family: "Anek Bangla", sans-serif;
            margin: 0;
            padding: 0;
            transition: all 0.3s ease;
        }

        .grid_2_1 {
            display: flex;
            width: 100%;
            gap: 2rem;
        }

        .grid_2_1>div:first-child {
            flex: 2;
        }

        .grid_2_1>div:last-child {
            flex: 1;
        }
    </style>

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
