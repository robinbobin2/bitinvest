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

class XBTCEConnector extends FounderConnector
{
    public function search()
    {
        return $this->sendRequest();
    }

    public function sendRequest()
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "https://cryptottlivewebapi.xbtce.net:8443/api/v1/public/ticker");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        $result = curl_exec($curl);
        SupplierLog::log("search", $result, 60);
        return json_decode($result);
    }
}