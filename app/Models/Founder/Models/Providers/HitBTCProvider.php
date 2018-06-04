<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 08.04.2018
 * Time: 16:39
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Entity\Exchange;
use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Connectors\HitBTCConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\HitBTC;

class HitBTCProvider extends FounderProvider
{
    private $pairs = ["BCN/BTC", "BTC/USD", "DASH/BTC", "DOGE/BTC", "DOGE/USD", "DSH/BTC", "EMC/BTC", "ETH/BTC", "FCN/BTC", "LSK/BTC", "LTC/BTC", "LTC/USD", "NXT/BTC", "QCN/BTC", "SBD/BTC", "SC/BTC", "STEEM/BTC", "XDN/BTC", "XEM/BTC", "XMR/BTC", "ARDR/BTC", "ZEC/BTC", "WAVES/BTC", "MAID/BTC", "AMP/BTC", "BUS/BTC", "DGD/BTC", "ICN/BTC", "SNGLS/BTC", "1ST/BTC", "TRST/BTC", "TIME/BTC", "GNO/BTC", "REP/BTC", "XMR/USD", "DASH/USD", "ETH/USD", "NXT/USD", "ZRC/BTC", "BOS/BTC", "DCT/BTC", "ANT/BTC", "AEON/BTC", "GUP/BTC", "PLU/BTC", "LUN/BTC", "TAAS/BTC", "NXC/BTC", "EDG/BTC", "RLC/BTC", "SWT/BTC", "TKN/BTC", "WINGS/BTC", "XAUR/BTC", "AE/BTC", "PTOY/BTC", "ZEC/USD", "XEM/USD", "BCN/USD", "XDN/USD", "MAID/USD", "ETC/BTC", "ETC/USD", "CFI/BTC", "PLBT/BTC", "BNT/BTC", "XDNCO/BTC", "FYN/ETH", "SNM/BTC", "SNM/ETH", "SNT/ETH", "CVC/USD", "PAY/ETH", "OAX/ETH", "OMG/ETH", "BQX/ETH", "XTZ/BTC", "DICE/BTC", "CFI/ETH", "PTOY/ETH", "1ST/ETH", "XAUR/ETH", "TAAS/ETH", "TIME/ETH", "DICE/ETH", "SWT/ETH", "XMR/ETH", "ETC/ETH", "DASH/ETH", "ZEC/ETH", "PLU/ETH", "GNO/ETH", "XRP/BTC", "NET/ETH", "STRAT/USD", "STRAT/BTC", "SNC/ETH", "ADX/ETH", "BET/ETH", "EOS/ETH", "DENT/ETH", "SAN/ETH", "EOS/BTC", "EOS/USD", "MNE/BTC", "MSP/ETH", "DDF/ETH", "XTZ/ETH", "XTZ/USD", "UET/ETH", "MYB/ETH", "SUR/ETH", "IXT/ETH", "PLR/ETH", "TIX/ETH", "NDC/ETH", "PRO/ETH", "AVT/ETH", "COSS/ETH", "EVX/USD", "DLT/BTC", "BNT/ETH", "BNT/USD", "QAU/BTC", "QAU/ETH", "MANA/USD", "DNT/BTC", "FYP/BTC", "OPT/BTC", "TNT/ETH", "IFT/BTC", "STX/BTC", "STX/ETH", "STX/USD", "TNT/USD", "TNT/BTC", "CAT/BTC", "CAT/ETH", "CAT/USD", "BCH/BTC", "BCH/ETH", "BCH/USD", "ENG/ETH", "XUC/USD", "SNC/BTC", "SNC/USD", "OAX/USD", "OAX/BTC", "BAS/ETH", "ZRX/BTC", "ZRX/ETH", "ZRX/USD", "RVT/BTC", "ICOS/BTC", "ICOS/ETH", "ICOS/USD", "PPC/BTC", "PPC/USD", "QTUM/ETH", "VERI/BTC", "VERI/ETH", "VERI/USD", "IGNIS/ETH", "PRG/BTC", "PRG/ETH", "PRG/USD", "BMC/BTC", "BMC/ETH", "BMC/USD", "CND/BTC", "CND/ETH", "CND/USD", "SKIN/BTC", "EMGO/BTC", "EMGO/USD", "CDT/ETH", "CDT/USD", "FUN/BTC", "FUN/ETH", "FUN/USD", "HVN/BTC", "HVN/ETH", "FUEL/BTC", "FUEL/ETH", "FUEL/USD", "POE/BTC", "POE/ETH", "MCAP/BTC", "AIR/BTC", "AIR/ETH", "AIR/USD", "AMB/USD", "AMB/ETH", "AMB/BTC", "NTO/BTC", "ICO/BTC", "PING/BTC", "GAME/BTC", "TKR/ETH", "HPC/BTC", "PPT/ETH", "MTH/BTC", "MTH/ETH", "WMGO/BTC", "WMGO/USD", "LRC/BTC", "LRC/ETH", "ICX/BTC", "ICX/ETH", "NEO/BTC", "NEO/ETH", "NEO/USD", "CSNO/BTC", "ORME/BTC", "ICX/USD", "PIX/BTC", "PIX/ETH", "IND/ETH", "KICK/BTC", "YOYOW/BTC", "MIPS/BTC", "CDT/BTC", "XVG/BTC", "XVG/ETH", "XVG/USD", "DGB/BTC", "DGB/ETH", "DGB/USD", "DCN/BTC", "DCN/ETH", "DCN/USD", "LAT/BTC", "CCT/ETH", "EBET/ETH", "VIBE/BTC", "VOISE/BTC", "ENJ/BTC", "ENJ/ETH", "ENJ/USD", "ZSC/BTC", "ZSC/ETH", "ZSC/USD", "ETBS/BTC", "TRX/BTC", "TRX/ETH", "TRX/USD", "VEN/BTC", "VEN/ETH", "VEN/USD", "ART/BTC", "EVX/BTC", "EVX/ETH", "QVT/ETH", "E/BTCOLDBTC", "E/BTCOLDETH", "EBTCOLD/ETH", "E/BTCOLDUSD", "EBTCOLD/USD", "BKB/BTC", "EXN/BTC", "TGT/BTC", "ATS/ETH", "CTR/BTC", "CTR/ETH", "CTR/USD", "BMT/BTC", "BMT/ETH", "SUB/BTC", "SUB/ETH", "SUB/USD", "WTC/BTC", "CNX/BTC", "ATB/BTC", "ATB/ETH", "ATB/USD", "ODN/BTC", "BTM/BTC", "BTM/ETH", "BTM/USD", "B2X/BTC", "B2X/ETH", "B2X/USD", "ATM/BTC", "ATM/ETH", "ATM/USD", "LIFE/BTC", "VIB/BTC", "VIB/ETH", "VIB/USD", "DRT/ETH", "STU/USD", "OMG/BTC", "PAY/BTC", "COSS/BTC", "PPT/BTC", "SNT/BTC", "BTG/BTC", "BTG/ETH", "BTG/USD", "SMART/BTC", "SMART/ETH", "SMART/USD", "XUC/ETH", "XUC/BTC", "CL/BTC", "CL/ETH", "CL/USD", "LA/ETH", "CLD/BTC", "CLD/ETH", "CLD/USD", "ELM/BTC", "EDO/BTC", "EDO/ETH", "EDO/USD", "HGT/ETH", "POLL/BTC", "IXT/BTC", "ATS/BTC", "SCL/BTC", "ATL/BTC", "E/BTCNEWBTC", "E/BTCNEWETH", "EBTCNEW/ETH", "E/BTCNEWUSD", "EBTCNEW/USD", "ETP/BTC", "ETP/ETH", "ETP/USD", "OTX/BTC", "CDX/ETH", "DRPU/BTC", "NEBL/BTC", "NEBL/ETH", "HAC/BTC", "CTX/BTC", "CTX/ETH", "ELE/BTC", "ARN/BTC", "ARN/ETH", "SISA/BTC", "SISA/ETH", "STU/BTC", "STU/ETH", "GVT/ETH", "INDI/BTC", "BTX/BTC", "LTC/ETH", "BCN/ETH", "MAID/ETH", "NXT/ETH", "STRAT/ETH", "XDN/ETH", "XEM/ETH", "PLR/BTC", "SUR/BTC", "BQX/BTC", "DOGE/ETH", "ITS/BTC", "AMM/BTC", "AMM/ETH", "AMM/USD", "DBIX/BTC", "PRE/BTC", "KBR/BTC", "TBT/BTC", "ERO/BTC", "SMS/BTC", "SMS/ETH", "SMS/USD", "ZAP/BTC", "DOV/BTC", "DOV/ETH", "FRD/BTC", "DRPU/ETH", "OTN/BTC", "XRP/ETH", "XRP/USDT", "HSR/BTC", "LEND/BTC", "LEND/ETH", "SPF/ETH", "S/BTCBTC", "S/BTCETH", "SBTC/ETH", "BTC/ABTC", "BTC/AETH", "BTCA/ETH", "BTC/AUSD", "BTCA/USD", "WRC/BTC", "WRC/ETH", "WRC/USD", "LOC/BTC", "LOC/ETH", "LOC/USD", "SWFTC/BTC", "SWFTC/ETH", "SWFTC/USD", "STAR/ETH", "S/BTCUSDT", "SBTC/USDT", "STORM/BTC", "DIM/ETH", "DIM/USD", "DIM/BTC", "NGC/BTC", "NGC/ETH", "NGC/USD", "EMC/ETH", "EMC/USDT", "MCO/BTC", "MCO/ETH", "MCO/USD", "MANA/ETH", "MANA/BTC", "ECH/BTC", "CPAY/ETH", "DATA/BTC", "DATA/ETH", "DATA/USD", "UTT/BTC", "UTT/ETH", "UTT/USD", "KMD/BTC", "KMD/ETH", "KMD/USD", "QTUM/USD", "QTUM/BTC", "SNT/USD", "OMG/USD", "EKO/BTC", "EKO/ETH", "ADX/BTC", "ADX/USD", "LSK/ETH", "LSK/USD", "PLR/USD", "SUR/USD", "BQX/USD", "DRT/USDT", "REP/ETH", "REP/USDT", "TIO/BTC", "TIO/ETH", "TIO/USD", "WAX/BTC", "WAX/ETH", "WAX/USD", "EET/BTC", "EET/ETH", "EET/USD", "C20/BTC", "C20/ETH", "IDH/BTC", "IDH/ETH", "IPL/BTC", "COV/BTC", "COV/ETH", "SENT/BTC", "SENT/ETH", "SENT/USD", "SMT/BTC", "SMT/ETH", "SMT/USD", "CVH/ETH", "CVH/USD", "CAS/BTC", "CAS/ETH", "CAS/USD", "CHAT/BTC", "CHAT/ETH", "CHAT/USD", "GRMD/BTC", "AVH/BTC", "TRAC/ETH", "JNT/ETH", "PCL/BTC", "PCL/ETH", "CLOUT/BTC", "UTK/BTC", "UTK/ETH", "UTK/USD", "GNX/ETH", "CHSB/BTC", "CHSB/ETH", "AVH/ETH", "DAY/BTC", "DAY/ETH", "DAY/USD", "NEU/BTC", "NEU/ETH", "NEU/USD", "AVH/USDT", "CLOUT/ETH", "CLOUT/USDT", "TAU/BTC", "MEK/BTC", "BAR/BTC", "BAR/ETH", "BAR/USD", "FLP/BTC", "FLP/ETH", "FLP/USD", "R/BTC", "R/ETH", "EKO/USDT", "BCPT/ETH", "BCPT/USDT", "PKT/BTC", "PKT/ETH", "WLK/BTC", "WLK/ETH", "WLK/USD", "EVN/BTC", "CPG/BTC", "CPG/ETH", "BPTN/BTC", "BPTN/ETH", "BPTN/USD", "BETR/BTC", "BETR/ETH", "ARCT/BTC", "ARCT/USD", "DBET/BTC", "DBET/ETH", "DBET/USD", "RNTB/ETH", "HAND/ETH", "HAND/USD", "BEZ/BTC", "BEZ/ETH", "BEZ/USD", "ACO/ETH", "CTE/BTC", "CTE/ETH", "CTE/USD", "UTNP/BTC", "UTNP/ETH", "UTNP/USD", "CPY/BTC", "CPY/ETH", "CHP/ETH", "BCPT/BTC", "ACT/BTC", "ACT/ETH", "ACT/USD", "HIRE/ETH", "ADA/BTC", "ADA/ETH", "ADA/USD", "SIG/BTC", "RPM/BTC", "RPM/ETH", "MTX/BTC", "MTX/ETH", "MTX/USD", "BGG/BTC", "BGG/ETH", "BGG/USD", "S/ETHETH", "WIZ/BTC", "WIZ/ETH", "WIZ/USD", "DADI/BTC", "DADI/ETH", "BDG/ETH", "DATX/BTC", "DATX/ETH", "TRUE/BTC", "DRG/BTC", "DRG/ETH", "BANCA/BTC", "BANCA/ETH", "ZAP/ETH", "ZAP/USD", "AUTO/BTC", "NOAH/BTC", "SOC/BTC", "WILD/BTC", "INSUR/BTC", "INSUR/ETH", "OCN/BTC", "OCN/ETH", "STQ/BTC", "STQ/ETH", "XLM/BTC", "XLM/ETH", "XLM/USD", "IOTA/BTC", "IOTA/ETH", "IOTA/USD", "DRT/BTC", "MLD/BTC", "MLD/ETH", "MLD/USD", "BETR/USD", "CGC/ETH", "ERT/BTC", "CRPT/BTC", "CRPT/USD", "MESH/BTC", "MESH/ETH", "MESH/USD", "HLW/ETH", "IHT/BTC", "IHT/ETH", "IHT/USD", "SCC/BTC", "YCC/BTC", "DAN/BTC", "TEL/BTC", "TEL/ETH", "BUBO/BTC", "BUBO/ETH", "BUBO/USD", "VIT/BTC", "VIT/ETH", "VIT/USD", "CLR/BTC", "NCT/BTC", "NCT/ETH", "NCT/USD", "AXP/BTC", "AXP/ETH", "BMH/BTC", "BANCA/USD", "NOAH/ETH", "NOAH/USD", "HQX/BTC", "LDC/BTC", "XMO/BTC", "XMO/USD", "XMO/ETH", "BERRY/BTC", "BERRY/ETH", "BERRY/USD", "BSTN/BTC", "BSTN/ETH", "BSTN/USD", "GBX/BTC", "GBX/ETH", "GBX/USD", "SHIP/BTC", "SHIP/ETH", "NANO/BTC", "NANO/ETH", "NANO/USD", "LNC/BTC", "UNC/BTC", "UNC/ETH", "RPX/BTC", "RPX/ETH", "RPX/USD", "KIN/ETH", "ARDR/USD", "DAXT/BTC", "DAXT/ETH", "FOTA/ETH", "FOTA/BTC", "SETH/BTC", "S/ETHBTC", "CVT/BTC", "CVT/ETH", "CVT/USD", "STQ/USD", "GNT/BTC", "GNT/ETH", "GNT/USD", "ADH/BTC", "ADH/ETH", "BBC/BTC", "BBC/ETH", "GET/BTC", "MITH/BTC", "MITH/ETH", "MITH/USD", "SUNC/ETH", "DADI/USD", "ACAT/BTC", "ACAT/ETH", "ACAT/USD", "BTX/USD", "VIO/ETH", "WIKI/BTC", "WIKI/ETH", "WIKI/USD", "ONT/BTC", "ONT/ETH", "ONT/USD", "FTX/BTC", "FTX/ETH", "FREC/BTC", "NAVI/BTC", "FREC/ETH", "FREC/USDT", "VME/ETH", "NAVI/ETH", "BTC/PBTC", "LND/ETH", "CSM/BTC", "NANJ/BTC", "MTC/BTC", "MTC/ETH", "MTC/USD", "NTK/BTC", "NTK/ETH", "NTK/USD", "AUC/BTC", "AUC/ETH", "CMCT/BTC", "CMCT/ETH", "CMCT/USD", "MAN/BTC", "MAN/ETH", "MAN/USD", "HIRE/BTC", "TKA/BTC", "TKA/ETH", "TKA/USD", "PNT/BTC", "PNT/ETH", "FXT/BTC", "NEXO/BTC", "CHX/BTC", "CHX/ETH", "CHX/USD", "PAT/BTC", "PAT/ETH", "XMC/BTC", "EJOY/BTC", "EJOY/ETH", "EJOY/USD", "TBAR/BTC", "TBAR/ETH", "TBAR/USD", "FXT/ETH", "HERO/BTC", "HERO/ETH", "XMC/ETH", "XMC/USDT", "STAK/BTC", "STAK/ETH", "FDZ/BTC", "FDZ/ETH", "FDZ/USD", "SPD/BTC", "SPD/ETH", "LUC/BTC", "MITX/BTC", "B2G/BTC", "B2G/USD", "LATX/BTC", "HBZ/BTC", "FACE/BTC", "FACE/ETH", "HBZ/ETH", "HBZ/USD", "ZPT/BTC", "ZPT/ETH", "ZPT/USD", "MORPH/BTC", "MORPH/ETH", "MORPH/USD"];

    public function getExchangeId()
    {
        return 2;
    }

    protected function getConnectorClass()
    {
        return new HitBTCConnector();
    }

    /**
     * @return HitBTCConnector
     */
    protected function getConnector()
    {
        /** @var HitBTCConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    public function isCrypto()
    {
        return true;
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

    public function search(Request $request)
    {
        $response = $this->getConnector()->search();
        $result = [];
        if (!$response) {
            return $result;
        }

        foreach ($response as $pair => $value) {
            if (!isset($this->pairs[$value->symbol])) {
                continue;
            }
            if(!$this->validate($this->pairs[$value->symbol])){
                continue;
            }
            $ticker = new TickerEntity();
            $ticker->setAsk((float)$value->ask);
            $ticker->setBid((float)$value->bid);
            $ticker->setVolume((float)$value->volume);
            $ticker->setValue((float)$value->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($this->pairs[$value->symbol]);
            $result[] = $ticker;
        }

        return $result;
    }
}