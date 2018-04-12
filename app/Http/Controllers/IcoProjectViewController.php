<?php

namespace App\Http\Controllers;

use App\IcoProject;
use Illuminate\Http\Request;

class IcoProjectViewController extends Controller
{
    public function index() {
        $news = IcoProject::with('category')->latest()->get()->toArray();
        $news = array_values($news);
        return response()->json(
            $news
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
        $states;
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
        $roadmap[$closest]['state'] = 'current';
        $category = $commentnews->category;
        return response()->json([
            'news'=>$news,
            'comments'=>$comments,
            'team'=>$team,
            'roadmap'=>$roadmap,
            'category'=>$category

        ]);
        // dd($news);
        // return $news->toJson();


}

    public function byCat($id) {
        $news = IcoProject::with('category')->first()->get()->where('cat_id', $id)->toArray();
        $news = array_values($news);

        return response()->json(
            $news
         );
        // dd($news);
        // return $news->toJson();


    }


}