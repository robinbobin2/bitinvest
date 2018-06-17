<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 28.05.2018
 * Time: 18:55
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\C2CXConnector;
use App\Models\Founder\Models\Custom\SupplierLog;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class C2CXProvider extends FounderProvider
{
    /**
     * @param Request $request
     * @return TickerEntity[]
     */
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        foreach ($result as $currency => $supplierTicker) {
            if (!isset($supplierTicker->data) || !isset($supplierTicker->data->buy)) {
                continue;
            }
            $supplierTicker = $supplierTicker->data;

            if ($this->getCurrency($currency) == "BTC/USDT") {
                $ticker = new TickerEntity();
                $ticker->setAsk($supplierTicker->buy);
                $ticker->setBid($supplierTicker->sell);
                $ticker->setVolume($supplierTicker->volume);
                $ticker->setValue($supplierTicker->last);
                $ticker->setExchangeId($this->getExchangeId());
                $ticker->setCurrency("BTC/USD");
                $response[] = $ticker;
            }

            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->buy);
            $ticker->setBid($supplierTicker->sell);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->getCurrency($currency));
            $response[] = $ticker;
        }

        return $response;
    }

    private function getCurrency($currency)
    {
        $array = explode("_", $currency);
        return $array[1] . "/" . $array[0];
    }

    public function getExchangeId()
    {
        return 69;
    }

    protected function getConnectorClass()
    {
        return new C2CXConnector();
    }

    /**
     * @return C2CXConnector
     */
    protected function getConnector()
    {
        /** @var C2CXConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }
}