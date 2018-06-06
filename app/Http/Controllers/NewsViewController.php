<?php

namespace App\Http\Controllers;

use App\Interview;
use App\News;
use Auth;
use Illuminate\Http\Request;

class NewsViewController extends Controller
{
    public function index()
    {
        $news = News::with('photos')->with('category')->latest()->withCount('comments')->get()->where('main', 0)->toArray();
        $news = array_values($news);
        $interviews = Interview::with('photos')->latest()->with('category')->withCount('comments')->get()->where('to_news', 1)->toArray();
        $interviews = array_values($interviews);
        $main_news = News::with('photos')->with('category')->withCount('comments')->latest()->get()->where('main', 1)->take(2)->toArray();
        $main_news = array_values($main_news);
        $n = 7;

        for ($i = 0; $i < count($interviews); $i++) {
            if (array_key_exists($n, $news)) {
                array_splice($news, $n, 0, [$interviews[$i]]);
                $n += 9;
            }
        }


        foreach ($news as $key => $value) {
            $news[$key]['position'] = $key;
        }
        return response()->json([
            'news' => $news,
            'main_news' => $main_news,
        ]);
    }

    public function similarNews()
    {
        $news = News::with('photos')->with('category')->latest()->withCount('comments')->get()->where('main', 0)->toArray();
        $news = array_values($news);
        $news = shuffle($news);
        return response()->json([
            'news' => $news,
        ]);
    }

    public function byCat($id)
    {
        $news = News::with('photos')->withCount('comments')->with('category')->where('cat_id', $id)->latest()->get()->where('main', 0)->toArray();
        $news = array_values($news);

        $main_news = News::with('photos')->with('category')->where('cat_id', $id)->latest()->get()->where('main', 1)->take(2)->toArray();
        $main_news = array_values($main_news);
        return response()->json([
            'news' => $news,
            'main_news' => $main_news,
        ]);
    }

    public function show($id)
    {
        $news = News::first()->with('comments.rating')->get()->where('id', $id)->toArray();
        $commentnews = News::findOrFail($id);
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