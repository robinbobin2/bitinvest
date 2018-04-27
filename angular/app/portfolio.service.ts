import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
}
