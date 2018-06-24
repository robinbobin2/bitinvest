<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 23.06.2018
 * Time: 22:14
 */

namespace App\Models\Founder\Models\Providers;


use App\Models\Founder\Models\Connectors\CoinbeneConnector;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;

class CoinbeneProvider extends FounderProvider
{
    private $coins = ["ABTETH" => "ABT/ETH","ABTUSDT" => "ABT/USD","ABYSSETH" => "ABYSS/ETH","ADDETH" => "ADD/ETH","ADIETH" => "ADI/ETH","AEUSDT" => "AEU/SDT","AIDOCBTC" => "AIDOC/BTC","AIDOCETH" => "AIDOC/ETH","ALIETH" => "ALI/ETH","ALXETH" => "ALX/ETH","ATXBTC" => "ATX/BTC","BCDUSDT" => "BCD/USD","BCHUSDT" => "BCH/USD","BCOOUSDT" => "BCOO/USD","BEAUTYETH" => "BEAUTY/ETH","BEZBTC" => "BEZ/BTC","BEZETH" => "BEZ/ETH","BEZUSDT" => "BEZ/USD","BGXETH" => "BGX/ETH","BKXETH" => "BKX/ETH","BSTNETH" => "BSTN/ETH","BTCUSDT" => "BTC/USD","BVTETH" => "BVT/ETH","CANETH" => "CAN/ETH","CCCETH" => "CCC/ETH","CLOUTETH" => "CLOUT/ETH","CMTETH" => "CMT/ETH","CMTUSDT" => "CMT/USD","CNNBTC" => "CNN/BTC","CNNETH" => "CNN/ETH","CNNUSDT" => "CNN/USD","CONIBTC" => "CONI/BTC","CONIETH" => "CONI/ETH","CPUETH" => "CPU/ETH","CPUUSDT" => "CPU/USD","CREDOETH" => "CREDO/ETH","CSETH" => "CS/ETH","CSUSDT" => "CSU/SDT","CTXCETH" => "CTXC/ETH","DOCKETH" => "DOCK/ETH","DUCBTC" => "DUC/BTC","EOSUSDT" => "EOS/USD","ETCUSDT" => "ETC/USD","ETHBTC" => "ETH/BTC","ETHUSDT" => "ETH/USD","ETKBTC" => "ETK/BTC","ETPBTC" => "ETP/BTC","FABETH" => "FAB/ETH","FACCETH" => "FACC/ETH","FNDETH" => "FND/ETH","FNKOSETH" => "FNKOS/ETH","GETXETH" => "GETX/ETH","GVEETH" => "GVE/ETH","HLCBTC" => "HLC/BTC","IHTUSDT" => "IHT/USD","INKETH" => "INK/ETH","IVYETH" => "IVY/ETH","LEEKBTC" => "LEEK/BTC","LEEKETH" => "LEEK/ETH","LTCBTC" => "LTC/BTC","LTCUSDT" => "LTC/USD","LUCETH" => "LUC/ETH","MDAUSDT" => "MDA/USD","MOACUSDT" => "MOAC/USD","MTETH" => "MT/ETH","MTNETH" => "MTN/ETH","MTUSDT" => "MTU/SDT","NBAIETH" => "NBAI/ETH","NCASHBTC" => "NCASH/BTC","NPXSETH" => "NPXS/ETH","NPXSUSDT" => "NPXS/USD","NULSUSDT" => "NULS/USD","OMGUSDT" => "OMG/USD","OMXETH" => "OMX/ETH","ORMEBTC" => "ORME/BTC","PALETH" => "PAL/ETH","PCHETH" => "PCH/ETH","PLAYBTC" => "PLAY/BTC","RCTUSDT" => "RCT/USD","SEELEETH" => "SEELE/ETH","SGCCETH" => "SGCC/ETH","SHEBTC" => "SHE/BTC","SMARTUSDT" => "SMART/USD","SRCOINBTC" => "SRCOIN/BTC","SRCOINETH" => "SRCOIN/ETH","STBETH" => "STB/ETH","STQBTC" => "STQ/BTC","SWTCUSDT" => "SWTC/USD","TCTBTC" => "TCT/BTC","TENBTC" => "TEN/BTC","TENETH" => "TEN/ETH","THMETH" => "THM/ETH","THMUSDT" => "THM/USD","TNBUSDT" => "TNB/USD","TRFBTC" => "TRF/BTC","TRUEETH" => "TRUE/ETH","TRXUSDT" => "TRX/USD","TSLBTC" => "TSL/BTC","TTTUSDT" => "TTT/USD","VMEBTC" => "VME/BTC","VMEETH" => "VME/ETH","VSCETH" => "VSC/ETH","XAPCETH" => "XAPC/ETH","XMCTETH" => "XMCT/ETH","XMCTUSDT" => "XMCT/USD","XNKETH" => "XNK/ETH","XRPUSDT" => "XRP/USD","ZDCBTC" => "ZDC/BTC","ZGCBTC" => "ZGC/BTC","ZIBERUSDT" => "ZIBER/USD","ZIPTETH" => "ZIPT/ETH"];
    /**
     * @return CoinbeneConnector
     */
    protected function getConnector()
    {
        /** @var CoinbeneConnector $connector */
        $connector = parent::getConnector();
        return $connector;
    }

    /**
     * @param Request $request
     * @return TickerEntity[]
     */
    public function search(Request $request)
    {
        $response = [];
        $result = $this->getConnector()->search();

        if (!$result) {
            return $response;
        }

        foreach ($result->ticker as $supplierTicker) {
            if(!isset($this->coins[$supplierTicker->symbol])){
                continue;
            }
            $currency = $this->coins[$supplierTicker->symbol];
            if(strpos($currency, "USDT") !== false){
                $currency = str_replace("USDT", "USD", $currency);
            }
            $ticker = new TickerEntity();
            $ticker->setAsk($supplierTicker->ask);
            $ticker->setBid($supplierTicker->bid);
            $ticker->setVolume($supplierTicker->{"24hrVol"});
            $ticker->setValue($supplierTicker->last);
            $ticker->setExchangeId($this->getExchangeId());
            $ticker->setCurrency($currency);
            $response[] = $ticker;
        }
        return $response;
    }

    public function getExchangeId()
    {
        return 86;
    }

    protected function getConnectorClass()
    {
        return new CoinbeneConnector();
    }
}