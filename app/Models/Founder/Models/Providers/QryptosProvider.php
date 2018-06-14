<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:56
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\QryptosConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class QryptosProvider extends FounderProvider
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
            $ticker->setAsk($supplierTicker->high_market_ask);
            $ticker->setBid($supplierTicker->low_market_bid);
            $ticker->setVolume($supplierTicker->volume_24h);
            $ticker->setValue($supplierTicker->last_traded_price);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($supplierTicker->base_currency . "/" . $supplierTicker->quoted_currency);
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 54;
    }

    protected function getConnectorClass()
    {
        return new QryptosConnector();
    }

    /**
     * @return QryptosConnector
     */
    protected function getConnector()
    {
        /** @var QryptosConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}