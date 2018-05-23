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
            $supplierTicker = $supplierTicker->ticker;
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->sell / 1000);
            $ticker->setBid($supplierTicker->buy / 1000);
            $ticker->setVolume($supplierTicker->vol / 1000);
            $ticker->setValue($supplierTicker->last / 1000);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper(str_replace("_", "/", $currency)));
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
                    $newRate = $ticker;
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