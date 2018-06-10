<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:39
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BxinthConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BxinthProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 16;
    }

    protected function getConnectorClass()
    {
        return new BxinthConnector();
    }

    /**
     * @return BxinthConnector
     */
    protected function getConnector()
    {
        /** @var BxinthConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        foreach ($response->data as $value) {
            $ticker = new TickerEntity();
            $ticker->setAsk($value->orderbook->asks->highbid);
            $ticker->setBid($value->orderbook->bids->highbid);
            $ticker->setVolume($value->volume_24hours);
            $ticker->setValue($value->last_price);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($value->primary_currency . "/" . $value->secondary_currency);
            $result[] = $ticker;
        }

        return $result;
    }
}