<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 18:03
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\ZBConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class ZbProvider extends FounderProvider
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
        return new ZBConnector();
    }

    /**
     * @return ZBConnector
     */
    protected function getConnector()
    {
        /** @var ZBConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}