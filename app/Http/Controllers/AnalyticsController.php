<?php

namespace App\Http\Controllers;

use App\Analytics;
use App\Category;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $news = Analytics::all();
        return view('admin.analytics.index', compact('news'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function create()
    {
        $categories = Category::where('type', 3)->get();
        return view('admin.analytics.create', compact('categories'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // error_reporting(0);
        $data = [
            'title' => $request->input('title'),
            'desc' => $request->input('desc'),
            'cat_id' => $request->input('cat_id'),
            'main' => $request->input('main')
        ];
         if ($file = $request->file('image')) {
            
            $name = time() . $file->getClientOriginalName();

            $file->move('images', $name);

            // $photo = Photo::create(['file'=>$name]);

            // $date['images'] = $photo->id; 

        }
        // return $name;
        $news = Analytics::create($data);
        $news->category($request->input('cat_id'));
        $news->photos()->create(['file'=>$name]);
        // $news->uploadImages($news->id);
        return redirect('/admin/analytics');
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $news = Analytics::find($id);
        $categories = Category::where('type', 3)->get();
        return view('admin.analytics.edit')
            ->with('news', $news)
            ->with('categories', $categories);
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
         //
        error_reporting(0);
        $data = [
            'title' => $request->input('title'),
            'desc' => $request->input('desc'),
            'cat_id' => $request->input('cat_id'),
            'main' => $request->input('main'),

        ];
        $news = Analytics::findOrFail($id)->update($data);
        return redirect('/admin/analytics')
            ->with('message', 'News Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
     public function destroy($id)
    {
        //
        $news = Analytics::findOrFail($id)->delete();
        // $this->deleteImages($id);
        return redirect('/admin/analytics');
    }
}
