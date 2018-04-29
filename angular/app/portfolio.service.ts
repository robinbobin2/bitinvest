import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const headers = new HttpHeaders({'Content-type': 'Application/json '});

@Injectable()
export class PortfolioService {
  portfolios = [];
  constructor(private http:HttpClient) {
  	


   }

  // public getUser() {
  // return this.http
  //   .get<any>('/angular/user');
  // }
  public getPortfolioNames() {
  	return this.http
    .get<any>('/angular/user');

  }
  public getPortfolioById(id) {
  	return this.http
    .get<any>('/angular/userportfolio/'+id);
  }
  public deletePortfolioCat(id) {
  	return this.http
    .get<any>('/angular/userportfolio/deletecat/'+id);
  }
  public removePortfolio(id) {
    return this.http.get('/angular/userportfolio/remove/'+id);
  }
  public submitPortfolio( post_id, id, type) {
    
    return this.http.post('/storeportfolio', {
            'user_portfollable_id': id,
            'user_portfolio_id':post_id,
            'user_portfollable_type': type
      }, 
      {headers: headers})
  }
}
