<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:14
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\ExmoConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class ExmoProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 29;
    }

    protected function getConnectorClass()
    {
        return new ExmoConnector();
    }

    /**
     * @return ExmoConnector
     */
    protected function getConnector()
    {
        /** @var ExmoConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}