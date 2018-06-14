<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:37
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\KrakenConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class KrakenProvider extends FounderProvider
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
            if(!isset($supplierTicker->result)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->a[0]);
            $ticker->setBid($supplierTicker->b[0]);
            $ticker->setVolume($supplierTicker->v[0]);
            $ticker->setValue($supplierTicker->p[0]);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 41;
    }

    protected function getConnectorClass()
    {
        return new KrakenConnector();
    }

    /**
     * @return KrakenConnector
     */
    protected function getConnector()
    {
        /** @var KrakenConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}