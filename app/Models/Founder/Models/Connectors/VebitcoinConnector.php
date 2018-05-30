<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 30.05.2018
 * Time: 16:48
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\Custom\SupplierLog;
use App\Models\Founder\Models\FounderConnector;

class VebitcoinConnector extends FounderConnector
{
    public function search()
    {
        return $this->sendRequest();
    }

    public function sendRequest()
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "https://www.vebitcoin.com/Ticker/All");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        SupplierLog::log("search", $result, 72);
        return json_decode($result);
    }
}