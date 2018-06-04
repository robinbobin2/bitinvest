<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 30.05.2018
 * Time: 16:44
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\RightBTCConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class RightBTCProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 71;
    }

    protected function getConnectorClass()
    {
        return new RightBTCConnector();
    }

    /**
     * @return RightBTCConnector
     */
    protected function getConnector()
    {
        /** @var RightBTCConnector $connector */
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

        foreach ($response->result as $value) {
            $ticker = new TickerEntity();
            $ticker->setAsk($value->buy);
            $ticker->setBid($value->sell);
            $ticker->setVolume($value->vol);
            $ticker->setValue($value->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(substr($value->market, 0,3) . "/" . substr($value->market, 3));
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