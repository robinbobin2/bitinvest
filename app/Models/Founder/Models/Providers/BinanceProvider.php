<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 10:10
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BinanceConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\Binance;
use App\Models\Founder\Models\Test\Exchange;

class BinanceProvider extends FounderProvider
{
    /**
     * @return BinanceConnector
     */
    protected function getConnector()
    {
        /** @var BinanceConnector $connector */
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
        return 4;
    }

    protected function getConnectorClass()
    {
        return new BinanceConnector();
    }

    public function isCrypto()
    {
        return true;
    }
}