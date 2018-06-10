<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:22
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\BTCBoxConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BTCBoxProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 14;
    }

    protected function getConnectorClass()
    {
        return new BTCBoxConnector();
    }

    /**
     * @return BTCBoxConnector
     */
    protected function getConnector()
    {
        /** @var BTCBoxConnector $connector */
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

    /**
     * @param Request $request
     * @return TickerEntity[]
     */
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        foreach ($result as $currency => $supplierTicker){
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->sell/100);
            $ticker->setBid($supplierTicker->buy/100);
            $ticker->setVolume($supplierTicker->vol);
            $ticker->setValue($supplierTicker->last/100);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper($currency) . "/USD");
            $ticker->setType($this->getType());
            $response[] = $ticker;
        }

        return $response;
    }

    public function getType()
    {
        return self::RAPID_RATE;
    }
}