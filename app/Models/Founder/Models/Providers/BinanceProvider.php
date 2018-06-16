<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 10:10
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BinanceConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\Binance;
use App\Models\Founder\Models\Test\Exchange;

class BinanceProvider extends FounderProvider
{
    /**
     * @return BinanceConnector
     */
    protected function getConnector()
    {
        /** @var BinanceConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    /**
     * @param Request $request
     * @return TickerEntity[]
     */
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        if (!$result) {
            return $response;
        }

        foreach ($result as $currency => $supplierTicker) {
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->askPrice);
            $ticker->setBid($supplierTicker->bidPrice);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->lastPrice);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($supplierTicker->symbol);
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 4;
    }

    protected function getConnectorClass()
    {
        return new BinanceConnector();
    }

    public function isCrypto()
    {
        return true;
    }

    public function getCurrency($currency)
    {
        return strtoupper(substr($currency, 0,3) . "/" . substr($currency, 3));
    }
}