<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:56
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\QryptosConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class QryptosProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function getExchangeId()
    {
        return 54;
    }

    protected function getConnectorClass()
    {
        return new QryptosConnector();
    }

    /**
     * @return QryptosConnector
     */
    protected function getConnector()
    {
        /** @var QryptosConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}