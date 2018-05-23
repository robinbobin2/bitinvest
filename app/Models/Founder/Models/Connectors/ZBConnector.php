<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 16:55
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class ZBConnector extends FounderConnector
{
    private $currenciesArray = [
        "zb_qc",
        "zb_usdt",
        "zb_btc",
        "btc_qc",
        "btc_usdt",
        "bcc_usdt",
        "ltc_usdt",
        "eth_usdt",
        "etc_usdt",
        "bts_usdt",
        "eos_usdt",
        "qtum_usdt",
        "hsr_usdt",
        "xrp_usdt",
        "dash_usdt",
        "ubtc_usdt",
        "bcd_usdt",
        "bcc_qc",
        "ltc_qc",
        "eth_qc",
        "etc_qc",
        "bts_qc",
        "eos_qc",
        "qtum_qc", "hsr_qc", "xrp_qc", "dash_qc", "usdt_qc", "ubtc_qc", "bcd_qc", "bcc_btc", "ltc_btc",
        "eth_btc", "etc_btc", "bts_btc", "eos_btc", "qtum_btc", "hsr_btc", "xrp_btc", "dash_btc", "ubtc_btc",
        "bcd_btc", "sbtc_usdt", "sbtc_qc", "sbtc_btc", "ink_usdt", "ink_qc", "ink_btc", "tv_usdt", "tv_qc",
        "tv_btc", "bcx_usdt", "bcx_qc", "bcx_btc", "bth_usdt", "bth_qc", "bth_btc", "lbtc_usdt", "lbtc_qc",
        "lbtc_btc", "chat_usdt", "chat_qc", "chat_btc", "hlc_usdt", "hlc_qc", "hlc_btc", "bcw_usdt", "bcw_qc",
        "bcw_btc", "btp_usdt", "btp_qc", "btp_btc", "bitcny_qc", "topc_usdt", "topc_qc", "topc_btc", "ent_usdt",
        "ent_qc", "ent_btc", "bat_usdt", "bat_qc", "bat_btc", "1st_usdt", "1st_qc", "1st_btc", "safe_usdt",
        "safe_qc", "safe_btc", "qun_usdt", "qun_qc", "qun_btc", "btn_usdt", "btn_qc", "btn_btc", "true_usdt",
        "true_qc", "true_btc", "cdc_usdt", "cdc_qc", "cdc_btc", "ddm_usdt", "ddm_qc", "ddm_btc", "bite_btc",
        "hotc_usdt", "hotc_qc", "hotc_btc", "xuc_qc", "xuc_btc", "epc_qc", "epc_btc", "bds_qc", "bds_btc",
        "gram_qc", "gram_usdt", "gram_btc", "doge_qc", "doge_usdt", "doge_btc", "neo_qc", "neo_usdt", "neo_btc",
        "omg_qc", "omg_usdt", "omg_btc", "hpy_qc", "hpy_usdt", "hpy_btc", "btm_qc", "btm_usdt", "btm_btc", "snt_qc",
        "snt_usdt", "snt_btc", "ae_qc", "ae_usdt", "ae_btc", "icx_qc", "icx_usdt", "icx_btc", "zrx_qc", "zrx_usdt",
        "zrx_btc", "edo_qc", "edo_usdt", "edo_btc", "fun_qc", "fun_usdt", "fun_btc", "mana_qc", "mana_usdt",
        "mana_btc", "rcn_qc", "rcn_usdt", "rcn_btc", "xlm_qc", "xlm_usdt", "xlm_btc", "mco_qc", "mco_usdt",
        "mco_btc", "mith_qc", "mith_usdt", "mith_btc", "knc_qc", "knc_usdt", "knc_btc", "gnt_qc", "gnt_usdt",
        "gnt_btc", "mtl_qc", "mtl_usdt", "mtl_btc", "sub_qc", "sub_usdt", "sub_btc", "xem_qc", "xem_usdt", "xem_btc",
        "eosdac_qc", "eosdac_usdt", "eosdac_btc", "kan_qc", "kan_usdt", "kan_btc", "bcc_zb", "ltc_zb", "eth_zb",
        "etc_zb", "bts_zb", "eos_zb", "qtum_zb", "hsr_zb", "xrp_zb", "dash_zb"];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();

        foreach ($this->currenciesArray as $currency) {
            $curly[$currency] = curl_init();
            curl_setopt($curly[$currency], CURLOPT_URL, "http://api.zb.com/data/v1/ticker?market=" . $currency);
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