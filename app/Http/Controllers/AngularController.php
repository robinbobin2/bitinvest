<?php

namespace App\Http\Controllers;

use App\Analytics;
use App\CloudMining;
use App\CommentRating;
use App\CryptoStat;
use App\EmailList;
use App\IcoPercent;
use App\IcoProject;
use App\Interview;
use App\News;
use App\Stock;
use App\User;
use App\UserPortfolio;
use App\UserPortfolioType;
use App\UserPortfollable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class AngularController extends Controller
{
    /**
     * Serve the angular application.
     *
     * @return string
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
        UserPortfolioType::all();
        $userPortfolio = [];

        foreach ($newUser->portfolio as $portfolio) {
            $userPortfolio['mining'][] = $portfolio->minings;
            $userPortfolio['ico'][] = $portfolio->ico;
            $userPortfolio['crypto'][] = $portfolio->crypto;
            $userPortfolio['stocks'][] = $portfolio->stocks;

        }
        return json_encode($userPortfolio);
    }

    public function byportfolio($id)
    {
        $user = Auth::user();
        if (!$user) {
            return abort(401);
        }
        UserPortfollable::all()->where('user_portfolio_id', $id);
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

    public function removePortfolio(Request $request, $id)
    {
        $user = Auth::user();
        if (!$user) {
            return [
                'error' => 'User not loggined'
            ];
        }
        if ($request->user_portfolio_id == 0) {
            if (UserPortfollable::where('user_portfollable_id', $request->user_portfollable_id)->where('user_portfollable_type', $request->user_portfollable_type)->delete()) {
                return [
                    'success' => 'Portfolio deleted'
                ];
            }
        } else {
            if (UserPortfollable::where('user_portfollable_id', $request->user_portfollable_id)->where('user_portfollable_type', $request->user_portfollable_type)->where('user_portfolio_id', $request->user_portfolio_id)->delete()) {
                return [
                    'success' => 'Portfolio deleted'
                ];
            }
        }

    }

    public function icoRemovePortfolio($id)
    {
        $user = Auth::user();
        if (!$user) {
            return [
                'error' => 'User not loggined'
            ];
        }
        UserPortfollable::where('user_portfollable_id', $id)->where('user_portfollable_type', 'App\IcoProject')->delete();
        return [
            'success' => 'Portfolio deleted'
        ];
    }

    public function cryptoRemovePortfolio($id)
    {
        $user = Auth::user();
        if (!$user) {
            return [
                'error' => 'User not loggined'
            ];
        }
        UserPortfollable::where('user_portfollable_id', $id)->where('user_portfollable_type', 'App\CryptoStat')->delete();
        return [
            'success' => 'Portfolio deleted'
        ];
    }

    public function stocksRemovePortfolio($id)
    {
        $user = Auth::user();
        if (!$user) {
            return [
                'error' => 'User not loggined'
            ];
        }
        UserPortfollable::where('user_portfollable_id', $id)->where('user_portfollable_type', 'App\Stock')->delete();
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
        $stocks = DB::select("select ex.id, ex.name, s.languages, s.year, s.country, ex.pairCount  from stocks s
JOIN exchanges ex on ex.id = s.id
LEFT JOIN exchangeRatesInfo exi on exi.exchangeId = ex.id GROUP BY ex.id");

        return $stocks;
    }

    public function exchange($name)
    {
        return Stock::where('name', $name)->with('coins')->withCount('coins')->with('comments')->withCount('comments')->with('categories')->first()->toArray();
    }

    public function search()
    {
        if ($_REQUEST['q']) {
            $cloud_mining = CloudMining::where('name', 'LIKE', '%' . $_REQUEST['q'] . '%')->get()->toArray();
            $coins = CryptoStat::where('name', 'LIKE', '%' . $_REQUEST['q'] . '%')
                ->orWhere('symbol', 'LIKE', '%' . $_REQUEST['q'] . '%')
                ->get()
                ->toArray();
            $ico = IcoProject::where('name', 'LIKE', '%' . $_REQUEST['q'] . '%')->get()->toArray();
            $stocks = Stock::where('name', 'LIKE', '%' . $_REQUEST['q'] . '%')->get()->toArray();
            $analytics = Analytics::where('title', 'LIKE', '%' . $_REQUEST['q'] . '%')->get()->toArray();
            $interviews = Interview::where('title', 'LIKE', '%' . $_REQUEST['q'] . '%')->get()->toArray();

            return array_merge($cloud_mining, $ico, $coins, $stocks, $analytics, $interviews);
        }
        return ['error' => 'not found'];
    }

    public function vote(Request $request)
    {
        /** @var User $user */
        $user = Auth::user();
        if (!$user) {
            return abort(401);
        }
        $vote = CommentRating::where('user_id', $user->id)->where('comment_id', $request->comment_id)->first();
        if ($vote) {
            if ($vote->positive != $request->positive) {
                $vote->delete();
                return
                    ['success' => 'vote deleted'];
            }
            if (CommentRating::where('user_id', $user->id)
                ->where('comment_id', $request->comment_id)
                ->where('positive', $request->positive)
                ->first()) {

                return ['error' => 'Пользователь уже проголосовал'];

            }
        } else {
            $data = $request->all();
            $data['user_id'] = $user->id;
            CommentRating::create($data);
            return ['success' => 'voted'];
        }
    }

    public function viewCount(Request $request) {
        if ($request->type == "news") {

            return News::where('id', $request->id)->increment('view_count');

        } elseif ($request->type == "mining") {
            return CloudMining::where('id', $request->id)->increment('view_count');
        } elseif ($request->type == "ico") {
            return IcoProject::where('id', $request->id)->increment('view_count');
        } elseif ($request->type == "review") {
            return Review::where('id', $request->id)->increment('view_count');
        } elseif ($request->type == "interview") {
            return Interview::where('id', $request->id)->increment('view_count');
        } elseif ($request->type == "analytics") {
            return Analytics::where('id', $request->id)->increment('view_count');
        }

        return false;
    }

    public function addEmail(Request $request) {
        if ($request->email) { 
            EmailList::create($request->all());
            return ['status'=>'email added'];
            # code...
        } else {
            return abort(401);
        }
    }
}
