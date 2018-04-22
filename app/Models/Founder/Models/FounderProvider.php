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
        }
        return $this->connector;
    }

    abstract protected function getConnectorClass();

    abstract public function search(Request $request);

    public function save($response)
    {
        foreach ($response as $rate) {
            if (!$rate['last']) {
                continue;
            }
            $exchange = new ExchangeRate();
            $exchange->value = $rate['last'];
            $exchange->volume = $rate['baseVolume'];
            $exchange->bid = $rate['bid'];
            $exchange->ask = $rate['ask'];
            $exchange->currency = $rate['symbol'] ? $rate['symbol'] : $this->getDefaultRelation();
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
}