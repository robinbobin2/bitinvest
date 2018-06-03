<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 02.06.2018
 * Time: 20:22
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class CoinRoomConnector extends FounderConnector
{
    private $real = [
        "USD",
        "EUR",
        "PLN",
        "GBP",
        "NOK",
        "CHF",
        "CZK",
        "DKK"
    ];
    private $crypto = [
        "BTC",
        "LTC",
        "ETH",
        "DASH",
        "XMR",
        "BCC",
        "PIVX",
        "ZCOIN",
        "LSK",
        "ZEC",
        "BURST",
        "VIA",
        "ETC",
        "VTC",
        "ZOI",
        "HUSH"
    ];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();

        foreach ($this->real as $real) {
            foreach ($this->crypto as $crypto) {
                $currency = strtoupper($crypto) . '/' . strtoupper($real);
                $curly[$currency] = curl_init();
                curl_setopt($curly[$currency], CURLOPT_URL, "https://coinroom.com/api/ticker/$crypto/$real");
                curl_setopt($curly[$currency], CURLOPT_HEADER, 0);
                curl_setopt($curly[$currency], CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($curly[$currency], CURLOPT_TIMEOUT, 30);
                curl_setopt($curly[$currency], CURLOPT_FOLLOWLOCATION, true);
                curl_setopt($curly[$currency], CURLOPT_SSL_VERIFYPEER, 0);
                curl_setopt($curly[$currency], CURLOPT_SSL_VERIFYHOST, 0);
                curl_setopt($curly[$currency], CURLOPT_USERAGENT, "Mozilla/5.0(Windows;U;WindowsNT5.1;ru;rv:1.9.0.4)Gecko/2008102920AdCentriaIM/1.7Firefox/3.0.4");
                curl_multi_add_handle($mh, $curly[$currency]);
            }
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