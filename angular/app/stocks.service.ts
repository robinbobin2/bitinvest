import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StocksService {

  constructor(private http:HttpClient) {  }
  path = '/bit/info';
  public getStocks(pairs) {

  	return this.http.get<any>(this.path+'?pair='+pairs).publishReplay(1).refCount();

  }

}
