<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 16:31
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class CoinnestConnector extends FounderConnector
{
    private $coins = [
        "btc",
        "bch",
        "btg",
        "bcd",
        "ubtc",
        "btn",
        "kst",
        "ltc",
        "act",
        "eth",
        "etc",
        "ada",
        "qtum",
        "xlm",
        "neo",
        "gas",
        "rpx",
        "qlc",
        "hsr",
        "knc",
        "tsl",
        "tron",
        "omg",
        "wtc",
        "mco",
        "storm",
        "gto",
        "npxs",
        "chat",
        "vet",
        "egcc",
        "frec",
        "ink",
        "oc",
        "hlc",
        "ent",
        "qbt",
        "spc",
        "put",
        "hotc"
    ];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();

        foreach ($this->coins as $currency) {
            $curly[$currency] = curl_init();
            curl_setopt($curly[$currency], CURLOPT_URL, "https://api.coinnest.co.kr/api/pub/ticker?coin=" . $currency);
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