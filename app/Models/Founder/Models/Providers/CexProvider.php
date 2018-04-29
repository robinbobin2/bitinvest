<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:48
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CexConnector;
use App\Models\Founder\Models\FounderProvider;

class CexProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 18;
    }

    protected function getConnectorClass()
    {
        return new CexConnector();
    }

    /**
     * @return CexConnector
     */
    protected function getConnector()
    {
        /** @var CexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}