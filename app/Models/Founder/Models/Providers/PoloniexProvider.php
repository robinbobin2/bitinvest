<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 16:26
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\PoloniexConnector;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

/**
 * Class PoloniexProvider
 * @package App\Models\Founder\Models\Providers
 * @property PoloniexConnector $connector
 */
class PoloniexProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_ticker($this->getDefaultRelation());
        return $response;
    }

    protected function getConnectorClass()
    {
        return new PoloniexConnector();
    }

    /**
     * @return PoloniexConnector
     */
    protected function getConnector()
    {
        /** @var PoloniexConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function getExchangeId()
    {
        return 1;
    }

    public function orders()
    {
        $orders = $this->getConnector()->fetch_tickers();
        echo json_encode($orders);die();
    }
}