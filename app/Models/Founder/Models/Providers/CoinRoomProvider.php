<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 02.06.2018
 * Time: 20:26
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\CoinRoomConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CoinRoomProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 77;
    }

    protected function getConnectorClass()
    {
        return new CoinRoomConnector();
    }

    /**
     * @return CoinRoomConnector
     */
    protected function getConnector()
    {
        /** @var CoinRoomConnector $connector */
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
            $ticker->setAsk($value->ask);
            $ticker->setBid($value->bid);
            $ticker->setVolume($value->volume);
            $ticker->setValue($value->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
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