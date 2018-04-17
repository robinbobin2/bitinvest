<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 10:53
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\Exchange;
use App\Models\Founder\Models\Connectors\Bit2CConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\Bit2C;

class Bit2CProvider extends FounderProvider
{

    protected function getConnector()
    {
        return new Bit2CConnector();
    }

    public function search(Request $request)
    {
        $market = new Bit2C();
        $response = $market->fetch_ticker($this->getDefaultRelation());
        return $response;
    }

    public function getExchangeId()
    {
        return 5;
    }
}