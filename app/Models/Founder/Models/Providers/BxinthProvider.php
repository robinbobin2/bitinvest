<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:39
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BxinthConnector;
use App\Models\Founder\Models\FounderProvider;

class BxinthProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 16;
    }

    protected function getConnectorClass()
    {
        return new BxinthConnector();
    }

    /**
     * @return BxinthConnector
     */
    protected function getConnector()
    {
        /** @var BxinthConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}