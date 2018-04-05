import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
@Injectable()
export class MathService {

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
  mess: number=0;

  constructor(private http:HttpClient) {
  	
      Observable.interval(1300).subscribe(wait => {
     this.mess +=1;
    });
     
     
   }
  message = this.mess;
  private messageSource = new BehaviorSubject<any>(this.message);
  currentMessage = this.messageSource.asObservable();


  // changeMessage(message: any) {
  //   this.messageSource.next(message)
  // }

}
