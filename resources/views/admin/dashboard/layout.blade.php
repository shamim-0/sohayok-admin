<!DOCTYPE html>
<html lang="bn">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>সহায়ক- Sohayok | Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap"
        rel="stylesheet">

    <link rel="shortcut icon" href="{{ asset('assets/favicon.png') }}" type="image/x-icon">

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap');

        * {
            font-family: 'Noto Sans Bengali', sans-serif;
        }

        @keyframes float {

            0%,
            100% {
                transform: translateY(0px) rotate(0deg);
            }

            50% {
                transform: translateY(-20px) rotate(180deg);
            }
        }

        .animate-float {
            animation: float 6s ease-in-out infinite;
        }

        .sidebar-item {
            transition: all 0.3s ease;
        }

        .sidebar-item:hover {
            background-color: rgba(59, 130, 246, 0.1);
            border-left: 3px solid rgb(59, 130, 246);
        }

        .sidebar-item.active {
            background-color: rgba(59, 130, 246, 0.15);
            border-left: 3px solid rgb(59, 130, 246);
        }

        .course-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .course-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.2);
        }

        .notification-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: #ef4444;
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            font-weight: bold;
        }
    </style>

</head>

<body class="bg-gray-50 text-gray-800 overflow-x-hidden">
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <!-- Subtle Grid -->
        <div
            class="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]">
        </div>

        <!-- Blue Glow Effects -->
        <div class="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-[128px]"></div>
        <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-50 rounded-full blur-[128px]"></div>

        <!-- Floating Particles -->
        <div class="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div class="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-float"
            style="animation-delay: 1s;"></div>
        <div class="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-float"
            style="animation-delay: 2s;"></div>

        <!-- Corner Accents -->
        <div class="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-200"></div>
        <div class="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-blue-200"></div>
        <div class="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-blue-200"></div>
        <div class="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-200"></div>
    </div>

    <div class="flex min-h-screen relative z-10">
        @include('admin.dashboard.sidebar')

        <div class="flex-1">
            @yield('content')
        </div>
    </div>


    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.14.0/Sortable.min.js"></script>

</body>

</html>