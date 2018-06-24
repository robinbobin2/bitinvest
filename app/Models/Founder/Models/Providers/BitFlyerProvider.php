<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 23.06.2018
 * Time: 1:30
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BitFlyerConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BitFlyerProvider extends FounderProvider
{
    /**
     * @return BitFlyerConnector
     */
    protected function getConnector()
    {
        /** @var BitFlyerConnector $connector */
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
            if(!isset($supplierTicker->best_ask)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->best_ask / $supplierTicker->ltp);
            $ticker->setBid($supplierTicker->best_bid / $supplierTicker->ltp);
            $ticker->setVolume($supplierTicker->volume_by_product);
            $ticker->setValue($supplierTicker->ltp);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(str_replace("_", "/", $currency));
            $response[] = $ticker;
        }
        return $response;
    }

    public function getExchangeId()
    {
        return 84;
    }

    protected function getConnectorClass()
    {
        return new BitFlyerConnector();
    }
}