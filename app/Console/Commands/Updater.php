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
use App\Models\Founder\Models\Providers\BCexProvider;
use App\Models\Founder\Models\Providers\BiBoxProvider;
use App\Models\Founder\Models\Providers\BinanceProvider;
use App\Models\Founder\Models\Providers\Bit2CProvider;
use App\Models\Founder\Models\Providers\BitBayProvider;
use App\Models\Founder\Models\Providers\BitBnsProvider;
use App\Models\Founder\Models\Providers\BitFinexProvider;
use App\Models\Founder\Models\Providers\BitFlyerProvider;
use App\Models\Founder\Models\Providers\BitHumbProvider;
use App\Models\Founder\Models\Providers\BitMarketProvider;
use App\Models\Founder\Models\Providers\BitMexProvider;
use App\Models\Founder\Models\Providers\BitSOProvider;
use App\Models\Founder\Models\Providers\BitStampProvider;
use App\Models\Founder\Models\Providers\BitTrexProvider;
use App\Models\Founder\Models\Providers\BitzProvider;
use App\Models\Founder\Models\Providers\BraziliexProvider;
use App\Models\Founder\Models\Providers\BTCBoxProvider;
use App\Models\Founder\Models\Providers\BTCTurkProvider;
use App\Models\Founder\Models\Providers\BxinthProvider;
use App\Models\Founder\Models\Providers\C2CXProvider;
use App\Models\Founder\Models\Providers\CcexProvider;
use App\Models\Founder\Models\Providers\CexProvider;
use App\Models\Founder\Models\Providers\CobinhoodProvider;
use App\Models\Founder\Models\Providers\CoinbeneProvider;
use App\Models\Founder\Models\Providers\CoinEggProvider;
use App\Models\Founder\Models\Providers\CoinexChangeProvider;
use App\Models\Founder\Models\Providers\CoinexProvider;
use App\Models\Founder\Models\Providers\CoinGiProvider;
use App\Models\Founder\Models\Providers\CoinMarketCapProvider;
use App\Models\Founder\Models\Providers\CoinnestProvider;
use App\Models\Founder\Models\Providers\CoinoneProvider;
use App\Models\Founder\Models\Providers\CoinRoomProvider;
use App\Models\Founder\Models\Providers\CoinTigerProvider;
use App\Models\Founder\Models\Providers\CryptopiaProvider;
use App\Models\Founder\Models\Providers\DSXProvider;
use App\Models\Founder\Models\Providers\ExmoProvider;
use App\Models\Founder\Models\Providers\ExxProvider;
use App\Models\Founder\Models\Providers\FargoBaseProvider;
use App\Models\Founder\Models\Providers\FatBtcProvider;
use App\Models\Founder\Models\Providers\FlowBTCProvider;
use App\Models\Founder\Models\Providers\GateCoinProvider;
use App\Models\Founder\Models\Providers\GateIOProvider;
use App\Models\Founder\Models\Providers\GDaxProvider;
use App\Models\Founder\Models\Providers\GeminiProvider;
use App\Models\Founder\Models\Providers\HitBTCProvider;
use App\Models\Founder\Models\Providers\HuobiProvider;
use App\Models\Founder\Models\Providers\IBankProvider;
use App\Models\Founder\Models\Providers\Ice3XProvider;
use App\Models\Founder\Models\Providers\IndependentReserveProvider;
use App\Models\Founder\Models\Providers\ItBitProvider;
use App\Models\Founder\Models\Providers\KoineksProvider;
use App\Models\Founder\Models\Providers\KorbitProvider;
use App\Models\Founder\Models\Providers\KrakenProvider;
use App\Models\Founder\Models\Providers\KuCoinProvider;
use App\Models\Founder\Models\Providers\KunaProvider;
use App\Models\Founder\Models\Providers\LakeBTCProvider;
use App\Models\Founder\Models\Providers\LiveCoinProvider;
use App\Models\Founder\Models\Providers\LunoProvider;
use App\Models\Founder\Models\Providers\LuquiProvider;
use App\Models\Founder\Models\Providers\LykkeProvider;
use App\Models\Founder\Models\Providers\NegocieProvider;
use App\Models\Founder\Models\Providers\NeraexProvider;
use App\Models\Founder\Models\Providers\NovaProvider;
use App\Models\Founder\Models\Providers\OkCoinProvider;
use App\Models\Founder\Models\Providers\OkexProvider;
use App\Models\Founder\Models\Providers\OneBrokerProvider;
use App\Models\Founder\Models\Providers\OneBTCXEProvider;
use App\Models\Founder\Models\Providers\OTCBTCProvider;
use App\Models\Founder\Models\Providers\PoloniexProvider;
use App\Models\Founder\Models\Providers\QryptosProvider;
use App\Models\Founder\Models\Providers\QuadrigacxProvider;
use App\Models\Founder\Models\Providers\RightBTCProvider;
use App\Models\Founder\Models\Providers\SimexProvider;
use App\Models\Founder\Models\Providers\SouthXChangeProvider;
use App\Models\Founder\Models\Providers\TheRockProvider;
use App\Models\Founder\Models\Providers\TideBitProvider;
use App\Models\Founder\Models\Providers\TidexProvider;
use App\Models\Founder\Models\Providers\UpBitProvider;
use App\Models\Founder\Models\Providers\VaultoroProvider;
use App\Models\Founder\Models\Providers\VebitcoinProvider;
use App\Models\Founder\Models\Providers\VirWoxProvider;
use App\Models\Founder\Models\Providers\WenzProvider;
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

    private $newExchanges = [
        BitBayProvider::class,
        BCexProvider::class,
        BTCBoxProvider::class,
        BTCTurkProvider::class,
        NegocieProvider::class,
        CoinGiProvider::class,
        ACXProvider::class,
        BitSOProvider::class,
        KoineksProvider::class,
        BitBnsProvider::class,
        RightBTCProvider::class,
        VebitcoinProvider::class,
        DSXProvider::class,
        BitzProvider::class,
        BraziliexProvider::class,
        CexProvider::class,
        CoinnestProvider::class,
        CoinRoomProvider::class,
        FargoBaseProvider::class,
        XBTCEProvider::class,
        QuadrigacxProvider::class,
        C2CXProvider::class,
        SimexProvider::class,
        CoinoneProvider::class,
        LunoProvider::class,
        KunaProvider::class,
        BitHumbProvider::class,
        IndependentReserveProvider::class,
        BxinthProvider::class,
        ExmoProvider::class,
        GateCoinProvider::class,
        CoinexProvider::class,
        BiBoxProvider::class,
        ZbProvider::class,
        CcexProvider::class,
        HitBTCProvider::class,
        CryptopiaProvider::class,
        ZaifProvider::class,
        BitFinexProvider::class,
        TheRockProvider::class,
        OneBTCXEProvider::class,
        BCexProvider::class,
        OTCBTCProvider::class,
        QryptosProvider::class,
        KuCoinProvider::class,
        SouthXChangeProvider::class,
        LuquiProvider::class,
        LiveCoinProvider::class,
        LakeBTCProvider::class,
        KrakenProvider::class,
        GateIOProvider::class,
        ExxProvider::class,
        CobinhoodProvider::class,
        CoinEggProvider::class,
        BinanceProvider::class,
        BitTrexProvider::class,

        LykkeProvider::class,
        GeminiProvider::class,
        GDaxProvider::class,
        Bit2CProvider::class,
        OkCoinProvider::class,

        HuobiProvider::class,
        BitStampProvider::class,
        BitFlyerProvider::class,
        CoinbeneProvider::class,
        WenzProvider::class,
        UpBitProvider::class,
        ItBitProvider::class,
        KorbitProvider::class,
        NeraexProvider::class,
        TidexProvider::class,
        FatBtcProvider::class,
        VaultoroProvider::class,
        VirWoxProvider::class,
        FlowBTCProvider::class,
        AllCoinProvider::class,
    ];

    private $suppliers = [
        PoloniexProvider::class,
        CoinexChangeProvider::class,

        Ice3XProvider::class,
        CoinTigerProvider::class,
        BitMexProvider::class,
        BitMarketProvider::class,

        NovaProvider::class,
        OneBrokerProvider::class,

        OkexProvider::class,
        TideBitProvider::class,
        IBankProvider::class,

        CoinMarketCapProvider::class,
    ];

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        while (true) {
            shuffle($this->newExchanges);
            $this->handler->channel->queue_purge('rpc_queue');

            foreach ($this->newExchanges as $supplier) {
                $supplier = new $supplier;
                $newRequest = new Request();
                $newRequest->setProvider($supplier);
                $this->handler->call($newRequest);
            }
            sleep(30);
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