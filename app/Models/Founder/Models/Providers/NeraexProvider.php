<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 23.06.2018
 * Time: 23:05
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\NeraexConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class NeraexProvider extends FounderProvider
{
    /**
     * @return NeraexConnector
     */
    protected function getConnector()
    {
        /** @var NeraexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

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
            if(!isset($supplierTicker->ticker)){
                continue;
            }
            $supplierTicker = $supplierTicker->ticker;
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->buy);
            $ticker->setBid($supplierTicker->sell);
            $ticker->setVolume($supplierTicker->vol);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->getCurrency($currency));
            $response[] = $ticker;
        }
        return $response;
    }

    public function getExchangeId()
    {
        return 90;
    }

    protected function getConnectorClass()
    {
        return new NeraexConnector();
    }

    public function getCurrency($currency)
    {
        return strtoupper(substr($currency, 0,3) . "/" . substr($currency, 3));
    }
}