<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 08.04.2018
 * Time: 16:39
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\Exchange;
use App\Models\Founder\Models\Connectors\HitBTCConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\HitBTC;

class HitBTCProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 2;
    }

    protected function getConnectorClass()
    {
        return new HitBTCConnector();
    }

    /**
     * @return HitBTCConnector
     */
    protected function getConnector()
    {
        /** @var HitBTCConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}