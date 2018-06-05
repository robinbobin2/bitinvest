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
        $front = FrontEnd::all();
        return view('admin.banners.create', compact('front'));
    }

    public function store(Request $request)
    {
        if ($file = $request->file('file')) {
            $name = time(). $file->getClientOriginalName();
            $file->move('images', $name);
            $banner = Banner::create(['file'=>$name, 'start_date'=>$request->start_date, 'end_date'=>$request->end_date]);
            $banner->frontends()->sync($request->front);
        }
        return redirect('/admin/banners')
            ->with('message', 'Banner Created Successfully');
    }

    public function destroy()
    {
        $banners = Banner::all();
        return view('admin.banners.index', compact('banners'));
    }

    public function banners() {
        $banners = Banner::all()->withPivot('frontends')->get()->toArray();
        return $banners;
    }
}
