<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 11:52
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\BraziliexConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class BraziliexProvider extends FounderProvider
{
    /**
     * @param Request $request
     * @return TickerEntity[]
     */
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        if (!$result) {
            return $response;
        }

        foreach ($result as $currency => $supplierTicker) {
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->lowestAsk);
            $ticker->setBid($supplierTicker->highestBid);
            $ticker->setVolume($supplierTicker->quoteVolume);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper(str_replace("_", "/", $currency)));
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 13;
    }

    protected function getConnectorClass()
    {
        return new BraziliexConnector();
    }

    /**
     * @return BraziliexConnector
     */
    public function getConnector()
    {
        /** @var BraziliexConnector $connector */
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
}