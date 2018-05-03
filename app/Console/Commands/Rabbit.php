<?php

namespace App\Console\Commands;

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
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     */
    public function handle()
    {
        ini_set('memory_limit', '1G');
        $channel = $this->getConnection()->channel();
        $channel->queue_declare('rpc_queue', false, false, false, false);
        echo " [x] Awaiting RPC requests\n";
        $channel->basic_qos(null, 1, null);
        $channel->basic_consume('rpc_queue', '', false, false, false, false, [$this, 'callback']);

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
        $newMessage = new AMQPMessage(
            serialize($request->provider->{$request->getFunction()}($request)),
            ['correlation_id' => $message->get('correlation_id')]
        );

        /** @var AMQPChannel $channel */
        $channel = $message->delivery_info['channel'];
        $channel->basic_publish($newMessage, '', $message->get('reply_to'));
        $channel->basic_ack($message->delivery_info['delivery_tag']);

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
