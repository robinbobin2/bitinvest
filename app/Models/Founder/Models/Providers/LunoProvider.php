<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:49
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\LunoConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class LunoProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 46;
    }

    protected function getConnectorClass()
    {
        return new LunoConnector();
    }

    /**
     * @return LunoConnector
     */
    protected function getConnector()
    {
        /** @var LunoConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}