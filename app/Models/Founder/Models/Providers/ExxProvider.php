<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:15
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\ExxConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class ExxProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 30;
    }

    protected function getConnectorClass()
    {
        return new ExxConnector();
    }

    /**
     * @return ExxConnector
     */
    protected function getConnector()
    {
        /** @var ExxConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}