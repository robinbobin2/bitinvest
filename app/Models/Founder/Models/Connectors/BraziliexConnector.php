<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 11:51
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\Custom\SupplierLog;
use App\Models\Founder\Models\FounderConnector;

class BraziliexConnector extends FounderConnector
{
    protected $api_key = "1d7b2d95ac5e0de20a981b75da066ee745f32053dc8f478af1cd1c7b694d9da4f07e16e33765ac93345eb3501d5ec148ff73fb2cc6aabb96364c410368e1003e";

    protected $api_secret = "82cdf59db8eb9242b4de76a5046ae0d5b13a9fd1ad9032191cd78a308319aede0a12d659b44978250691d1ea91b9b6420bbf5b30ba3c9000f8bece0e5493992b";

    private function sendRequest()
    {
        // API settings
        $key = $this->api_key;
        $secret = $this->api_secret;
        $req = [];
        // Generate nonce
        $req['nonce'] = time();

        // generate the POST data string
        $post_data = http_build_query($req, '', '&');
        $sign = hash_hmac('sha512', $post_data, $secret);

        // generate the extra headers
        $headers = array(
            'Key: ' . $key,
            'Sign: ' . $sign,
        );

        // curl handle (initialize if required)
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; PHP/' . phpversion() . ')');
        curl_setopt($ch, CURLOPT_URL, "https://braziliex.com/api/v1/public/ticker");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

        // send request
        $res = curl_exec($ch);
        $res = json_decode($res);
        return $res;
    }

    public function search()
    {
        return $this->sendRequest();
    }
}