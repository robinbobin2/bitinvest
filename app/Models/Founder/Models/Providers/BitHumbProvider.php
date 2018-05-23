<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 22.05.2018
 * Time: 10:39
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\BitHumbConnector;
use App\Models\Founder\Models\Custom\SupplierLog;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BitHumbProvider extends FounderProvider
{

    protected function getConnectorClass()
    {
        return new BitHumbConnector();
    }

    public function getExchangeId()
    {
        return 63;
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

    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        foreach ($response->data as $pair => $value) {
            if(!isset($value->sell_price)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($value->sell_price);
            $ticker->setBid($value->buy_price);
            $ticker->setVolume($value->volume_1day);
            $ticker->setValue($value->average_price);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($pair . "/USD");
            $result[] = $ticker;
        }

        return $result;
    }

    /**
     * @return BitHumbConnector
     */
    protected function getConnector()
    {
        /** @var BitHumbConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}