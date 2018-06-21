<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 29.04.2018
 * Time: 21:27
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CoinexConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CoinexProvider extends FounderProvider
{
    private $coins = [
        "BCHUSDT" => "BCH/USDT",
        "BTCUSDT" => "BTC/USDT",
        "CETUSDT" => "CET/USDT",
        "CTXCBCH" => "CTXC/BCH",
        "CTXCBTC" => "CTXC/BTC",
        "DASHBCH" => "DASH/BCH",
        "DASHBTC" => "DASH/BTC",
        "DOGEBCH" => "DOGE/BCH",
        "DOGEBTC" => "DOGE/BTC",
        "EOSDACBCH" => "EOSDAC/BCH",
        "EOSDACBTC" => "EOSDAC/BTC",
        "ETHUSDT" => "ETH/USDT",
        "HYDROBCH" => "HYDRO/BCH",
        "HYDROBTC" => "HYDRO/BTC",
        "LOOMBCH" => "LOOM/BCH",
        "LOOMBTC" => "LOOM/BTC",
        "LTCUSDT" => "LTC/USDT",
        "MTBCH" => "MT/BCH",
        "MTBTC" => "MT/BTC",
        "QTUMBCH" => "QTUM/BCH",
        "QTUMBTC" => "QTUM/BTC",
        "RHOCBCH" => "RHOC/BCH",
        "RHOCBTC" => "RHOC/BTC",
        "SCBCH" => "SC/BCH",
        "SCBTC" => "SC/BTC",
        "SEERBCH" => "SEER/BCH",
        "SEERBTC" => "SEERBTC",
        "WINGSBCH" => "WINGS/BCH",
        "WINGSBTC" => "WINGS/BTC",
        "BTCBCH" => "BTC/BCH", "BTMBCH" => "BTM/BCH", "BTMBTC" => "BTM/BTC", "BTVBCH" => "BTV/BCH", "CDYBCH" => "CDY/BCH", "CETBCH" => "CET/BCH", "CETBTC" => "CET/BTC", "DCRBCH" => "DCR/BCH", "DCRBTC" => "DCR/BTC", "EOSBCH" => "EOS/BCH", "EOSBTC" => "EOS/BTC", "ETCBCH" => "ETC/BCH", "ETCBTC" => "ETC/BTC", "ETHBCH" => "ETH/BCH", "ETHBTC" => "ETH/BTC", "HSRBCH" => "HSR/BCH", "HSRBTC" => "HSR/BTC", "KANBCH" => "KAN/BCH", "KANBTC" => "KAN/BTC", "LTCBCH" => "LTC/BCH", "LTCBTC" => "LTC/BTC", "NEOBCH" => "NEO/BCH", "NEOBTC" => "NEO/BTC", "OMGBCH" => "OMG/BCH", "OMGBTC" => "OMG/BTC", "TRXBCH" => "TRX/BCH", "TRXBTC" => "TRX/BTC", "VETBCH" => "VET/BCH", "VETBTC" => "VET/BTC", "XMCBCH" => "XMC/BCH", "XMCBTC" => "XMC/BTC", "XMRBCH" => "XMR/BCH", "XMRBTC" => "XMR/BTC", "XMVBCH" => "XMV/BCH", "XMVBTC" => "XMV/BTC", "XRPBCH" => "XRP/BCH", "XRPBTC" => "XRP/BTC", "ZECBCH" => "ZEC/BCH", "ZECBTC" => "ZEC/BTC", "ZILBCH" => "ZIL/BCH", "ZILBTC" => "ZIL/BTC", "ZRXBCH" => "ZRX/BCH", "ZRXBTC" => "ZRX/BTC"
    ];

    public function getExchangeId()
    {
        return 21;
    }

    protected function getConnectorClass()
    {
        return new CoinexConnector();
    }

    /**
     * @return CoinexConnector
     */
    protected function getConnector()
    {
        /** @var CoinexConnector $connector */
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

        if(!isset($response->data->ticker)){
            return $result;
        }
        foreach ($response->data->ticker as $supplierCurrency => $value) {
            if(!isset($this->coins[$supplierCurrency])){
                continue;
            }
            if($supplierCurrency == "BTCUSDT"){
                $ticker = new TickerEntity();
                $ticker->setAsk($value->buy);
                $ticker->setBid($value->sell);
                $ticker->setVolume($value->vol);
                $ticker->setValue($value->last);
                $ticker->setExchangeId($this->getExchangeId());
                $ticker->setCurrency("BTC/USD");
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($value->buy);
            $ticker->setBid($value->sell);
            $ticker->setVolume($value->vol);
            $ticker->setValue($value->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->coins[$supplierCurrency]);
            $result[] = $ticker;
        }

        return $result;
    }
}