<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:36
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\IndependentReserveConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class IndependentReserveProvider extends FounderProvider
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
        return new IndependentReserveConnector();
    }

    /**
     * @return IndependentReserveConnector
     */
    protected function getConnector()
    {
        /** @var IndependentReserveConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}