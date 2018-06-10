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
    private $channel;

    /**
     * @var Request[]
     */
    public $queue = [];

    /**
     * @var Request[]
     */
    public $test = [];

    /**
     * @var TickerEntity[]
     */
    private $response = [];

    /**
     * @var TickerEntity[]
     */
    private $rapidResponse = [];

    private $time;

    /**
     * RabbitHandler constructor.
     */
    public function __construct()
    {
        $this->initConnection();
        $this->time = time();
    }

    /**
     * @param AMQPMessage $rep
     */
    public function onResponse($rep)
    {
        foreach ($this->test as $key => $job) {
            if ($key == $rep->get('correlation_id')) {
                $response = unserialize($rep->body);
//                if (count($response) > 500) {
//                    $arrays = array_chunk($response, 300);
//                    foreach ($arrays as $array) {
//                        $this->insert($array);
//                    }
//                    $response = [];
//                    echo "clear big" . PHP_EOL;
//                }
                if(!empty($response)){
                    if(current($response)->getType() == FounderProvider::DEFAULT_RATE){
                        $this->response = array_merge($this->response, $response);
                    } else {
                        $this->rapidResponse = array_merge($this->rapidResponse, $response);
                    }
                }

                if ((time() - $this->time) > 1) {
                    if (!empty($this->response)) {
                        $this->time = time();
                        $query = "INSERT INTO `bit`.`exchangeRates` (`currency`, `value`, `createTime`, `exchangeId`, `volume`, `bid`, `ask`) VALUES ";
                        $inserts = [];
                        foreach ($this->response as $item) {
                            $inserts[] = '("' . $item->getCurrency() . '","' . $item->getValue() . '","' . time() . '","' . $item->getExchangeId() . '","' . $item->getVolume() . '","' . $item->getBid() . '","' . $item->getAsk() . '")';
                        }
                        $query .= implode(", ", $inserts);
                        shell_exec('php /var/www/bit/artisan load:query \'' . $query . '\' &');
//                        DB::statement($query);

                        $this->response = [];
                        echo "clear" . PHP_EOL;
                    }
                    if (!empty($this->rapidResponse)) {
                        $this->time = time();
                        $query = "INSERT INTO `bit`.`exchangeRapidRates` (`currency`, `value`, `createTime`, `exchangeId`, `volume`, `bid`, `ask`) VALUES ";
                        $inserts = [];
                        foreach ($this->rapidResponse as $item) {
                            $inserts[] = '("' . $item->getCurrency() . '","' . $item->getValue() . '","' . time() . '","' . $item->getExchangeId() . '","' . $item->getVolume() . '","' . $item->getBid() . '","' . $item->getAsk() . '")';
                        }
                        $query .= implode(", ", $inserts);
                        shell_exec('php /var/www/bit/artisan load:query \'' . $query . '\' &');
//                        DB::statement($query);

                        $this->rapidResponse = [];
                        echo "rapid clear" . PHP_EOL;
                    }
                }
                $msg = new AMQPMessage(
                    serialize($this->test[$rep->get('correlation_id')]), [
                        'correlation_id' => $rep->get('correlation_id'),
                        'reply_to' => $this->queue
                    ]
                );
                $this->channel->basic_publish($msg, '', 'rpc_queue');
            }
        }
    }

    /**
     * @param TickerEntity[] $array
     */
    public function insert($array)
    {
        $query = "INSERT INTO `bit`.`exchangeRates` (`currency`, `value`, `createTime`, `exchangeId`, `volume`, `bid`, `ask`) VALUES ";
        $inserts = [];
        foreach ($array as $item) {
            $inserts[] = "('" . $item->getCurrency() . '","' . $item->getValue() . '","' . time() . '","' . $item->getExchangeId() . '","' . $item->getVolume() . '","' . $item->getBid() . '","' . $item->getAsk() . '")';
        }
        $query .= implode(", ", $inserts);
        DB::statement($query);
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
            $this->queue, '', false, true, false, false,
            [$this, 'onResponse']);
    }

    public function call(Request $request)
    {
        $corrId = uniqid();
        $this->test[$corrId] = $request;

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