<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 21:37
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CoinGiConnector;
use App\Models\Founder\Models\FounderProvider;

class CoinGiProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 23;
    }

    protected function getConnectorClass()
    {
        return new CoinGiConnector();
    }

    /**
     * @return CoinGiConnector
     */
    protected function getConnector()
    {
        /** @var CoinGiConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}