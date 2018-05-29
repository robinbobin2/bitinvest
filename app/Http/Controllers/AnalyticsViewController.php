<?php

namespace App\Http\Controllers;

use App\Analytics;
use Illuminate\Http\Request;
use Auth;
class AnalyticsViewController extends Controller
{
    //
    public function index() {
        $news = Analytics::with('photos')->with('category')->latest()->get()->where('main', 0)->toArray();
        $news = array_values($news);

        $main_news = Analytics::with('photos')->with('category')->latest()->get()->where('main', 1)->take(2)->toArray();
        $main_news = array_values($main_news);
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
            'news' => $news,
            'main_news' => $main_news,
            // 'photos'=>$photos
        ]);
        // dd($news);
        // return $news->toJson();


    }

    public function byCat($id) {
        $news = Analytics::with('photos')->with('category')->where('cat_id', $id)->latest()->get()->where('main', 0)->toArray();
        $news = array_values($news);

        $main_news = Analytics::with('photos')->with('category')->where('cat_id', $id)->latest()->get()->where('main', 1)->take(2)->toArray();
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
       $news = Analytics::first()->with('comments.rating')->get()->where('id', $id)->toArray();
        $commentnews = Analytics::findOrFail($id);
        $comments = $commentnews->comments;
        $news = array_values($news);
        $user = Auth::user();
        $photos = $commentnews->photos;
        $category = $commentnews->category;
        return response()->json([
            'news' => $news,
            'user' => $user,
            'photos' => $photos,
            'category' => $category,
            'comments_count' => count($comments)
        ]);
    }
}