<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 10:41
 */

namespace App\Models\Founder\Models;


use App\Models\Entity\Exchange;
use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Requests\Request;
use Illuminate\Support\Facades\DB;

abstract class FounderProvider
{
    private $connections = [
        "mysql",
        "mysql2",
        "mysql3",
    ];

    private $currencies = [
        "BTC",
        "ETH",
        "XRP",
        "BCH",
        "LTC",
        "ETC",
        "GTC",
        "BCH",
        "QTUM",
        "NEO",
        "EOS",
        "BCC",
        "TRX",
    ];

    /**
     * @var FounderConnector
     */
    protected $connector;

    protected $exchange;

    protected function getConnector()
    {
        if (!$this->connector) {
            $this->connector = $this->getConnectorClass();
            $this->connector->exchangeId = $this->getExchangeId();
        }
        return $this->connector;
    }

    abstract protected function getConnectorClass();

    public function search(Request $request)
    {
        $response = $this->getConnector()->fetch_tickers();
        return $response;
    }

    public function validate($currency){
        foreach ($this->currencies as $validCurrency){
            $pos = strpos($currency, $validCurrency);
            if ($pos !== false) {
                return true;
            }
        }
        return false;
    }


    public function save($response)
    {
        sleep($this->getCooldownTime());
        $query = "
        Start transaction;
        SET FOREIGN_KEY_CHECKS = 0;
        SET UNIQUE_CHECKS = 0;
        SET AUTOCOMMIT = 0;";
        $count = 0;
        foreach ($response as $rate) {
            if (empty($rate['last']) || empty($rate['symbol'])) {
                continue;
            }
            if ($this->isCrypto()) {
                $pos = strpos($rate['symbol'], "USDT");
                if ($pos !== false) {
                    $count++;
                    $newRate = $rate;
                    $newRate['symbol'] = str_replace("USDT", "USD", $newRate['symbol']);
                    $query .= "
                    INSERT INTO `exchangeRates` (`currency`, `value`, `createTime`, `exchangeId`, `volume`, `bid`, `ask`)
                    VALUES ('{$newRate['symbol']}','{$newRate['last']}', '" . time() . "', '" . $this->getExchangeId() . "',
                    '{$newRate['baseVolume']}', '" . isset($newRate['bid']) ? $rate['bid'] : 0 . "', '" . isset($newRate['ask']) ? $newRate['ask'] : 0 . "');";
//                    $exchange = new ExchangeRate();
//                    $exchange->value = $newRate['last'];
//                    $exchange->volume = $newRate['baseVolume'];
//                    $exchange->bid = isset($newRate['bid']) ? $newRate['bid'] : null;
//                    $exchange->ask = isset($newRate['ask']) ? $newRate['ask'] : null;
//                    $exchange->currency = $newRate['symbol'];
//                    $exchange->exchangeId = $this->getExchangeId();
//                    $exchange->createTime = time();
//                    try {
//                        $exchange->save();
//                    } catch (\Exception $e) {
//
//                    }
                }
            }
            $query .= "
                    INSERT INTO `exchangeRates` (`currency`, `value`, `createTime`, `exchangeId`, `volume`, `bid`, `ask`)
                    VALUES ('{$rate['symbol']}','{$rate['last']}', '" . time() . "', '" . $this->getExchangeId() . "',
                    '{$rate['baseVolume']}', '" . isset($rate['bid']) ? $rate['bid'] : 0 . "', '" . isset($rate['ask']) ? $rate['ask'] : 0 . "');";
            $count++;
//            $exchange = new ExchangeRate();
//            $exchange->value = $rate['last'];
//            $exchange->volume = $rate['baseVolume'];
//            $exchange->bid = isset($rate['bid']) ? $rate['bid'] : null;
//            $exchange->ask = isset($rate['ask']) ? $rate['ask'] : null;
//            $exchange->currency = $rate['symbol'];
//            $exchange->exchangeId = $this->getExchangeId();
//            $exchange->createTime = time();
//            try {
//                $exchange->save();
//            } catch (\Exception $e) {
//
//            }
        }
        $query .= "commit;
        SET UNIQUE_CHECKS = 1;
        SET FOREIGN_KEY_CHECKS = 1;";
        if($count){
            try{
                DB::statement($query);
            }
            catch (\Exception $e){

            }
        }
    }

    public function getDefaultRelation()
    {
        return 'BTC/USDT';
    }

    abstract public function getExchangeId();

    public function isCrypto()
    {
        return false;
    }

    /**
     * @return int
     */
    public function getCooldownTime()
    {
        return 1;
    }
}