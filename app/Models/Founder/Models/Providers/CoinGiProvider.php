<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 21:37
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\CoinGiConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CoinGiProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 23;
    }

    protected function getConnectorClass()
    {
        return new CoinGiConnector();
    }

    /**
     * @return CoinGiConnector
     */
    protected function getConnector()
    {
        /** @var CoinGiConnector $connector */
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

        foreach ($response as $value) {
            $ticker = new TickerEntity();
            $ticker->setAsk($value->lowestAsk);
            $ticker->setBid($value->highestBid);
            $ticker->setVolume($value->baseVolume);
            $ticker->setValue($value->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper($value->currencyPair->base) . "/" . strtoupper($value->currencyPair->counter));
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