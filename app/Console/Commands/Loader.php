<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 10.06.2018
 * Time: 17:33
 */

namespace App\Console\Commands;


use Illuminate\Support\Facades\DB;

class Loader extends \Illuminate\Console\Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'load:query {query}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    private $query;

    /**
     * Loader constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     */
    public function handle()
    {
        DB::statement($this->argument('query'));
    }
}