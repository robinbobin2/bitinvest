<?php

namespace App\Http\Controllers;

use App\Interview;
use App\News;
use Auth;
use Illuminate\Http\Request;
class NewsViewController extends Controller
{
    //
    public function index() {
        $news = News::with('photos')->with('category')->withCount('comments')->latest()->get()->where('main', 0)->toArray();
        $news = array_values($news);
        $interviews = Interview::with('photos')->with('category')->withCount('comments')->latest()->get()->where('to_news', 1)->toArray();
        $interviews = array_values($interviews);
        $main_news = News::with('photos')->with('category')->withCount('comments')->latest()->get()->where('main', 1)->take(2)->toArray();
        $main_news = array_values($main_news);
        array_splice( $news, rand(1,5), 0, $interviews );
        return response()->json([
            'news' => $news,
            'main_news' => $main_news,
            // 'interviews' => $interviews,
            // 'photos'=>$photos
        ]);
        // dd($news);
        // return $news->toJson();


    }

    public function byCat($id) {
        $news = News::with('photos')->with('category')->where('cat_id', $id)->latest()->get()->where('main', 0)->toArray();
        $news = array_values($news);

        $main_news = News::with('photos')->with('category')->where('cat_id', $id)->latest()->get()->where('main', 1)->take(2)->toArray();
        $main_news = array_values($main_news);
        return response()->json([
            'news' => $news,
            'main_news' => $main_news,
            // 'photos'=>$photos
        ]);
        // dd($news);
        // return $news->toJson();


    }

    public function show($id) {
        $news = News::first()->get()->where('id', $id)->toArray();
        $commentnews = News::findOrFail($id);
        $comments = $commentnews->comments;
        $news = array_values($news);
        $user = Auth::user();
        $photos = $commentnews->photos;
        $category = $commentnews->category;
        // $main_news = News::with('photos')->with('category')->get()->where('main', 1)->take(2)->toArray();
        // $main_news = array_values($main_news);
        // $news = $news->toJson();
        // $news = array_values($news);
        // $comments = $news->comments();
        // $photos = $news->photos();
        // for ($i=0; $i < count($news); $i++) { 
        //     if($news[$i]->photos){
        //                 foreach ($news[$i]->photos as $photo) {
                         
        //                 // $news[$i]['photos']['file'] = array($photo->file);   # code...
        //                 // echo $photo->file;
        //             }
        //     }
        // }
        return response()->json([
            'news'=>$news,
            'user'=>$user,
            'comments'=>$comments,
            'photos'=>$photos,
            'category'=>$category,
            'comments_count'=>count($comments)
            // 'main_news' => $main_news,
            // 'photos'=>$photos
        ]);
        // dd($news);
        // return $news->toJson();


    }
}