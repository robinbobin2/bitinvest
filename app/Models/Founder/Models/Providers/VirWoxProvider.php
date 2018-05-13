<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 18:00
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\VirwoxConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class VirWoxProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 59;
    }

    protected function getConnectorClass()
    {
        return new VirwoxConnector();
    }

    /**
     * @return VirwoxConnector
     */
    protected function getConnector()
    {
        /** @var VirwoxConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}