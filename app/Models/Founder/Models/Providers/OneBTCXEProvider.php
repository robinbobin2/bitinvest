<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:55
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\OneBTCXEConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class OneBTCXEProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        $response = $response->stats;
        $ticker = new TickerEntity();
        $ticker->setAsk((float)$response->ask);
        $ticker->setBid((float)$response->bid);
        $ticker->setVolume((float)$response->trade_volume);
        $ticker->setValue((float)$response->last_price);
        $ticker->setExchangeId($this->getExchangeId());
        $ticker->setCurrency("BTC/USD");
        $result[] = $ticker;

        return $result;
    }

    public function getExchangeId()
    {
        return 53;
    }

    protected function getConnectorClass()
    {
        return new OneBTCXEConnector();
    }

    /**
     * @return OneBTCXEConnector
     */
    protected function getConnector()
    {
        /** @var OneBTCXEConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function getType()
    {
        return self::RAPID_RATE;
    }
}