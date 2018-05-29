<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 28.05.2018
 * Time: 18:40
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class C2CXConnector extends FounderConnector
{
    private $pairs = [
        "BTC_BCC",
        "BTC_DASH",
        "BTC_ETH",
        "BTC_FUN",
        "BTC_SKY",
        "BTC_TNB",
        "BTC_UCASH",
        "BTC_ZRX",
        "DRG_BCC",
        "DRG_BTC",
        "DRG_BTG",
        "DRG_DASH",
        "DRG_ETC",
        "DRG_ETH",
        "DRG_FUN",
        "DRG_LTC",
        "DRG_SKY",
        "DRG_TNB",
        "DRG_ZEC",
        "DRG_ZRX",
        "USDT_BCC",
        "USDT_BTC",
        "USDT_BTG",
        "USDT_DASH",
        "USDT_DRG",
        "USDT_ETC",
        "USDT_ETH",
        "USDT_FUN",
        "USDT_LTC",
        "USDT_SKY",
        "USDT_TNB",
        "USDT_UCASH",
        "USDT_ZEC",
        "USDT_ZRX"
    ];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();

        foreach ($this->pairs as $currency) {
            $curly[$currency] = curl_init();
            curl_setopt($curly[$currency], CURLOPT_URL, "https://api.c2cx.com/v1/ticker/?symbol=" . $currency);
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