<?php
/**
 * Created by PhpStorm.
 * User: xeror
 * Date: 11.05.2018
 * Time: 16:53
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class TideBitConnector extends FounderConnector
{
    public function describe () {
        return array_replace_recursive (parent::describe (), array (
            'id' => 'tidebit',
            'name' => 'TideBit',
            'countries' => 'HK',
            'rateLimit' => 1000,
            'version' => 'v2',
            'has' => array (
                'fetchDepositAddress' => true,
                'CORS' => true,
                'fetchTickers' => true,
                'fetchOHLCV' => true,
                'withdraw' => true,
            ),
            'timeframes' => array (
                '1m' => '1',
                '5m' => '5',
                '15m' => '15',
                '30m' => '30',
                '1h' => '60',
                '2h' => '120',
                '4h' => '240',
                '12h' => '720',
                '1d' => '1440',
                '3d' => '4320',
                '1w' => '10080',
            ),
            'urls' => array (
                'logo' => 'https://user-images.githubusercontent.com/1294454/39034921-e3acf016-4480-11e8-9945-a6086a1082fe.jpg',
                'api' => 'https://www.tidebit.com/api',
                'www' => 'https://www.tidebit.com',
                'doc' => 'https://www.tidebit.com/documents/api_v2',
            ),
            'api' => array (
                'public' => array (
                    'get' => array (
                        'v2/markets', // V2MarketsJson
                        'v2/tickers', // V2TickersJson
                        'v2/tickers/{market}', // V2TickersMarketJson
                        'v2/trades', // V2TradesJson
                        'v2/trades/{market}', // V2TradesMarketJson
                        'v2/order_book', // V2OrderBookJson
                        'v2/order', // V2OrderJson
                        'v2/k_with_pending_trades', // V2KWithPendingTradesJson
                        'v2/k', // V2KJson
                        'v2/depth', // V2DepthJson
                    ),
                    'post' => array (),
                ),
                'private' => array (
                    'get' => array (
                        'v2/deposits', // V2DepositsJson
                        'v2/deposit_address', // V2DepositAddressJson
                        'v2/deposit', // V2DepositJson
                        'v2/members/me', // V2MembersMeJson
                        'v2/addresses/{address}', // V2AddressesAddressJson
                    ),
                    'post' => array (
                        'v2/order/delete', // V2OrderDeleteJson
                        'v2/order', // V2OrderJson
                        'v2/order/multi', // V2OrderMultiJson
                        'v2/order/clear', // V2OrderClearJson
                    ),
                ),
            ),
            'fees' => array (
                'trading' => array (
                    'tierBased' => false,
                    'percentage' => true,
                    'maker' => 0.2 / 100,
                    'taker' => 0.2 / 100,
                ),
                'funding' => array (
                    'tierBased' => false,
                    'percentage' => true,
                    'withdraw' => array (), // There is only 1% fee on withdrawals to your bank account.
                ),
            ),
            'exceptions' => array (
                '2002' => '\\ccxt\\InsufficientFunds',
                '2003' => '\\ccxt\\OrderNotFound',
            ),
        ));
    }

    public function fetch_deposit_address ($code, $params = array ()) {
        $this->load_markets();
        $currency = $this->currency ($code);
        $response = $this->privateGetV2DepositAddress (array_merge (array (
            'currency' => $currency['id'],
        ), $params));
        if (is_array ($response) && array_key_exists ('success', $response)) {
            if ($response['success']) {
                $address = $this->safe_string($response, 'address');
                $tag = $this->safe_string($response, 'addressTag');
                return array (
                    'currency' => $code,
                    'address' => $this->check_address($address),
                    'tag' => $tag,
                    'status' => 'ok',
                    'info' => $response,
                );
            }
        }
    }

    public function fetch_markets () {
        $markets = $this->publicGetV2Markets ();
        $result = array ();
        for ($p = 0; $p < count ($markets); $p++) {
            $market = $markets[$p];
            $id = $market['id'];
            $symbol = $market['name'];
            list ($baseId, $quoteId) = explode ('/', $symbol);
            $base = $this->common_currency_code($baseId);
            $quote = $this->common_currency_code($quoteId);
            $result[] = array (
                'id' => $id,
                'symbol' => $symbol,
                'base' => $base,
                'quote' => $quote,
                'baseId' => $baseId,
                'quoteId' => $quoteId,
                'info' => $market,
            );
        }
        return $result;
    }

    public function fetch_balance ($params = array ()) {
        $this->load_markets();
        $response = $this->privateGetV2Deposits ();
        $balances = $response['accounts'];
        $result = array ( 'info' => $balances );
        for ($b = 0; $b < count ($balances); $b++) {
            $balance = $balances[$b];
            $currencyId = $balance['currency'];
            $code = strtoupper ($currencyId);
            if (is_array ($this->currencies_by_id) && array_key_exists ($currencyId, $this->currencies_by_id))
                $code = $this->currencies_by_id[$currencyId]['code'];
            $account = array (
                'free' => floatval ($balance['balance']),
                'used' => floatval ($balance['locked']),
                'total' => 0.0,
            );
            $account['total'] = $this->sum ($account['free'], $account['used']);
            $result[$code] = $account;
        }
        return $this->parse_balance($result);
    }

    public function fetch_order_book ($symbol, $limit = null, $params = array ()) {
        $this->load_markets();
        $market = $this->market ($symbol);
        $request = array (
            'market' => $market['id'],
        );
        if ($limit === null)
            $request['limit'] = $limit; // default = 300
        $request['market'] = $market['id'];
        $orderbook = $this->publicGetV2Depth (array_merge ($request, $params));
        $timestamp = $orderbook['timestamp'] * 1000;
        return $this->parse_order_book($orderbook, $timestamp);
    }

    public function parse_ticker ($ticker, $market = null) {
        $timestamp = $ticker['at'] * 1000;
        $ticker = $ticker['ticker'];
        $symbol = null;
        if ($market !== null)
            $symbol = $market['symbol'];
        $last = $this->safe_float($ticker, 'last');
        return array (
            'symbol' => $symbol,
            'timestamp' => $timestamp,
            'datetime' => $this->iso8601 ($timestamp),
            'high' => $this->safe_float($ticker, 'high'),
            'low' => $this->safe_float($ticker, 'low'),
            'bid' => $this->safe_float($ticker, 'buy'),
            'ask' => $this->safe_float($ticker, 'sell'),
            'bidVolume' => null,
            'askVolume' => null,
            'vwap' => null,
            'open' => null,
            'close' => $last,
            'last' => $last,
            'change' => null,
            'percentage' => null,
            'previousClose' => null,
            'average' => null,
            'baseVolume' => $this->safe_float($ticker, 'vol'),
            'quoteVolume' => null,
            'info' => $ticker,
        );
    }

    public function fetch_tickers ($symbols = null, $params = array ()) {
        $this->load_markets();
        $tickers = $this->publicGetV2Tickers ($params);
        $ids = is_array ($tickers) ? array_keys ($tickers) : array ();
        $result = array ();
        for ($i = 0; $i < count ($ids); $i++) {
            $id = $ids[$i];
            $market = null;
            $symbol = $id;
            if (is_array ($this->markets_by_id) && array_key_exists ($id, $this->markets_by_id)) {
                $market = $this->markets_by_id[$id];
                $symbol = $market['symbol'];
            } else {
                $base = mb_substr ($id, 0, 3);
                $quote = mb_substr ($id, 3, 6);
                $base = strtoupper ($base);
                $quote = strtoupper ($quote);
                $base = $this->common_currency_code($base);
                $quote = $this->common_currency_code($quote);
                $symbol = $base . '/' . $quote;
            }
            $ticker = $tickers[$id];
            $result[$symbol] = $this->parse_ticker($ticker, $market);
        }
        return $result;
    }

    public function fetch_ticker ($symbol, $params = array ()) {
        $this->load_markets();
        $market = $this->market ($symbol);
        $response = $this->publicGetV2TickersMarket (array_merge (array (
            'market' => $market['id'],
        ), $params));
        return $this->parse_ticker($response, $market);
    }

    public function parse_trade ($trade, $market = null) {
        $timestamp = $this->parse8601 ($trade['created_at']);
        return array (
            'id' => (string) $trade['id'],
            'timestamp' => $timestamp,
            'datetime' => $this->iso8601 ($timestamp),
            'symbol' => $market['symbol'],
            'type' => null,
            'side' => null,
            'price' => $this->safe_float($trade, 'price'),
            'amount' => $this->safe_float($trade, 'volume'),
            'cost' => $this->safe_float($trade, 'funds'),
            'info' => $trade,
        );
    }

    public function fetch_trades ($symbol, $since = null, $limit = null, $params = array ()) {
        $this->load_markets();
        $market = $this->market ($symbol);
        $response = $this->publicGetV2Trades (array_merge (array (
            'market' => $market['id'],
        ), $params));
        return $this->parse_trades($response, $market, $since, $limit);
    }

    public function parse_ohlcv ($ohlcv, $market = null, $timeframe = '1m', $since = null, $limit = null) {
        return [
            $ohlcv[0] * 1000,
            $ohlcv[1],
            $ohlcv[2],
            $ohlcv[3],
            $ohlcv[4],
            $ohlcv[5],
        ];
    }

    public function fetch_ohlcv ($symbol, $timeframe = '1m', $since = null, $limit = null, $params = array ()) {
        $this->load_markets();
        $market = $this->market ($symbol);
        if (!$limit)
            $limit = 30; // default is 30
        $request = array (
            'market' => $market['id'],
            'period' => $this->timeframes[$timeframe],
            'limit' => $limit,
        );
        if ($since !== null) {
            $request['timestamp'] = $since;
        } else {
            $request['timestamp'] = 1800000;
        }
        $response = $this->publicGetV2K (array_merge ($request, $params));
        return $this->parse_ohlcvs($response, $market, $timeframe, $since, $limit);
    }

    public function parse_order ($order, $market = null) {
        $symbol = null;
        if ($market) {
            $symbol = $market['symbol'];
        } else {
            $marketId = $order['market'];
            $symbol = $this->markets_by_id[$marketId]['symbol'];
        }
        $timestamp = $this->parse8601 ($order['created_at']);
        $state = $order['state'];
        $status = null;
        if ($state === 'done') {
            $status = 'closed';
        } else if ($state === 'wait') {
            $status = 'open';
        } else if ($state === 'cancel') {
            $status = 'canceled';
        }
        return array (
            'id' => (string) $order['id'],
            'timestamp' => $timestamp,
            'datetime' => $this->iso8601 ($timestamp),
            'lastTradeTimestamp' => null,
            'status' => $status,
            'symbol' => $symbol,
            'type' => $order['ord_type'],
            'side' => $order['side'],
            'price' => $this->safe_float($order, 'price'),
            'amount' => $this->safe_float($order, 'volume'),
            'filled' => $this->safe_float($order, 'executed_volume'),
            'remaining' => $this->safe_float($order, 'remaining_volume'),
            'trades' => null,
            'fee' => null,
            'info' => $order,
        );
    }

    public function create_order ($symbol, $type, $side, $amount, $price = null, $params = array ()) {
        $this->load_markets();
        $order = array (
            'market' => $this->market_id($symbol),
            'side' => $side,
            'volume' => (string) $amount,
            'ord_type' => $type,
        );
        if ($type === 'limit') {
            $order['price'] = (string) $price;
        }
        $response = $this->privatePostV2Order (array_merge ($order, $params));
        $market = $this->markets_by_id[$response['market']];
        return $this->parse_order($response, $market);
    }

    public function cancel_order ($id, $symbol = null, $params = array ()) {
        $this->load_markets();
        $result = $this->privatePostV2OrderDelete (array ( 'id' => $id ));
        $order = $this->parse_order($result);
        $status = $order['status'];
        if ($status === 'closed' || $status === 'canceled') {
            throw new OrderNotFound ($this->id . ' ' . $this->json ($order));
        }
        return $order;
    }

    public function withdraw ($currency, $amount, $address, $tag = null, $params = array ()) {
        $this->check_address($address);
        $this->load_markets();
        $result = $this->privatePostWithdraw (array_merge (array (
            'currency' => strtolower ($currency),
            'sum' => $amount,
            'address' => $address,
        ), $params));
        return array (
            'info' => $result,
            'id' => null,
        );
    }

    public function nonce () {
        return $this->milliseconds ();
    }

    public function encode_params ($params) {
        return $this->urlencode ($this->keysort ($params));
    }

    public function sign ($path, $api = 'public', $method = 'GET', $params = array (), $headers = null, $body = null) {
        $request = $this->implode_params($path, $params) . '.json';
        $query = $this->omit ($params, $this->extract_params($path));
        $url = $this->urls['api'] . '/' . $request;
        if ($api === 'public') {
            if ($query) {
                $url .= '?' . $this->urlencode ($query);
            }
        } else {
            $this->check_required_credentials();
            $nonce = (string) $this->nonce ();
            $query = $this->urlencode (array_merge (array (
                'access_key' => $this->apiKey,
                'tonce' => $nonce,
            ), $params));
            $payload = $method . '|' . $request . '|' . $query;
            $signature = $this->hmac ($this->encode ($payload), $this->encode ($this->secret));
            $suffix = $query . '&$signature=' . $signature;
            if ($method === 'GET') {
                $url .= '?' . $suffix;
            } else {
                $body = $suffix;
                $headers = array ( 'Content-Type' => 'application/x-www-form-urlencoded' );
            }
        }
        return array ( 'url' => $url, 'method' => $method, 'body' => $body, 'headers' => $headers );
    }

    public function handle_errors ($code, $reason, $url, $method, $headers, $body) {
        if ($code === 400) {
            $response = json_decode ($body, $as_associative_array = true);
            $error = $this->safe_value($response, 'error');
            $errorCode = $this->safe_string($error, 'code');
            $feedback = $this->id . ' ' . $this->json ($response);
            $exceptions = $this->exceptions;
            if (is_array ($exceptions) && array_key_exists ($errorCode, $exceptions)) {
                throw new $exceptions[$errorCode] ($feedback);
            }
            // fallback to default $error handler
        }
    }
}