<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:51
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\NovaConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class NovaProvider extends FounderProvider
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
        return new NovaConnector();
    }

    /**
     * @return NovaConnector
     */
    protected function getConnector()
    {
        /** @var NovaConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}