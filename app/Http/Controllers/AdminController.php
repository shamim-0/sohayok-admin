<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Order;
use App\Models\User;

class AdminController extends Controller
{
    public function index()
    {
        $course = Course::count();
        $user = User::count();
        $active_order = Order::where('status', 'completed')->count();
        $pending_order = Order::where('status', 'pending')->count();

        // Total income from completed orders
        $total_income = Order::where('status', 'completed')->sum('final_amount');

        // Recent users (last 5 registered users)
        $recent_users = User::latest()->take(5)->get();

        // Recent orders (last 5 orders)
        $recent_orders = Order::with('user')->latest()->take(5)->get();

        return view('admin.dashboard.index', compact(
            'course',
            'user',
            'active_order',
            'pending_order',
            'total_income',
            'recent_users',
            'recent_orders'
        ));
    }
}
