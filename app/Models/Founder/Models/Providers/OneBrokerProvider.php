<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:54
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\OneBrokerConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class OneBrokerProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 3;
    }

    protected function getConnectorClass()
    {
        return new OneBrokerConnector();
    }

    /**
     * @return OneBrokerConnector
     */
    protected function getConnector()
    {
        /** @var OneBrokerConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}