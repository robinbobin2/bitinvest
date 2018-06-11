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
        $banners = Banner::all()->load('frontends');
        return $banners;
    }
    public function bannersByFront($id) {
        $banners = [];
        $now = strtotime("now");
        $frontend = FrontEnd::findOrFail($id)->load('banners')->toArray();
        foreach ($frontend['banners'] as $banner) {
            $timestamp_start = strtotime($banner['start_date']);
            $timestamp_end = strtotime($banner['end_date']);
            if (($banner['start_date'] < $now)&&($banner['end_date'] > $now)) {
                $banners[] = $banner;
            }
            // echo "start";
            // echo $timestamp_start;
            // echo "<br>";
            // echo "end";
            // echo "<br>";
            // echo $timestamp_end;
            // echo "<br>";
            // echo "now";
            // echo "<br>";
            // echo $now;
            echo "<pre>";
            print_r($banners)
                

        }
        // if (count($banners)) {
        //     return $banners[array_rand($banners)];
        // } else {
        //     return $banners;
        // }
        
    }
}
