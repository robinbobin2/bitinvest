<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:49
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\LuquiConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class LuquiProvider extends FounderProvider
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
            $currency = strtoupper(str_replace("_", "/", $currency));
            if(strpos($currency, "USDT") !== false){
                $ticker = new TickerEntity();
                $ticker->setAsk((float)$supplierTicker->buy);
                $ticker->setBid((float)$supplierTicker->sell);
                $ticker->setVolume((float)$supplierTicker->vol);
                $ticker->setValue((float)$supplierTicker->last);
                $ticker->setExchangeId($this->getExchangeId());
                $ticker->setCurrency(str_replace("USDT", "USD", $currency));
                $result[] = $ticker;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->buy);
            $ticker->setBid($supplierTicker->sell);
            $ticker->setVolume($supplierTicker->vol);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 47;
    }

    protected function getConnectorClass()
    {
        return new LuquiConnector();
    }

    /**
     * @return LuquiConnector
     */
    protected function getConnector()
    {
        /** @var LuquiConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}