<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:00
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\ACXConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class ACXProvider extends FounderProvider
{
    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        foreach ($response as $value) {
            $ticker = new TickerEntity();
            $ticker->setAsk($value->ticker->sell);
            $ticker->setBid($value->ticker->buy);
            $ticker->setVolume($value->ticker->vol);
            $ticker->setValue($value->ticker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($value->name);
            $result[] = $ticker;
        }

        return $result;
    }

    public function getExchangeId()
    {
        return 24;
    }

    protected function getConnectorClass()
    {
        return new ACXConnector();
    }

    /**
     * @return ACXConnector
     */
    protected function getConnector()
    {
        /** @var ACXConnector $connector */
        $connector = parent::getConnector();
        return $connector;
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

    public function getType()
    {
        return self::RAPID_RATE;
    }
}