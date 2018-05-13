<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:40
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\LiveCoinConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class LiveCoinProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 45;
    }

    protected function getConnectorClass()
    {
        return new LiveCoinConnector();
    }

    /**
     * @return LiveCoinConnector
     */
    protected function getConnector()
    {
        /** @var LiveCoinConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}