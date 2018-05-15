<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 18:01
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\XBTCEConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class XBTCEProvider extends FounderProvider
{
    public function search(Request $request)
    {
//        $response = $this->getConnector()->fetch_tickers();
        return [];
    }

    public function getExchangeId()
    {
        return 60;
    }

    protected function getConnectorClass()
    {
        return new XBTCEConnector();
    }

    /**
     * @return XBTCEConnector
     */
    protected function getConnector()
    {
        /** @var XBTCEConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}