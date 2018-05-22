<?php

namespace App\Http\Controllers;

use App\Analytics;
use App\CloudMining;
use App\CommentRating;
use App\CryptoStat;
use App\IcoPercent;
use App\IcoProject;
use App\Interview;
use App\Stock;
use App\User;
use App\UserPortfolio;
use App\UserPortfolioType;
use App\UserPortfollable;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AngularController extends Controller
{
    /**
     * Serve the angular application.
     *
     * @return \Illuminate\View\View
     */
    public function serve()
    {
        return File::get(public_path('dist/index.html'));
    }

    public function crypto($symbol)
    {
        return File::get(public_path('dist/index.html'));
    }

    public function user()
    {
        $user = Auth::user();
        if (!$user) {
            return [
                'error' => 'User not loggined'
            ];
        }
        $newUser = User::with("Portfolio")->with('photo')->where('id', '=', $user->id)->first();
        return json_encode($newUser);
    }

    public function portfolio()
    {
        $user = Auth::user();
        if (!$user) {
            return [
                'error' => 'User not loggined'
            ];
        }
        $newUser = User::with("Portfolio")->where('id', '=', $user->id)->first();
        $portfolio_types = UserPortfolioType::all();
        $userPortfolio = [];
        foreach ($portfolio_types as $portfolio_type) {
            $portfolios = $portfolio_type->portfolios->where('user_id', $user->id);
        }
        foreach ($portfolios as $portfolio) {
            $userPortfolio['mining'][] = $portfolio->minings;
            $userPortfolio['ico'][] = $portfolio->ico;
            $userPortfolio['crypto'][] = $portfolio->crypto;

        }
        return json_encode($userPortfolio);
    }

    public function byportfolio($id)
    {
        $user = Auth::user();
        if (!$user) {
            return abort(401);
        }
        $portfolio_items = UserPortfollable::all()->where('user_portfolio_id', $id);
        $port_items = UserPortfolio::all()->where('id', $id);
        $items = [];
        $items['ico'] = [];
        $items['mining'] = [];
        $items['crypto'] = [];
        $items['stocks'] = [];
        foreach ($port_items as $item) {
            $items['ico'] = $item->ico;
            $items['mining'] = $item->minings;
            $items['crypto'] = $item->crypto;
            $items['stocks'] = $item->stocks;
        }
        // foreach ($portfolio_items as $portfolio_item) {
        //     $items['mining'] = CloudMining::where('id', $portfolio_item->user_portfollable_id)->first();
        //     $ico = IcoProject::all();
        //     $items['ico'] = $portfolio_item->ico();
        // }
        return json_encode($items);
    }

    public function createPortfolio(Request $request)
    {
        $user = Auth::user();
        if (!$user) {
            return abort(401);
        }
        $newPortfolio = new UserPortfolio;
        $newPortfolio->name = $request->request->get("name");
        $newPortfolio->user_portfolio_type_id = $request->request->get("user_portfolio_type_id");
        $newPortfolio->user_id = $user->id;
        $newPortfolio->save();
        return $newPortfolio;

    }

    public function removePortfolio($id)
    {
        $user = Auth::user();
        if (!$user) {
            return [
                'error' => 'User not loggined'
            ];
        }
        UserPortfollable::where('user_portfollable_id', $id)->where('user_portfollable_type', 'App\CloudMining')->delete();
        return [
            'success' => 'Portfolio deleted'
        ];
    }
    public function icoRemovePortfolio($id) 
    {
        $user = Auth::user();
        if(!$user){
            return [
                'error' => 'User not loggined'
            ];
        }
        $portfolio = UserPortfollable::where('user_portfollable_id', $id)->where('user_portfollable_type', 'App\IcoProject')->delete();
        return [
                'success' => 'Portfolio deleted'
            ];
    }
    public function cryptoRemovePortfolio($id) 
    {
        $user = Auth::user();
        if(!$user){
            return [
                'error' => 'User not loggined'
            ];
        }
        $portfolio = UserPortfollable::where('user_portfollable_id', $id)->where('user_portfollable_type', 'App\CryptoStat')->delete();
        return [
                'success' => 'Portfolio deleted'
            ];
    }
    public function stocksRemovePortfolio($id) 
    {
        $user = Auth::user();
        if(!$user){
            return [
                'error' => 'User not loggined'
            ];
        }
        $portfolio = UserPortfollable::where('user_portfollable_id', $id)->where('user_portfollable_type', 'App\Stock')->delete();
        return [
                'success' => 'Portfolio deleted'
            ];
    }

    public function deletePortfolioCat($id)
    {
        $user = Auth::user();
        if (!$user) {
            return [
                'error' => 'User not loggined'
            ];
        }
        UserPortfolio::findOrFail($id)->delete();
        return [
            'success' => 'Portfolio deleted'
        ];
    }

    public function funds($id)
    {
        return IcoPercent::all()->where('ico_id', '=', $id)->sortByDesc('percent')->values();
    }
    public function exchanges()
    {
        $stocks = Stock::all()->toArray();
        foreach ($stocks as $stock) {
            $languages = explode(",", $stock['languages']);
            $stock['lang'] = $languages;
        }
        return $stocks;
    }
    public function exchange($name)
    {
        return Stock::where('name', $name)->with('coins')->withCount('coins')->with('comments')->withCount('comments')->with('categories')->first()->toArray();
    }

    public function search() {
        if ($_REQUEST['q'] ) {
            $cloud_mining = CloudMining::where('name', 'LIKE', '%'.$_REQUEST['q'].'%')->get()->toArray();
            $coins = CryptoStat::where('name', 'LIKE', '%'.$_REQUEST['q'].'%')
            ->orWhere('symbol', 'LIKE', '%'.$_REQUEST['q'].'%')
            ->get()
            ->toArray();
            $ico = IcoProject::where('name', 'LIKE', '%'.$_REQUEST['q'].'%')->get()->toArray();
            $stocks = Stock::where('name', 'LIKE', '%'.$_REQUEST['q'].'%')->get()->toArray();
            $analytics = Analytics::where('title', 'LIKE', '%'.$_REQUEST['q'].'%')->get()->toArray();
            $interviews = Interview::where('title', 'LIKE', '%'.$_REQUEST['q'].'%')->get()->toArray();

            return array_merge($cloud_mining, $ico, $coins, $stocks, $analytics, $interviews);
        } else if($_REQUEST['q'] == ''){
            return ['error'=>'not found'];
        }
    }
    public function vote(Request $request) {
        $user = Auth::user();
        if (!$user) {
            return abort(401);
        }
        $vote = CommentRating::where('user_id', $user->id)->where('comment_id', $request->comment_id)->first();
        if ($vote) {
                # code...
            if ($vote->positive != $request->positive) {
                $vote->delete();
                return
                ['success'=>'vote deleted'];
            }
            if(CommentRating::where('user_id', $user->id)
                ->where('comment_id', $request->comment_id)
                ->where('positive', $request->positive)
                ->first()) {

                return ['error'=>'Пользователь уже проголосовал'];

            } else {
                    
            }
        } else {
            $data = $request->all();
                    $data['user_id'] = $user->id;
                    CommentRating::create($data);
                    return
                    ['success'=>'voted'];
        }

    }
}
