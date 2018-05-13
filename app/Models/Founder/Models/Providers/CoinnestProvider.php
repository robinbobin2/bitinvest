<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:08
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CoinnestConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CoinnestProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 27;
    }

    protected function getConnectorClass()
    {
        return new CoinnestConnector();
    }

    /**
     * @return CoinnestConnector
     */
    protected function getConnector()
    {
        /** @var CoinnestConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}