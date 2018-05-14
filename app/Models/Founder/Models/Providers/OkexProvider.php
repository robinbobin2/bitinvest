<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:53
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\OkexConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class OkexProvider extends FounderProvider
{
    public function search(Request $request)
    {
//        $response = $this->getConnector()->fetch_tickers();
        return [];
    }

    public function getExchangeId()
    {
        return 51;
    }

    protected function getConnectorClass()
    {
        return new OkexConnector();
    }

    /**
     * @return OkexConnector
     */
    protected function getConnector()
    {
        /** @var OkexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}