<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:49
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\LunoConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class LunoProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 46;
    }

    protected function getConnectorClass()
    {
        return new LunoConnector();
    }

    /**
     * @return LunoConnector
     */
    protected function getConnector()
    {
        /** @var LunoConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    /**
     * @param TickerEntity[] $response
     */
    public function save($response)
    {
        sleep(1);
        foreach ($response as $ticker) {
            $exchange = new ExchangeRate();
            $exchange->value = $ticker->getValue();
            $exchange->volume = $ticker->getVolume();
            $exchange->bid = $ticker->getBid();
            $exchange->ask = $ticker->getAsk();
            $exchange->currency = $ticker->getCurrency();
            $exchange->exchangeId = $this->getExchangeId();
            $exchange->createTime = time();
            try {
                $exchange->save();
            } catch (\Exception $e) {

            }
        }
    }

    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }
        foreach ($response as $supplierTicker){
            $supplierTicker = $supplierTicker->tickers;
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->ask);
            $ticker->setBid($supplierTicker->bid);
            $ticker->setVolume($supplierTicker->rolling_24_hour_volume);
            $ticker->setValue($supplierTicker->last_trade);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper(substr($supplierTicker->pair, 0,3) . "/" . substr($supplierTicker->pair, 3)));
            $result[] = $ticker;
        }

        return $result;
    }
}