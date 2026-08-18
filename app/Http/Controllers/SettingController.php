<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        return view('admin.setting.index');
    }
    public function hero()
    {
        return view('admin.setting.hero');
    }
}
