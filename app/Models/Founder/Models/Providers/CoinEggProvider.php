<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 21:20
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CoinEggConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CoinEggProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        foreach ($result as $currency => $supplierTicker) {
            if(!isset($supplierTicker->sell)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->sell);
            $ticker->setBid($supplierTicker->buy);
            $ticker->setVolume($supplierTicker->vol);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper($currency) . "/" . "USD");
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 20;
    }

    protected function getConnectorClass()
    {
        return new CoinEggConnector();
    }

    /**
     * @return CoinEggConnector
     */
    protected function getConnector()
    {
        /** @var CoinEggConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}