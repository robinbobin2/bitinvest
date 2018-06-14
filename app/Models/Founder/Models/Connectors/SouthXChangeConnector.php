<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 16:52
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class SouthXChangeConnector extends FounderConnector
{
    private $coins = [["DASH","BTC"],["LTC","BTC"],["ZEIT","LTC"],["DOGE","BTC"],["BSD","BTC"],["NMC","BTC"],["PTC","BTC"],["VTC","BTC"],["MANNA","BTC"],["ZEIT","BTC"],["BTC","USNBT"],["MINT","BTC"],["XVG","BTC"],["USNBT","USD"],["BTA","BTC"],["BTC","USD"],["PPC","BTC"],["LTC","USD"],["MANNA","USD"],["NXT","BTC"],["ETH","BTC"],["ETH","USD"],["XMR","BTC"],["XMR","USD"],["STRAT","BTC"],["STRAT","USD"],["ICE","BTC"],["ICE","USD"],["BCH","BTC"],["BCH","USD"],["DASH","USD"],["MSR","BTC"],["MSR","USD"],["MRN","BTC"],["MRN","USD"],["FLB","BTC"],["CHA","BTC"],["CHRC","LTC"],["SUP","BTC"],["SUP","USD"],["XGOX","BTC"],["XGOX","LTC"],["RESTORE","BTC"],["RESTORE","LTC"],["RESTORE","USD"],["STAR","BTC"],["MBCH","BTC"],["CYR","BTC"],["ETH","USNBT"],["XGOX","USD"],["INXT","BTC"],["INXT","USD"],["BTG","USD"],["BTG","BTC"],["NSR","BTC"],["NSR","USNBT"],["SMS","BTC"],["SMS","USD"],["EGOLD","BTC"],["LXMI","BTC"],["RGC","BTC"],["MTC","BTC"],["MTC","USD"],["ETH","BCH"],["DASH","BCH"],["XMR","BCH"],["XVG","BCH"],["XVG","USD"],["CHA","BCH"],["LTC","BCH"],["BCH","USNBT"],["AC3","BTC"],["MLM","BTC"],["MLM","LTC"],["MLM","USD"],["GTOK","BTC"],["GTOK","LTC"],["MNB","BTC"],["EXC","BTC"],["EXC","USD"],["EXC","BCH"],["BOXY","BTC"],["GCN","LTC"],["GCN","USNBT"],["GCN","USD"],["GCN","BCH"],["ZEIT","USD"],["DVLP","BTC"],["GCN","BTC"],["POLIS","BTC"],["POLIS","LTC"],["POLIS","BCH"],["POLIS","USD"],["MNB","USD"],["DOGE","USD"],["WCO","BTC"],["WCO","LTC"],["WCO","USNBT"],["WCO","USD"],["WCO","BCH"],["STEEP","BTC"],["STEEP","LTC"],["STEEP","USNBT"],["STEEP","USD"],["STEEP","BCH"],["PNX","BTC"],["PNX","LTC"],["PNX","USNBT"],["PNX","USD"],["PNX","BCH"],["SMT","BTC"],["SMT","USD"],["TWNKL","BTC"],["TWNKL","LTC"],["TWNKL","USNBT"],["TWNKL","USD"],["TWNKL","BCH"],["SMT","LTC"],["SMT","USNBT"],["SMT","BCH"],["RPT","BTC"],["RPT","LTC"],["RPT","USNBT"],["RPT","USD"],["RPT","BCH"],["DGM","BTC"],["CBS","BTC"],["TUN","BTC"],["BART","BTC"],["BART","USD"],["JS","BTC"],["JS","USD"],["ICC","BTC"],["ICC","USD"],["RAP","BTC"],["QBIC","BTC"],["SAROS","BTC"],["SAROS","USD"],["RVC","BTC"],["RVC","USD"],["XSH","BTC"],["XSH","USD"],["DNR","BTC"],["DNR","USD"],["DNR","LTC"],["DNR","BCH"],["SPK","BTC"],["SPK","USD"],["ACH","BTC"],["ACH","USD"],["VEGI","USD"],["VEGI","BTC"],["BHD","BTC"],["BHD","USD"],["GPA","BTC"],["GPA","USD"],["BBP","USD"],["BBP","BTC"],["LMN","BTC"],["LMN","USD"],["ERZ","USD"],["ERZ","BTC"],["FXC","BTC"],["FXC","USD"],["DIN","USD"],["DIN","BTC"],["BTC","CNNBT"],["ETH","CNNBT"],["BCH","CNNBT"],["BITM","BTC"],["BITM","USD"],["NYX","USD"],["NYX","BTC"],["XSG","USD"],["XSG","BTC"],["OMEGA","BTC"],["OMEGA","USD"],["WHITE","USD"],["WHITE","BTC"],["WHITE","LTC"],["WHITE","BCH"],["WHITE","USNBT"],["EEC","USD"],["EEC","BTC"],["BEET","BTC"],["BEET","USD"],["ESCO","USD"],["ESCO","BTC"],["EXUS","BTC"],["EXUS","USD"],["RC","USD"],["RC","BTC"],["RACE","USD"],["RACE","BTC"],["PBS","BTC"],["PBS","USD"],["LCC","BTC"],["LCC","USD"],["LCC","LTC"],["LCC","BCH"],["AC3","DASH"],["ACH","DASH"],["USDT","USD"],["BART","DASH"],["BBP","DASH"],["BEET","DASH"],["BHD","DASH"],["BOXY","DASH"],["BSD","DASH"],["BTA","DASH"],["BITM","DASH"],["CBS","DASH"],["CHA","DASH"],["CYR","DASH"],["DGM","DASH"],["DIN","DASH"],["DNR","DASH"],["DOGE","DASH"],["DVLP","DASH"],["EEC","DASH"],["EGOLD","DASH"],["ERZ","DASH"],["ESCO","DASH"],["EXC","DASH"],["EXUS","DASH"],["FXC","DASH"],["GCN","DASH"],["GPA","DASH"],["GTOK","DASH"],["ICC","DASH"],["ICE","DASH"],["INXT","DASH"],["JS","DASH"],["LCC","DASH"],["LMN","DASH"],["LXMI","DASH"],["MANNA","DASH"],["MBCH","DASH"],["MINT","DASH"],["MLM","DASH"],["MNB","DASH"],["MRN","DASH"],["MSR","DASH"],["MTC","DASH"],["NMC","DASH"],["NXT","DASH"],["NYX","DASH"],["OMEGA","DASH"],["PBS","DASH"],["PNX","DASH"],["POLIS","DASH"],["PPC","DASH"],["PTC","DASH"],["QBIC","DASH"],["RACE","DASH"],["RAP","DASH"],["RC","DASH"],["RESTORE","DASH"],["RGC","DASH"],["RPT","DASH"],["RVC","DASH"],["SAROS","DASH"],["SMS","DASH"],["SMT","DASH"],["XSG","DASH"],["SPK","DASH"],["STAR","DASH"],["STEEP","DASH"],["STRAT","DASH"],["SUP","DASH"],["TUN","DASH"],["TWNKL","DASH"],["VEGI","DASH"],["VTC","DASH"],["WCO","DASH"],["WHITE","DASH"],["XGOX","DASH"],["XMR","DASH"],["XSH","DASH"],["XVG","DASH"],["ZEIT","DASH"],["BLTG","USD"],["BLTG","BTC"],["VTAR","BTC"],["VTAR","USD"],["PINK","USD"],["PINK","BTC"],["TIMEC","BTC"],["TIMEC","USD"],["DVRS","USD"],["DVRS","BTC"],["SMLY","BTC"],["SMLY","USD"],["NIHL","USD"],["NIHL","BTC"],["NIHL","DASH"],["BTCF","BTC"],["BTCF","USD"],["ROE","USD"],["ROE","BTC"],["ZACA","BTC"],["ZACA","USD"],["TUSD","USD"],["BTC","TUSD"],["XSR","BTC"],["XSR","USD"],["DERO","USD"],["DERO","BTC"],["BWS","BTC"],["BWS","USD"],["STAK","USD"],["STAK","BTC"],["XAX","BTC"],["XAX","USD"],["ULT","USD"],["ULT","BTC"],["FTO","BTC"],["FTO","USD"],["LTC","TUSD"],["ETH","TUSD"],["BCH","TUSD"],["KREDS","BTC"],["EPC","BTC"],["MON","BTC"],["CRU","BTC"],["BTCX","BTC"],["BTCX","LTC"],["COMP","BTC"],["CARE","BTC"],["BKS","BTC"],["XHV","BTC"],["RABBIT","BTC"],["SNBL","BTC"],["BUEN","BTC"],["BLAST","BTC"]];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();

        foreach ($this->coins as $currencyArray) {
            list($currencyBase, $currencyQuote) = $currencyArray;
            $currency = $currencyBase . "/" . $currencyQuote;
            $curly[$currency] = curl_init();
            curl_setopt($curly[$currency], CURLOPT_URL, "https://www.southxchange.com/api/price/" . $currency);
            curl_setopt($curly[$currency], CURLOPT_HEADER, 0);
            curl_setopt($curly[$currency], CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($curly[$currency], CURLOPT_TIMEOUT, 30);
            curl_setopt($curly[$currency], CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($curly[$currency], CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($curly[$currency], CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($curly[$currency], CURLOPT_USERAGENT, "Mozilla/5.0(Windows;U;WindowsNT5.1;ru;rv:1.9.0.4)Gecko/2008102920AdCentriaIM/1.7Firefox/3.0.4");
            curl_multi_add_handle($mh, $curly[$currency]);
        }

        $running = null;
        do {
            curl_multi_exec($mh, $running);
        } while ($running > 0);

        foreach ($curly as $id => $c) {
            $result[$id] = json_decode(curl_multi_getcontent($c));
            curl_multi_remove_handle($mh, $c);
        }
        curl_multi_close($mh);
        return $result;
    }
}