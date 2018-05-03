import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StocksService {

  constructor(private http:HttpClient) {  }
  path = '/bit/info';
  bitPath = '/bit/';
  observ: any;
  returnPath: any;
  public getStocks(pairs) {

  	return this.http.get<any>(this.path+'?pair='+pairs).publishReplay(1).refCount();

  }

  public getCrypto() {
  	return this.returnPath.interval(1000);
  }


}
