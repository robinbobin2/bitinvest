<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 28.05.2018
 * Time: 18:30
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\SimexConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class SimexProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 68;
    }

    protected function getConnectorClass()
    {
        return new SimexConnector();
    }

    /**
     * @return SimexConnector
     */
    protected function getConnector()
    {
        /** @var SimexConnector $connector */
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

        foreach ($response->data as $value) {
            if(!$this->validate($value->base->name . "/" . $value->quote->name)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($value->buy_price);
            $ticker->setBid($value->sell_price);
            $ticker->setVolume($value->base_volume);
            $ticker->setValue($value->last_price);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($value->base->name . "/" . $value->quote->name);
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