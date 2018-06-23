<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 23.06.2018
 * Time: 23:16
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class TidexConnector extends FounderConnector
{
    private $coins = ["ltc_btc","eth_btc","dash_btc","doge_btc","bts_btc","waves_btc","wct_btc","ltc_waves","eth_waves","dash_waves","doge_waves","bts_waves","wct_waves","steem_btc","steem_waves","wbtc_btc","incnt_btc","incnt_waves","b@_btc","b@_waves","mrt_btc","mrt_waves","mer_btc","mer_waves","tks_btc","tks_waves","aqua_btc","rbx_btc","aqua_waves","rbx_waves","btc_wusd","btc_weur","ltc_wusd","ltc_weur","eth_wusd","eth_weur","dash_wusd","dash_weur","waves_wusd","waves_weur","wgo_btc","wgo_waves","gnt_btc","edg_btc","rlc_btc","gnt_waves","edg_waves","rlc_waves","gnt_wusd","edg_wusd","rlc_wusd","gnt_weur","edg_weur","rlc_weur","icn_btc","icn_waves","icn_wusd","icn_weur","wings_btc","wings_waves","wings_wusd","wings_weur","vsl_btc","vsl_waves","vsl_wusd","vsl_weur","time_btc","time_waves","time_wusd","time_weur","taas_btc","taas_waves","taas_wusd","taas_weur","kolion_btc","kolion_waves","kolion_wusd","kolion_weur","riddle_btc","riddle_waves","riddle_wusd","riddle_weur","ant_btc","ant_waves","ant_wusd","ant_weur","efyt_btc","efyt_waves","efyt_wusd","efyt_weur","mgo_btc","mgo_waves","mgo_wusd","mgo_weur","wett_btc","wett_waves","wett_wusd","wett_weur","eett_btc","eett_waves","eett_wusd","eett_weur","qrl_btc","qrl_waves","qrl_wusd","qrl_weur","emgo_btc","emgo_waves","emgo_wusd","emgo_weur","bnt_btc","bnt_waves","bnt_wusd","bnt_weur","snm_btc","snm_waves","zrc_btc","zrc_waves","snt_btc","snt_waves","mco_btc","mco_waves","storj_btc","storj_waves","eos_btc","eos_waves","wgr_btc","wgr_waves","sta_btc","sta_waves","pbt_btc","pbt_waves","pbt_wusd","pbt_weur","bch_btc","bch_waves","bch_wusd","bch_weur","wct_wusd","wct_weur","sta_wusd","sta_weur","mrt_wusd","mrt_weur","zrc_wusd","zrc_weur","wsur_btc","wsur_waves","sur_btc","sur_waves","msp_btc","msp_waves","msp_wusd","msp_weur","inpay_btc","inpay_waves","mtl_btc","mtl_waves","aht_btc","aht_waves","ping_btc","ping_waves","eot_btc","eot_waves","ae_btc","ae_waves","pix_btc","pix_waves","credo_btc","credo_waves","life_btc","life_waves","mth_btc","mth_waves","mth_wusd","mth_weur","bmc_btc","bmc_waves","trct_btc","trct_waves","knc_btc","knc_waves","msd_btc","msd_waves","msd_wusd","msd_weur","sub_btc","sub_waves","enj_btc","enj_waves","evx_btc","evx_waves","ocl_btc","ocl_waves","eng_btc","eng_waves","waves_eth","ltc_eth","bch_eth","msd_eth","trct_eth","edg_eth","dash_eth","sub_eth","msp_eth","knc_eth","doge_eth","mer_eth","inpay_eth","ping_eth","zrc_eth","snm_eth","emgo_eth","evx_eth","eng_eth","enj_eth","bmc_eth","ae_eth","mtl_eth","la_btc","la_eth","prg_btc","prg_eth","icos_btc","icos_eth","icos_waves","btc_usdt","ltc_usdt","eth_usdt","waves_usdt","steem_usdt","dash_usdt","arn_btc","arn_eth","arn_waves","ryz_btc","ryz_waves","b2b_btc","b2b_eth","b2b_waves","cat_btc","cat_eth","cat_usdt","tdx_btc","tdx_eth","tdx_usdt","tdx_waves","tdx_wusd","tdx_weur","snov_btc","snov_eth","snov_usdt","drgn_btc","drgn_eth","drgn_usdt","tie_btc","tie_eth","trx_btc","trx_eth","wax_btc","wax_eth","agi_btc","agi_eth","vee_btc","vee_eth","omg_btc","omg_eth","srn_btc","srn_eth","tio_btc","tio_eth","sol_btc","sol_eth","agi_usdt","zrx_btc","zrx_eth","bar_btc","bar_eth","key_btc","key_eth","idh_btc","idh_eth","bdg_btc","bdg_eth","cpc_btc","cpc_eth","stq_btc","stq_eth","mtn_btc","mtn_eth","bins_btc","bins_eth","plc_btc","plc_eth","dth_btc","dth_eth","ntk_btc","ntk_eth","ren_btc","ren_eth","cs_btc","cs_eth","rem_btc","rem_eth","dmt_btc","dmt_eth","hkn_btc","hkn_eth","tbar_btc","tbar_eth","wusd_usdt","weur_usdt","drop_btc","drop_eth","hav_btc","hav_eth","loom_btc","loom_eth","echt_btc","echt_eth","ven_btc","ven_eth","crpt_btc","crpt_eth","sen_btc","sen_eth","hur_btc","hur_eth","svd_btc","svd_eth","fsn_btc","fsn_eth","poa_btc","poa_eth","npxs_btc","npxs_eth"];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();

        foreach ($this->coins as $currency) {
            $curly[$currency] = curl_init();
            curl_setopt($curly[$currency], CURLOPT_URL, "https://api.tidex.com/api/3/ticker/" . $currency);
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