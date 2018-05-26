<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 0:20
 */

namespace App\Console\Commands;


use App\Models\Founder\Models\Providers\ACXProvider;
use App\Models\Founder\Models\Providers\AllCoinProvider;
use App\Models\Founder\Models\Providers\BiBoxProvider;
use App\Models\Founder\Models\Providers\BinanceProvider;
use App\Models\Founder\Models\Providers\Bit2CProvider;
use App\Models\Founder\Models\Providers\BitBayProvider;
use App\Models\Founder\Models\Providers\BitFinexProvider;
use App\Models\Founder\Models\Providers\BitHumbProvider;
use App\Models\Founder\Models\Providers\BitMarketProvider;
use App\Models\Founder\Models\Providers\BitMexProvider;
use App\Models\Founder\Models\Providers\BitTrexProvider;
use App\Models\Founder\Models\Providers\BitzProvider;
use App\Models\Founder\Models\Providers\BraziliexProvider;
use App\Models\Founder\Models\Providers\BTCBoxProvider;
use App\Models\Founder\Models\Providers\BTCTurkProvider;
use App\Models\Founder\Models\Providers\BxinthProvider;
use App\Models\Founder\Models\Providers\CcexProvider;
use App\Models\Founder\Models\Providers\CexProvider;
use App\Models\Founder\Models\Providers\CobinhoodProvider;
use App\Models\Founder\Models\Providers\CoinEggProvider;
use App\Models\Founder\Models\Providers\CoinexChangeProvider;
use App\Models\Founder\Models\Providers\CoinexProvider;
use App\Models\Founder\Models\Providers\CoinGiProvider;
use App\Models\Founder\Models\Providers\CoinMarketCapProvider;
use App\Models\Founder\Models\Providers\CoinnestProvider;
use App\Models\Founder\Models\Providers\CoinoneProvider;
use App\Models\Founder\Models\Providers\CoinTigerProvider;
use App\Models\Founder\Models\Providers\ExmoProvider;
use App\Models\Founder\Models\Providers\ExxProvider;
use App\Models\Founder\Models\Providers\FlowBTCProvider;
use App\Models\Founder\Models\Providers\GateCoinProvider;
use App\Models\Founder\Models\Providers\GateIOProvider;
use App\Models\Founder\Models\Providers\GDaxProvider;
use App\Models\Founder\Models\Providers\GeminiProvider;
use App\Models\Founder\Models\Providers\HitBTCProvider;
use App\Models\Founder\Models\Providers\HuobiProProvider;
use App\Models\Founder\Models\Providers\IBankProvider;
use App\Models\Founder\Models\Providers\Ice3XProvider;
use App\Models\Founder\Models\Providers\IndependentReserveProvider;
use App\Models\Founder\Models\Providers\JubiProvider;
use App\Models\Founder\Models\Providers\KrakenProvider;
use App\Models\Founder\Models\Providers\KuCoinProvider;
use App\Models\Founder\Models\Providers\KunaProvider;
use App\Models\Founder\Models\Providers\LakeBTCProvider;
use App\Models\Founder\Models\Providers\LiveCoinProvider;
use App\Models\Founder\Models\Providers\LunoProvider;
use App\Models\Founder\Models\Providers\LuquiProvider;
use App\Models\Founder\Models\Providers\LykkeProvider;
use App\Models\Founder\Models\Providers\NovaProvider;
use App\Models\Founder\Models\Providers\OkCoinProvider;
use App\Models\Founder\Models\Providers\OkexProvider;
use App\Models\Founder\Models\Providers\OneBrokerProvider;
use App\Models\Founder\Models\Providers\OneBTCXEProvider;
use App\Models\Founder\Models\Providers\PoloniexProvider;
use App\Models\Founder\Models\Providers\QryptosProvider;
use App\Models\Founder\Models\Providers\SouthXChangeProvider;
use App\Models\Founder\Models\Providers\TheRockProvider;
use App\Models\Founder\Models\Providers\TideBitProvider;
use App\Models\Founder\Models\Providers\VaultoroProvider;
use App\Models\Founder\Models\Providers\VirWoxProvider;
use App\Models\Founder\Models\Providers\XBTCEProvider;
use App\Models\Founder\Models\Providers\ZaifProvider;
use App\Models\Founder\Models\Providers\ZbProvider;
use App\Models\Founder\Models\Rabbit\RabbitTestHandler;
use App\Models\Founder\Models\Requests\Request;

class Updater extends \Illuminate\Console\Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'updater:start';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';


    private $suppliers = [
//        PoloniexProvider::class,
//        HitBTCProvider::class,
//        BiBoxProvider::class,
//        BinanceProvider::class,
//        Bit2CProvider::class,
//        BitBayProvider::class,
//        BitFinexProvider::class,
//        BitTrexProvider::class,
//        BitMarketProvider::class,
//        BitMexProvider::class,
//        BitzProvider::class,
//        BraziliexProvider::class,
        BTCBoxProvider::class,
//        BTCTurkProvider::class,
//        BxinthProvider::class,
//        CcexProvider::class,
//        CexProvider::class,
//        CobinhoodProvider::class,
//        CoinEggProvider::class,
//        CoinexProvider::class,
//        CoinexChangeProvider::class,
//        CoinGiProvider::class,
//        ACXProvider::class,
//        AllCoinProvider::class,
//        CoinMarketCapProvider::class,
//        CoinnestProvider::class,
//        CoinTigerProvider::class,
//        ExmoProvider::class,
//        ExxProvider::class,
//        FlowBTCProvider::class,
//        GateCoinProvider::class,
//        GateIOProvider::class,
//        GDaxProvider::class,
//        GeminiProvider::class,
//        HuobiProProvider::class,
//        IBankProvider::class,
//        Ice3XProvider::class,
//        IndependentReserveProvider::class,
//        JubiProvider::class,
//        KrakenProvider::class,
//        KuCoinProvider::class,
//        KunaProvider::class,
//        LakeBTCProvider::class,
//        LiveCoinProvider::class,
//        LunoProvider::class,
//        LuquiProvider::class,
//        LykkeProvider::class,
//        NovaProvider::class,
//        OkCoinProvider::class,
//        OkexProvider::class,
//        OneBrokerProvider::class,
//        OneBTCXEProvider::class,
//        QryptosProvider::class,
//        SouthXChangeProvider::class,
//        TheRockProvider::class,
//        TideBitProvider::class,
//        VaultoroProvider::class,
//        VirWoxProvider::class,
//        XBTCEProvider::class,
//        ZaifProvider::class,
//        ZbProvider::class,
//        BitHumbProvider::class,
//        CoinoneProvider::class
    ];

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        shuffle($this->suppliers);
        foreach ($this->suppliers as $supplier) {
            $supplier = new $supplier;
            $newRequest = new Request();
            $newRequest->setProvider($supplier);
            $this->handler->call($newRequest);
        }
        try{
            while (count($this->handler->test)) {
                $this->handler->getChannel()->wait();
            }
        }
        catch (\Exception $e){
            echo $e->getMessage();
        }

        return null;
    }

    /**
     * @var RabbitTestHandler
     */
    private $handler;

    /**
     * FounderEngine constructor.
     */
    public function __construct()
    {
        $this->handler = new RabbitTestHandler();
        parent::__construct();
    }
}