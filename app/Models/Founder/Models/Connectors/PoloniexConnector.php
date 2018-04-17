<?php
/**
 * Created by PhpStorm.
 * User: Админ
 * Date: 07.04.2018
 * Time: 16:27
 */

namespace App\Models\Founder\Models\Connectors;


use App\Models\Founder\Models\FounderConnector;
use App\Models\Founder\Models\Requests\Request;

class PoloniexConnector extends FounderConnector
{

    public function describe () {
        return array_replace_recursive (parent::describe (), array (
            'id' => 'poloniex',
            'name' => 'Poloniex',
            'countries' => 'US',
            'rateLimit' => 1000, // up to 6 calls per second
            'has' => array (
                'createDepositAddress' => true,
                'fetchDepositAddress' => true,
                'CORS' => false,
                'editOrder' => true,
                'createMarketOrder' => false,
                'fetchOHLCV' => true,
                'fetchMyTrades' => true,
                'fetchOrder' => 'emulated',
                'fetchOrders' => 'emulated',
                'fetchOpenOrders' => true,
                'fetchClosedOrders' => 'emulated',
                'fetchTickers' => true,
                'fetchCurrencies' => true,
                'withdraw' => true,
            ),
            'timeframes' => array (
                '5m' => 300,
                '15m' => 900,
                '30m' => 1800,
                '2h' => 7200,
                '4h' => 14400,
                '1d' => 86400,
            ),
            'urls' => array (
                'logo' => 'https://user-images.githubusercontent.com/1294454/27766817-e9456312-5ee6-11e7-9b3c-b628ca5626a5.jpg',
                'api' => array (
                    'public' => 'https://poloniex.com/public',
                    'private' => 'https://poloniex.com/tradingApi',
                ),
                'www' => 'https://poloniex.com',
                'doc' => array (
                    'https://poloniex.com/support/api/',
                    'http://pastebin.com/dMX7mZE0',
                ),
                'fees' => 'https://poloniex.com/fees',
            ),
            'api' => array (
                'public' => array (
                    'get' => array (
                        'return24hVolume',
                        'returnChartData',
                        'returnCurrencies',
                        'returnLoanOrders',
                        'returnOrderBook',
                        'returnTicker',
                        'returnTradeHistory',
                    ),
                ),
                'private' => array (
                    'post' => array (
                        'buy',
                        'cancelLoanOffer',
                        'cancelOrder',
                        'closeMarginPosition',
                        'createLoanOffer',
                        'generateNewAddress',
                        'getMarginPosition',
                        'marginBuy',
                        'marginSell',
                        'moveOrder',
                        'returnActiveLoans',
                        'returnAvailableAccountBalances',
                        'returnBalances',
                        'returnCompleteBalances',
                        'returnDepositAddresses',
                        'returnDepositsWithdrawals',
                        'returnFeeInfo',
                        'returnLendingHistory',
                        'returnMarginAccountSummary',
                        'returnOpenLoanOffers',
                        'returnOpenOrders',
                        'returnOrderTrades',
                        'returnTradableBalances',
                        'returnTradeHistory',
                        'sell',
                        'toggleAutoRenew',
                        'transferBalance',
                        'withdraw',
                    ),
                ),
            ),
            'fees' => array (
                'trading' => array (
                    'maker' => 0.0015,
                    'taker' => 0.0025,
                ),
                'funding' => array (),
            ),
            'limits' => array (
                'amount' => array (
                    'min' => 0.00000001,
                    'max' => 1000000000,
                ),
                'price' => array (
                    'min' => 0.00000001,
                    'max' => 1000000000,
                ),
                'cost' => array (
                    'min' => 0.00000000,
                    'max' => 1000000000,
                ),
            ),
            'precision' => array (
                'amount' => 8,
                'price' => 8,
            ),
            'commonCurrencies' => array (
                'BTM' => 'Bitmark',
                'STR' => 'XLM',
            ),
        ));
    }


    public function fetch_markets () {
        $markets = $this->publicGetReturnTicker ();
        $keys = is_array ($markets) ? array_keys ($markets) : array ();
        $result = array ();
        for ($p = 0; $p < count ($keys); $p++) {
            $id = $keys[$p];
            $market = $markets[$id];
            list ($quote, $base) = explode ('_', $id);
            $base = $this->common_currency_code($base);
            $quote = $this->common_currency_code($quote);
            $symbol = $base . '/' . $quote;
            $result[] = array_merge ($this->fees['trading'], array (
                'id' => $id,
                'symbol' => $symbol,
                'base' => $base,
                'quote' => $quote,
                'active' => true,
                'precision' => array (
                    'amount' => 8,
                    'price' => 8,
                ),
                'limits' => array (
                    'amount' => array (
                        'min' => 0.00000001,
                        'max' => 1000000000,
                    ),
                    'price' => array (
                        'min' => 0.00000001,
                        'max' => 1000000000,
                    ),
                    'cost' => array (
                        'min' => 0.00000000,
                        'max' => 1000000000,
                    ),
                ),
                'info' => $market,
            ));
        }
        return $result;
    }



