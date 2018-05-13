<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:52
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\OkCoinUSDConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class OkCoinProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 49;
    }

    protected function getConnectorClass()
    {
        return new OkCoinUSDConnector();
    }

    /**
     * @return OkCoinUSDConnector
     */
    protected function getConnector()
    {
        /** @var OkCoinUSDConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}