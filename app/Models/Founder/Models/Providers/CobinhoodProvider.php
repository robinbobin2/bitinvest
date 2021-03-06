<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 12:56
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CobinhoodConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CobinhoodProvider extends FounderProvider
{

    public function getExchangeId()
    {
        return 19;
    }

    protected function getConnectorClass()
    {
        return new CobinhoodConnector();
    }

    /**
     * @return CobinhoodConnector
     */
    protected function getConnector()
    {
        /** @var CobinhoodConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
    }

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

        foreach ($result->result->tickers as $currency => $supplierTicker) {
            $currency = strtoupper(str_replace("-", "/", $supplierTicker->trading_pair_id));
            if(strpos($currency, "USDT") !== false){
                $ticker = new TickerEntity();
                $ticker->setAsk((float)$supplierTicker->lowest_ask);
                $ticker->setBid((float)$supplierTicker->highest_bid);
                $ticker->setVolume((float)$supplierTicker->{"24h_volume"});
                $ticker->setValue((float)$supplierTicker->last_trade_price);
                $ticker->setExchangeId($this->getExchangeId());
                $ticker->setCurrency(str_replace("USDT", "USD", $currency));
                $response[] = $ticker;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->lowest_ask);
            $ticker->setBid($supplierTicker->highest_bid);
            $ticker->setVolume($supplierTicker->{"24h_volume"});
            $ticker->setValue($supplierTicker->last_trade_price);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $response[] = $ticker;
        }

        return $response;
    }
}