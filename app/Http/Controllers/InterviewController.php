<?php

namespace App\Http\Controllers;

use App\Category;
use App\Interview;
use Illuminate\Http\Request;

class InterviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = Interview::all();
        return view('admin.interview.index', compact('news'));
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function create()
    {
        $categories = Category::where('type', 2)->get();
        return view('admin.interview.create')
            ->with('categories', $categories);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    error_reporting(0);
        $data = [
            'title' => $request->input('title'),
            'desc' => $request->input('desc'),
            'cat_id' => $request->input('cat_id'),
            'main' => $request->input('main'),
            'name_credits'=>$request->input('name_credits'),
            'workplace'=>$request->input('workplace'),
            'to_news'=>$request->input('to_news'),
        ];
         if ($file = $request->file('image')) {
            
            $name = time() . $file->getClientOriginalName();

            $file->move('images', $name);

            // $photo = Photo::create(['file'=>$name]);

            // $date['images'] = $photo->id; 

        }
        // return $name;
        $news = Interview::create($data);
        $news->category($request->input('cat_id'));
        $news->photos()->create(['file'=>$name]);
        // $news->uploadImages($news->id);
        return redirect('admin/interview')
            ->with('message', 'News Created Successfully');
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
        //
        $news = Interview::find($id);
        $categories = Category::where('type', 2)->get();
        return view('admin.interview.edit')
            ->with('news', $news)
            ->with('categories', $categories);
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
            'name_credits'=>$request->input('name_credits'),
            'workplace'=>$request->input('workplace'),
            'to_news'=>$request->input('to_news'),

        ];
        $news = Interview::findOrFail($id)->update($data);
        return redirect('/admin/interview')
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
        $news = Interview::findOrFail($id)->delete();
        // $this->deleteImages($id);
        return redirect('/admin/interview');
    }
}
