<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 18:02
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\ZaifConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class ZaifProvider extends FounderProvider
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
        return new ZaifConnector();
    }

    /**
     * @return ZaifConnector
     */
    protected function getConnector()
    {
        /** @var ZaifConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}