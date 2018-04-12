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
        $news = Analytics::with('category')->first()->get()->where('id', $id)->toArray();
        $commentnews = Analytics::findOrFail($id);
        $comments = $commentnews->comments;
        $news = array_values($news);
        $user = Auth::user();
        
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
            'comments'=>$comments
            // 'main_news' => $main_news,
            // 'photos'=>$photos
        ]);
        // dd($news);
        // return $news->toJson();


    }
}