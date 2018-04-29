<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:22
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BTCBoxConnector;
use App\Models\Founder\Models\FounderProvider;

class BTCBoxProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 14;
    }

    protected function getConnectorClass()
    {
        return new BTCBoxConnector();
    }

    /**
     * @return BTCBoxConnector
     */
    protected function getConnector()
    {
        /** @var BTCBoxConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}