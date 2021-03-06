<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\NewsRequest;
use App\News;
use App\Photo;
use Request;
use Validator;

class AdminNewsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('admin', ['except' => ['show']]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = News::all();
        return view('news.index')
            ->with('news', $news);
    }

    public function create()
    {
        $categories = Category::all()->where('type', 1);
        return view('news.create')
            ->with('categories', $categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(NewsRequest $newsRequest)
    {
        error_reporting(0);
        $data = [
            'title' => Request::input('title'),
            'desc' => Request::input('desc'),
            'cat_id' => Request::input('cat_id'),
            'main' => Request::input('main')
        ];
         if ($file = Request::file('image')) {
            
            $name = time() . $file->getClientOriginalName();

            $file->move('images', $name);

            // $photo = Photo::create(['file'=>$name]);

            // $date['images'] = $photo->id; 

        }
        // return $name;
        $news = News::create($data);
        $news->category(Request::input('cat_id'));
        $news->photos()->create(['file'=>$name]);
        // $news->uploadImages($news->id);
        return redirect('news')
            ->with('message', 'News Created Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {
        $news = News::whereId($id)->first();
        if (!$news)
            return redirect()->back();

        $similar_news = News::whereCatId($news->cat_id)->where('id', '!=', $news->id)->take(3)->get();
        return view('front.news')
            ->with('news', $news)
            ->with('similar_news', $similar_news);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function edit($id)
    {
        $news = News::find($id);
        $categories = Category::all();
        $photo = $news->photos;

        return view('news.edit')
            ->with('news', $news)
            ->with('categories', $categories)
            ->with('photo', $photo);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     * @return Response
     */
    public function update(NewsRequest $newsRequest, $id)
    {
        error_reporting(0);
        $data = [
            'title' => Request::input('title'),
            'desc' => Request::input('desc'),
            'cat_id' => Request::input('cat_id'),
            'main' => Request::input('main')
        ];
        $news = News::findOrFail($id);
        $news->update($data);
       
        if ($file = Request::file('image')) {
            
            $name = time() . $file->getClientOriginalName();

            $file->move('images', $name);

            // $photo = Photo::create(['file'=>$name]);

            $data['images'] = $photo->id; 
            $photo = $news->photos->first();
            $photo->delete();
             $photo = Photo::create(['file'=>$name]);
             $news->photos()->save($photo);
            
        }
        return redirect('news')
            ->with('message', 'News Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function destroy($id)
    {
        $news = News::findOrFail($id)->delete();
        return redirect('news')
            ->with('message', 'News Deleted Successfully!');
    }

    private function uploadImages($id)
    {
        $image_names = [];
        if (!empty(Request::file('images'))) {
            for ($i = 0; $i < count(Request::file('images')); $i++) {
                if ((\Request::file('images')[$i]) && \Request::file('images')[$i]->isValid()) {
                    $file = \Request::file('images')[$i];
                    $extension = $file->getClientOriginalExtension();
                    if (in_array($extension, ['jpg', 'png', 'jpeg',])
                    ) {
                        $image_name = rand(999000, 10000000) . '.' . $extension;
                        $file->move(public_path() . '/uploads/news', $image_name);
                        $image_names[$i]['news_id'] = $id;
                        $image_names[$i]['picture'] = $image_name;
                        $image_names[$i]['created_at'] = date("Y-m-d H:i:s");
                    }
                }
            }
            NewsPicture::insert($image_names);
        }
    }
    
}
