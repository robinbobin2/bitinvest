<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:25
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\GateCoinConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class GateCoinProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 32;
    }

    protected function getConnectorClass()
    {
        return new GateCoinConnector();
    }

    /**
     * @return GateCoinConnector
     */
    protected function getConnector()
    {
        /** @var GateCoinConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}