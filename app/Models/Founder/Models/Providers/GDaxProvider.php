<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:31
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\GDaxConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class GDaxProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 34;
    }

    protected function getConnectorClass()
    {
        return new GDaxConnector();
    }

    /**
     * @return GDaxConnector
     */
    protected function getConnector()
    {
        /** @var GDaxConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}