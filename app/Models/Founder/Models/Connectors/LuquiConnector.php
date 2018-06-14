<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 16:48
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\Custom\SupplierLog;
use App\Models\Founder\Models\FounderConnector;

class LuquiConnector extends FounderConnector
{
    public function search()
    {
        return $this->sendRequest();
    }

    public function sendRequest()
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "https://api.liqui.io/api/3/ticker/ltc_btc-steem_btc-sbd_btc-dash_btc-ans_btc-dct_btc-icn_btc-eth_btc-xzc_btc-golos_btc-gbg_btc-gnt_btc-wings_btc-plu_btc-round_btc-vsl_btc-1st_btc-waves_btc-incnt_btc-mln_btc-time_btc-gnt_eth-ltc_eth-dash_eth-1st_eth-icn_eth-mln_eth-round_eth-waves_eth-time_eth-vsl_eth-plu_eth-incnt_eth-ltc_usdt-btc_usdt-dash_usdt-eth_usdt-icn_usdt-gnt_usdt-round_usdt-vsl_usdt-1st_usdt-waves_usdt-mln_usdt-time_usdt-rep_btc-edg_btc-rep_eth-edg_eth-rep_usdt-edg_usdt-rlc_btc-rlc_eth-rlc_usdt-trst_btc-trst_eth-trst_usdt-wings_eth-wings_usdt-plu_usdt-incnt_usdt-gno_btc-gno_eth-gno_usdt-gup_btc-gup_eth-gup_usdt-taas_btc-taas_eth-taas_usdt-lun_btc-lun_eth-lun_usdt-tkn_btc-tkn_eth-tkn_usdt-hmq_btc-hmq_eth-hmq_usdt-bcap_btc-bcap_eth-bcap_usdt-ant_btc-ant_eth-ant_usdt-bat_btc-bat_eth-bat_usdt-qrl_btc-qrl_eth-qrl_usdt-bnt_btc-bnt_eth-bnt_usdt-mgo_btc-mgo_eth-mgo_usdt-myst_btc-myst_eth-myst_usdt-sngls_btc-sngls_eth-sngls_usdt-ptoy_btc-ptoy_eth-ptoy_usdt-cfi_btc-cfi_eth-cfi_usdt-snm_btc-snm_eth-snm_usdt-snt_btc-snt_eth-snt_usdt-mco_btc-mco_eth-mco_usdt-storj_btc-storj_eth-storj_usdt-adx_btc-adx_eth-adx_usdt-eos_btc-eos_eth-eos_usdt-pay_btc-pay_eth-pay_usdt-xid_btc-xid_eth-xid_usdt-omg_btc-omg_eth-omg_usdt-san_btc-san_eth-san_usdt-qtum_btc-qtum_eth-qtum_usdt-cvc_btc-cvc_eth-cvc_usdt-net_btc-net_eth-net_usdt-dgd_btc-dgd_eth-dgd_usdt-oax_btc-oax_eth-oax_usdt-bcc_btc-bcc_eth-bcc_usdt-dnt_btc-dnt_eth-dnt_usdt-stx_btc-stx_eth-stx_usdt-zrx_btc-zrx_eth-zrx_usdt-tnt_btc-tnt_eth-tnt_usdt-ae_btc-ae_eth-ae_usdt-ven_btc-ven_eth-ven_usdt-bmc_btc-bmc_eth-bmc_usdt-mana_btc-mana_eth-mana_usdt-pro_btc-pro_eth-pro_usdt-knc_btc-knc_eth-knc_usdt-salt_btc-salt_eth-salt_usdt-ind_btc-ind_eth-ind_usdt-trx_btc-trx_eth-trx_usdt-eng_btc-eng_eth-eng_usdt-ast_btc-ast_eth-ast_usdt-req_btc-req_eth-req_usdt-neu_btc-neu_eth-neu_usdt-srn_btc-srn_eth-srn_usdt-ins_btc-ins_eth-ins_usdt-aion_btc-aion_eth-aion_usdt-wpr_btc-wpr_eth-wpr_usdt-ren_btc-ren_eth-ren_usdt-ldc_btc-ldc_eth-ldc_usdt-enj_btc-enj_eth-enj_usdt-cln_btc-cln_eth-cln_usdt-agi_btc-agi_eth-agi_usdt");
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        SupplierLog::log("search", $result, 47);
        return json_decode($result);
    }
}