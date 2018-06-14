<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:56
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\SouthXChangeConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class SouthXChangeProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        foreach ($result as $currency => $supplierTicker) {
            if(!isset($supplierTicker->Bid)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->Ask);
            $ticker->setBid($supplierTicker->Bid);
            $ticker->setVolume($supplierTicker->Volume24Hr);
            $ticker->setValue($supplierTicker->Last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 55;
    }

    protected function getConnectorClass()
    {
        return new SouthXChangeConnector();
    }

    /**
     * @return SouthXChangeConnector
     */
    protected function getConnector()
    {
        /** @var SouthXChangeConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}