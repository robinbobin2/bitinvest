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

    private $rapidMode = false;

    private $resetCount = 0;

    private $response;

    public function getResponse($response, &$cacheResponse)
    {
        $return = [];
        $cache = [];
        foreach ($cacheResponse as $item) {
            $cache = array_merge($cache, $item);
        }

        $count = 0;
        /** @var TickerEntity $value */
        foreach ($cache as $item => $value) {
            if ($count > 30) {
                if ($count == 50) {

                    break;
                }
                $return[] = $value;
                unset($cache[$item]);
                $count++;
                continue;
            }
            if (in_array($value->getCurrency(), self::CURRENCIES)) {
                $return[] = $value;
                unset($cache[$item]);
                $count++;
            }
        }
        shuffle($cache);
        $other = array_splice($cache,0, (50 - count($return)));
        if(count($cache) > 15 * 50){
            $cache = array_splice($cache, 0, 100);
        }
        if ($other == 50) {
            if ($this->rapidMode) {
                if ($this->resetCount) {
                    $this->resetCount--;
                } else {
                    $this->rapidMode = false;
                }
                $other = [];
            } else {
                $this->resetCount++;
                if ($this->resetCount < 3) {
                    $this->resetCount++;
                } else {
                    $cache = [];
                    $this->rapidMode = true;
                }
            }
        }


        $return = array_merge($return, $other);
        $cacheResponse = array_chunk($cache, 50);
        echo "OTHER: " . count($other) . PHP_EOL;
        $return = array_merge($return, $response);
        return $return;
    }
}