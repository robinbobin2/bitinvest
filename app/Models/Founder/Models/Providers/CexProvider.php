<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:48
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\CexConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CexProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 18;
    }

    protected function getConnectorClass()
    {
        return new CexConnector();
    }

    /**
     * @return CexConnector
     */
    protected function getConnector()
    {
        /** @var CexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
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
        foreach ($response->data as $supplierTicker){
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->ask);
            $ticker->setBid($supplierTicker->bid);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper(str_replace(":", "/", $supplierTicker->pair)));
            $result[] = $ticker;
        }

        return $result;
    }

    public function getType()
    {
        return self::RAPID_RATE;
    }
}