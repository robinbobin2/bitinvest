<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:59
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\VaultoroConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class VaultoroProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        if (!isset($response->data)) {
            return [];
        }
        $response = $response->data;
        $ticker = new TickerEntity();
        $ticker->setAsk($response->{"24hLow"});
        $ticker->setBid($response->{"24hHigh"});
        $ticker->setVolume($response->{"24hVolume"});
        $ticker->setValue($response->LastPrice);
        $ticker->setExchangeId($this->getExchangeId());
        $ticker->setCurrency("BTC/GLD");
        $result[] = $ticker;

        return $result;
    }

    public function getExchangeId()
    {
        return 58;
    }

    protected function getConnectorClass()
    {
        return new VaultoroConnector();
    }

    /**
     * @return VaultoroConnector
     */
    protected function getConnector()
    {
        /** @var VaultoroConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}