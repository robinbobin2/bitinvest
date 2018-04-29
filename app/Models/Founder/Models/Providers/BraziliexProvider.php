<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 11:52
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BraziliexConnector;
use App\Models\Founder\Models\FounderProvider;

class BraziliexProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 13;
    }

    protected function getConnectorClass()
    {
        return new BraziliexConnector();
    }

    /**
     * @return BraziliexConnector
     */
    protected function getConnector()
    {
        /** @var BraziliexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}