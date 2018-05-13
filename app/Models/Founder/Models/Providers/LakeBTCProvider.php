<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:39
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\LakeBTCConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class LakeBTCProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
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
}