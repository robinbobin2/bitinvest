<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 23.06.2018
 * Time: 23:17
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\TidexConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class TidexProvider extends FounderProvider
{
    /**
     * @return TidexConnector
     */
    protected function getConnector()
    {
        /** @var TidexConnector $connector */
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
            if(empty($supplierTicker)){
                continue;
            }
            foreach ($supplierTicker as $newTicker) {
                $ticker = new TickerEntity();
                $ticker->setAsk($newTicker->buy);
                $ticker->setBid($newTicker->sell);
                $ticker->setVolume($newTicker->vol_cur);
                $ticker->setValue($newTicker->last);
                $ticker->setExchangeId($this->getExchangeId());
                $ticker->setCurrency(strtoupper(str_replace("_", "/", $currency)));
                $response[] = $ticker;
            }
        }
        return $response;
    }

    public function getExchangeId()
    {
        return 91;
    }

    protected function getConnectorClass()
    {
        return new TidexConnector();
    }

    public function getCurrency($currency)
    {
        return strtoupper(substr($currency, 0, 3) . "/" . substr($currency, 3));
    }
}