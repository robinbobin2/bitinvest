<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:59
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\VaultoroConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class VaultoroProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 58;
    }

    protected function getConnectorClass()
    {
        return new VaultoroConnector();
    }

    /**
     * @return VaultoroConnector
     */
    protected function getConnector()
    {
        /** @var VaultoroConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}