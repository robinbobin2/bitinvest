<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 1:36
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BiBoxConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BiBoxProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response || !isset($response->data)) {
            return $result;
        }

        foreach ($response->data as $currency => $value) {
            if(!isset($value->result)){
                continue;
            }
            $value = $value->result;
            $ticker = new TickerEntity();
            $ticker->setAsk($value->buy);
            $ticker->setBid($value->sell);
            $ticker->setVolume($value->vol);
            $ticker->setValue($value->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(str_replace("_", "/", $currency));
            $result[] = $ticker;
        }

        return $result;
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