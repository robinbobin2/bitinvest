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

    /**
     * @param TickerEntity[] $response
     */
    public function save($response)
    {
        sleep(1);
        foreach ($response as $ticker) {
            $exchange = new ExchangeRate();
            $exchange->value = $ticker->getValue();
            $exchange->volume = $ticker->getVolume();
            $exchange->bid = $ticker->getBid();
            $exchange->ask = $ticker->getAsk();
            $exchange->currency = $ticker->getCurrency();
            $exchange->exchangeId = $this->getExchangeId();
            $exchange->createTime = time();
            try {
                $exchange->save();
            } catch (\Exception $e) {

            }
        }
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
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->buy);
            $ticker->setBid($supplierTicker->sell);
            $ticker->setVolume($supplierTicker->vol);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper(str_replace("_", "/", $currency)));
            $result[] = $ticker;
        }


        return $result;
    }
}