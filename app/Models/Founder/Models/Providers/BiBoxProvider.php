<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 1:36
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BiBoxConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BiBoxProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 3;
    }

    protected function getConnectorClass()
    {
        return new BiBoxConnector();
    }

    /**
     * @return BiBoxConnector
     */
    protected function getConnector()
    {
        /** @var BiBoxConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }
}