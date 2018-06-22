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
        sleep(1);
        $response = [];
        $result = $this->getConnector()->search();

        if (!$result) {
            return $response;
        }

        foreach ($result as $currency => $supplierTicker) {
            $currency = strtoupper(str_replace("_", "/", $currency));
            if(strpos($currency, "USDT") !== false){
                $currency = str_replace("USDT", "USD", $currency);
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->buy);
            $ticker->setBid($supplierTicker->sell);
            $ticker->setVolume($supplierTicker->vol_cur);
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