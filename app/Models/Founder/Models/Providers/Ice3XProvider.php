<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:35
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\Ice3XConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class Ice3XProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 38;
    }

    protected function getConnectorClass()
    {
        return new Ice3XConnector();
    }

    /**
     * @return Ice3XConnector
     */
    protected function getConnector()
    {
        /** @var Ice3XConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}