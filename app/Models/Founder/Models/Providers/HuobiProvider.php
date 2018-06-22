<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 23.06.2018
 * Time: 1:08
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\HuobiConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class HuobiProvider extends FounderProvider
{
    /**
     * @return HuobiConnector
     */
    protected function getConnector()
    {
        /** @var HuobiConnector $connector */
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

        foreach ($result->data as $supplierTicker) {
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->high);
            $ticker->setBid($supplierTicker->low);
            $ticker->setVolume($supplierTicker->vol);
            $ticker->setValue($supplierTicker->close);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->getCurrency($supplierTicker->symbol));
            $response[] = $ticker;
        }
        return $response;
    }

    public function getExchangeId()
    {
        return 82;
    }

    protected function getConnectorClass()
    {
        return new HuobiConnector();
    }

    public function getCurrency($currency)
    {
        return strtoupper(substr($currency, 0,3) . "/" . substr($currency, 3));
    }
}