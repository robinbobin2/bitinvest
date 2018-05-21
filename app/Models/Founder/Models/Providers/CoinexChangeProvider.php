<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 21:31
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CoinexChangeConnector;
use App\Models\Founder\Models\FounderProvider;

class CoinexChangeProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 22;
    }

    protected function getConnectorClass()
    {
        return new CoinexChangeConnector();
    }

    /**
     * @return CoinexChangeConnector
     */
    protected function getConnector()
    {
        /** @var CoinexChangeConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}