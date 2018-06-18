<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:31
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\GDaxConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class GDaxProvider extends FounderProvider
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
            if(!isset($supplierTicker->ask)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->ask);
            $ticker->setBid($supplierTicker->bid);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->price);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(str_replace("-", "/", $currency));
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 34;
    }

    protected function getConnectorClass()
    {
        return new GDaxConnector();
    }

    /**
     * @return GDaxConnector
     */
    protected function getConnector()
    {
        /** @var GDaxConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}