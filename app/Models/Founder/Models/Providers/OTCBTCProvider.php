<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 29.05.2018
 * Time: 16:29
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\OTCBTCConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class OTCBTCProvider extends FounderProvider
{
    /**
     * @return OTCBTCConnector
     */
    protected function getConnector()
    {
        /** @var OTCBTCConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function getExchangeId()
    {
        return 70;
    }

    protected function getConnectorClass()
    {
        return new OTCBTCConnector();
    }

    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }
        foreach ($response as $currency => $supplierTicker){
            $supplierTicker = $supplierTicker->ticker;
            if($this->getCurrency($currency) == "BTC/USDT"){
                $ticker = new TickerEntity();
                $ticker->setAsk($supplierTicker->buy);
                $ticker->setBid($supplierTicker->sell);
                $ticker->setVolume($supplierTicker->vol);
                $ticker->setValue($supplierTicker->last);
                $ticker->setExchangeId($this->getExchangeId());
                $ticker->setCurrency("BTC/USD");
                $result[] = $ticker;
            }

            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->buy);
            $ticker->setBid($supplierTicker->sell);
            $ticker->setVolume($supplierTicker->vol);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->getCurrency($currency));
            $result[] = $ticker;
        }

        return $result;
    }

    private function getCurrency($currency)
    {
        return strtoupper(str_replace("_", "/", $currency));
    }
}