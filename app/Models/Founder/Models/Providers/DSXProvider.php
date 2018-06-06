<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 02.06.2018
 * Time: 21:04
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\DSXConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class DSXProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 80;
    }

    protected function getConnectorClass()
    {
        return new DSXConnector();
    }

    /**
     * @return DSXConnector
     */
    protected function getConnector()
    {
        /** @var DSXConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        foreach ($response as $currency => $value) {
            if(!$value){
                continue;
            }
            foreach ($value as $supplierTicker){
                $ticker = new TickerEntity();
                $ticker->setAsk($supplierTicker->buy);
                $ticker->setBid($supplierTicker->sell);
                $ticker->setVolume($supplierTicker->vol);
                $ticker->setValue($supplierTicker->last);
                $ticker->setExchangeId($this->getExchangeId());
                $ticker->setCurrency($currency);
                $result[] = $ticker;
            }
        }

        return $result;
    }

    /**
     * @param TickerEntity[] $response
     */
    public function save($response)
    {
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
}