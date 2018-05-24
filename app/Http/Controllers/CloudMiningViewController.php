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
    	$mining = CloudMining::latest()->get();
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
            $item['comments_count'] = count($item->comments);
    	}
    	$mining = $mining->toArray();
        $news = array_values($mining);
        return response()->json([
            'news' => $news
        ]);


    }

public function show($id) {
        $item = CloudMining::findOrFail($id);
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
            $item['comments_count'] = count($item->comments);
        // $comments = $item->comments;
        return response()->json([
            'news' => $item,
            // 'comments_count'=>count($comments),
            // 'comments'=>$comments
        ]);


    }

public function topfive() {
        $item = CloudMining::latest()->where('is_top', 1)->take(5)->get()->toArray();
        return response()->json(
            $item
        );
    }
    public function byCat($id) {
        $mining = CloudMining::latest()->where('cat_id', $id)->get();
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
            $item['comments_count'] = count($item->comments);
        }
        $mining = $mining->toArray();
        $news = array_values($mining);
        return response()->json([
            'news' => $news
        ]);


    }
    public function search() {

        if($_REQUEST['search']) {
            return CloudMining::where('name','like', '%'. $_REQUEST['search'].'%')->get();
            
        } else if($_REQUEST['search'] == ''){
            return ['error'=>'not found'];
        }
    }
}