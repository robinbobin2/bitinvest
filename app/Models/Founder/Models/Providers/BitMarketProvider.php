<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 26.04.2018
 * Time: 17:29
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BitMarketConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BitMarketProvider extends FounderProvider
{

    protected function getConnectorClass()
    {
        return new BitMarketConnector();
    }

    public function search(Request $request)
    {
        return [];
    }

    /**
     * @return BitMarketConnector
     */
    protected function getConnector()
    {
        /** @var BitMarketConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function getExchangeId()
    {
        return 9;
    }
}