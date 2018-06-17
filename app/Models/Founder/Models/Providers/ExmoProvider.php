<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:14
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\ExmoConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class ExmoProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 29;
    }

    protected function getConnectorClass()
    {
        return new ExmoConnector();
    }

    /**
     * @return ExmoConnector
     */
    protected function getConnector()
    {
        /** @var ExmoConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }

    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        foreach ($response as $currency => $value) {
            $currency = str_replace("_", "/", $currency);
            if(strpos($currency, "USDT") !== false){
                $ticker = new TickerEntity();
                $ticker->setAsk((float)$value->buy_price);
                $ticker->setBid((float)$value->sell_price);
                $ticker->setVolume((float)$value->vol);
                $ticker->setValue((float)$value->last_trade);
                $ticker->setExchangeId($this->getExchangeId());
                $ticker->setCurrency(str_replace("USDT", "USD", $currency));
                $result[] = $ticker;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($value->buy_price);
            $ticker->setBid($value->sell_price);
            $ticker->setVolume($value->vol);
            $ticker->setValue($value->last_trade);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $result[] = $ticker;
        }

        return $result;
    }
}