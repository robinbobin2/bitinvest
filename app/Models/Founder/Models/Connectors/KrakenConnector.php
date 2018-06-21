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
    private $coins = ["BCHEUR" => "BCH/EUR","BCHUSD" => "BCH/USD","BCHXBT" => "BCH/XXBT","DASHEUR" => "DASH/EUR","DASHUSD" => "DASH/USD","DASHXBT" => "DASH/XXBT","EOSETH" => "EOS/XETH","EOSEUR" => "EOS/EUR","EOSUSD" => "EOS/USD","EOSXBT" => "EOS/XXBT","GNOETH" => "GNO/XETH","GNOEUR" => "GNO/EUR","GNOUSD" => "GNO/USD","GNOXBT" => "GNO/XXBT","USDTUSD" => "USDT/USD","XETCXETH" => "XETC/XETH","XETCXXBT" => "XETC/XXBT","XETCEUR" => "XETC/EUR","XETCUSD" => "XETC/USD","XETHXXBT" => "XETH/XXBT","XETHXXBT.d" => "XETH/XXBT","XETHZCAD" => "XETH/ZCAD","XETHZCAD.d" => "XETH/ZCAD","XETHEUR" => "XETH/EUR","XETHEUR.d" => "XETH/EUR","XETHZGBP" => "XETH/ZGBP","XETHZGBP.d" => "XETH/ZGBP","XETHZJPY" => "XETH/ZJPY","XETHZJPY.d" => "XETH/ZJPY","XETHUSD" => "XETH/USD","XETHUSD.d" => "XETH/USD","XICNXETH" => "XICN/XETH","XICNXXBT" => "XICN/XXBT","XLTCXXBT" => "XLTC/XXBT","XLTCEUR" => "XLTC/EUR","XLTCUSD" => "XLTC/USD","XMLNXETH" => "XMLN/XETH","XMLNXXBT" => "XMLN/XXBT","XREPXETH" => "XREP/XETH","XREPXXBT" => "XREP/XXBT","XREPEUR" => "XREP/EUR","XREPUSD" => "XREP/USD","XXBTZCAD" => "XXBT/ZCAD","XXBTZCAD.d" => "XXBT/ZCAD","XXBTEUR" => "XXBT/EUR","XXBTEUR.d" => "XXBT/EUR","XXBTZGBP" => "XXBT/ZGBP","XXBTZGBP.d" => "XXBT/ZGBP","XXBTZJPY" => "XXBT/ZJPY","XXBTZJPY.d" => "XXBT/ZJPY","XXBTUSD" => "XXBT/USD","XXBTUSD.d" => "XXBT/USD","XXDGXXBT" => "XXDG/XXBT","XXLMXXBT" => "XXLM/XXBT","XXLMEUR" => "XXLM/EUR","XXLMUSD" => "XXLM/USD","XXMRXXBT" => "XXMR/XXBT","XXMREUR" => "XXMR/EUR","XXMRUSD" => "XXMR/USD","XXRPXXBT" => "XXRP/XXBT","XXRPZCAD" => "XXRP/ZCAD","XXRPEUR" => "XXRP/EUR","XXRPZJPY" => "XXRP/ZJPY","XXRPUSD" => "XXRP/USD","XZECXXBT" => "XZEC/XXBT","XZECEUR" => "XZEC/EUR","XZECZJPY" => "XZEC/ZJPY","XZECUSD" => "XZEC/USD"];

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