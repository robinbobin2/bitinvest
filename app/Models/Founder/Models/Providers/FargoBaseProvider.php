<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 02.06.2018
 * Time: 20:18
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\FargoBaseConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class FargoBaseProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 76;
    }

    protected function getConnectorClass()
    {
        return new FargoBaseConnector();
    }

    /**
     * @return FargoBaseConnector
     */
    protected function getConnector()
    {
        /** @var FargoBaseConnector $connector */
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

        foreach ($response as $currency => $value) {
            $ticker = new TickerEntity();
            $ticker->setAsk(0);
            $ticker->setBid(0);
            $ticker->setVolume($value->volume24hours);
            $ticker->setValue($value->lastPrice);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(str_replace("_", "/", $currency));
            $result[] = $ticker;
        }

        return $result;
    }
}