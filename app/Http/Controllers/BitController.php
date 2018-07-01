<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 8:38
 */

namespace App\Http\Controllers;


use App\Models\Founder\FounderEngine;
use App\Models\Founder\Models\Providers\BraziliexProvider;
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
ex2.volume, f.currency, ex2.value as value, ROUND(((ex2.value - f.day) / (ex2.value + f.day) * 100), 6) as percent, ex2.bid, ex2.ask, ex2.exchangeId, ex.`name`,ROUND((f.volume / ex2.volume) - 1, 6) as percentVolume, ex2.createTime as time, (ex2.volume * ex2.value) as volumeCommon FROM

exchangeRatesInfo f 
JOIN exchangeRates ex2 on ex2.id = f.nowId
JOIN exchanges ex on ex.id = f.exchangeId
WHERE f.currency = '" . $_GET['pair'] . "'");
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
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "https://cryptottlivewebapi.xbtce.net/api/v1/public/ticker");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_VERBOSE,true);
        curl_setopt($curl, CURLOPT_PORT, 8443);
        $result = curl_exec($curl);
        echo $result;

    }

    public function currencyVolumes()
    {
        return DB::select('SELECT ex.currency, sum(ex.volume * ex.value) as volume FROM (select * from exchangeRatesInfo where 
currency LIKE "%/BTC" and volume is not null) t 

JOIN exchangeRates ex on ex.id = t.nowId
GROUP BY ex.currency');
    }
}