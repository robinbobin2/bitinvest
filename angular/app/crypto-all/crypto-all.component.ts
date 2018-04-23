import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
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
  week:string;

}
var dataRub;
var dataEur;

@Component({
  selector: 'app-crypto-all',
  templateUrl: './crypto-all.component.html',
  styleUrls: ['./crypto-all.component.scss']
})

export class CryptoAllComponent implements OnInit {


  // admin= new Array;
  dataUsd: Array<CryptoData> = [];
order = 'sym';
algorithm = '';
age = '';
  reverse: boolean = false;
  /**
   * Example: Use Order pipe in the component
   *
   * @param {OrderPipe} orderPipe
   */
  constructor(private orderPipe: OrderPipe, private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
      
       
    const alldata = http.get<Array<Cripto>>('/allcrypto');
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
        const path = "/bit";
        const info = http.get(path);
        info.subscribe(response => {
          // console.log(response);
         //  var usd_data = response;
            
              this.dataUsd[index]={
                // name: name,
                sym:symbol,
                year:year,
                algo:algo,
                last: response[symbol+"/USDT"]['last'],
                now: response[symbol+"/USDT"]['now'],
                min: response[symbol+"/USDT"]['min'],
                max: response[symbol+"/USDT"]['max'],
                value: response[symbol+"/USDT"]['value'],
                week: response[symbol+"/USDT"]['week'],
         };  

       console.log(this.dataUsd); 
      });
      }
    });
    // Observable.interval(1000).subscribe(wait => {
    // alldata.subscribe(response => {
    //   // console.log(response);
    //   let admin = response;
    //   for (var _i = 0; _i < admin.length; ++_i) {
    //     // console.log(this.admin[i].symbol);
    //     let index = _i;
    //     let name = admin[index].name;
    //     let symbol = admin[index].symbol;
    //     let year = admin[index].year;
    //     let algo = admin[index].algo;
    //     let desc = 'DESC';
    //     const path = "/bit/pair?pair="+symbol+"/USDT";
    //     const info = http.get(path);
    //     info.subscribe(response => {
    //       var usd_data = response;
    //           // console.log(this.dataUsd[index]);
    //           // let prevprice = this.dataUsd[index].price
    //            // this.dataUsd[index].name=name;
    //            this.dataUsd[index].sym=symbol;
    //             this.dataUsd[index].year=year;
    //             this.dataUsd[index].algo=algo;
    //             this.dataUsd[index].now= response['now'];
    //             this.dataUsd[index].last= response['last'];
    //   });
    //   }
    // });
    
    // });
  }
  
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  ngOnInit() {
  }
  isNegative(now, min) {
    if((parseInt(now, 10)-parseInt(min, 10)) > 0) {
      return false;
    } 
    return true;
  }

}
