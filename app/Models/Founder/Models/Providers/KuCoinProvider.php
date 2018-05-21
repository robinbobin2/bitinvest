<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:37
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\KuCoinConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class KuCoinProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 42;
    }

    protected function getConnectorClass()
    {
        return new KuCoinConnector();
    }

    /**
     * @return KuCoinConnector
     */
    protected function getConnector()
    {
        /** @var KuCoinConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}