<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 11:44
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BitzConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BitzProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 12;
    }

    protected function getConnectorClass()
    {
        return new BitzConnector();
    }

    /**
     * @return BitzConnector
     */
    protected function getConnector()
    {
        /** @var BitzConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}