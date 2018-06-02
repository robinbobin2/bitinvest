<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 02.06.2018
 * Time: 20:00
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\BitBnsConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BitBnsProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 75;
    }

    protected function getConnectorClass()
    {
        return new BitBnsConnector();
    }

    /**
     * @return BitBnsConnector
     */
    protected function getConnector()
    {
        /** @var BitBnsConnector $connector */
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
            $ticker = new TickerEntity();
            $ticker->setAsk($value->highest_buy_bid);
            $ticker->setBid($value->lowest_sell_bid);
            $ticker->setVolume($value->volume->volume);
            $ticker->setValue($value->last_traded_price);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper($currency) . "/" . "INR");
            $result[] = $ticker;
        }

        return $result;
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
}