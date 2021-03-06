<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:14
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CoinTigerConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CoinTigerProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 28;
    }

    protected function getConnectorClass()
    {
        return new CoinTigerConnector();
    }

    /**
     * @return CoinTigerConnector
     */
    protected function getConnector()
    {
        /** @var CoinTigerConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}