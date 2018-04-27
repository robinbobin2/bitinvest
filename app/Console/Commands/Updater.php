<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 0:20
 */

namespace App\Console\Commands;


use App\Models\Founder\Models\Providers\BiBoxProvider;
use App\Models\Founder\Models\Providers\BinanceProvider;
use App\Models\Founder\Models\Providers\Bit2CProvider;
use App\Models\Founder\Models\Providers\BitBankProvider;
use App\Models\Founder\Models\Providers\BitBayProvider;
use App\Models\Founder\Models\Providers\BitFinexProvider;
use App\Models\Founder\Models\Providers\BitMarketProvider;
use App\Models\Founder\Models\Providers\BitMexProvider;
use App\Models\Founder\Models\Providers\HitBTCProvider;
use App\Models\Founder\Models\Providers\PoloniexProvider;
use App\Models\Founder\Models\Rabbit\RabbitTestHandler;
use App\Models\Founder\Models\Requests\Request;
use App\Models\Founder\Models\Test\Bit2C;
use App\Models\Founder\Models\Test\BitBay;

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
        while (count($this->handler->test)) {
            $this->handler->getChannel()->wait();
        }
        return null;
    }

    private $suppliers = [
//        PoloniexProvider::class,
        HitBTCProvider::class,
        BiBoxProvider::class,
        BinanceProvider::class,
//        Bit2CProvider::class,
//        BitBayProvider::class,
        BitFinexProvider::class,
//        BitMarketProvider::class,
//        BitMexProvider::class
    ];

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