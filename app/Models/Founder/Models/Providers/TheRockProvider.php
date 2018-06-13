<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:57
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\TheRockConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class TheRockProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        foreach ($response->tickers as $value) {
            if(!isset($value->ask)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($value->ask);
            $ticker->setBid($value->bid);
            $ticker->setVolume($value->volume);
            $ticker->setValue($value->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->getCurrency($value->fund_id));
            $result[] = $ticker;
        }

        return $result;
    }

    public function getExchangeId()
    {
        return 56;
    }

    protected function getConnectorClass()
    {
        return new TheRockConnector();
    }

    /**
     * @return TheRockConnector
     */
    protected function getConnector()
    {
        /** @var TheRockConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function getCurrency($currency)
    {
        return strtoupper(substr($currency, 0,3) . "/" . substr($currency, 3));
    }
}