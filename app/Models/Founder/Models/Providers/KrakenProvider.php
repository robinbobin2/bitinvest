<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:37
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\KrakenConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class KrakenProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
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