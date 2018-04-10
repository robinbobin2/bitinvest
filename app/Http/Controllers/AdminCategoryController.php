<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Category;

class AdminCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $categories = Category::all();
        return view('admin.categories.index', compact('categories'));
    }
    public function catRaw($type) {
        $categories = Category::where('type', $type)->get();
        $catarray=Array();
        if ($type == 1) {
            foreach ($categories as $category) {
            $categories_count = $category->news->count();
            $catarray[] = array('id' => $category->id,
                                'count' => $categories_count,
                                'name' => $category->name,
                                );
            }
        } elseif($type==2) {
            foreach ($categories as $category) {
            $categories_count = $category->interviews->count();
            $catarray[] = array('id' => $category->id,
                                'count' => $categories_count,
                                'name' => $category->name,
                                );
            }
        } elseif($type==3) {
            foreach ($categories as $category) {
            $categories_count = $category->analytics->count();
            $catarray[] = array('id' => $category->id,
                                'count' => $categories_count,
                                'name' => $category->name,
                                );
            }
        } elseif($type==4) {
            foreach ($categories as $category) {
            $categories_count = $category->reviews->count();
            $catarray[] = array('id' => $category->id,
                                'count' => $categories_count,
                                'name' => $category->name,
                                );
            }

        }
         elseif($type==5) {
            foreach ($categories as $category) {
            $categories_count = $category->ico->count();
            $catarray[] = array('id' => $category->id,
                                'count' => $categories_count,
                                'name' => $category->name,
                                );
            }
        
        }
        
        
        return response()->json([
            'cats'=>$catarray
            // 'photos'=>$photos
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        Category::create($request->all());
        return redirect('admin/categories');
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

        $category = Category::findOrFail($id);

        return view('admin.categories.edit', compact('category'));
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

        $category = Category::findOrFail($id);
        $category->update($request->all());

        return redirect('admin/categories');
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
        Category::findOrFail($id)->delete();
        return redirect('admin/categories');
    }
}
