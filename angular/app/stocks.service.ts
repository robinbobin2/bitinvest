import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StocksService {
    bit:Subject<any> = new BehaviorSubject<any>("");
    bit$ = this.bit.asObservable();
    cryptoData:any;
  constructor(private http:HttpClient) {

  }

  path = '/bit/info';
  bitPath = '/bit';
  exchangePath = '/angular/exchange/';
  exchangePairsPath = '/bit/pair/name?exchange=';
  observ: any;
  returnPath: any;
  obs: any;
  public getStocks(pairs) {

  	return this.http.get<any>(this.path+'?pair='+pairs).publishReplay(1).refCount();

  }

  public getCrypto() {
  	return this.returnPath = this.http.get<any>(this.bitPath).publishReplay(1).refCount().map((res)=>{
        this.setBit(res)
  	    return res;
    })
  }

  public setBit(res) {
      this.bit.next(res);

  }

  public getExchanges() {
    return this.http.get<any>('/angular/exchanges').publishReplay(1).refCount();
  }
  public getVolumes() {
    return this.http.get<any>('/bit/volumes').publishReplay(1).refCount();
  }
  public getCryptoVol() {

      return this.http.get<any>('/bit/currencyVolumes').publishReplay(1).refCount();
  }
  public getExchange(name) {
    return this.http.get<any>(this.exchangePath+name).publishReplay(1).refCount();
  }
  public getExchangePairs(name) {
    return this.http.get<any>(this.exchangePairsPath+name).publishReplay(1).refCount();
  }
  public getPairsCount() {
    return this.http.get<any>('/bit/pair/count').publishReplay(1).refCount();
  }

}
