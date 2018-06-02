<?php

namespace App\Http\Controllers;

use App\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{

    public function index()
    {
        $banners = Banner::all();
        return view('admin.banners.index', compact('banners'));
    }

    public function create()
    {
        $banners = Banner::all();
        return view('admin.banners.index', compact('banners'));
    }

    public function store()
    {
        $banners = Banner::all();
        return view('admin.banners.index', compact('banners'));
    }

    public function destroy()
    {
        $banners = Banner::all();
        return view('admin.banners.index', compact('banners'));
    }
}
