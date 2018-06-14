<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 16:38
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class KrakenConnector extends FounderConnector
{
    private $coins = ["BCHEUR" => "BCH/ZEUR","BCHUSD" => "BCH/ZUSD","BCHXBT" => "BCH/XXBT","DASHEUR" => "DASH/ZEUR","DASHUSD" => "DASH/ZUSD","DASHXBT" => "DASH/XXBT","EOSETH" => "EOS/XETH","EOSEUR" => "EOS/ZEUR","EOSUSD" => "EOS/ZUSD","EOSXBT" => "EOS/XXBT","GNOETH" => "GNO/XETH","GNOEUR" => "GNO/ZEUR","GNOUSD" => "GNO/ZUSD","GNOXBT" => "GNO/XXBT","USDTZUSD" => "USDT/ZUSD","XETCXETH" => "XETC/XETH","XETCXXBT" => "XETC/XXBT","XETCZEUR" => "XETC/ZEUR","XETCZUSD" => "XETC/ZUSD","XETHXXBT" => "XETH/XXBT","XETHXXBT.d" => "XETH/XXBT","XETHZCAD" => "XETH/ZCAD","XETHZCAD.d" => "XETH/ZCAD","XETHZEUR" => "XETH/ZEUR","XETHZEUR.d" => "XETH/ZEUR","XETHZGBP" => "XETH/ZGBP","XETHZGBP.d" => "XETH/ZGBP","XETHZJPY" => "XETH/ZJPY","XETHZJPY.d" => "XETH/ZJPY","XETHZUSD" => "XETH/ZUSD","XETHZUSD.d" => "XETH/ZUSD","XICNXETH" => "XICN/XETH","XICNXXBT" => "XICN/XXBT","XLTCXXBT" => "XLTC/XXBT","XLTCZEUR" => "XLTC/ZEUR","XLTCZUSD" => "XLTC/ZUSD","XMLNXETH" => "XMLN/XETH","XMLNXXBT" => "XMLN/XXBT","XREPXETH" => "XREP/XETH","XREPXXBT" => "XREP/XXBT","XREPZEUR" => "XREP/ZEUR","XREPZUSD" => "XREP/ZUSD","XXBTZCAD" => "XXBT/ZCAD","XXBTZCAD.d" => "XXBT/ZCAD","XXBTZEUR" => "XXBT/ZEUR","XXBTZEUR.d" => "XXBT/ZEUR","XXBTZGBP" => "XXBT/ZGBP","XXBTZGBP.d" => "XXBT/ZGBP","XXBTZJPY" => "XXBT/ZJPY","XXBTZJPY.d" => "XXBT/ZJPY","XXBTZUSD" => "XXBT/ZUSD","XXBTZUSD.d" => "XXBT/ZUSD","XXDGXXBT" => "XXDG/XXBT","XXLMXXBT" => "XXLM/XXBT","XXLMZEUR" => "XXLM/ZEUR","XXLMZUSD" => "XXLM/ZUSD","XXMRXXBT" => "XXMR/XXBT","XXMRZEUR" => "XXMR/ZEUR","XXMRZUSD" => "XXMR/ZUSD","XXRPXXBT" => "XXRP/XXBT","XXRPZCAD" => "XXRP/ZCAD","XXRPZEUR" => "XXRP/ZEUR","XXRPZJPY" => "XXRP/ZJPY","XXRPZUSD" => "XXRP/ZUSD","XZECXXBT" => "XZEC/XXBT","XZECZEUR" => "XZEC/ZEUR","XZECZJPY" => "XZEC/ZJPY","XZECZUSD" => "XZEC/ZUSD"];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();

        foreach ($this->coins as $code => $currency) {
            $curly[$currency] = curl_init();
            curl_setopt($curly[$currency], CURLOPT_URL, "https://api.kraken.com/0/public/Ticker?pair=" . $code);
            curl_setopt($curly[$currency], CURLOPT_HEADER, 0);
            curl_setopt($curly[$currency], CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($curly[$currency], CURLOPT_TIMEOUT, 30);
            curl_setopt($curly[$currency], CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($curly[$currency], CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($curly[$currency], CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($curly[$currency], CURLOPT_USERAGENT, "Mozilla/5.0(Windows;U;WindowsNT5.1;ru;rv:1.9.0.4)Gecko/2008102920AdCentriaIM/1.7Firefox/3.0.4");
            curl_multi_add_handle($mh, $curly[$currency]);
        }

        $running = null;
        do {
            curl_multi_exec($mh, $running);
        } while ($running > 0);

        foreach ($curly as $id => $c) {
            $result[$id] = json_decode(curl_multi_getcontent($c));
            curl_multi_remove_handle($mh, $c);
        }
        curl_multi_close($mh);
        return $result;
    }
}