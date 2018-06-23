<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 23.06.2018
 * Time: 23:04
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\Custom\SupplierLog;
use App\Models\Founder\Models\FounderConnector;

class NeraexConnector extends FounderConnector
{
    public function search()
    {
        return $this->sendRequest();
    }

    public function sendRequest()
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "https://neraex.pro/api/v2/tickers/");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        SupplierLog::log("search", $result, 90);
        return json_decode($result);
    }
}