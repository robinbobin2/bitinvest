<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:38
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\KunaConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class KunaProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 43;
    }

    protected function getConnectorClass()
    {
        return new KunaConnector();
    }

    /**
     * @return KunaConnector
     */
    protected function getConnector()
    {
        /** @var KunaConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}