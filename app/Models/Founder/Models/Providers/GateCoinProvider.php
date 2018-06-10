<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:25
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\GateCoinConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class GateCoinProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        foreach ($response->tickers as $value) {
            $ticker = new TickerEntity();
            $ticker->setAsk($value->ask);
            $ticker->setBid($value->bid);
            $ticker->setVolume($value->volume);
            $ticker->setValue($value->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->getCurrency($value->currencyPair));
            $result[] = $ticker;
        }

        return $result;
    }

    public function getExchangeId()
    {
        return 32;
    }

    protected function getConnectorClass()
    {
        return new GateCoinConnector();
    }

    /**
     * @return GateCoinConnector
     */
    protected function getConnector()
    {
        /** @var GateCoinConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function getCurrency($currency)
    {
        return strtoupper(substr($currency, 0,3) . "/" . substr($currency, 3));
    }
}