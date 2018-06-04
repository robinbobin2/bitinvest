<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:08
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\CoinnestConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CoinnestProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 27;
    }

    protected function getConnectorClass()
    {
        return new CoinnestConnector();
    }

    /**
     * @return CoinnestConnector
     */
    protected function getConnector()
    {
        /** @var CoinnestConnector $connector */
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
            if(!$this->validate(strtoupper($currency) . "/" . "USD")){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($value->buy / 1000);
            $ticker->setBid($value->sell / 1000);
            $ticker->setVolume($value->vol);
            $ticker->setValue($value->last / 1000);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper($currency) . "/" . "USD");
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