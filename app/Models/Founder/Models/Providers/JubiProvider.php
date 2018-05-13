<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:36
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\JubiConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class JubiProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 40;
    }

    protected function getConnectorClass()
    {
        return new JubiConnector();
    }

    /**
     * @return JubiConnector
     */
    protected function getConnector()
    {
        /** @var JubiConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}