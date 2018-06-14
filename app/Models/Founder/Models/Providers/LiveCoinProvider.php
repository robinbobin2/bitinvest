<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:40
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\LiveCoinConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class LiveCoinProvider extends FounderProvider
{
    /**
     * @param Request $request
     * @return TickerEntity[]
     */
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        if (!$result) {
            return $response;
        }

        foreach ($result as $supplierTicker) {
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->best_ask);
            $ticker->setBid($supplierTicker->best_bid);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($supplierTicker->symbol);
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 45;
    }

    protected function getConnectorClass()
    {
        return new LiveCoinConnector();
    }

    /**
     * @return LiveCoinConnector
     */
    protected function getConnector()
    {
        /** @var LiveCoinConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}