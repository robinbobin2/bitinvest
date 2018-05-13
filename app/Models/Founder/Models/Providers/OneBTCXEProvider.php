<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:55
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\OneBTCXEConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class OneBTCXEProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 53;
    }

    protected function getConnectorClass()
    {
        return new OneBTCXEConnector();
    }

    /**
     * @return OneBTCXEConnector
     */
    protected function getConnector()
    {
        /** @var OneBTCXEConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}