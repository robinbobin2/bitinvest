<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 23.06.2018
 * Time: 22:31
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\Custom\SupplierLog;
use App\Models\Founder\Models\FounderConnector;

class WenzConnector extends FounderConnector
{
    public function search()
    {
        return $this->sendRequest();
    }

    public function sendRequest()
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "https://wex.nz/api/3/ticker/btc_usd-btc_rur-btc_eur-ltc_btc-ltc_usd-ltc_rur-ltc_eur-nmc_btc-nmc_usd-nvc_btc-nvc_usd-usd_rur-eur_usd-eur_rur-ppc_btc-ppc_usd-dsh_btc-dsh_usd-dsh_rur-dsh_eur-dsh_ltc-dsh_eth-dsh_zec-eth_btc-eth_usd-eth_eur-eth_ltc-eth_rur-eth_zec-bch_usd-bch_btc-bch_rur-bch_eur-bch_ltc-bch_eth-bch_dsh-bch_zec-zec_btc-zec_usd-zec_ltc-usdet_usd-ruret_rur-euret_eur-btcet_btc-ltcet_ltc-ethet_eth-nmcet_nmc-nvcet_nvc-ppcet_ppc-dshet_dsh-bchet_bch-usdt_usd");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        SupplierLog::log("search", $result, 87);
        return json_decode($result);
    }
}