<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 11:04
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\Exchange;
use App\Models\Founder\Models\Connectors\BitBayConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\BitBay;

class BitBayProvider extends FounderProvider
{
    /**
     * @return BitBayConnector
     */
    protected function getConnector()
    {
        /** @var BitBayConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 7;
    }

    protected function getConnectorClass()
    {
        return new BitBayConnector();
    }
}