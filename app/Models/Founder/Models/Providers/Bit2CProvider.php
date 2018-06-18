<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 10:53
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\Exchange;
use App\Models\Founder\Models\Connectors\Bit2CConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\Bit2C;

class Bit2CProvider extends FounderProvider
{

    /**
     * @return Bit2CConnector
     */
    protected function getConnector()
    {
        /** @var Bit2CConnector $connector */
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
            if(!isset($supplierTicker->h)){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->h);
            $ticker->setBid($supplierTicker->l);
            $ticker->setVolume($supplierTicker->a);
            $ticker->setValue($supplierTicker->ll);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->getCurrency($currency));
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 5;
    }

    protected function getConnectorClass()
    {
        return new Bit2CConnector();
    }

    public function isCrypto()
    {
        return true;
    }

    public function getCurrency($currency)
    {
        return strtoupper(substr($currency, 0,3) . "/" . substr($currency, 3));
    }
}