<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 11:51
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class BraziliexConnector extends FounderConnector
{
    public function search()
    {
        return $this->sendRequest();
    }

    public function sendRequest()
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "https://braziliex.com/api/v1/public/ticker");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0(Windows;U;WindowsNT5.1;ru;rv:1.9.0.4)Gecko/2008102920AdCentriaIM/1.7Firefox/3.0.4");
        $result = curl_exec($curl);
        return json_decode($result);
    }
}