<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 02.06.2018
 * Time: 20:58
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class DSXConnector extends FounderConnector
{
    private $coins = [
        "ethusd" => "ETH/USD",
        "btgeur" => "BTG/EUR",
        "btcrub" => "BTG/RUB",
        "etheur" => "ETH/EUR",
        "ltcgbp" => "LTC/GBP",
        "btcgbp" => "BTC/GBP",
        "ltcbtc" => "LTC/BTC",
        "gbpusd" => "GBP/USD",
        "btggbp" => "BTG/GBP",
        "bccgbp" => "BCC/GBP",
        "ethgbp" => "ETH/GBP",
        "btgbtc" => "BTG/BTC",
        "usdrub" => "USD/RUB",
        "bccbtc" => "BCC/BTC",
        "ethbtc" => "ETH/BTC",
        "ltcusd" => "LTC/USD",
        "bccusd" => "BCC/USD",
        "btcusd" => "BTC/USD",
        "ltceur" => "LTC/EUR",
        "eurusd" => "EUR/USD",
        "bcceur" => "BCC/EUR",
        "btceur" => "BTC/EUR",
        "btgusd" => "BTG/USD",
    ];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();

        foreach ($this->coins as $code => $coin) {
            $currency = $coin;
            $curly[$currency] = curl_init();
            curl_setopt($curly[$currency], CURLOPT_URL, "https://dsx.uk/mapi/ticker/" . $code);
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