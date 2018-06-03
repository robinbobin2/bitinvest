<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 30.05.2018
 * Time: 16:50
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\VebitcoinConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class VebitcoinProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 72;
    }

    protected function getConnectorClass()
    {
        return new VebitcoinConnector();
    }

    /**
     * @return VebitcoinConnector
     */
    protected function getConnector()
    {
        /** @var VebitcoinConnector $connector */
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
            if(!isset($value->Ask)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($value->Ask);
            $ticker->setBid($value->Bid);
            $ticker->setVolume($value->Volume);
            $ticker->setValue($value->Last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(substr($value->Code, 0,3) . "/TRY");
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