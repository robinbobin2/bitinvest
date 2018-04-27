<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 11.04.2018
 * Time: 10:11
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;

class BinanceConnector extends FounderConnector
{
    public function describe () {
        return array_replace_recursive (parent::describe (), array (
            'id' => 'binance',
            'name' => 'Binance',
            'countries' => 'JP', // Japan
            'rateLimit' => 500,
            // new metainfo interface
            'has' => array (
                'fetchDepositAddress' => true,
                'CORS' => false,
                'fetchBidsAsks' => true,
                'fetchTickers' => true,
                'fetchOHLCV' => true,
                'fetchMyTrades' => true,
                'fetchOrder' => true,
                'fetchOrders' => true,
                'fetchOpenOrders' => true,
                'fetchClosedOrders' => true,
                'withdraw' => true,
                'fetchFundingFees' => true,
            ),
            'timeframes' => array (
                '1m' => '1m',
                '3m' => '3m',
                '5m' => '5m',
                '15m' => '15m',
                '30m' => '30m',
                '1h' => '1h',
                '2h' => '2h',
                '4h' => '4h',
                '6h' => '6h',
                '8h' => '8h',
                '12h' => '12h',
                '1d' => '1d',
                '3d' => '3d',
                '1w' => '1w',
                '1M' => '1M',
            ),
            'urls' => array (
                'logo' => 'https://user-images.githubusercontent.com/1294454/29604020-d5483cdc-87ee-11e7-94c7-d1a8d9169293.jpg',
                'api' => array (
                    'web' => 'https://www.binance.com',
                    'wapi' => 'https://api.binance.com/wapi/v3',
                    'public' => 'https://api.binance.com/api/v1',
                    'private' => 'https://api.binance.com/api/v3',
                    'v3' => 'https://api.binance.com/api/v3',
                    'v1' => 'https://api.binance.com/api/v1',
                ),
                'www' => 'https://www.binance.com',
                'doc' => 'https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md',
                'fees' => array (
                    'https://binance.zendesk.com/hc/en-us/articles/115000429332',
                    'https://support.binance.com/hc/en-us/articles/115000583311',
                ),
            ),
            'api' => array (
                'web' => array (
                    'get' => array (
                        'exchange/public/product',
                    ),
                ),
                'wapi' => array (
                    'post' => array (
                        'withdraw',
                    ),
                    'get' => array (
                        'depositHistory',
                        'withdrawHistory',
                        'depositAddress',
                        'accountStatus',
                        'systemStatus',
                        'withdrawFee',
                    ),
                ),
                'v3' => array (
                    'get' => array (
                        'ticker/price',
                        'ticker/bookTicker',
                    ),
                ),
                'public' => array (
                    'get' => array (
                        'exchangeInfo',
                        'ping',
                        'time',
                        'depth',
                        'aggTrades',
                        'klines',
                        'ticker/24hr',
                        'ticker/allPrices',
                        'ticker/allBookTickers',
                        'ticker/price',
                        'ticker/bookTicker',
                        'exchangeInfo',
                    ),
                    'put' => array ( 'userDataStream' ),
                    'post' => array ( 'userDataStream' ),
                    'delete' => array ( 'userDataStream' ),
                ),
                'private' => array (
                    'get' => array (
                        'order',
                        'openOrders',
                        'allOrders',
                        'account',
                        'myTrades',
                    ),
                    'post' => array (
                        'order',
                        'order/test',
                    ),
                    'delete' => array (
                        'order',
                    ),
                ),
            ),
            'fees' => array (
                'trading' => array (
                    'tierBased' => false,
                    'percentage' => true,
                    'taker' => 0.001,
                    'maker' => 0.001,
                ),
                // should be deleted, these are outdated and inaccurate
                'funding' => array (
                    'tierBased' => false,
                    'percentage' => false,
                    'withdraw' => array (
                        'ADA' => 1.0,
                        'ADX' => 4.7,
                        'AION' => 1.9,
                        'AMB' => 11.4,
                        'APPC' => 6.5,
                        'ARK' => 0.1,
                        'ARN' => 3.1,
                        'AST' => 10.0,
                        'BAT' => 18.0,
                        'BCD' => 1.0,
                        'BCH' => 0.001,
                        'BCPT' => 10.2,
                        'BCX' => 1.0,
                        'BNB' => 0.7,
                        'BNT' => 1.5,
                        'BQX' => 1.6,
                        'BRD' => 6.4,
                        'BTC' => 0.001,
                        'BTG' => 0.001,
                        'BTM' => 5.0,
                        'BTS' => 1.0,
                        'CDT' => 67.0,
                        'CMT' => 37.0,
                        'CND' => 47.0,
                        'CTR' => 5.4,
                        'DASH' => 0.002,
                        'DGD' => 0.06,
                        'DLT' => 11.7,
                        'DNT' => 51.0,
                        'EDO' => 2.5,
                        'ELF' => 6.5,
                        'ENG' => 2.1,
                        'ENJ' => 42.0,
                        'EOS' => 1.0,
                        'ETC' => 0.01,
                        'ETF' => 1.0,
                        'ETH' => 0.01,
                        'EVX' => 2.5,
                        'FUEL' => 45.0,
                        'FUN' => 85.0,
                        'GAS' => 0,
                        'GTO' => 20.0,
                        'GVT' => 0.53,
                        'GXS' => 0.3,
                        'HCC' => 0.0005,
                        'HSR' => 0.0001,
                        'ICN' => 3.5,
                        'ICX' => 1.3,
                        'INS' => 1.5,
                        'IOTA' => 0.5,
                        'KMD' => 0.002,
                        'KNC' => 2.6,
                        'LEND' => 54.0,
                        'LINK' => 12.8,
                        'LLT' => 54.0,
                        'LRC' => 9.1,
                        'LSK' => 0.1,
                        'LTC' => 0.01,
                        'LUN' => 0.29,
                        'MANA' => 74.0,
                        'MCO' => 0.86,
                        'MDA' => 4.7,
                        'MOD' => 2.0,
                        'MTH' => 34.0,
                        'MTL' => 1.9,
                        'NAV' => 0.2,
                        'NEBL' => 0.01,
                        'NEO' => 0.0,
                        'NULS' => 2.1,
                        'OAX' => 8.3,
                        'OMG' => 0.57,
                        'OST' => 17.0,
                        'POE' => 88.0,
                        'POWR' => 8.6,
                        'PPT' => 0.25,
                        'QSP' => 21.0,
                        'QTUM' => 0.01,
                        'RCN' => 35.0,
                        'RDN' => 2.2,
                        'REQ' => 18.1,
                        'RLC' => 4.1,
                        'SALT' => 1.3,
                        'SBTC' => 1.0,
                        'SNGLS' => 42,
                        'SNM' => 29.0,
                        'SNT' => 32.0,
                        'STORJ' => 5.9,
                        'STRAT' => 0.1,
                        'SUB' => 7.4,
                        'TNB' => 82.0,
                        'TNT' => 47.0,
                        'TRIG' => 6.7,
                        'TRX' => 129.0,
                        'USDT' => 23.0,
                        'VEN' => 1.8,
                        'VIB' => 28.0,
                        'VIBE' => 7.2,
                        'WABI' => 3.5,
                        'WAVES' => 0.002,
                        'WINGS' => 9.3,
                        'WTC' => 0.5,
                        'XLM' => 0.01,
                        'XMR' => 0.04,
                        'XRP' => 0.25,
                        'XVG' => 0.1,
                        'XZC' => 0.02,
                        'YOYOW' => 39.0,
                        'ZEC' => 0.005,
                        'ZRX' => 5.7,
                    ),
                    'deposit' => array (),
                ),
            ),
            'commonCurrencies' => array (
                'YOYO' => 'YOYOW',
                'BCC' => 'BCH',
                'NANO' => 'XRB',
            ),
            // exchange-specific options
            'options' => array (
                'warnOnFetchOpenOrdersWithoutSymbol' => true,
                'recvWindow' => 5 * 1000, // 5 sec, binance default
                'timeDifference' => 0, // the difference between system clock and Binance clock
                'adjustForTimeDifference' => false, // controls the adjustment logic upon instantiation
            ),
            'exceptions' => array (
                '-1013' => '\\ccxt\\InvalidOrder', // createOrder -> 'invalid quantity'/'invalid price'/MIN_NOTIONAL
                '-1021' => '\\ccxt\\InvalidNonce', // 'your time is ahead of server'
                '-1100' => '\\ccxt\\InvalidOrder', // createOrder(symbol, 1, asdf) -> 'Illegal characters found in parameter 'price'
                '-2010' => '\\ccxt\\InsufficientFunds', // createOrder -> 'Account has insufficient balance for requested action.'
                '-2011' => '\\ccxt\\OrderNotFound', // cancelOrder(1, 'BTC/USDT') -> 'UNKNOWN_ORDER'
                '-2013' => '\\ccxt\\OrderNotFound', // fetchOrder (1, 'BTC/USDT') -> 'Order does not exist'
                '-2015' => '\\ccxt\\AuthenticationError', // "Invalid API-key, IP, or permissions for action."
            ),
        ));
    }
    public function nonce () {
        return $this->milliseconds () - $this->options['timeDifference'];
    }
    public function load_time_difference () {
        $response = $this->publicGetTime ();
        $after = $this->milliseconds ();
        $this->options['timeDifference'] = intval ($after - $response['serverTime']);
        return $this->options['timeDifference'];
    }
    public function fetch_markets () {
        $response = $this->publicGetExchangeInfo ();
        if ($this->options['adjustForTimeDifference'])
            $this->load_time_difference ();
        $markets = $response['symbols'];
        $result = array ();
        for ($i = 0; $i < count ($markets); $i++) {
            $market = $markets[$i];
            $id = $market['symbol'];
            // "123456" is a "test $symbol/$market"
            if ($id === '123456')
                continue;
            $baseId = $market['baseAsset'];
            $quoteId = $market['quoteAsset'];
            $base = $this->common_currency_code($baseId);
            $quote = $this->common_currency_code($quoteId);
            $symbol = $base . '/' . $quote;
            $filters = $this->index_by($market['filters'], 'filterType');
            $precision = array (
                'base' => $market['baseAssetPrecision'],
                'quote' => $market['quotePrecision'],
                'amount' => $market['baseAssetPrecision'],
                'price' => $market['quotePrecision'],
            );
            $active = ($market['status'] === 'TRADING');
            // $lot size is deprecated as of 2018.02.06
            $lot = -1 * log10 ($precision['amount']);
            $entry = array (
                'id' => $id,
                'symbol' => $symbol,
                'base' => $base,
                'quote' => $quote,
                'baseId' => $baseId,
                'quoteId' => $quoteId,
                'info' => $market,
                'lot' => $lot, // $lot size is deprecated as of 2018.02.06
                'active' => $active,
                'precision' => $precision,
                'limits' => array (
                    'amount' => array (
                        'min' => pow (10, -$precision['amount']),
                        'max' => null,
                    ),
                    'price' => array (
                        'min' => pow (10, -$precision['price']),
                        'max' => null,
                    ),
                    'cost' => array (
                        'min' => $lot,
                        'max' => null,
                    ),
                ),
            );
            if (is_array ($filters) && array_key_exists ('PRICE_FILTER', $filters)) {
                $filter = $filters['PRICE_FILTER'];
                $entry['precision']['price'] = $this->precision_from_string($filter['tickSize']);
                $entry['limits']['price'] = array (
                    'min' => floatval ($filter['minPrice']),
                    'max' => floatval ($filter['maxPrice']),
                );
            }
            if (is_array ($filters) && array_key_exists ('LOT_SIZE', $filters)) {
                $filter = $filters['LOT_SIZE'];
                $entry['precision']['amount'] = $this->precision_from_string($filter['stepSize']);
                $entry['lot'] = floatval ($filter['stepSize']); // $lot size is deprecated as of 2018.02.06
                $entry['limits']['amount'] = array (
                    'min' => floatval ($filter['minQty']),
                    'max' => floatval ($filter['maxQty']),
                );
            }
            if (is_array ($filters) && array_key_exists ('MIN_NOTIONAL', $filters)) {
                $entry['limits']['cost']['min'] = floatval ($filters['MIN_NOTIONAL']['minNotional']);
            }
            $result[] = $entry;
        }
        return $result;
    }
    public function calculate_fee ($symbol, $type, $side, $amount, $price, $takerOrMaker = 'taker', $params = array ()) {
        $market = $this->markets[$symbol];
        $key = 'quote';
        $rate = $market[$takerOrMaker];
        $cost = floatval ($this->cost_to_precision($symbol, $amount * $rate));
        if ($side === 'sell') {
            $cost *= $price;
        } else {
            $key = 'base';
        }
        return array (
            'type' => $takerOrMaker,
            'currency' => $market[$key],
            'rate' => $rate,
            'cost' => floatval ($this->fee_to_precision($symbol, $cost)),
        );
    }
    public function fetch_balance ($params = array ()) {
        $this->load_markets();
        $response = $this->privateGetAccount ($params);
        $result = array ( 'info' => $response );
        $balances = $response['balances'];
        for ($i = 0; $i < count ($balances); $i++) {
            $balance = $balances[$i];
            $currency = $balance['asset'];
            if (is_array ($this->currencies_by_id) && array_key_exists ($currency, $this->currencies_by_id))
                $currency = $this->currencies_by_id[$currency]['code'];
            $account = array (
                'free' => floatval ($balance['free']),
                'used' => floatval ($balance['locked']),
                'total' => 0.0,
            );
            $account['total'] = $this->sum ($account['free'], $account['used']);
            $result[$currency] = $account;
        }
        return $this->parse_balance($result);
    }
    public function fetch_order_book ($symbol, $limit = null, $params = array ()) {
        $this->load_markets();
        $market = $this->market ($symbol);
        $request = array (
            'symbol' => $market['id'],
        );
        if ($limit !== null)
            $request['limit'] = $limit; // default = maximum = 100
        $response = $this->publicGetDepth (array_merge ($request, $params));
        $orderbook = $this->parse_order_book($response);
        $orderbook['nonce'] = $this->safe_integer($response, 'lastUpdateId');
        return $orderbook;
    }
    public function parse_ticker ($ticker, $market = null) {
        $timestamp = $this->safe_integer($ticker, 'closeTime');
        $iso8601 = ($timestamp === null) ? null : $this->iso8601 ($timestamp);
        $symbol = $this->find_symbol($this->safe_string($ticker, 'symbol'), $market);
        $last = $this->safe_float($ticker, 'lastPrice');
        return array (
            'symbol' => $symbol,
            'timestamp' => $timestamp,
            'datetime' => $iso8601,
            'high' => $this->safe_float($ticker, 'highPrice'),
            'low' => $this->safe_float($ticker, 'lowPrice'),
            'bid' => $this->safe_float($ticker, 'bidPrice'),
            'bidVolume' => $this->safe_float($ticker, 'bidQty'),
            'ask' => $this->safe_float($ticker, 'askPrice'),
            'askVolume' => $this->safe_float($ticker, 'askQty'),
            'vwap' => $this->safe_float($ticker, 'weightedAvgPrice'),
            'open' => $this->safe_float($ticker, 'openPrice'),
            'close' => $last,
            'last' => $last,
            'previousClose' => $this->safe_float($ticker, 'prevClosePrice'), // previous day close
            'change' => $this->safe_float($ticker, 'priceChange'),
            'percentage' => $this->safe_float($ticker, 'priceChangePercent'),
            'average' => null,
            'baseVolume' => $this->safe_float($ticker, 'volume'),
            'quoteVolume' => $this->safe_float($ticker, 'quoteVolume'),
            'info' => $ticker,
        );
    }
    public function fetch_ticker ($symbol, $params = array ()) {
        $this->load_markets();
        $market = $this->market ($symbol);
        $response = $this->publicGetTicker24hr (array_merge (array (
            'symbol' => $market['id'],
        ), $params));
        return $this->parse_ticker($response, $market);
    }
    public function parse_tickers ($rawTickers, $symbols = null) {
        $tickers = array ();
        for ($i = 0; $i < count ($rawTickers); $i++) {
            $tickers[] = $this->parse_ticker($rawTickers[$i]);
        }
        return $this->filter_by_array($tickers, 'symbol', $symbols);
    }
    public function fetch_bid_asks ($symbols = null, $params = array ()) {
        $this->load_markets();
        $rawTickers = $this->publicGetTickerBookTicker ($params);
        return $this->parse_tickers ($rawTickers, $symbols);
    }
    public function fetch_tickers ($symbols = null, $params = array ()) {
        $this->load_markets();
        $rawTickers = $this->publicGetTicker24hr ($params);
        return $this->parse_tickers ($rawTickers, $symbols);
    }
    public function parse_ohlcv ($ohlcv, $market = null, $timeframe = '1m', $since = null, $limit = null) {
        return [
            $ohlcv[0],
            floatval ($ohlcv[1]),
            floatval ($ohlcv[2]),
            floatval ($ohlcv[3]),
            floatval ($ohlcv[4]),
            floatval ($ohlcv[5]),
        ];
    }
    public function fetch_ohlcv ($symbol, $timeframe = '1m', $since = null, $limit = null, $params = array ()) {
        $this->load_markets();
        $market = $this->market ($symbol);
        $request = array (
            'symbol' => $market['id'],
            'interval' => $this->timeframes[$timeframe],
        );
        if ($since !== null)
            $request['startTime'] = $since;
        if ($limit !== null)
            $request['limit'] = $limit; // default == max == 500
        $response = $this->publicGetKlines (array_merge ($request, $params));
        return $this->parse_ohlcvs($response, $market, $timeframe, $since, $limit);
    }
    public function parse_trade ($trade, $market = null) {
        $timestampField = (is_array ($trade) && array_key_exists ('T', $trade)) ? 'T' : 'time';
        $timestamp = $trade[$timestampField];
        $priceField = (is_array ($trade) && array_key_exists ('p', $trade)) ? 'p' : 'price';
        $price = floatval ($trade[$priceField]);
        $amountField = (is_array ($trade) && array_key_exists ('q', $trade)) ? 'q' : 'qty';
        $amount = floatval ($trade[$amountField]);
        $idField = (is_array ($trade) && array_key_exists ('a', $trade)) ? 'a' : 'id';
        $id = (string) $trade[$idField];
        $side = null;
        $order = null;
        if (is_array ($trade) && array_key_exists ('orderId', $trade))
            $order = (string) $trade['orderId'];
        if (is_array ($trade) && array_key_exists ('m', $trade)) {
            $side = $trade['m'] ? 'sell' : 'buy'; // this is reversed intentionally
        } else {
            $side = ($trade['isBuyer']) ? 'buy' : 'sell'; // this is a true $side
        }
        $fee = null;
        if (is_array ($trade) && array_key_exists ('commission', $trade)) {
            $fee = array (
                'cost' => floatval ($trade['commission']),
                'currency' => $this->common_currency_code($trade['commissionAsset']),
            );
        }
        $takerOrMaker = null;
        if (is_array ($trade) && array_key_exists ('isMaker', $trade))
            $takerOrMaker = $trade['isMaker'] ? 'maker' : 'taker';
        return array (
            'info' => $trade,
            'timestamp' => $timestamp,
            'datetime' => $this->iso8601 ($timestamp),
            'symbol' => $market['symbol'],
            'id' => $id,
            'order' => $order,
            'type' => null,
            'takerOrMaker' => $takerOrMaker,
            'side' => $side,
            'price' => $price,
            'cost' => $price * $amount,
            'amount' => $amount,
            'fee' => $fee,
        );
    }
    public function fetch_trades ($symbol, $since = null, $limit = null, $params = array ()) {
        $this->load_markets();
        $market = $this->market ($symbol);
        $request = array (
            'symbol' => $market['id'],
        );
        if ($since !== null) {
            $request['startTime'] = $since;
            $request['endTime'] = $since . 3600000;
        }
        if ($limit !== null)
            $request['limit'] = $limit;
        // 'fromId' => 123,    // ID to get aggregate trades from INCLUSIVE.
        // 'startTime' => 456, // Timestamp in ms to get aggregate trades from INCLUSIVE.
        // 'endTime' => 789,   // Timestamp in ms to get aggregate trades until INCLUSIVE.
        // 'limit' => 500,     // default = maximum = 500
        $response = $this->publicGetAggTrades (array_merge ($request, $params));
        return $this->parse_trades($response, $market, $since, $limit);
    }
    public function parse_order_status ($status) {
        $statuses = array (
            'NEW' => 'open',
            'PARTIALLY_FILLED' => 'open',
            'FILLED' => 'closed',
            'CANCELED' => 'canceled',
        );
        return (is_array ($statuses) && array_key_exists ($status, $statuses)) ? $statuses[$status] : strtolower ($status);
    }
    public function parse_order ($order, $market = null) {
        $status = $this->safe_value($order, 'status');
        if ($status !== null)
            $status = $this->parse_order_status($status);
        $symbol = $this->find_symbol($this->safe_string($order, 'symbol'), $market);
        $timestamp = null;
        if (is_array ($order) && array_key_exists ('time', $order))
            $timestamp = $order['time'];
        else if (is_array ($order) && array_key_exists ('transactTime', $order))
            $timestamp = $order['transactTime'];
        $iso8601 = null;
        if ($timestamp !== null)
            $iso8601 = $this->iso8601 ($timestamp);
        $price = $this->safe_float($order, 'price');
        $amount = $this->safe_float($order, 'origQty');
        $filled = $this->safe_float($order, 'executedQty', 0.0);
        $remaining = null;
        $cost = null;
        if ($filled !== null) {
            if ($amount !== null)
                $remaining = max ($amount - $filled, 0.0);
            if ($price !== null)
                $cost = $price * $filled;
        }
        $id = $this->safe_string($order, 'orderId');
        $type = $this->safe_string($order, 'type');
        if ($type !== null)
            $type = strtolower ($type);
        $side = $this->safe_string($order, 'side');
        if ($side !== null)
            $side = strtolower ($side);
        $result = array (
            'info' => $order,
            'id' => $id,
            'timestamp' => $timestamp,
            'datetime' => $iso8601,
            'lastTradeTimestamp' => null,
            'symbol' => $symbol,
            'type' => $type,
            'side' => $side,
            'price' => $price,
            'amount' => $amount,
            'cost' => $cost,
            'filled' => $filled,
            'remaining' => $remaining,
            'status' => $status,
            'fee' => null,
        );
        return $result;
    }
    public function create_order ($symbol, $type, $side, $amount, $price = null, $params = array ()) {
        $this->load_markets();
        $market = $this->market ($symbol);
        // the next 5 lines are added to support for testing orders
        $method = 'privatePostOrder';
        $test = $this->safe_value($params, 'test', false);
        if ($test) {
            $method .= 'Test';
            $params = $this->omit ($params, 'test');
        }
        $order = array (
            'symbol' => $market['id'],
            'quantity' => $this->amount_to_string($symbol, $amount),
            'type' => strtoupper ($type),
            'side' => strtoupper ($side),
        );
        if ($type === 'limit') {
            $order = array_merge ($order, array (
                'price' => $this->price_to_precision($symbol, $price),
                'timeInForce' => 'GTC', // 'GTC' = Good To Cancel (default), 'IOC' = Immediate Or Cancel
            ));
        }
        $response = $this->$method (array_merge ($order, $params));
        return $this->parse_order($response);
    }
    public function fetch_order ($id, $symbol = null, $params = array ()) {
        if (!$symbol)
            throw new ExchangeError ($this->id . ' fetchOrder requires a $symbol param');
        $this->load_markets();
        $market = $this->market ($symbol);
        $origClientOrderId = $this->safe_value($params, 'origClientOrderId');
        $request = array (
            'symbol' => $market['id'],
        );
        if ($origClientOrderId !== null)
            $request['origClientOrderId'] = $origClientOrderId;
        else
            $request['orderId'] = intval ($id);
        $response = $this->privateGetOrder (array_merge ($request, $params));
        return $this->parse_order($response, $market);
    }
    public function fetch_orders ($symbol = null, $since = null, $limit = null, $params = array ()) {
        if (!$symbol)
            throw new ExchangeError ($this->id . ' fetchOrders requires a $symbol param');
        $this->load_markets();
        $market = $this->market ($symbol);
        $request = array (
            'symbol' => $market['id'],
        );
        if ($limit)
            $request['limit'] = $limit;
        $response = $this->privateGetAllOrders (array_merge ($request, $params));
        return $this->parse_orders($response, $market, $since, $limit);
    }
    public function fetch_open_orders ($symbol = null, $since = null, $limit = null, $params = array ()) {
        $this->load_markets();
        $market = null;
        $request = array ();
        if ($symbol !== null) {
            $market = $this->market ($symbol);
            $request['symbol'] = $market['id'];
        } else if ($this->options['warnOnFetchOpenOrdersWithoutSymbol']) {
            $symbols = $this->symbols;
            $numSymbols = is_array ($symbols) ? count ($symbols) : 0;
            $fetchOpenOrdersRateLimit = intval ($numSymbols / 2);
            throw new ExchangeError ($this->id . ' fetchOpenOrders WARNING => fetching open orders without specifying a $symbol is rate-limited to one call per ' . (string) $fetchOpenOrdersRateLimit . ' seconds. Do not call this method frequently to avoid ban. Set ' . $this->id . '.options["warnOnFetchOpenOrdersWithoutSymbol"] = false to suppress this warning message.');
        }
        $response = $this->privateGetOpenOrders (array_merge ($request, $params));
        return $this->parse_orders($response, $market, $since, $limit);
    }
    public function fetch_closed_orders ($symbol = null, $since = null, $limit = null, $params = array ()) {
        $orders = $this->fetch_orders($symbol, $since, $limit, $params);
        return $this->filter_by($orders, 'status', 'closed');
    }
    public function cancel_order ($id, $symbol = null, $params = array ()) {
        if (!$symbol)
            throw new ExchangeError ($this->id . ' cancelOrder requires a $symbol argument');
        $this->load_markets();
        $market = $this->market ($symbol);
        $response = $this->privateDeleteOrder (array_merge (array (
            'symbol' => $market['id'],
            'orderId' => intval ($id),
            // 'origClientOrderId' => $id,
        ), $params));
        return $response;
    }
    public function fetch_my_trades ($symbol = null, $since = null, $limit = null, $params = array ()) {
        if (!$symbol)
            throw new ExchangeError ($this->id . ' fetchMyTrades requires a $symbol argument');
        $this->load_markets();
        $market = $this->market ($symbol);
        $request = array (
            'symbol' => $market['id'],
        );
        if ($limit)
            $request['limit'] = $limit;
        $response = $this->privateGetMyTrades (array_merge ($request, $params));
        return $this->parse_trades($response, $market, $since, $limit);
    }
    public function fetch_deposit_address ($code, $params = array ()) {
        $this->load_markets();
        $currency = $this->currency ($code);
        $response = $this->wapiGetDepositAddress (array_merge (array (
            'asset' => $currency['id'],
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
    public function fetch_funding_fees ($codes = null, $params = array ()) {
        //  by default it will try load withdrawal fees of all currencies (with separate requests)
        //  however if you define $codes = array ( 'ETH', 'BTC' ) in args it will only load those
        $this->load_markets();
        $withdrawFees = array ();
        $info = array ();
        if ($codes === null)
            $codes = is_array ($this->currencies) ? array_keys ($this->currencies) : array ();
        for ($i = 0; $i < count ($codes); $i++) {
            $code = $codes[$i];
            $currency = $this->currency ($code);
            $response = $this->wapiGetWithdrawFee (array (
                'asset' => $currency['id'],
            ));
            $withdrawFees[$code] = $this->safe_float($response, 'withdrawFee');
            $info[$code] = $response;
        }
        return array (
            'withdraw' => $withdrawFees,
            'deposit' => array (),
            'info' => $info,
        );
    }
    public function withdraw ($code, $amount, $address, $tag = null, $params = array ()) {
        $this->check_address($address);
        $this->load_markets();
        $currency = $this->currency ($code);
        $name = mb_substr ($address, 0, 20);
        $request = array (
            'asset' => $currency['id'],
            'address' => $address,
            'amount' => floatval ($amount),
            'name' => $name,
        );
        if ($tag)
            $request['addressTag'] = $tag;
        $response = $this->wapiPostWithdraw (array_merge ($request, $params));
        return array (
            'info' => $response,
            'id' => $this->safe_string($response, 'id'),
        );
    }
    public function sign ($path, $api = 'public', $method = 'GET', $params = array (), $headers = null, $body = null) {
        $url = $this->urls['api'][$api];
        $url .= '/' . $path;
        if ($api === 'wapi')
            $url .= '.html';
        // v1 special case for userDataStream
        if ($path === 'userDataStream') {
            $body = $this->urlencode ($params);
            $headers = array (
                'X-MBX-APIKEY' => $this->apiKey,
                'Content-Type' => 'application/x-www-form-urlencoded',
            );
        } else if (($api === 'private') || ($api === 'wapi')) {
            $this->check_required_credentials();
            $query = $this->urlencode (array_merge (array (
                'timestamp' => $this->nonce (),
                'recvWindow' => $this->options['recvWindow'],
            ), $params));
            $signature = $this->hmac ($this->encode ($query), $this->encode ($this->secret));
            $query .= '&' . 'signature=' . $signature;
            $headers = array (
                'X-MBX-APIKEY' => $this->apiKey,
            );
            if (($method === 'GET') || ($api === 'wapi')) {
                $url .= '?' . $query;
            } else {
                $body = $query;
                $headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }
        } else {
            if ($params)
                $url .= '?' . $this->urlencode ($params);
        }
        return array ( 'url' => $url, 'method' => $method, 'body' => $body, 'headers' => $headers );
    }
    public function handle_errors ($code, $reason, $url, $method, $headers, $body) {
        if (($code === 418) || ($code === 429))
            throw new DDoSProtection ($this->id . ' ' . (string) $code . ' ' . $reason . ' ' . $body);
        // $error $response in a form => array ( "$code" => -1013, "msg" => "Invalid quantity." )
        // following block cointains legacy checks against message patterns in "msg" property
        // will switch "$code" checks eventually, when we know all of them
        if ($code >= 400) {
            if (mb_strpos ($body, 'Price * QTY is zero or less') !== false)
                throw new InvalidOrder ($this->id . ' order cost = amount * price is zero or less ' . $body);
            if (mb_strpos ($body, 'LOT_SIZE') !== false)
                throw new InvalidOrder ($this->id . ' order amount should be evenly divisible by lot size, use $this->amount_to_lots(symbol, amount) ' . $body);
            if (mb_strpos ($body, 'PRICE_FILTER') !== false)
                throw new InvalidOrder ($this->id . ' order price exceeds allowed price precision or invalid, use $this->price_to_precision(symbol, amount) ' . $body);
        }
        if (strlen ($body) > 0) {
            if ($body[0] === '{') {
                $response = json_decode ($body, $as_associative_array = true);
                // check $success value for wapi endpoints
                // $response in format array ('msg' => 'The coin does not exist.', 'success' => true/false)
                $success = $this->safe_value($response, 'success', true);
                if (!$success) {
                    if (is_array ($response) && array_key_exists ('msg', $response))
                        try {
                            $response = json_decode ($response['msg'], $as_associative_array = true);
                        } catch (Exception $e) {
                            $response = array ();
                        }
                }
                // checks against $error codes
                $error = $this->safe_string($response, 'code');
                if ($error !== null) {
                    $exceptions = $this->exceptions;
                    if (is_array ($exceptions) && array_key_exists ($error, $exceptions)) {
                        throw new $exceptions[$error] ($this->id . ' ' . $body);
                    } else {
                        throw new ExchangeError ($this->id . ' => unknown $error $code => ' . $body . ' ' . $error);
                    }
                }
                if (!$success) {
                    throw new ExchangeError ($this->id . ' => $success value false => ' . $body);
                }
            }
        }
    }
}