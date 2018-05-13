<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:04
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CoinMarketCapConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CoinMarketCapProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 26;
    }

    protected function getConnectorClass()
    {
        return new CoinMarketCapConnector();
    }

    /**
     * @return CoinMarketCapConnector
     */
    protected function getConnector()
    {
        /** @var CoinMarketCapConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}