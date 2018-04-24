import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class Stock {
	exchangeId: number;
	volume: number;
	value: number;
	percent:number;
	bid:number;
	ask: number;
	currency: string;
}


@Injectable()
export class StocksService {

  constructor(private http:HttpClient) {  }
  path = '/bit/info';
  public getStocks(pairs) {

  	return this.http.get<Array<Stock>>(this.path+'?pair='+pairs);

  }

}
