<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 11:16
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class BitFinexConnector extends FounderConnector
{
    private $coins = ["btcusd","ltcusd","ltcbtc","ethusd","ethbtc","etcbtc","etcusd","rrtusd","rrtbtc","zecusd","zecbtc","xmrusd","xmrbtc","dshusd","dshbtc","btceur","btcjpy","xrpusd","xrpbtc","iotusd","iotbtc","ioteth","eosusd","eosbtc","eoseth","sanusd","sanbtc","saneth","omgusd","omgbtc","omgeth","bchusd","bchbtc","bcheth","neousd","neobtc","neoeth","etpusd","etpbtc","etpeth","qtmusd","qtmbtc","qtmeth","avtusd","avtbtc","avteth","edousd","edobtc","edoeth","btgusd","btgbtc","datusd","datbtc","dateth","qshusd","qshbtc","qsheth","yywusd","yywbtc","yyweth","gntusd","gntbtc","gnteth","sntusd","sntbtc","snteth","ioteur","batusd","batbtc","bateth","mnausd","mnabtc","mnaeth","funusd","funbtc","funeth","zrxusd","zrxbtc","zrxeth","tnbusd","tnbbtc","tnbeth","spkusd","spkbtc","spketh","trxusd","trxbtc","trxeth","rcnusd","rcnbtc","rcneth","rlcusd","rlcbtc","rlceth","aidusd","aidbtc","aideth","sngusd","sngbtc","sngeth","repusd","repbtc","repeth","elfusd","elfbtc","elfeth","btcgbp","etheur","ethjpy","ethgbp","neoeur","neojpy","neogbp","eoseur","eosjpy","eosgbp","iotjpy","iotgbp","iosusd","iosbtc","ioseth","aiousd","aiobtc","aioeth","requsd","reqbtc","reqeth","rdnusd","rdnbtc","rdneth","lrcusd","lrcbtc","lrceth","waxusd","waxbtc","waxeth","daiusd","daibtc","daieth","cfiusd","cfibtc","cfieth","agiusd","agibtc","agieth","bftusd","bftbtc","bfteth","mtnusd","mtnbtc","mtneth","odeusd","odebtc","odeeth","antusd","antbtc","anteth","dthusd","dthbtc","dtheth","mitusd","mitbtc","miteth","stjusd","stjbtc","stjeth","xlmusd","xlmeur","xlmjpy","xlmgbp","xlmbtc","xlmeth","xvgusd","xvgeur","xvgjpy","xvggbp","xvgbtc","xvgeth","bciusd","bcibtc","mkrusd","mkrbtc","mkreth","venusd","venbtc","veneth","kncusd","kncbtc","knceth","poausd","poabtc","poaeth","lymusd","lymbtc","lymeth","utkusd","utkbtc","utketh","veeusd","veebtc","veeeth","dadusd","dadbtc","dadeth"];

    public function search()
    {
        $curly = [];
        $result = [];
        $mh = curl_multi_init();

        foreach ($this->coins as $currency) {
            $curly[$currency] = curl_init();
            curl_setopt($curly[$currency], CURLOPT_URL, "https://api.bitfinex.com/v1/pubticker/" . $currency);
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