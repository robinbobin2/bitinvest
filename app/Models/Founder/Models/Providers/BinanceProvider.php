<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 10:10
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\BinanceConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\Binance;
use App\Models\Founder\Models\Test\Exchange;

class BinanceProvider extends FounderProvider
{
    private $coins = ["ETHBTC" => "ETH/BTC","LTCBTC" => "LTC/BTC","BNBBTC" => "BNB/BTC","NEOBTC" => "NEO/BTC","QTUMETH" => "QTUM/ETH","EOSETH" => "EOS/ETH","SNTETH" => "SNT/ETH","BNTETH" => "BNT/ETH","BCCBTC" => "BCC/BTC","GASBTC" => "GAS/BTC","BNBETH" => "BNB/ETH","BTCUSDT" => "BTC/USD","ETHUSDT" => "ETH/USD","HSRBTC" => "HSR/BTC","OAXETH" => "OAX/ETH","DNTETH" => "DNT/ETH","MCOETH" => "MCO/ETH","ICNETH" => "ICN/ETH","MCOBTC" => "MCO/BTC","WTCBTC" => "WTC/BTC","WTCETH" => "WTC/ETH","LRCBTC" => "LRC/BTC","LRCETH" => "LRC/ETH","QTUMBTC" => "QTUM/BTC","YOYOBTC" => "YOYO/BTC","OMGBTC" => "OMG/BTC","OMGETH" => "OMG/ETH","ZRXBTC" => "ZRX/BTC","ZRXETH" => "ZRX/ETH","STRATBTC" => "STRAT/BTC","STRATETH" => "STRAT/ETH","SNGLSBTC" => "SNGLS/BTC","SNGLSETH" => "SNGLS/ETH","BQXBTC" => "BQX/BTC","BQXETH" => "BQX/ETH","KNCBTC" => "KNC/BTC","KNCETH" => "KNC/ETH","FUNBTC" => "FUN/BTC","FUNETH" => "FUN/ETH","SNMBTC" => "SNM/BTC","SNMETH" => "SNM/ETH","NEOETH" => "NEO/ETH","IOTABTC" => "IOTA/BTC","IOTAETH" => "IOTA/ETH","LINKBTC" => "LINK/BTC","LINKETH" => "LINK/ETH","XVGBTC" => "XVG/BTC","XVGETH" => "XVG/ETH","SALTBTC" => "SALT/BTC","SALTETH" => "SALT/ETH","MDABTC" => "MDA/BTC","MDAETH" => "MDA/ETH","MTLBTC" => "MTL/BTC","MTLETH" => "MTL/ETH","SUBBTC" => "SUB/BTC","SUBETH" => "SUB/ETH","EOSBTC" => "EOS/BTC","SNTBTC" => "SNT/BTC","ETCETH" => "ETC/ETH","ETCBTC" => "ETC/BTC","MTHBTC" => "MTH/BTC","MTHETH" => "MTH/ETH","ENGBTC" => "ENG/BTC","ENGETH" => "ENG/ETH","DNTBTC" => "DNT/BTC","ZECBTC" => "ZEC/BTC","ZECETH" => "ZEC/ETH","BNTBTC" => "BNT/BTC","ASTBTC" => "AST/BTC","ASTETH" => "AST/ETH","DASHBTC" => "DASH/BTC","DASHETH" => "DASH/ETH","OAXBTC" => "OAX/BTC","ICNBTC" => "ICN/BTC","BTGBTC" => "BTG/BTC","BTGETH" => "BTG/ETH","EVXBTC" => "EVX/BTC","EVXETH" => "EVX/ETH","REQBTC" => "REQ/BTC","REQETH" => "REQ/ETH","VIBBTC" => "VIB/BTC","VIBETH" => "VIB/ETH","HSRETH" => "HSR/ETH","TRXBTC" => "TRX/BTC","TRXETH" => "TRX/ETH","POWRBTC" => "POWR/BTC","POWRETH" => "POWR/ETH","ARKBTC" => "ARK/BTC","ARKETH" => "ARK/ETH","YOYOETH" => "YOYO/ETH","XRPBTC" => "XRP/BTC","XRPETH" => "XRP/ETH","MODBTC" => "MOD/BTC","MODETH" => "MOD/ETH","ENJBTC" => "ENJ/BTC","ENJETH" => "ENJ/ETH","STORJBTC" => "STORJ/BTC","STORJETH" => "STORJ/ETH","BNBUSDT" => "BNB/USD","VENBNB" => "VEN/BNB","YOYOBNB" => "YOYO/BNB","POWRBNB" => "POWR/BNB","VENBTC" => "VEN/BTC","VENETH" => "VEN/ETH","KMDBTC" => "KMD/BTC","KMDETH" => "KMD/ETH","NULSBNB" => "NULS/BNB","RCNBTC" => "RCN/BTC","RCNETH" => "RCN/ETH","RCNBNB" => "RCN/BNB","NULSBTC" => "NULS/BTC","NULSETH" => "NULS/ETH","RDNBTC" => "RDN/BTC","RDNETH" => "RDN/ETH","RDNBNB" => "RDN/BNB","XMRBTC" => "XMR/BTC","XMRETH" => "XMR/ETH","DLTBNB" => "DLT/BNB","WTCBNB" => "WTC/BNB","DLTBTC" => "DLT/BTC","DLTETH" => "DLT/ETH","AMBBTC" => "AMB/BTC","AMBETH" => "AMB/ETH","AMBBNB" => "AMB/BNB","BCCETH" => "BCC/ETH","BCCUSDT" => "BCC/USD","BCCBNB" => "BCC/BNB","BATBTC" => "BAT/BTC","BATETH" => "BAT/ETH","BATBNB" => "BAT/BNB","BCPTBTC" => "BCPT/BTC","BCPTETH" => "BCPT/ETH","BCPTBNB" => "BCPT/BNB","ARNBTC" => "ARN/BTC","ARNETH" => "ARN/ETH","GVTBTC" => "GVT/BTC","GVTETH" => "GVT/ETH","CDTBTC" => "CDT/BTC","CDTETH" => "CDT/ETH","GXSBTC" => "GXS/BTC","GXSETH" => "GXS/ETH","NEOUSDT" => "NEO/USD","NEOBNB" => "NEO/BNB","POEBTC" => "POE/BTC","POEETH" => "POE/ETH","QSPBTC" => "QSP/BTC","QSPETH" => "QSP/ETH","QSPBNB" => "QSP/BNB","BTSBTC" => "BTS/BTC","BTSETH" => "BTS/ETH","BTSBNB" => "BTS/BNB","XZCBTC" => "XZC/BTC","XZCETH" => "XZC/ETH","XZCBNB" => "XZC/BNB","LSKBTC" => "LSK/BTC","LSKETH" => "LSK/ETH","LSKBNB" => "LSK/BNB","TNTBTC" => "TNT/BTC","TNTETH" => "TNT/ETH","FUELBTC" => "FUEL/BTC","FUELETH" => "FUEL/ETH","MANABTC" => "MANA/BTC","MANAETH" => "MANA/ETH","BCDBTC" => "BCD/BTC","BCDETH" => "BCD/ETH","DGDBTC" => "DGD/BTC","DGDETH" => "DGD/ETH","IOTABNB" => "IOTA/BNB","ADXBTC" => "ADX/BTC","ADXETH" => "ADX/ETH","ADXBNB" => "ADX/BNB","ADABTC" => "ADA/BTC","ADAETH" => "ADA/ETH","PPTBTC" => "PPT/BTC","PPTETH" => "PPT/ETH","CMTBTC" => "CMT/BTC","CMTETH" => "CMT/ETH","CMTBNB" => "CMT/BNB","XLMBTC" => "XLM/BTC","XLMETH" => "XLM/ETH","XLMBNB" => "XLM/BNB","CNDBTC" => "CND/BTC","CNDETH" => "CND/ETH","CNDBNB" => "CND/BNB","LENDBTC" => "LEND/BTC","LENDETH" => "LEND/ETH","WABIBTC" => "WABI/BTC","WABIETH" => "WABI/ETH","WABIBNB" => "WABI/BNB","LTCETH" => "LTC/ETH","LTCUSDT" => "LTC/USD","LTCBNB" => "LTC/BNB","TNBBTC" => "TNB/BTC","TNBETH" => "TNB/ETH","WAVESBTC" => "WAVES/BTC","WAVESETH" => "WAVES/ETH","WAVESBNB" => "WAVES/BNB","GTOBTC" => "GTO/BTC","GTOETH" => "GTO/ETH","GTOBNB" => "GTO/BNB","ICXBTC" => "ICX/BTC","ICXETH" => "ICX/ETH","ICXBNB" => "ICX/BNB","OSTBTC" => "OST/BTC","OSTETH" => "OST/ETH","OSTBNB" => "OST/BNB","ELFBTC" => "ELF/BTC","ELFETH" => "ELF/ETH","AIONBTC" => "AION/BTC","AIONETH" => "AION/ETH","AIONBNB" => "AION/BNB","NEBLBTC" => "NEBL/BTC","NEBLETH" => "NEBL/ETH","NEBLBNB" => "NEBL/BNB","BRDBTC" => "BRD/BTC","BRDETH" => "BRD/ETH","BRDBNB" => "BRD/BNB","MCOBNB" => "MCO/BNB","EDOBTC" => "EDO/BTC","EDOETH" => "EDO/ETH","WINGSBTC" => "WINGS/BTC","WINGSETH" => "WINGS/ETH","NAVBTC" => "NAV/BTC","NAVETH" => "NAV/ETH","NAVBNB" => "NAV/BNB","LUNBTC" => "LUN/BTC","LUNETH" => "LUN/ETH","TRIGBTC" => "TRIG/BTC","TRIGETH" => "TRIG/ETH","TRIGBNB" => "TRIG/BNB","APPCBTC" => "APPC/BTC","APPCETH" => "APPC/ETH","APPCBNB" => "APPC/BNB","VIBEBTC" => "VIBE/BTC","VIBEETH" => "VIBE/ETH","RLCBTC" => "RLC/BTC","RLCETH" => "RLC/ETH","RLCBNB" => "RLC/BNB","INSBTC" => "INS/BTC","INSETH" => "INS/ETH","PIVXBTC" => "PIVX/BTC","PIVXETH" => "PIVX/ETH","PIVXBNB" => "PIVX/BNB","IOSTBTC" => "IOST/BTC","IOSTETH" => "IOST/ETH","CHATBTC" => "CHAT/BTC","CHATETH" => "CHAT/ETH","STEEMBTC" => "STEEM/BTC","STEEMETH" => "STEEM/ETH","STEEMBNB" => "STEEM/BNB","NANOBTC" => "NANO/BTC","NANOETH" => "NANO/ETH","NANOBNB" => "NANO/BNB","VIABTC" => "VIA/BTC","VIAETH" => "VIA/ETH","VIABNB" => "VIA/BNB","BLZBTC" => "BLZ/BTC","BLZETH" => "BLZ/ETH","BLZBNB" => "BLZ/BNB","AEBTC" => "AE/BTC","AEETH" => "AE/ETH","AEBNB" => "AE/BNB","RPXBTC" => "RPX/BTC","RPXETH" => "RPX/ETH","RPXBNB" => "RPX/BNB","NCASHBTC" => "NCASH/BTC","NCASHETH" => "NCASH/ETH","NCASHBNB" => "NCASH/BNB","POABTC" => "POA/BTC","POAETH" => "POA/ETH","POABNB" => "POA/BNB","ZILBTC" => "ZIL/BTC","ZILETH" => "ZIL/ETH","ZILBNB" => "ZIL/BNB","ONTBTC" => "ONT/BTC","ONTETH" => "ONT/ETH","ONTBNB" => "ONT/BNB","STORMBTC" => "STORM/BTC","STORMETH" => "STORM/ETH","STORMBNB" => "STORM/BNB","QTUMBNB" => "QTUM/BNB","QTUMUSDT" => "QTUM/USD","XEMBTC" => "XEM/BTC","XEMETH" => "XEM/ETH","XEMBNB" => "XEM/BNB","WANBTC" => "WAN/BTC","WANETH" => "WAN/ETH","WANBNB" => "WAN/BNB","WPRBTC" => "WPR/BTC","WPRETH" => "WPR/ETH","QLCBTC" => "QLC/BTC","QLCETH" => "QLC/ETH","SYSBTC" => "SYS/BTC","SYSETH" => "SYS/ETH","SYSBNB" => "SYS/BNB","QLCBNB" => "QLC/BNB","GRSBTC" => "GRS/BTC","GRSETH" => "GRS/ETH","ADAUSDT" => "ADA/USD","ADABNB" => "ADA/BNB","CLOAKBTC" => "CLOAK/BTC","CLOAKETH" => "CLOAK/ETH","GNTBTC" => "GNT/BTC","GNTETH" => "GNT/ETH","GNTBNB" => "GNT/BNB","LOOMBTC" => "LOOM/BTC","LOOMETH" => "LOOM/ETH","LOOMBNB" => "LOOM/BNB","XRPUSDT" => "XRP/USD","BCNBTC" => "BCN/BTC","BCNETH" => "BCN/ETH","BCNBNB" => "BCN/BNB","REPBTC" => "REP/BTC","REPETH" => "REP/ETH","REPBNB" => "REP/BNB","TUSDBTC" => "TUSD/BTC","TUSDETH" => "TUSD/ETH","TUSDBNB" => "TUSD/BNB","ZENBTC" => "ZEN/BTC","ZENETH" => "ZEN/ETH","ZENBNB" => "ZEN/BNB","SKYBTC" => "SKY/BTC","SKYETH" => "SKY/ETH","SKYBNB" => "SKY/BNB","EOSUSDT" => "EOS/USD","EOSBNB" => "EOS/BNB","CVCBTC" => "CVC/BTC","CVCETH" => "CVC/ETH","CVCBNB" => "CVC/BNB","THETABTC" => "THETA/BTC","THETAETH" => "THETA/ETH","THETABNB" => "THETA/BNB","XRPBNB" => "XRP/BNB","TUSDUSDT" => "TUSD/USD","IOTAUSDT" => "IOTA/USD","XLMUSDT" => "XLM/USD","IOTXBTC" => "IOTX/BTC","IOTXETH" => "IOTX/ETH","QKCBTC" => "QKC/BTC","QKCETH" => "QKC/ETH","AGIBTC" => "AGI/BTC","AGIETH" => "AGI/ETH","AGIBNB" => "AGI/BNB","NXSBTC" => "NXS/BTC","NXSETH" => "NXS/ETH","NXSBNB" => "NXS/BNB","ENJBNB" => "ENJ/BNB","DATABTC" => "DATA/BTC","DATAETH" => "DATA/ETH","ONTUSDT" => "ONT/USD","TRXUSDT" => "TRX/USD","ETCUSDT" => "ETC/USD","ETCBNB" => "ETC/BNB","ICXUSDT" => "ICX/USD","SCBTC" => "SC/BTC","SCETH" => "SC/ETH","SCBNB" => "SC/BNB","NPXSBTC" => "NPXS/BTC","NPXSETH" => "NPXS/ETH","VENUSDT" => "VEN/USD"];
    /**
     * @return BinanceConnector
     */
    protected function getConnector()
    {
        /** @var BinanceConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    /**
     * @param Request $request
     * @return TickerEntity[]
     */
    public function search(Request $request)
    {
        sleep(1);
        $response = [];
        $result = $this->getConnector()->search();

        if (!$result) {
            return $response;
        }

        foreach ($result as $currency => $supplierTicker) {
            if(!isset($supplierTicker->symbol) || !isset($this->coins[$supplierTicker->symbol])){
                continue;
            }
            $currency = $this->coins[$supplierTicker->symbol];
            if(strpos($supplierTicker->symbol, "USDT") !== false){
                $ticker = new TickerEntity();
                $ticker->setAsk((float)$supplierTicker->askPrice);
                $ticker->setBid((float)$supplierTicker->bidPrice);
                $ticker->setVolume((float)$supplierTicker->volume);
                $ticker->setValue((float)$supplierTicker->lastPrice);
                $ticker->setExchangeId($this->getExchangeId());
                $ticker->setCurrency($currency);
                $result[] = $ticker;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->askPrice);
            $ticker->setBid($supplierTicker->bidPrice);
            $ticker->setVolume($supplierTicker->volume);
            $ticker->setValue($supplierTicker->lastPrice);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $response[] = $ticker;
        }

        return $response;
    }

    public function getExchangeId()
    {
        return 4;
    }

    protected function getConnectorClass()
    {
        return new BinanceConnector();
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