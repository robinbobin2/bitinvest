<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 02.06.2018
 * Time: 20:28
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\KoineksConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class KoineksProvider extends FounderProvider
{
    public function getExchangeId()
    {
        return 78;
    }

    protected function getConnectorClass()
    {
        return new KoineksConnector();
    }

    /**
     * @return KoineksConnector
     */
    protected function getConnector()
    {
        /** @var KoineksConnector $connector */
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
            $ticker->setAsk($value->ask);
            $ticker->setBid($value->bid);
            $ticker->setVolume($value->volume);
            $ticker->setValue($value->current);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($value->short_code . "/" . $value->currency);
            $result[] = $ticker;
        }

        return $result;
    }

    /**
     * @param TickerEntity[] $response
     */
    public function save($response)
    {
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