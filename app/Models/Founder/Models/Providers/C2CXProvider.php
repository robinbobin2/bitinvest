<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 28.05.2018
 * Time: 18:55
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\C2CXConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class C2CXProvider extends FounderProvider
{
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

    /**
     * @param Request $request
     * @return TickerEntity[]
     */
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        foreach ($result as $currency => $supplierTicker){
            if(!isset($supplierTicker->data)){
                continue;
            }
            $supplierTicker = $supplierTicker->data;
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->buy);
            $ticker->setBid($supplierTicker->sell);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(str_replace("_", "/", $currency));
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 69;
    }

    protected function getConnectorClass()
    {
        return new C2CXConnector();
    }

    /**
     * @return C2CXConnector
     */
    protected function getConnector()
    {
        /** @var C2CXConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}