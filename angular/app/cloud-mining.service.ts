import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CloudMiningService {

   constructor(private http:HttpClient) {  }
  path = '/miningraw/top';
  public getTop() {

  	return this.http.get<any>(this.path);

  }

}
