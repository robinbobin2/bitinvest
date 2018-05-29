<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 11:44
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\BitzConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BitzProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        foreach ($response->data as $currency => $value) {
            $ticker = new TickerEntity();
            $ticker->setAsk($value->buy);
            $ticker->setBid($value->sell);
            $ticker->setVolume($value->vol);
            $ticker->setValue($value->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper(str_replace("_", "/", $currency)));
            $result[] = $ticker;
        }

        return $result;
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

    /**
     * @param TickerEntity[] $response
     */
    public function save($response)
    {
        sleep(1);
        foreach ($response as $ticker) {
            $exchange = new ExchangeRate();
            $exchange->value = $ticker->getValue();
            $exchange->volume = $ticker->getVolume();
            $exchange->bid = $ticker->getBid();
            $exchange->ask = $ticker->getAsk();
            $exchange->currency = $ticker->getCurrency();
            $exchange->exchangeId = $this->getExchangeId();
            $exchange->createTime = time();
            try {
                $exchange->save();
            } catch (\Exception $e) {

            }
        }
    }
}