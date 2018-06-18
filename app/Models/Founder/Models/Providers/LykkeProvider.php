<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:50
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\LykkeConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class LykkeProvider extends FounderProvider
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

        foreach ($result->result as $supplierTicker) {
            if(!isset($supplierTicker->assetPair) || strlen($supplierTicker->assetPair) != 6){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->ask);
            $ticker->setBid($supplierTicker->bid);
            $ticker->setVolume($supplierTicker->volume24H);
            $ticker->setValue($supplierTicker->lastPrice);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->getCurrency($supplierTicker->assetPair));
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 48;
    }

    protected function getConnectorClass()
    {
        return new LykkeConnector();
    }

    /**
     * @return LykkeConnector
     */
    protected function getConnector()
    {
        /** @var LykkeConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function getCurrency($currency)
    {
        return strtoupper(substr($currency, 0,3) . "/" . substr($currency, 3));
    }
}