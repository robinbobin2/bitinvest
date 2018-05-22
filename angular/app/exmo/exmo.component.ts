import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpClient,HttpHeaders } from '@angular/common/http';

export class ExmoBtcUsd {
  high: any;
  low: any;
  avg: any;
  vol: any;
  vol_curr: any;
  last_trade: any;
  buy_price: string;
  sell_price: any;
  updated: any;

}

export class Bittrex {
  high: any;
  low: any;
  vol: any;
  last: string;
}
export class Wex {
  high: any;
  low: any;
  vol: any;
  last: string;
}

export class Poloniex {
  high: any;
  low: any;
  // vol: any;
  last: any;
}
export class Okex {
  high: any;
  low: any;
  // vol: any;
  last: any;
}
export class MarketRaw {
  high: any;
  low: any;
  baseVolume: any;
  last: any;
}
export class Hitbtc {
  high: any;
  low: any;
  baseVolume: any;
  last: any;
}


export interface Market {
CHANGE24HOUR: any;
CHANGEDAY: number;
CHANGEPCT24HOUR: number;
CHANGEPCTDAY: number;
HIGH24HOUR: number;
LASTUPDATE: number;
LASTVOLUME: number;
LASTVOLUMETO: number;
LOW24HOUR: number;
MARKET: string;
OPEN24HOUR: number;
VOLUME24HOUR: number;
PRICE: number;
}
var exmodata;

