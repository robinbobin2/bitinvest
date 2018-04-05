<?php

namespace App\Http\Controllers;

use App\Review;
use App\Category;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $news = review::all();
        return view('admin.review.index', compact('news'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function create()
    {
        $categories = Category::where('type', 4)->get();
        return view('admin.review.create', compact('categories'));
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
        $news = review::create($data);
        $news->category($request->input('cat_id'));
        $news->photos()->create(['file'=>$name]);
        // $news->uploadImages($news->id);
        return redirect('/admin/review');
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

        $news = review::find($id);
        $categories = Category::where('type', 3)->get();
        return view('admin.review.edit')
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
        $news = review::findOrFail($id)->update($data);
        return redirect('/admin/review')
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
        $news = review::findOrFail($id)->delete();
        // $this->deleteImages($id);
        return redirect('/admin/review');
    }
}
