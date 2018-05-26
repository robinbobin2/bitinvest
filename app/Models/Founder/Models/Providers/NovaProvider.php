<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:51
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\NovaConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class NovaProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 49;
    }

    protected function getConnectorClass()
    {
        return new NovaConnector();
    }

    /**
     * @return NovaConnector
     */
    protected function getConnector()
    {
        /** @var NovaConnector $connector */
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

    /**
     * @param Request $request
     * @return TickerEntity[]
     */
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        foreach ($result->markets as $currency => $supplierTicker){
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->ask);
            $ticker->setBid($supplierTicker->bid);
            $ticker->setVolume($supplierTicker->volume24h);
            $ticker->setValue($supplierTicker->last_price);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(str_replace("_", "/", $supplierTicker->marketname));
            $response[] = $ticker;
        }

        return $response;
    }
}