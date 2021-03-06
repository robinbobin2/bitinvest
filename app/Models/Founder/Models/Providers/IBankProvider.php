<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:34
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\IBankConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class IBankProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 37;
    }

    protected function getConnectorClass()
    {
        return new IBankConnector();
    }

    /**
     * @return IBankConnector
     */
    protected function getConnector()
    {
        /** @var IBankConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}