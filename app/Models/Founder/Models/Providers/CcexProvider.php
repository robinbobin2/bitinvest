<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:42
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CcexConnector;
use App\Models\Founder\Models\FounderProvider;

class CcexProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 17;
    }

    protected function getConnectorClass()
    {
        return new CcexConnector();
    }

    /**
     * @return CcexConnector
     */
    protected function getConnector()
    {
        /** @var CcexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}