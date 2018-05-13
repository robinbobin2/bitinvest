<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:49
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\LuquiConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class LuquiProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 47;
    }

    protected function getConnectorClass()
    {
        return new LuquiConnector();
    }

    /**
     * @return LuquiConnector
     */
    protected function getConnector()
    {
        /** @var LuquiConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}