<?php

namespace App\Console\Commands;

use App\Models\Founder\Models\Custom\SupplierLog;
use App\Models\Founder\Models\Entity\ResponseContainer;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use Illuminate\Console\Command;
use PhpAmqpLib\Channel\AMQPChannel;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

class Rabbit extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'rabbit:start';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * @var AMQPStreamConnection
     */
    private $connection;

    /**
     * @var TickerEntity[]
     */
    private $response = [];

    /**
     * @var TickerEntity[]
     */
    private $cacheResponse = [];

    private $time;



    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
        $this->time = time();
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     */
    public function handle()
    {
        $channel = $this->getConnection()->channel();
        $channel->queue_declare('rpc_queue', false, false, false, false);
        echo " [x] Awaiting RPC requests\n";
        $channel->basic_consume('rpc_queue', '', false, true, false, false, [$this, 'callback']);

        while (count($channel->callbacks)) {
            $channel->wait();
        }

        $channel->close();
        $this->getConnection()->close();
    }

    /**
     * @param AMQPMessage $message
     * @return mixed
     */
    public function callback($message)
    {
        /* @var \App\Models\Founder\Models\Requests\Request $request */
        $request = unserialize($message->body);
        $response = [];
        try{
            $response = $request->provider->{$request->getFunction()}($request);
        } catch (\Exception $e){
            SupplierLog::log("error", $e->getMessage(), $request->provider->getExchangeId());
        }
        $log = [];
        if(!empty($response)){
            if(current($response)->getType() == FounderProvider::RAPID_RATE){
                $this->response = array_merge($this->response, $response);
            } else {
                $this->cacheResponse = array_merge($this->cacheResponse, array_chunk($response, 50));
            }
            $log['exchangeId'] = current($response)->getExchangeId();
        }
        $log['cache'] = count($this->cacheResponse);
        $log["response"] = count($this->response);

        $container = new ResponseContainer();
        $this->response = $container->getResponse($this->response, $this->cacheResponse);
        $log["responseAfter"] = count($this->response);
        echo json_encode($log) . PHP_EOL;
        if (!empty($this->response)) {

            $this->time = time();
            $query = "INSERT INTO `bit`.`exchangeRates` (`currency`, `value`, `createTime`, `exchangeId`, `volume`, `bid`, `ask`) VALUES ";
            $inserts = [];
            foreach ($this->response as $item) {
                $inserts[] = '("' . $item->getCurrency() . '","' . $item->getValue() . '","' . time() . '","' . $item->getExchangeId() . '","' . $item->getVolume() . '","' . $item->getBid() . '","' . $item->getAsk() . '")';
            }
            $query .= implode(", ", $inserts);
            shell_exec('php /var/www/bit/artisan load:query \'' . $query . '\' &');

            $this->response = [];
        }

        return $message;
    }

    /**
     * @return AMQPStreamConnection
     */
    public function getConnection()
    {
        return $this->connection;
    }

    /**
     * @return AMQPChannel
     */
    public function getChannel()
    {
        return $this->getConnection()->channel();
    }
}
