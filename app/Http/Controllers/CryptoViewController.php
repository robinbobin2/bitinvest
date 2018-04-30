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
		$crypto = CryptoStat::where('symbol', $symbol)->with('comments')->withCount('comments')->with('category_news')->with('category_analytics')->first();
		return response()->json(
            $crypto
        );
	}
}
