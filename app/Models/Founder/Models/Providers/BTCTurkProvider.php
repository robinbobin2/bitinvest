<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:31
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BTCTurkConnector;
use App\Models\Founder\Models\FounderProvider;

class BTCTurkProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 15;
    }

    protected function getConnectorClass()
    {
        return new BTCTurkConnector();
    }

    /**
     * @return BTCTurkConnector
     */
    protected function getConnector()
    {
        /** @var BTCTurkConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}