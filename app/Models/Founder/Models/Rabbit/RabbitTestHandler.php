<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 09.04.2018
 * Time: 11:19
 */

namespace App\Models\Founder\Models\Rabbit;


use App\Models\Entity\ExchangeRate;
use App\Models\Founder\Models\Custom\SupplierLog;
use App\Models\Founder\Models\Entity\ResponseContainer;
use App\Models\Founder\Models\Entity\TickerEntity;
use App\Models\Founder\Models\FounderProvider;
use App\Models\Founder\Models\Requests\Request;
use Illuminate\Support\Facades\DB;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

class RabbitTestHandler
{
    /**
     *
     */
    const LOGIN_USER = "guest";

    /**
     *
     */
    const LOGIN_PASSWORD = "guest";

    /**
     *
     */
    const LOGIN_PORT = 5672;

    /**
     *
     */
    const LOGIN_ADDRESS = "localhost";

    /**
     * @var AMQPStreamConnection
     */
    private $connection;

    /**
     * @var \PhpAmqpLib\Channel\AMQPChannel
     */
    public $channel;

    /**
     * @var Request[]
     */
    public $queue = [];

    private $time;

    /**
     * RabbitHandler constructor.
     */
    public function __construct()
    {
        $this->initConnection();
        $this->time = time();
    }


    public function initConnection()
    {
        $this->connection = new AMQPStreamConnection(
            self::LOGIN_ADDRESS, self::LOGIN_PORT, self::LOGIN_USER, self::LOGIN_PASSWORD);
        $this->initChannel();
    }

    public function initChannel()
    {
        $this->channel = $this->connection->channel();
        list($this->queue, ,) = $this->channel->queue_declare(
            "", false, false, true, false);
    }

    public function call(Request $request)
    {
        $corrId = uniqid();

        $msg = new AMQPMessage(
            serialize($request), [
                'correlation_id' => $corrId,
                'reply_to' => $this->queue
            ]
        );
        $this->channel->basic_publish($msg, '', 'rpc_queue');
    }

    public function getChannel()
    {
        return $this->channel;
    }
}