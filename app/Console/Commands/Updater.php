<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 0:20
 */

namespace App\Console\Commands;


use App\Models\Founder\Models\Connectors\CexConnector;
use App\Models\Founder\Models\Providers\BiBoxProvider;
use App\Models\Founder\Models\Providers\BinanceProvider;
use App\Models\Founder\Models\Providers\Bit2CProvider;
use App\Models\Founder\Models\Providers\BitBankProvider;
use App\Models\Founder\Models\Providers\BitBayProvider;
use App\Models\Founder\Models\Providers\BitFinexProvider;
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
use App\Models\Founder\Models\Providers\HitBTCProvider;
use App\Models\Founder\Models\Providers\PoloniexProvider;
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
        HitBTCProvider::class,
        BiBoxProvider::class,
        BinanceProvider::class,
        Bit2CProvider::class,
        BitBayProvider::class,
        BitFinexProvider::class,
        BitTrexProvider::class,
        BitMarketProvider::class,
        BitMexProvider::class,
        BitzProvider::class,
        BraziliexProvider::class,
        BTCBoxProvider::class,
        BTCTurkProvider::class,
        BxinthProvider::class,
        CcexProvider::class,
        CexProvider::class,
        CobinhoodProvider::class,
        CoinEggProvider::class,
        CoinexProvider::class,
        CoinexChangeProvider::class,
        CoinGiProvider::class
    ];

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
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
            $this->handle();
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