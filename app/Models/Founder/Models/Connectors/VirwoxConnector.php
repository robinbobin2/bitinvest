<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 16:54
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\Custom\SupplierLog;
use App\Models\Founder\Models\FounderConnector;
use DateTime;

class VirwoxConnector extends FounderConnector
{
    private $coins = ["EUR/SLL", "GBP/SLL", "CHF/SLL", "USD/SLL", "SLL/OMC", "EUR/OMC", "USD/OMC", "SLL/ACD", "EUR/ACD", "USD/ACD", "BTC/SLL", "EUR/MVC"];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();
        foreach ($this->coins as $currency) {
            $curly[$currency] = curl_init();
            $startDate = new DateTime("-1 day");
            $date = new DateTime();
            curl_setopt($curly[$currency], CURLOPT_URL, "http://api.virwox.com/api/json.php?method=getTradedPriceVolume&instrument=" . $currency . "&startDate=" . urlencode($startDate->format("Y-m-d H:i:s")) . "&endDate=" . urlencode($date->format("Y-m-d H:i:s")) . "&HLOC=true");
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
        SupplierLog::log("search", json_encode($result), 59);

        return $result;
    }
}