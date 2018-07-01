<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:24
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\FlowBTCConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class FlowBTCProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        foreach ($response as $currency => $value) {
            $value = $value->data;
            if (!isset($value->BestOffer)) {
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($value->BestOffer);
            $ticker->setBid($value->BestBid);
            $ticker->setVolume($value->Volume);
            $ticker->setValue($value->SessionOpen);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency . "/BRL");
            $result[] = $ticker;
        }

        return $result;
    }

    public function getExchangeId()
    {
        return 31;
    }

    protected function getConnectorClass()
    {
        return new FlowBTCConnector();
    }

    /**
     * @return FlowBTCConnector
     */
    protected function getConnector()
    {
        /** @var FlowBTCConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}