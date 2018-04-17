<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 09.04.2018
 * Time: 11:19
 */

namespace App\Models\Founder\Models\Rabbit;


use App\Models\Founder\Models\Requests\Request;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

class RabbitHandler
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
    private $channel;

    /**
     * @var
     */
    private $queue;

    /**
     * @var mixed
     */
    private $response;

    /**
     * RabbitHandler constructor.
     */
    public function __construct()
    {
        $this->initConnection();
    }

    /**
     * @param $rep
     */
    public function onResponse($rep)
    {
        $this->queue[$rep->get('correlation_id')]->provider->save(unserialize($rep->body));
        $msg = new AMQPMessage(
            serialize($this->queue[$rep->get('correlation_id')]), [
                'correlation_id' => $rep->get('correlation_id'),
                'reply_to' => $this->queue
            ]
        );
        $this->channel->basic_publish($msg, '', 'rpc_queue');
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
        $this->channel->basic_consume(
            $this->queue, '', false, false, false, false,
            [$this, 'onResponse']);
    }

    public function call(Request $request)
    {
        $corrId = uniqid();
        $this->queue[$corrId] = true;

        $msg = new AMQPMessage(
            serialize($request), [
                'correlation_id' => $corrId,
                'reply_to' => $this->queue
            ]
        );
        $this->channel->basic_publish($msg, '', 'rpc_queue');

        while (count($this->queue)) {
            $this->channel->wait();
        }
        return $this->response;
    }

    public function getChannel()
    {
        return $this->channel;
    }
}