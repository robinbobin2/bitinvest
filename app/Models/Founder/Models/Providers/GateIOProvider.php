<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:25
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\GateIOConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class GateIOProvider extends FounderProvider
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

        foreach ($result as $currency => $supplierTicker) {
            if(!isset($supplierTicker->result)){
                $supplierTicker = $supplierTicker->result;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->lowestAsk);
            $ticker->setBid($supplierTicker->highestBid);
            $ticker->setVolume($supplierTicker->quoteVolume);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper(str_replace("_", "/", $currency)));
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 33;
    }

    protected function getConnectorClass()
    {
        return new GateIOConnector();
    }

    /**
     * @return GateIOConnector
     */
    protected function getConnector()
    {
        /** @var GateIOConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}