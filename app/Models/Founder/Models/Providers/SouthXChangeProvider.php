<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:56
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\SouthXChangeConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class SouthXChangeProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 55;
    }

    protected function getConnectorClass()
    {
        return new SouthXChangeConnector();
    }

    /**
     * @return SouthXChangeConnector
     */
    protected function getConnector()
    {
        /** @var SouthXChangeConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}