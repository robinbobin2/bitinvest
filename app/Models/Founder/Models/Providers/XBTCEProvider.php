<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 18:01
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\XBTCEConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class XBTCEProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 60;
    }

    protected function getConnectorClass()
    {
        return new XBTCEConnector();
    }

    /**
     * @return XBTCEConnector
     */
    protected function getConnector()
    {
        /** @var XBTCEConnector $connector */
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

        foreach ($response->Data as $value) {
            $ticker = new TickerEntity();
            $ticker->setAsk($value->BestAsk);
            $ticker->setBid($value->BestBid);
            $ticker->setVolume($value->DailyTradedTotalVolume);
            $ticker->setValue(($value->DailyBestSellPrice + $value->DailyBestBuyPrice) / 2);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(substr($value->Symbol, 0,3) . "/" . substr($value->Symbol, 3));
            $result[] = $ticker;
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