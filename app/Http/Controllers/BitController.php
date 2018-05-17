<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 8:38
 */

namespace App\Http\Controllers;


use App\Models\Founder\FounderEngine;
use App\Models\Founder\Models\Providers\HitBTCProvider;
use App\Models\Founder\Models\Providers\PoloniexProvider;
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
        $exchanges = DB::select("CALL byCurrencies('".$_GET['pair']."')");
        return $exchanges;
    }

    public function exchangesVolume()
    {
        return DB::select("SELECT * FROM exchangeVolumes");
    }

    public function pairByExchange(){
        $pairs = DB::select("CALL byExchangesName('".$_GET['exchange']."')");
        return $pairs;
    }

    public function pairCount()
    {
        $pairs = DB::select("SELECT * FROM exchangePairCount");
        return $pairs;
    }
}