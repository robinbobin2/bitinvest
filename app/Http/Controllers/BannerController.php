<?php

namespace App\Http\Controllers;

use App\Banner;
use App\FrontEnd;
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
        $front = FrontEnd::all()
        return view('admin.banners.create', compact('front'));
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
