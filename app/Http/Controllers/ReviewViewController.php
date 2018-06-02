<?php

namespace App\Http\Controllers;

use App\Review;
use Illuminate\Http\Request;
use Auth;
class ReviewViewController extends Controller
{
    //
    public function index() {
        $news = Review::with('photos')->with('category')->latest()->get()->where('main', 0)->toArray();
        $news = array_values($news);

        $main_news = Review::with('photos')->with('category')->latest()->get()->where('main', 1)->take(2)->toArray();
        $main_news = array_values($main_news);
        return response()->json([
            'news' => $news,
            'main_news' => $main_news,
            // 'photos'=>$photos
        ]);


    }

    public function byCat($id) {
        $news = Review::with('photos')->with('category')->where('cat_id', $id)->latest()->get()->where('main', 0)->toArray();
        $news = array_values($news);

        $main_news = Review::with('photos')->with('category')->where('cat_id', $id)->latest()->get()->where('main', 1)->take(2)->toArray();
        $main_news = array_values($main_news);
        return response()->json([
            'news' => $news,
            'main_news' => $main_news,
        ]);


    }

    public function show($id) {
        $news = Review::first()->with('comments.rating')->get()->where('id', $id)->toArray();
        $commentnews = Review::findOrFail($id);
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