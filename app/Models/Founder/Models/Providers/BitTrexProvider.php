<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 11:36
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BitTrexConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BitTrexProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 11;
    }

    protected function getConnectorClass()
    {
        return new BitTrexConnector();
    }

    /**
     * @return BitTrexConnector
     */
    protected function getConnector()
    {
        /** @var BitTrexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}