    public function parse_ticker ($ticker, $market = null) {
        $timestamp = $this->milliseconds ();
        $symbol = null;
        if ($market)
            $symbol = $market['symbol'];
        $open = null;
        $change = null;
        $average = null;
        $last = floatval ($ticker['last']);
        $relativeChange = floatval ($ticker['percentChange']);
        if ($relativeChange !== -1) {
            $open = $last / $this->sum (1, $relativeChange);
            $change = $last - $open;
            $average = $this->sum ($last, $open) / 2;
        }
        return array (
            'symbol' => $symbol,
            'timestamp' => $timestamp,
            'datetime' => $this->iso8601 ($timestamp),
            'high' => floatval ($ticker['high24hr']),
            'low' => floatval ($ticker['low24hr']),
            'bid' => floatval ($ticker['highestBid']),
            'bidVolume' => null,
            'ask' => floatval ($ticker['lowestAsk']),
            'askVolume' => null,
            'vwap' => null,
            'open' => $open,
            'close' => $last,
            'last' => $last,
            'previousClose' => null,
            'change' => $change,
            'percentage' => $relativeChange * 100,
            'average' => $average,
            'baseVolume' => floatval ($ticker['quoteVolume']),
            'quoteVolume' => floatval ($ticker['baseVolume']),
            'info' => $ticker,
        );
    }

    public function fetch_tickers ($symbols = null, $params = array ()) {
        $this->load_markets();
        $tickers = $this->publicGetReturnTicker ($params);

        $ids = is_array ($tickers) ? array_keys ($tickers) : array ();
        $result = array ();
        for ($i = 0; $i < count ($ids); $i++) {
            $id = $ids[$i];
            $market = $this->markets_by_id[$id];
            $symbol = $market['symbol'];
            $ticker = $tickers[$id];
            $result[$symbol] = $this->parse_ticker($ticker, $market);
        }
        return json_encode($result);
    }

    public function fetch_currencies ($params = array ()) {
        $currencies = $this->publicGetReturnCurrencies ($params);
        $ids = is_array ($currencies) ? array_keys ($currencies) : array ();
        $result = array ();
        for ($i = 0; $i < count ($ids); $i++) {
            $id = $ids[$i];
            $currency = $currencies[$id];
            // todo => will need to rethink the fees
            // to add support for multiple withdrawal/deposit methods and
            // differentiated fees for each particular method
            $precision = 8; // default $precision, todo => fix "magic constants"
            $code = $this->common_currency_code($id);
            $active = ($currency['delisted'] === 0);
            $status = ($currency['disabled']) ? 'disabled' : 'ok';
            if ($status !== 'ok')
                $active = false;
            $result[$code] = array (
                'id' => $id,
                'code' => $code,
                'info' => $currency,
                'name' => $currency['name'],
                'active' => $active,
                'status' => $status,
                'fee' => $this->safe_float($currency, 'txFee'), // todo => redesign
                'precision' => $precision,
                'limits' => array (
                    'amount' => array (
                        'min' => pow (10, -$precision),
                        'max' => pow (10, $precision),
                    ),
                    'price' => array (
                        'min' => pow (10, -$precision),
                        'max' => pow (10, $precision),
                    ),
                    'cost' => array (
                        'min' => null,
                        'max' => null,
                    ),
                    'withdraw' => array (
                        'min' => $currency['txFee'],
                        'max' => pow (10, $precision),
                    ),
                ),
            );
        }
        return $result;
    }

    public function fetch_ticker ($symbol) {
        $this->load_markets();
        $market = $this->market ($symbol);
        $ticker = $market['info'];
        return $this->parse_ticker($ticker, $market);
    }

    public function fetch_deposit_address ($code, $params = array ()) {
        $currency = $this->currency ($code);
        $response = $this->privatePostReturnDepositAddresses ();
        $currencyId = $currency['id'];
        $address = $this->safe_string($response, $currencyId);
        $this->check_address($address);
        $status = $address ? 'ok' : 'none';
        return array (
            'currency' => $code,
            'address' => $address,
            'status' => $status,
            'info' => $response,
        );
    }

    public function withdraw ($code, $amount, $address, $tag = null, $params = array ()) {
        $this->check_address($address);
        $this->load_markets();
        $currency = $this->currency ($code);
        $request = array (
            'currency' => $currency['id'],
            'amount' => $amount,
            'address' => $address,
        );
        if ($tag)
            $request['paymentId'] = $tag;
        $result = $this->privatePostWithdraw (array_merge ($request, $params));
        return array (
            'info' => $result,
            'id' => $result['response'],
        );
    }

    public function nonce () {
        return $this->milliseconds ();
    }

    public function sign ($path, $api = 'public', $method = 'GET', $params = array (), $headers = null, $body = null) {
        $url = $this->urls['api'][$api];
        $query = array_merge (array ( 'command' => $path ), $params);
        if ($api === 'public') {
            $url .= '?' . $this->urlencode ($query);
        } else {
            $this->check_required_credentials();
            $query['nonce'] = $this->nonce ();
            $body = $this->urlencode ($query);
            $headers = array (
                'Content-Type' => 'application/x-www-form-urlencoded',
                'Key' => $this->apiKey,
                'Sign' => $this->hmac ($this->encode ($body), $this->encode ($this->secret), 'sha512'),
            );
        }
        return array ( 'url' => $url, 'method' => $method, 'body' => $body, 'headers' => $headers );
    }
}