<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 16:55
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class ZaifConnector extends FounderConnector
{
    private $currenciesArray = ["bch_jpy" => "BCH/JPY", "zaif_jpy" => "ZAIF/JPY", "ncxc_btc" => "NCXC/BTC", "cicc_btc" => "CICC/BTC", "cseth_eth" => "CSETH/ETH", "csbtc_btc" => "CSBTC/BTC", "fscc_btc" => "FSCC/BTC", "ncxc_jpy" => "NCXC/JPY", "bitcrystals_jpy" => "BITCRYSTALS/JPY", "btc_jpy" => "BTC/JPY", "sjcx_btc" => "SJCX/BTC", "zaif_btc" => "ZAIF/BTC", "xcp_jpy" => "XCP/JPY", "mona_btc" => "MONA/BTC", "eth_jpy" => "ETH/JPY", "bitcrystals_btc" => "BITCRYSTALS/BTC", "pepecash_btc" => "PEPECASH/BTC", "eth_btc" => "ETH/BTC", "erc20.cms_jpy" => "ERC20.CMS/JPY", "fscc_jpy" => "FSCC/JPY", "xcp_btc" => "XCP/BTC", "xem_jpy" => "XEM/JPY", "xem_btc" => "XEM/BTC", "jpyz_jpy" => "JPYZ/JPY", "cicc_jpy" => "CICC/JPY", "mona_jpy" => "MONA/JPY", "bch_btc" => "BCH/BTC", "mosaic.cms_jpy" => "MOSAIC.CMS/JPY", "sjcx_jpy" => "SJCX/JPY", "pepecash_jpy" => "PEPECASH/JPY"];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();

        foreach ($this->currenciesArray as $currencyCode => $currency) {
            $curly[$currency] = curl_init();
            curl_setopt($curly[$currency], CURLOPT_URL, "https://api.zaif.jp/api/1/ticker/" . $currencyCode);
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