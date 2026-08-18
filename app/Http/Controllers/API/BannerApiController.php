<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\Hero;
use Illuminate\Http\Request;

class BannerApiController extends Controller
{
    public function index()
    {

        $banner = Hero::first();
        $hero = Banner::with('course')->orderBy('order')->get();
        return response()->json(['banner' => $banner, 'hero' => $hero]);
    }
}
