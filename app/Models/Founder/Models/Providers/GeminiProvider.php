<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:32
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\GeminiConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class GeminiProvider extends FounderProvider
{
    public function search(Request $request)
    {
        return [];
    }

    public function getExchangeId()
    {
        return 35;
    }

    protected function getConnectorClass()
    {
        return new GeminiConnector();
    }

    /**
     * @return GeminiConnector
     */
    protected function getConnector()
    {
        /** @var GeminiConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}