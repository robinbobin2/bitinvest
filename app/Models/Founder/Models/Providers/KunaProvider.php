<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 17:38
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\KunaConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class KunaProvider extends FounderProvider
{
    private $currencyMapping = [
        "btcuah" => "BTC/UAH",
        "ethuah" => "ETH/UAH",
        "wavesuah" => "WAWES/UAH",
        "kunbtc" => "KUN/BTC",
        "bchbtc" => "BCH/BTC",
        "gbguah" => "GBG/BTC",
        "golgbg" => "GOL/GBG",
        "rmcbtc" => "RMC/BTC",
        "rbtc" => "R/BTC",
        "arnbtc" => "ARN/BTC",
        "evrbtc" => "ERV/BTC",
        "bchuah" => "BCH/UAH",
        "xrpuah" => "XRP/UAH",
        "foodbtc" => "FOOD/UAH",
        "hknbtc" => "NKN/UAH",
        "xlmuah" => "XLM/UAH",
        "tusduah" => "TUSD/UAH",
        "eosuah" => "EOS/UAH",
        "ltcuah" => "LTC/UAH",
        "dashuah" => "DASH/UAH",
        "zecuah" => "ZEC/UAH",
        "venusbtc" => "VENUS/UAH",
        "erc20btc" => "ERC20/UAH",
    ];
    public function getExchangeId()
    {
        return 43;
    }

    protected function getConnectorClass()
    {
        return new KunaConnector();
    }

    /**
     * @return KunaConnector
     */
    protected function getConnector()
    {
        /** @var KunaConnector $connector */
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

    /**
     * @param Request $request
     * @return TickerEntity[]
     */
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        foreach ($result as $currency => $supplierTicker){
            $supplierTicker = $supplierTicker->ticker;
            if(!isset($this->currencyMapping[$currency])){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->sell);
            $ticker->setBid($supplierTicker->buy);
            $ticker->setVolume($supplierTicker->vol);
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->currencyMapping[$currency]);
            $response[] = $ticker;
        }

        return $response;
    }
}