<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:01
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\AllCoinConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class AllCoinProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 25;
    }

    protected function getConnectorClass()
    {
        return new AllCoinConnector();
    }

    /**
     * @return AllCoinConnector
     */
    protected function getConnector()
    {
        /** @var AllCoinConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}