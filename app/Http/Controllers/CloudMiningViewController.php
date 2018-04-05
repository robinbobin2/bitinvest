<?php

namespace App\Http\Controllers;

use App\CloudMining;
use App\DepoHistory;
use App\UserPortfolio;
use Auth;
use Illuminate\Http\Request;
class CloudMiningViewController extends Controller
{
    public function index() {
        $user = Auth::user();
    	$mining = CloudMining::latest()->get();
        $portfolios = UserPortfolio::where('user_id', $user->id)->get();
    	foreach ($mining as $item) {
    		$history = $item->history;
    		$got = 0;
       		foreach ($history as $h_item) {

            if ($h_item->type == 2) {

                $got = $got+$h_item->price;

            } else {

                $got = $got-$h_item->price;

            }
        	}
        	$latest_history = $item->history->where('type', 2)->last();
        	if($latest_history) {
        		$latest_date = round((strtotime("now") - strtotime($latest_history->datetime))  / (60 * 60 * 24), 0);
        		$item['latest_date'] = $latest_date;
        	}
        	$depo_date = round((strtotime("now") - strtotime($item->depo_date))  / (60 * 60 * 24));
        	$item['depo_date'] = $depo_date;
            $percentage = round($got / ($item->depo / 100),2);
            $item['percentage'] = $percentage;
            $start_days = round((strtotime("now") - strtotime($item->start))  / (60 * 60 * 24), 0);
            $item['start_days'] = $start_days;
            
    	}
    	$mining = $mining->toArray();
    	// $mining = CloudMining::with('history')->latest()->get()->toArray();
    	// $history = $mining->history;
        // $news = CloudMining::latest()->get()->toArray();
        $news = array_values($mining);
        
        // dd( $news );
        // foreach ($news as $item) {
        //  array_push($item, '');
        // }

        // $main_news = Review::with('photos')->with('category')->latest()->get()->where('main', 1)->take(2)->toArray();
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
            'news' => $news,
            'portfolios'=>$portfolios
            // 'main_news' => $main_news,
            // 'photos'=>$photos
        ]);
        // dd($news);
        // return $news->toJson();


    }
}
