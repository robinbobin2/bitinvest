<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 21:20
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CoinEggConnector;
use App\Models\Founder\Models\FounderProvider;

class CoinEggProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 20;
    }

    protected function getConnectorClass()
    {
        return new CoinEggConnector();
    }

    /**
     * @return CoinEggConnector
     */
    protected function getConnector()
    {
        /** @var CoinEggConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}