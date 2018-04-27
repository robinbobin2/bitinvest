<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 26.04.2018
 * Time: 17:53
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BitMexConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BitMexProvider extends FounderProvider
{
    /**
     * @return BitMexConnector
     */
    protected function getConnector()
    {
        /** @var BitMexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    protected function getConnectorClass()
    {
        return new BitMexConnector();
    }

    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 10;
    }
}