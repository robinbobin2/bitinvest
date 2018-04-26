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

    /**
     * @return Bit2CConnector
     */
    protected function getConnector()
    {
        /** @var Bit2CConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 5;
    }

    protected function getConnectorClass()
    {
        return new Bit2CConnector();
    }
}