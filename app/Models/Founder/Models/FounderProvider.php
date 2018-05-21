<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 10:41
 */

namespace App\Models\Founder\Models;


use App\Models\Entity\Exchange;
use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Requests\Request;
use Illuminate\Support\Facades\DB;

abstract class FounderProvider
{
    /**
     * @var FounderConnector
     */
    protected $connector;

    protected $exchange;

    protected function getConnector()
    {
        if (!$this->connector) {
            $this->connector = $this->getConnectorClass();
            $this->connector->exchangeId = $this->getExchangeId();
        }
        return $this->connector;
    }

    abstract protected function getConnectorClass();

    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }


    public function save($response)
    {
        sleep(1);
        foreach ($response as $rate) {
            if (empty($rate['last']) || empty($rate['symbol'])) {
                continue;
            }
            if ($this->isCrypto()) {
                $pos = strpos($rate['symbol'], "USDT");
                if ($pos !== false) {
                    $newRate = $rate;
                    $newRate['symbol'] = str_replace("USDT", "USD", $newRate['symbol']);
                    $exchange = new ExchangeRate();
                    $exchange->value = $newRate['last'];
                    $exchange->volume = $newRate['baseVolume'];
                    $exchange->bid = isset($newRate['bid']) ? $newRate['bid'] : null;
                    $exchange->ask = isset($newRate['ask']) ? $newRate['ask'] : null;
                    $exchange->currency = $newRate['symbol'];
                    $exchange->exchangeId = $this->getExchangeId();
                    $exchange->createTime = time();
                    try {
                        $exchange->save();
                    } catch (\Exception $e) {

                    }
                }
            }
            $exchange = new ExchangeRate();
            $exchange->value = $rate['last'];
            $exchange->volume = $rate['baseVolume'];
            $exchange->bid = isset($rate['bid']) ? $rate['bid'] : null;
            $exchange->ask = isset($rate['ask']) ? $rate['ask'] : null;
            $exchange->currency = $rate['symbol'];
            $exchange->exchangeId = $this->getExchangeId();
            $exchange->createTime = time();
            try {
                $exchange->save();
            } catch (\Exception $e) {

            }
        }

    }

    public function getDefaultRelation()
    {
        return 'BTC/USDT';
    }

    abstract public function getExchangeId();

    public function isCrypto()
    {
        return false;
    }
}