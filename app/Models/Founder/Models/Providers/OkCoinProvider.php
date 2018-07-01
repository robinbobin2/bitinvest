<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:52
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\OkCoinUSDConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class OkCoinProvider extends FounderProvider
{
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
            if(!isset($supplierTicker->ticker)){
                continue;
            }
            $supplierTicker = $supplierTicker->ticker;
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->buy);
            $ticker->setBid($supplierTicker->sell);
            $ticker->setVolume($supplierTicker->vol);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper(str_replace("_", "/", $currency)));
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 50;
    }

    protected function getConnectorClass()
    {
        return new OkCoinUSDConnector();
    }

    /**
     * @return OkCoinUSDConnector
     */
    protected function getConnector()
    {
        /** @var OkCoinUSDConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}