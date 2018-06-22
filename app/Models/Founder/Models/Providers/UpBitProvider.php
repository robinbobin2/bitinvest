<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 23.06.2018
 * Time: 1:49
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\UpBitConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class UpBitProvider extends FounderProvider
{
    /**
     * @return UpBitConnector
     */
    protected function getConnector()
    {
        /** @var UpBitConnector $connector */
        $connector = parent::getConnector();
        return $connector;
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

        foreach ($result as $currency => $supplierTicker) {
            if (empty($supplierTicker)) {
                continue;
            }
            $supplierTicker = current($supplierTicker);
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->high_price);
            $ticker->setBid($supplierTicker->low_price);
            $ticker->setVolume($supplierTicker->trade_volume);
            $ticker->setValue($supplierTicker->trade_price);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(str_replace("-", "/", $currency));
            $response[] = $ticker;
        }
        return $response;
    }

    public function getExchangeId()
    {
        return 85;
    }

    protected function getConnectorClass()
    {
        return new UpBitConnector();
    }
}