<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 22.05.2018
 * Time: 10:40
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class BitHumbConnector extends FounderConnector
{
    public function search()
    {
        return $this->sendRequest();
    }

    public function sendRequest()
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "https://api.bithumb.com/public/ticker/all");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        return json_decode($result);
    }
}