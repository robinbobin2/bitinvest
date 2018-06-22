<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 18:03
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\ZBConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class ZbProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        foreach ($result as $currency => $supplierTicker) {
            if(!isset($supplierTicker->ticker)){
                continue;
            }
            $supplierTicker = $supplierTicker->ticker;
            $currency = strtoupper(str_replace("_", "/", $currency));
            if(strpos($currency, "USDT") !== false){
                $currency = str_replace("USDT", "USD", $currency);
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->sell);
            $ticker->setBid($supplierTicker->buy);
            $ticker->setVolume($supplierTicker->vol);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 62;
    }

    protected function getConnectorClass()
    {
        return new ZBConnector();
    }

    /**
     * @return ZBConnector
     */
    protected function getConnector()
    {
        /** @var ZBConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    /**
     * @param TickerEntity[] $response
     */
    public function save($response)
    {
        foreach ($response as $ticker) {
            if ($this->isCrypto()) {
                $pos = strpos($ticker->getCurrency(), "USDT");
                if ($pos !== false) {
                    $newRate = clone($ticker);
                    $newCurrency = str_replace("USDT", "USD", $newRate->getCurrency());
                    $newRate->setCurrency($newCurrency);
                    $exchange = new ExchangeRate();
                    $exchange->value = $newRate->getValue();
                    $exchange->volume = $newRate->getVolume();
                    $exchange->bid = $newRate->getBid();
                    $exchange->ask = $newRate->getAsk();
                    $exchange->currency = $newRate->getCurrency();
                    $exchange->exchangeId = $this->getExchangeId();
                    $exchange->createTime = time();
                    try {
                        $exchange->save();
                    } catch (\Exception $e) {

                    }
                }
            }
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

    public function isCrypto()
    {
        return true;
    }
}