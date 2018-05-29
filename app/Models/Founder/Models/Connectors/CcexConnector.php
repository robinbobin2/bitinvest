<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:42
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\Custom\SupplierLog;
use App\Models\Founder\Models\FounderConnector;

class CcexConnector extends FounderConnector
{
    public function search()
    {
        return $this->sendRequest();
    }

    public function sendRequest()
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "hhttps://c-cex.com/t/api_pub.html?a=getmarketsummaries");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        SupplierLog::log("search", $result, 17);
        return json_decode($result);
    }
}