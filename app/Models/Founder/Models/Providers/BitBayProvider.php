<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 11:04
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\Exchange;
use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\BitBayConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\BitBay;

class BitBayProvider extends FounderProvider
{
    /**
     * @return BitBayConnector
     */
    protected function getConnector()
    {
        /** @var BitBayConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function getExchangeId()
    {
        return 7;
    }

    protected function getConnectorClass()
    {
        return new BitBayConnector();
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

    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }
        foreach ($response as $currency => $supplierTicker){
            if(!isset($supplierTicker->ask)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->ask);
            $ticker->setBid($supplierTicker->bid);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $result[] = $ticker;
        }

        return $result;
    }

}