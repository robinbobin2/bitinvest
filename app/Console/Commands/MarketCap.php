<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 16.05.2018
 * Time: 12:29
 */

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class MarketCap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'market:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     */
    public function handle()
    {
        $connection = curl_init();
        curl_setopt($connection, CURLOPT_URL, "https://api.coinmarketcap.com/v2/ticker/");
        curl_setopt($connection, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($connection);
        curl_close($connection);

        $result = json_decode($result);

        foreach ($result->data as $currency){
            $result = [
                'pair' => $currency->symbol . '/USD',
                'cap' => $currency->quotes->USD->market_cap,
                'capUSD' => $currency->quotes->USD->market_cap / $currency->quotes->USD->price
            ];
            echo json_encode($result);
            DB::table('exchangeRatesInfo')
                ->where('currency', $currency->symbol . '/USD')
                ->orWhere("currency", $currency->symbol . '/USDT')
                ->update([
                    'marketCapUsd' => $currency->quotes->USD->market_cap,
                    'marketCapCurrency' => $currency->quotes->USD->market_cap / $currency->quotes->USD->price
                    ]);
        }
        //Завершает сеанс
    }
}