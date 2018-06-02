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
    /**
     * @return BitFinexConnector
     */
    protected function getConnector()
    {
        /** @var BitFinexConnector $connector */
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
        return 8;
    }

    protected function getConnectorClass()
    {
        return new BitFinexConnector();
    }

    /**
     * @return int
     */
    public function getCooldownTime()
    {
        return 5;
    }
}