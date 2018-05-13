<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:58
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\TideBitConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class TideBitProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 57;
    }

    protected function getConnectorClass()
    {
        return new TideBitConnector();
    }

    /**
     * @return TideBitConnector
     */
    protected function getConnector()
    {
        /** @var TideBitConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}