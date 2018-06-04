<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 28.05.2018
 * Time: 18:03
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\CryptopiaConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CryptopiaProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 67;
    }

    protected function getConnectorClass()
    {
        return new CryptopiaConnector();
    }

    /**
     * @return CryptopiaConnector
     */
    protected function getConnector()
    {
        /** @var CryptopiaConnector $connector */
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
            if(!$this->validate($value->Label)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($value->AskPrice);
            $ticker->setBid($value->BidPrice);
            $ticker->setVolume($value->Volume);
            $ticker->setValue($value->LastPrice);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($value->Label);
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