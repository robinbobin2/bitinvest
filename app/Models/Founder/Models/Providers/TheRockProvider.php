<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:57
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\TheRockConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class TheRockProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 56;
    }

    protected function getConnectorClass()
    {
        return new TheRockConnector();
    }

    /**
     * @return TheRockConnector
     */
    protected function getConnector()
    {
        /** @var TheRockConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}