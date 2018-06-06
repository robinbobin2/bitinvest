<?php

namespace App\Http\Controllers;

use App\Interview;
use Illuminate\Http\Request;
use Auth;
class InterviewViewController extends Controller
{
    //
    public function index() {
        $news = Interview::with('photos')->with('category')->withCount('comments')->latest()->get()->where('main', 0)->toArray();
        $news = array_values($news);

        $main_news = Interview::with('photos')->with('category')->withCount('comments')->latest()->get()->where('main', 1)->take(3)->toArray();
        $main_news = array_values($main_news);
        
        return response()->json([
            'news' => $news,
            'main_news' => $main_news,
            // 'photos'=>$photos
        ]);
        // dd($news);
        // return $news->toJson();


    }

    public function byCat($id) {
        $news = Interview::with('photos')->with('category')->withCount('comments')->where('cat_id', $id)->latest()->get()->where('main', 0)->toArray();
        $news = array_values($news);

        $main_news = Interview::with('photos')->with('category')->withCount('comments')->where('cat_id', $id)->latest()->get()->where('main', 1)->take(3)->toArray();
        $main_news = array_values($main_news);
        return response()->json([
            'news' => $news,
            'main_news' => $main_news,
        ]);


    }

    public function show($id) {
        $news = Interview::first()->with('comments.rating')->with('category')->get()->where('id', $id)->toArray();
        $commentnews = Interview::findOrFail($id);
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