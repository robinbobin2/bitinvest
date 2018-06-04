<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 22.05.2018
 * Time: 23:57
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\CoinoneConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CoinoneProvider extends FounderProvider
{
    protected function getConnectorClass()
    {
        return new CoinoneConnector();
    }

    public function getExchangeId()
    {
        return 66;
    }

    /**
     * @param TickerEntity[] $response
     */
    public function save($response)
    {
        foreach ($response as $ticker) {
            $exchange = new ExchangeRate();
            $exchange->value = $ticker->getValue();
            $exchange->volume = $ticker->getVolume()/10000000;
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

        foreach ($response as $pair => $value) {
            if(!isset($value->volume)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk((float)$value->low / 1000);
            $ticker->setBid((float)$value->high / 1000);
            $ticker->setVolume((float)$value->volume * 10000000);
            $ticker->setValue((float)$value->last / 1000);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper($pair) . "/USD");
            $result[] = $ticker;
        }

        return $result;
    }

    /**
     * @return CoinoneConnector
     */
    protected function getConnector()
    {
        /** @var CoinoneConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}