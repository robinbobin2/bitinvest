<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 11:04
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\Exchange;
use App\Models\Founder\Models\Connectors\BitBayConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\BitBay;

class BitBayProvider extends FounderProvider
{
    protected function getConnector()
    {
        return new BitBayConnector();
    }

    public function search(Request $request)
    {
        $market = new BitBay();
        $response = $market->fetch_ticker($this->getDefaultRelation());
        return $response;
    }

    public function getExchangeId()
    {
        return 7;
    }
}