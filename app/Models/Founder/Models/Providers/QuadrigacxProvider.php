<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 30.05.2018
 * Time: 18:27
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\QuadrigacxConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class QuadrigacxProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 74;
    }

    protected function getConnectorClass()
    {
        return new QuadrigacxConnector();
    }

    /**
     * @return QuadrigacxConnector
     */
    protected function getConnector()
    {
        /** @var QuadrigacxConnector $connector */
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
            if(!isset($value->ask)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($value->ask);
            $ticker->setBid($value->bid);
            $ticker->setVolume($value->volume);
            $ticker->setValue($value->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->getCurrency($currency));
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

    private function getCurrency($currency)
    {
        $array = explode("_", $currency);
        return strtoupper($array[0] . "/" . $array[1]);
    }

}