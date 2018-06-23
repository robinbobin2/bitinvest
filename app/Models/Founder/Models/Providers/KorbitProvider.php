<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 23.06.2018
 * Time: 22:55
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\KorbitConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class KorbitProvider extends FounderProvider
{

    /**
     * @return KorbitConnector
     */
    protected function getConnector()
    {
        /** @var KorbitConnector $connector */
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
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->ask);
            $ticker->setBid($supplierTicker->bid);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency(strtoupper(str_replace("_", "/", $currency)));
            $response[] = $ticker;
        }
        return $response;
    }

    public function getExchangeId()
    {
        return 89;
    }

    protected function getConnectorClass()
    {
        return new KorbitConnector();
    }

    public function getCurrency($currency)
    {
        return strtoupper(substr($currency, 0, 3) . "/" . substr($currency, 3));
    }
}