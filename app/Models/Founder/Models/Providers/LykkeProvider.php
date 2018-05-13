<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:50
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\LykkeConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class LykkeProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 48;
    }

    protected function getConnectorClass()
    {
        return new LykkeConnector();
    }

    /**
     * @return LykkeConnector
     */
    protected function getConnector()
    {
        /** @var LykkeConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}