<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 21:27
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CoinexConnector;
use App\Models\Founder\Models\FounderProvider;

class CoinexProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 21;
    }

    protected function getConnectorClass()
    {
        return new CoinexConnector();
    }

    /**
     * @return CoinexConnector
     */
    protected function getConnector()
    {
        /** @var CoinexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}