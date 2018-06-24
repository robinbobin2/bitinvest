<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 24.06.2018
 * Time: 17:44
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\FatBtcConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class FatBtcProvider extends FounderProvider
{
    /**
     * @return FatBtcConnector
     */
    protected function getConnector()
    {
        /** @var FatBtcConnector $connector */
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

        foreach ($result->data as $supplierTicker) {
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->bis1[1]);
            $ticker->setBid($supplierTicker->ask1[1]);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->ask1[1]);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($supplierTicker->dspName);
            $response[] = $ticker;
        }
        return $response;
    }

    public function getExchangeId()
    {
        return 92;
    }

    protected function getConnectorClass()
    {
        return new FatBtcConnector();
    }
}