<?php

namespace App\Http\Controllers;

use App\IcoProject;
use Illuminate\Http\Request;

class IcoProjectViewController extends Controller
{
    public function index() {
        $news = IcoProject::with('category')->withCount('comments')->latest()->get()->toArray();
        $news = array_values($news);
        return response()->json(
           ['news' => $news]
            // 'photos'=>$photos
        );
        // dd($news);
        // return $news->toJson();


    }

    public function top() {
        $news = IcoProject::all()->take(5)->toArray();
        $news_count = IcoProject::all();
        $count = count($news_count);
        return response()->json(
           [$news, 'count'=>$count]
            // 'photos'=>$photos
        );
        // dd($news);
        // return $news->toJson();


    }

     public function show($id) {
        $news = IcoProject::with('category')->first()->get()->where('id', $id)->toArray();
        $commentnews = IcoProject::findOrFail($id);
        $team = $commentnews->team_members;
        $roadmap = $commentnews->road_map;
        $comments = $commentnews->comments;
        // $photos = $commentnews->photos;
        $news = array_values($news);
        $state = 0;
        $oldstate = 0;
        $states = Array();
        if(!$roadmap->isEmpty())
        {
             foreach ($roadmap as $key => $value) {
           $state = strtotime($value['date'])-strtotime('now');
           if($state < 0) {
           $roadmap[$key]['state'] = 'past';
            } else {
                $states[$key] = $state;
            }
            }
            asort($states);
            $closest = key($states);
            if ($closest) {
                $roadmap[$closest]['state'] = 'current';
            }
        }
        $category = $commentnews->category;
        return response()->json([
            'news'=>$news,
            'comments'=>$comments,
            'comments_count'=>count($comments),
            'team'=>$team,
            'roadmap'=>$roadmap,
            'category'=>$category

        ]);
        // dd($news);
        // return $news->toJson();


}

    public function byCat($id) {
        $news = IcoProject::with('category')->withCount('comments')->latest()->get()->where('cat_id', $id)->toArray();
        $news = array_values($news);

        return response()->json(
            $news
         );
        // dd($news);
        // return $news->toJson();


    }


}