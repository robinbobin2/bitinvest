<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:32
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\GeminiConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class GeminiProvider extends FounderProvider
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
            if(!isset($supplierTicker->ask)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->ask);
            $ticker->setBid($supplierTicker->bid);
            $ticker->setVolume($supplierTicker->volume->{strtoupper(substr($currency, 0,3))});
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->getCurrency($currency));
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 35;
    }

    protected function getConnectorClass()
    {
        return new GeminiConnector();
    }

    /**
     * @return GeminiConnector
     */
    protected function getConnector()
    {
        /** @var GeminiConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function getCurrency($currency)
    {
        return strtoupper(substr($currency, 0,3) . "/" . substr($currency, 3));
    }
}