<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 17.06.2018
 * Time: 11:27
 */

namespace App\Models\Founder\Models\Entity;


class ResponseContainer
{
    const CURRENCIES = [
        "BTC/USD",
        "ETH/USD",
        "XRP/USD",
        "BCH/USD",
        "LTC/USD",
        "ETC/USD",
        "GTC/USD",
        "QTUM/USD",
        "NEO/USD",
        "EOS/USD",
        "BCC/USD",
        "TRX/USD"];

    private $response;

    public function getResponse($response, &$cacheResponse)
    {
        $return = [];
        $cache = [];
        foreach ($cacheResponse as $item) {
            $cache = array_merge($cache, $item);
        }

        $count = 0;
        foreach ($cache as $item => $value) {
            if($count > 30){
                if($count == 50){
                    $cacheResponse = array_chunk($cache, 50);
                    break;
                }
                $return[] = $value;
                unset($cache[$item]);
                continue;
            }
            if (in_array($value, self::CURRENCIES)) {
                $return[] = $value;
                unset($cache[$item]);
                $count++;
            }
        }
        $return = array_merge($return, $response);
        return $return;
    }
}