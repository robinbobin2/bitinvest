<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:24
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\FlowBTCConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class FlowBTCProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 31;
    }

    protected function getConnectorClass()
    {
        return new FlowBTCConnector();
    }

    /**
     * @return FlowBTCConnector
     */
    protected function getConnector()
    {
        /** @var FlowBTCConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}