@Component({
  selector: 'app-exmo',
  templateUrl: './exmo.component.html',
  styleUrls: ['./exmo.component.css'],

})
export class ExmoComponent implements OnInit {
	exmodata: ExmoBtcUsd;
  markets: Market[] = [];
  bittrex: Bittrex;
  wex: Wex;
  poloniex: Poloniex;
  okex: Okex;
  bitfinex: MarketRaw;
  hitbtc: Hitbtc;
  kraken: MarketRaw;
  gdax: MarketRaw;
  bitflyer:MarketRaw;
  bitstamp: MarketRaw;
  lbank: MarketRaw;
  gemini: MarketRaw;
  gateio: MarketRaw;
  zb: MarketRaw;
  exx: MarketRaw;
  liqui: MarketRaw;
  kucoin: MarketRaw;
  livecoin: MarketRaw;
  yobit: MarketRaw;
  constructor(private http:HttpClient) {

  	const info = http.get("https://api.exmo.me/v1/ticker/");
    const headers = new HttpHeaders().
    set('Content-Type', 'application/json').
    set('Accept', 'application/json').
    set('Access-Control-Allow-Headers', 'Content-Type').
    set('Access-Control-Allow-Origin', '*');
    // const binance = http.get('/cryptocompar', {headers: headers});
    const bittrexurl = http.get('/bittrex/btcusd.php', {headers: headers});
    const wexurl = http.get('/wex/btcusd.php', {headers: headers});
    const poloniexurl = http.get<Poloniex>('/ccxt/vendor/ccxt/ccxt/mas.php?market=poloniex&syms=BTC/USD', {headers: headers});
    const okexurl = http.get<Okex>('/ccxt/vendor/ccxt/ccxt/mas.php?market=okex&syms=BTC/USD', {headers: headers});
    const bitfinexurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=bitfinex&syms=BTC/USD', {headers: headers});
    const hitbtcurl = http.get<Hitbtc>('/ccxt/vendor/ccxt/ccxt/mas.php?market=hitbtc&syms=BTC/USD', {headers: headers});
    const krakenurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=kraken&syms=BTC/USD', {headers: headers});
    const gdaxurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=gdax&syms=BTC/USD', {headers: headers});
    const bitflyerurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=bitflyer&syms=BTC/USD', {headers: headers});
    const bitstampurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=bitstamp&syms=BTC/USD', {headers: headers});
    const lbankurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=lbank&syms=BTC/USD', {headers: headers});
    const gateiourl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=gateio&syms=BTC/USD', {headers: headers});
    const geminiurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=gemini&syms=BTC/USD', {headers: headers});
    // const livecoinurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=livecoin&syms=BTC/USD', {headers: headers});
    // const yobiturl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=yobit&syms=BTC/USD', {headers: headers});
    // const zburl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=zb&syms=BTC/USD', {headers: headers});
    // const exxurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=exx&syms=BTC/USD', {headers: headers});
    // const liquiurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=liqui&syms=BTC/USD', {headers: headers});
    // const kucoinurl = http.get<MarketRaw>('/ccxt/vendor/ccxt/ccxt/mas.php?market=liqui&syms=BTC/USD', {headers: headers});
        bitstampurl.subscribe(response => {
          this.bitstamp = response;
        });
        // yobiturl.subscribe(response => {
        //   this.yobit = response;
        // });
        // livecoinurl.subscribe(response => {
        //   this.livecoin = response;
        // });
        
        // kucoinurl.subscribe(response => {
        //   this.kucoin = response;
        // });
        // liquiurl.subscribe(response => {
        //   this.liqui = response;
        // });
        // zburl.subscribe(response => {
        //   this.zb = response;
        // });
        // exxurl.subscribe(response => {
        //   this.exx = response;
        // });
        lbankurl.subscribe(response => {
          this.lbank = response;
        });
        gateiourl.subscribe(response => {
          this.gateio = response;
        });
        geminiurl.subscribe(response => {
          this.gemini = response;
        });
        bitflyerurl.subscribe(response => {
          this.bitflyer = response;
        });
        gdaxurl.subscribe(response => {
          this.gdax = response;
        });
        krakenurl.subscribe(response => {
          this.kraken = response;
        });
        hitbtcurl.subscribe(response => {
          this.hitbtc = response;
        });
   
        // bitfinexurl.subscribe(response => {
        //   this.bitfinex = response;
        // });
        okexurl.subscribe(response => {
          this.okex = response;
        });
   
        poloniexurl.subscribe(polraw => {
              this.poloniex = polraw;
        });
         bittrexurl.subscribe(bitraw => {
          this.bittrex = {
            high: bitraw[0]['High'],
            low: bitraw[0]['Low'],
            vol: bitraw[0]['Volume'],
            last: bitraw[0]['Last'],
          }
    });
    wexurl.subscribe(wexraw => {
          this.wex = {
            high: wexraw['btc_usd']['high'],
            low: wexraw['btc_usd']['low'],
            vol: wexraw['btc_usd']['vol'],
            last: wexraw['btc_usd']['last'],
          }
    });
      info.subscribe(response => {
    this.exmodata = {
            high: response['BTC_USD'].high,
          low: response['BTC_USD'].low,
          avg: response['BTC_USD'].avg,
          vol: response['BTC_USD'].vol,
          vol_curr: response['BTC_USD'].vol_curr,
          last_trade: response['BTC_USD'].last_trade,
          buy_price: response['BTC_USD'].buy_price,
          sell_price: response['BTC_USD'].sell_price,
          updated: response['BTC_USD'].updated,

        }

    });
      // binance.subscribe(crypto => {
      //   for (let item of crypto['Data']['Exchanges']) {
      //    this.markets[item['MARKET']] = {
      //       CHANGE24HOUR: item['CHANGE24HOUR'],
      //       CHANGEDAY: item['CHANGEDAY'],
      //       CHANGEPCT24HOUR: item['CHANGEPCT24HOUR'],
      //       CHANGEPCTDAY: item['CHANGEPCTDAY'],
      //       HIGH24HOUR: item['HIGH24HOUR'],
      //       LASTUPDATE: item['LASTUPDATE'],
      //       LASTVOLUME: item['LASTVOLUME'],
      //       LASTVOLUMETO: item['LASTVOLUMETO'],
      //       LOW24HOUR: item['LOW24HOUR'],
      //       MARKET: item['MARKET'],
      //       OPEN24HOUR: item['OPEN24HOUR'],
      //       VOLUME24HOUR: item['VOLUME24HOUR'],
      //       PRICE: item['PRICE'],
      //    }
          
      //   }
      // });
      Observable.interval(2300).subscribe(wait => {
        bitstampurl.subscribe(response => {
          this.bitstamp = response;
        });
        // yobiturl.subscribe(response => {
        //   this.yobit = response;
        // });
        // livecoinurl.subscribe(response => {
        //   this.livecoin = response;
        // });
        
        // kucoinurl.subscribe(response => {
        //   this.kucoin = response;
        // });
        // liquiurl.subscribe(response => {
        //   this.liqui = response;
        // });
        // zburl.subscribe(response => {
        //   this.zb = response;
        // });
        // exxurl.subscribe(response => {
        //   this.exx = response;
        // });
        lbankurl.subscribe(response => {
          this.lbank = response;
        });
        gateiourl.subscribe(response => {
          this.gateio = response;
        });
        geminiurl.subscribe(response => {
          this.gemini = response;
        });
        bitflyerurl.subscribe(response => {
          this.bitflyer = response;
        });
        gdaxurl.subscribe(response => {
          this.gdax = response;
        });
        krakenurl.subscribe(response => {
          this.kraken = response;
        });
        hitbtcurl.subscribe(response => {
          this.hitbtc = response;
        });
   
        // bitfinexurl.subscribe(response => {
        //   this.bitfinex = response;
        // });
        okexurl.subscribe(response => {
          this.okex = response;
        });
   
        poloniexurl.subscribe(polraw => {
              this.poloniex = polraw;
        });
         bittrexurl.subscribe(bitraw => {
          this.bittrex = {
            high: bitraw[0]['High'],
            low: bitraw[0]['Low'],
            vol: bitraw[0]['Volume'],
            last: bitraw[0]['Last'],
          }
    });
    wexurl.subscribe(wexraw => {
          this.wex = {
            high: wexraw['btc_usd']['high'],
            low: wexraw['btc_usd']['low'],
            vol: wexraw['btc_usd']['vol'],
            last: wexraw['btc_usd']['last'],
          }
    });
      info.subscribe(response => {
    this.exmodata = {
            high: response['BTC_USD'].high,
          low: response['BTC_USD'].low,
          avg: response['BTC_USD'].avg,
          vol: response['BTC_USD'].vol,
          vol_curr: response['BTC_USD'].vol_curr,
          last_trade: response['BTC_USD'].last_trade,
          buy_price: response['BTC_USD'].buy_price,
          sell_price: response['BTC_USD'].sell_price,
          updated: response['BTC_USD'].updated,

        }

    });
      // binance.subscribe(crypto => {
      //   for (let item of crypto['Data']['Exchanges']) {
      //    this.markets[item['MARKET']] = {
      //       CHANGE24HOUR: item['CHANGE24HOUR'],
      //       CHANGEDAY: item['CHANGEDAY'],
      //       CHANGEPCT24HOUR: item['CHANGEPCT24HOUR'],
      //       CHANGEPCTDAY: item['CHANGEPCTDAY'],
      //       HIGH24HOUR: item['HIGH24HOUR'],
      //       LASTUPDATE: item['LASTUPDATE'],
      //       LASTVOLUME: item['LASTVOLUME'],
      //       LASTVOLUMETO: item['LASTVOLUMETO'],
      //       LOW24HOUR: item['LOW24HOUR'],
      //       MARKET: item['MARKET'],
      //       OPEN24HOUR: item['OPEN24HOUR'],
      //       VOLUME24HOUR: item['VOLUME24HOUR'],
      //       PRICE: item['PRICE'],
      //    }
          
      //   }
      // });
    });
      

}
  ngOnInit() {
  }
arith(n,m,c) {
  n = parseInt(n, 10);
  m = parseInt(m, 10);
  c = parseInt(c, 10);
  var sum = n+m+c;
  // console.log(sum/3)
  return sum/3;
}
}
