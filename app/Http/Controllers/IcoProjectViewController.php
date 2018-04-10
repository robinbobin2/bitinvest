<?php

namespace App\Http\Controllers;

use App\IcoProject;
use Illuminate\Http\Request;

class IcoProjectViewController extends Controller
{
    public function index() {
        $news = IcoProject::with('category')->latest()->get()->toArray();
        $news = array_values($news);

        // $main_news = Interview::with('photos')->with('category')->latest()->get()->where('main', 1)->take(2)->toArray();
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
        // $user = Auth::user();
        
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
            'comments'=>$comments,
            'team'=>$team,
            'roadmap'=>$roadmap,
        ]);
        // dd($news);
        // return $news->toJson();


}
}