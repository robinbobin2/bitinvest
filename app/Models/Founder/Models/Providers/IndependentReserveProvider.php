<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:36
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\IndependentReserveConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class IndependentReserveProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        foreach ($response as $currency => $value) {
            if(!isset($value->result)){
                continue;
            }
            $value = $value->result;
            $ticker = new TickerEntity();
            $ticker->setAsk($value->CurrentLowestOfferPrice);
            $ticker->setBid($value->CurrentHighestBidPrice);
            $ticker->setVolume($value->DayVolumeXbt);
            $ticker->setValue($value->LastPrice);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $result[] = $ticker;
        }

        return $result;
    }

    public function getExchangeId()
    {
        return 3;
    }

    protected function getConnectorClass()
    {
        return new IndependentReserveConnector();
    }

    /**
     * @return IndependentReserveConnector
     */
    protected function getConnector()
    {
        /** @var IndependentReserveConnector $connector */
        $connector = parent::getConnector();
        return $connector;
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