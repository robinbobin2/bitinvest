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
    public function edit($id)
    {
        $banner = Banner::findOrFail($id);
        $front = FrontEnd::all();
        return view('admin.banners.edit', compact('front', 'banner'));
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
    public function update(Request $request, $id)
    {
        $banner = Banner::findOrFail($id)
        if ($file = $request->file('file')) {
            $name = time(). $file->getClientOriginalName();
            $file->move('images', $name);
            $banner->update(['file'=>$name, 'start_date'=>$request->start_date, 'end_date'=>$request->end_date]);
            $banner->frontends()->sync($request->front);
        } else {
            $banner->update(['start_date'=>$request->start_date, 'end_date'=>$request->end_date]);
        }
        return redirect('/admin/banners')
            ->with('message', 'Banner Created Successfully');
    }

    public function destroy($id)
    {
        Banner::findOrFail($id)->delete();
        return redirect('admin/banners');
    }

    public function banners() {
        $banners = Banner::all()->load('frontends');
        return $banners;
    }
    public function bannersByFront($id) {
        $banners = [];
        $now = strtotime(date('d.m.y'));
        $frontend = FrontEnd::findOrFail($id)->load('banners')->toArray();
        foreach ($frontend['banners'] as $banner) {
            $timestamp_start = strtotime($banner['start_date']);
            $timestamp_end = strtotime($banner['end_date']);
            if (($timestamp_start <= $now)&&($timestamp_end >= $now)) {
                $banners[] = $banner;
            }
                

        }
        if (count($banners)) {
            return $banners[array_rand($banners)];
        } else {
            return $banners;
        }
        
    }
}
