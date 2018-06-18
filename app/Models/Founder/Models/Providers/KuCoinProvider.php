<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:37
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\KuCoinConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class KuCoinProvider extends FounderProvider
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

        foreach ($result->data as $supplierTicker) {
            if(!isset($supplierTicker->buy)){
                continue;
            }
            $currency = $supplierTicker->coinType . "/" . $supplierTicker->coinTypePair;
            if(strpos($currency, "USDT") !== false){
                $ticker = new TickerEntity();
                $ticker->setAsk((float)$supplierTicker->sell);
                $ticker->setBid((float)$supplierTicker->buy);
                $ticker->setVolume((float)$supplierTicker->vol);
                $ticker->setValue((float)$supplierTicker->lastDealPrice);
                $ticker->setExchangeId($this->getExchangeId());
                $ticker->setCurrency(str_replace("USDT", "USD", $currency));
                $response[] = $ticker;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->sell);
            $ticker->setBid($supplierTicker->buy);
            $ticker->setVolume($supplierTicker->vol);
            $ticker->setValue($supplierTicker->lastDealPrice);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 42;
    }

    protected function getConnectorClass()
    {
        return new KuCoinConnector();
    }

    /**
     * @return KuCoinConnector
     */
    protected function getConnector()
    {
        /** @var KuCoinConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}