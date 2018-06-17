<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:39
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\LakeBTCConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class LakeBTCProvider extends FounderProvider
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
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->ask);
            $ticker->setBid($supplierTicker->bid);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->getCurrency($currency));
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 44;
    }

    protected function getConnectorClass()
    {
        return new LakeBTCConnector();
    }

    /**
     * @return LakeBTCConnector
     */
    protected function getConnector()
    {
        /** @var LakeBTCConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function getCurrency($currency)
    {
        return strtoupper(substr($currency, 0,3) . "/" . substr($currency, 3));
    }

    public function getType()
    {
        return self::RAPID_RATE;
    }
}