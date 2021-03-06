import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Router, ActivatedRoute,ActivatedRouteSnapshot, Resolve, } from '@angular/router';
export class DataRub {
  price: any;
  lastupdate: any;
  mktcap: any;
  vol24hours: any;
  open24hours: any;
  low24hours: any;
  high24hours: any;
  lasttrade: any;

}
export class Cripto {
  id: number;
  name:string;
  symbol:string;
  year:number;
  desc: string;
  algo: string;
}

export interface CryptoData {
  sym: string;
  last: number;
  now: number;
  min:number;
  max: number;
  value:number;
  year: number;
  algo: string;
  week: number;
  day: number;

}
var dataRub;
var dataEur;
@Injectable()
export class SidebarResolverService implements Resolve<any> {
dataUsd: Array<CryptoData> = [];
  constructor(private http:HttpClient) { }

  resolve(route:ActivatedRouteSnapshot) {
  	const alldata = this.http.get<Array<Cripto>>('/allcrypto');
    alldata.subscribe(response => {
      // console.log(response);
      let admin = response;
      for (var _i = 0; _i < admin.length; ++_i) {
        // console.log(this.admin[i].symbol);
        let index = _i;
        let symbol = admin[index].symbol;
        let year = admin[index].year;
        let algo = admin[index].algo;
        let desc = 'DESC';
        const path = "/bit/pair?pair="+symbol+"/USD";
        const info = this.http.get(path);
        info.subscribe(response => {
          console.log(response);
         //  var usd_data = response;
            this.dataUsd[index] = {
                sym: '',
                last: 0,
                now: 0,
                min:0,
                max: 0,
                value:0,
                year: 0,
                algo: '',
                week: 0,
                day: 0,
            }
              this.dataUsd[index].sym = symbol;
              this.dataUsd[index].algo = algo;
              this.dataUsd[index].year = year;
              this.dataUsd[index].last = response['last'];
              this.dataUsd[index].now = response['now'];
              this.dataUsd[index].min = response['min'];
              this.dataUsd[index].max = response['max'];
              this.dataUsd[index].value = response['value'];
      });
        const bitpath = "/bit";
        const bitinfo = this.http.get(bitpath);
        bitinfo.subscribe(response => {
          // console.log(response);
         //  var usd_data = response;
            
              this.dataUsd[index].day = response[symbol+"/USD"]['day'];
              this.dataUsd[index].week = response[symbol+"/USD"]['week'];
      });
      }
    });
  }

}
