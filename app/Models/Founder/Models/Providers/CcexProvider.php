<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:42
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\CcexConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CcexProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 17;
    }

    protected function getConnectorClass()
    {
        return new CcexConnector();
    }

    /**
     * @return CcexConnector
     */
    protected function getConnector()
    {
        /** @var CcexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
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
        foreach ($response->result as $supplierTicker){
            if(!$this->validate($supplierTicker->MarketName)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->Ask);
            $ticker->setBid($supplierTicker->Bid);
            $ticker->setVolume($supplierTicker->BaseVolume);
            $ticker->setValue($supplierTicker->Last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper(str_replace("-", "/", $supplierTicker->MarketName)));
            $result[] = $ticker;
        }

        return $result;
    }
}