<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 11:36
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BitTrexConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BitTrexProvider extends FounderProvider
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

        foreach ($result->result as $supplierTicker) {
            $currency = str_replace("-", "/", $supplierTicker->MarketName);
            if(strpos($currency, "USDT") !== false){
                $currency = str_replace("USDT", "USD", $currency);
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->Ask);
            $ticker->setBid($supplierTicker->Bid);
            $ticker->setVolume($supplierTicker->BaseVolume);
            $ticker->setValue($supplierTicker->Last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 11;
    }

    protected function getConnectorClass()
    {
        return new BitTrexConnector();
    }

    /**
     * @return BitTrexConnector
     */
    protected function getConnector()
    {
        /** @var BitTrexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}