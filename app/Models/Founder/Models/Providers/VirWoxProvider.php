<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 18:00
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\VirwoxConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class VirWoxProvider extends FounderProvider
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
            if (!isset($supplierTicker->result->priceVolumeList)) {
                continue;
            }
            $supplierTicker = $supplierTicker->result->priceVolumeList;
            foreach ($supplierTicker as $newTicker) {
                if(!isset($newTicker->high)){
                    continue;
                }
                $ticker = new TickerEntity();
                $ticker->setAsk($newTicker->high);
                $ticker->setBid($newTicker->low);
                $ticker->setVolume($newTicker->longVolume);
                $ticker->setValue($newTicker->open);
                $ticker->setExchangeId($this->getExchangeId());
                $ticker->setCurrency($currency);
                $response[] = $ticker;
            }
        }
        return $response;
    }

    public function getExchangeId()
    {
        return 59;
    }

    protected function getConnectorClass()
    {
        return new VirwoxConnector();
    }

    /**
     * @return VirwoxConnector
     */
    protected function getConnector()
    {
        /** @var VirwoxConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}