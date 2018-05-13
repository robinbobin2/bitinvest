<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:33
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\HuobiProConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class HuobiProProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 36;
    }

    protected function getConnectorClass()
    {
        return new HuobiProConnector();
    }

    /**
     * @return HuobiProConnector
     */
    protected function getConnector()
    {
        /** @var HuobiProConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}