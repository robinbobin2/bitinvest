import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StocksService {

  constructor(private http:HttpClient) {  }
  path = '/bit/info';
  bitPath = '/bit/';
  public getStocks(pairs) {

  	return this.http.get<any>(this.path+'?pair='+pairs).publishReplay(1).refCount();

  }

  public getCrypto() {
  	return this.http.get<any>(this.bitPath).publishReplay(1).refCount();
  }


}
