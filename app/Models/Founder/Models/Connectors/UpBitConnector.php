<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 23.06.2018
 * Time: 1:48
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class UpBitConnector extends FounderConnector
{
    private $coins = [
        "KRW-BTC", "KRW-DASH", "KRW-ETH", "BTC-NEO", "BTC-ETH", "BTC-LTC", "BTC-STRAT", "BTC-XRP", "BTC-ETC", "BTC-OMG", "BTC-CVC", "BTC-DGB", "BTC-PAY", "BTC-SC", "BTC-SNT", "BTC-DASH", "BTC-XVG", "BTC-WAVES", "BTC-NMR", "BTC-SYNX", "BTC-PIVX", "BTC-GBYTE", "BTC-XEM", "BTC-ZEC", "BTC-XMR", "BTC-LBC", "BTC-QTUM", "BTC-GNT", "BTC-NXT", "BTC-BAT", "BTC-XEL", "BTC-EDG", "BTC-LSK", "BTC-RDD", "BTC-DCT", "BTC-STEEM", "BTC-GAME", "BTC-FCT", "BTC-PTOY", "BTC-DCR", "BTC-DOGE", "BTC-BNT", "BTC-XLM", "BTC-PART", "BTC-MCO", "BTC-UBQ", "BTC-ARDR", "BTC-KMD", "BTC-ARK", "BTC-ADX", "BTC-SYS", "BTC-ANT", "BTC-MUE", "BTC-XDN", "BTC-STORJ", "BTC-QRL", "BTC-NXS", "BTC-GRS", "BTC-VTC", "BTC-CLOAK", "BTC-SIB", "BTC-REP", "BTC-VIA", "BTC-WINGS", "BTC-CFI", "BTC-UNB", "BTC-NBT", "BTC-SWT", "BTC-SLS", "BTC-MONA", "BTC-AMP", "BTC-HMQ", "BTC-TX", "BTC-RLC", "BTC-BLOCK", "BTC-DYN", "BTC-GUP", "BTC-MEME", "BTC-OK", "BTC-XZC", "BTC-ADT", "BTC-FTC", "BTC-ION", "BTC-BSD", "BTC-GNO", "BTC-EMC2", "BTC-EXCL", "BTC-SPHR", "BTC-EXP", "BTC-BITB", "BTC-BAY", "BTC-VRC", "BTC-BURST", "BTC-SHIFT", "BTC-BLK", "BTC-ZEN", "BTC-KORE", "BTC-RADS", "ETH-NEO", "ETH-LTC", "ETH-STRAT", "ETH-XRP", "ETH-ETC", "ETH-OMG", "ETH-CVC", "ETH-DGB", "ETH-PAY", "ETH-SC", "ETH-SNT", "ETH-DASH", "ETH-WAVES", "ETH-NMR", "ETH-XEM", "ETH-ZEC", "ETH-XMR", "ETH-QTUM", "ETH-GNT", "ETH-BAT", "ETH-FCT", "ETH-PTOY", "ETH-BNT", "ETH-XLM", "ETH-MCO", "ETH-ADX", "ETH-ANT", "ETH-STORJ", "ETH-QRL", "ETH-REP", "ETH-WINGS", "ETH-CFI", "ETH-HMQ", "ETH-RLC", "ETH-GUP", "ETH-ADT", "ETH-GNO", "USDT-BTC", "USDT-NEO", "USDT-ETH", "USDT-LTC", "USDT-XRP", "USDT-ETC", "USDT-DASH", "USDT-ZEC", "USDT-XMR", "KRW-NEO", "KRW-MTL", "KRW-LTC", "KRW-STRAT", "KRW-XRP", "KRW-ETC", "KRW-OMG", "KRW-SNT", "KRW-WAVES", "KRW-PIVX", "KRW-XEM", "KRW-ZEC", "KRW-XMR", "KRW-QTUM", "KRW-GNT", "KRW-LSK", "KRW-STEEM", "KRW-XLM", "KRW-ARDR", "KRW-KMD", "KRW-ARK", "KRW-STORJ", "KRW-GRS", "KRW-VTC", "KRW-REP", "KRW-EMC2", "BTC-IOP", "BTC-NAV", "KRW-ADA", "BTC-ADA", "BTC-MANA", "ETH-MANA", "USDT-OMG", "BTC-SALT", "ETH-SALT", "KRW-SBD", "BTC-SBD", "KRW-TIX", "BTC-TIX", "ETH-TIX", "BTC-RCN", "ETH-RCN", "BTC-VIB", "ETH-VIB", "KRW-POWR", "BTC-POWR", "ETH-POWR", "KRW-MER", "BTC-MER", "BTC-BTG", "ETH-BTG", "KRW-BTG", "USDT-XVG", "USDT-ADA", "USDT-BTG", "USDT-NXT", "BTC-ENG", "BTC-UKG", "BTC-DNT", "BTC-IGNIS", "BTC-SRN", "ETH-SRN", "BTC-WAX", "ETH-WAX", "BTC-ZRX", "ETH-ZRX", "ETH-VEE", "BTC-VEE", "BTC-BCPT", "ETH-BCPT", "BTC-TRX", "ETH-TRX", "BTC-TUSD", "BTC-LRC", "ETH-LRC", "BTC-RVR", "ETH-TUSD", "BTC-UP", "ETH-UP", "KRW-ICX", "KRW-EOS", "KRW-STORM", "ETH-ADA", "ETH-DNT", "ETH-ENG", "ETH-UKG", "BTC-DMT", "ETH-DMT", "USDT-TUSD", "BTC-LUN", "ETH-LUN", "KRW-TRX", "BTC-POLY", "ETH-POLY", "BTC-EMC", "KRW-MCO", "BTC-PRO", "ETH-PRO", "USDT-SC", "USDT-TRX", "KRW-SC", "KRW-GTO", "KRW-IGNIS", "KRW-ONT", "KRW-DCR", "KRW-ZIL", "BTC-BLT", "ETH-BLT", "BTC-STORM", "ETH-STORM", "BTC-AID", "ETH-AID", "BTC-NGC", "ETH-NGC", "BTC-GTO", "ETH-GTO", "USDT-DCR", "BTC-OCN", "ETH-OCN", "KRW-POLY", "KRW-ZRX", "BTC-TUBE", "KRW-SRN", "KRW-LOOM", "BTC-CMCT", "BTC-BCH", "ETH-BCH", "USDT-BCH", "KRW-BCH"
    ];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();

        foreach ($this->coins as $currency) {
            $curly[$currency] = curl_init();
            curl_setopt($curly[$currency], CURLOPT_URL, "https://api.upbit.com/v1/ticker?markets=" . $currency);
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