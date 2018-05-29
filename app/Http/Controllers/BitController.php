<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 8:38
 */

namespace App\Http\Controllers;


use App\Models\Founder\FounderEngine;
use App\Models\Founder\Models\Providers\BTCBoxProvider;
use App\Models\Founder\Models\Providers\HitBTCProvider;
use App\Models\Founder\Models\Providers\PoloniexProvider;
use App\Models\Founder\Models\Providers\ZbProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\SearchForm;
use Illuminate\Support\Facades\DB;

class BitController extends Controller
{
    private $engine;

    public function __construct()
    {
        $this->engine = new FounderEngine();
    }

    public function index()
    {
        $form = new SearchForm($_GET);
        if (!$form->validate()) {
            return [];
        }
        return $this->engine->sendRequest($form);
    }

    public function pair()
    {
        $exchanges = DB::select("CALL getPair('" . $_GET['pair'] . "')");
        $response = [];
        foreach ($exchanges as $exchange) {
            $response[$exchange->row] = $exchange->value;
        }
        return $response;
    }

    public function exchange($id)
    {
        $exchanges = DB::select("CALL getExchange($id)");
        $response = [];
        foreach ($exchanges as $exchange) {
            $currency = $exchange->currency;
            unset($exchange->currency);
            $response[$currency] = $exchange;
        }
        return $response;
    }

    public function info()
    {
        $exchanges = DB::select("SELECT
		ex2.volume, ex2.value as value, (ex1.value / ex2.value) - 1 as percent, ex2.bid, ex2.ask, ex1.currency, ex1.exchangeId, exName.`name`, ex2.createTime as time, (ex2.volume * ex2.value) as volumeCommon
	FROM
		(
			SELECT
				min(id) AS minId,
				max(id) AS maxId,
				ex.currency,
				ex.exchangeId
			FROM
				exchangeRates ex
			WHERE
				from_unixtime(ex.createTime) > (now() + INTERVAL -(24) HOUR)
				and currency = '" . $_GET['pair'] . "'
			GROUP BY
				ex.exchangeId
		) a
	JOIN exchangeRates ex1 ON ex1.id = a.minId and a.exchangeId = ex1.exchangeId
	JOIN exchangeRates ex2 ON ex2.id = a.maxId and a.exchangeId = ex2.exchangeId
	JOIN exchanges exName on ex1.exchangeId = exName.id
	WHERE a.currency = '" . $_GET['pair'] . "'");
        return $exchanges;
    }

    public function exchangesVolume()
    {
        return DB::select("SELECT * FROM exchangeVolumes");
    }

    public function pairByExchange()
    {
        $pairs = DB::select("CALL byExchangesName('" . $_GET['exchange'] . "')");
        return $pairs;
    }

    public function pairCount()
    {
        $pairs = DB::select("SELECT * FROM exchangePairCount");
        return $pairs;
    }

    public function t()
    {
        $provider = new BTCBoxProvider();
        $request = new Request();
        $response = $provider->search($request);
        return json_encode($response);
    }
}