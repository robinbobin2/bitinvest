<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 18:02
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\ZaifConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class ZaifProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        foreach ($result as $currency => $supplierTicker) {
            if(!isset($supplierTicker->ask)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->ask);
            $ticker->setBid($supplierTicker->bid);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $response[] = $ticker;
        }

        return $response;
    }
    public function getExchangeId()
    {
        return 61;
    }

    protected function getConnectorClass()
    {
        return new ZaifConnector();
    }

    /**
     * @return ZaifConnector
     */
    protected function getConnector()
    {
        /** @var ZaifConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}