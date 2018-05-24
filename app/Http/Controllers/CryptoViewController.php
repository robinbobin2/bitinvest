<?php

namespace App\Http\Controllers;

use App\CryptoStat;
use Illuminate\Http\Request;

class CryptoViewController extends Controller
{
	public function viewAll() {
		$crypto = CryptoStat::all();
		return response()->json(
            $crypto
        );
	}
	public function viewCrypto($symbol) {
		$crypto = CryptoStat::where('symbol', $symbol)->with('comments.rating')->withCount('comments')->with('category_news')->with('category_analytics')->first();
		return response()->json(
            $crypto
        );
	}

	public function search() {

        if($_REQUEST['search']) {
            return CryptoStat::where('name','like', '%'. $_REQUEST['search'].'%')->get();
            
        } else if($_REQUEST['search'] == ''){
            return ['error'=>'not found'];
        }
    }
}
