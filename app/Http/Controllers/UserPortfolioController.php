<?php

namespace App\Http\Controllers;

use App\UserPortfollable;
use Auth;
use Illuminate\Http\Request;

class UserPortfolioController extends Controller
{
    //
    public function storeRaw(Request $request) {
        $user = Auth::user();
        $data = [
            'user_portfollable_id'=> $request->input('user_portfollable_id'),
            'user_portfolio_id'=>$request->input('user_portfolio_id'),
            'user_portfollable_type'=> $request->input('user_portfollable_type')
        ];

        $portfollable = UserPortfollable::create($data);
        return $portfollable;
    }

    public function createPortRaw(Request $request) {
        $user = Auth::user();
        $data = [
            'user_portfollable_id'=> $request->input('user_portfollable_id'),
            'user_portfolio_id'=>$request->input('user_portfolio_id'),
            'user_portfollable_type'=> $request->input('user_portfollable_type')
        ];

        $portfollable = UserPortfollable::create($data);
        return $portfollable;
    }
}
