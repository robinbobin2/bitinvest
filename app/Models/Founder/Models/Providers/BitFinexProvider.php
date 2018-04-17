<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 11:15
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\Exchange;
use App\Models\Founder\Models\Connectors\BitFinexConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\BitFinex;

class BitFinexProvider extends FounderProvider
{
    protected function getConnector()
    {
        return new BitFinexConnector();
    }

    public function search(Request $request)
    {
        $market = new BitFinex();
        $response = $market->fetch_ticker($this->getDefaultRelation());
        return $response;
    }

    public function getExchangeId()
    {
        return 8;
    }
}