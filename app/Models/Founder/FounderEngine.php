<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 8:50
 */

namespace App\Models\Founder;


use App\Models\Entity\Exchange;
use Illuminate\Support\Facades\DB;

class FounderEngine
{
    public function sendRequest($request)
    {
        $exchanges = DB::select("select * from showExchanges");
        $response = [];
        foreach ($exchanges as $exchange){
            $currency = $exchange->currency;
            unset($exchange->currency);
            $response[$currency] = $exchange;
        }
        return $response;
    }
}