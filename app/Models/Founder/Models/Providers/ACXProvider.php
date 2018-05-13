<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:00
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\ACXConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class ACXProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 24;
    }

    protected function getConnectorClass()
    {
        return new ACXConnector();
    }

    /**
     * @return ACXConnector
     */
    protected function getConnector()
    {
        /** @var ACXConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}