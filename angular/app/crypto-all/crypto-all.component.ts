import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {StocksService} from '../stocks.service';
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
  week: number;
  day: number;

}
var dataRub;
var dataEur;

@Component({
  selector: 'app-crypto-all',
  templateUrl: './crypto-all.component.html',
  styleUrls: ['./crypto-all.component.scss'],
  providers: [StocksService],
})

export class CryptoAllComponent implements OnInit {


  // admin= new Array;
  dataUsd: Array<CryptoData> = [];
order = 'sym';
algorithm = '';
age = '';
data: any;
  reverse: boolean = false;
  /**
   * Example: Use Order pipe in the component
   *
   * @param {OrderPipe} orderPipe
   */
  constructor(private orderPipe: OrderPipe, 
    private http:HttpClient, 
    private router:Router, 
    private route:ActivatedRoute,
    private stocksServise:StocksService
    ) { 
      
       
    
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

    if(localStorage.getItem('data')) {
      this.dataUsd = JSON.parse(localStorage.getItem('data'));
      // console.log(this.dataUsd);
      
    }
    
    

    const alldata = this.http.get<Array<Cripto>>('/allcrypto');
    
    this.data = alldata.subscribe(response => {
      // console.log(response);
      let admin = response;
      for (var _i = 0; _i < admin.length; ++_i) {
        // console.log(this.admin[i].symbol);
        let index = _i;
        let symbol = admin[index].symbol;
        let year = admin[index].year;
        let algo = admin[index].algo;
        let desc = 'DESC';
        const path = "/bit/pair?pair="+symbol+"/USDT";
        const info = this.http.get(path);
        if(localStorage.getItem('data')) {
        } else {
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
        }

        Observable.interval(500).take(50).subscribe(wait =>{
        this.stocksServise.getCrypto()
        .subscribe(response => {
            this.dataUsd[index].sym = symbol;
              this.dataUsd[index].algo = algo;
              this.dataUsd[index].year = year;
              this.dataUsd[index].last = response[symbol+'/USDT']['last'];
              this.dataUsd[index].now = response[symbol+'/USDT']['now'];
              this.dataUsd[index].min = response[symbol+'/USDT']['min'];
              this.dataUsd[index].max = response[symbol+'/USDT']['max'];
              this.dataUsd[index].value = response[symbol+'/USDT']['value'];
              this.dataUsd[index].day = response[symbol+"/USDT"]['day'];
              this.dataUsd[index].week = response[symbol+"/USDT"]['week'];
              localStorage.removeItem('data');
              localStorage.setItem('data',JSON.stringify(this.dataUsd))
          });
      });
      //    Observable.interval(1400).take(50).subscribe(wait =>{
      //   info.subscribe(response => {
      //     // console.log(response);
      //    //  var usd_data = response;
            
      //         this.dataUsd[index].sym = symbol;
      //         this.dataUsd[index].algo = algo;
      //         this.dataUsd[index].year = year;
      //         this.dataUsd[index].last = response['last'];
      //         this.dataUsd[index].now = response['now'];
      //         this.dataUsd[index].min = response['min'];
      //         this.dataUsd[index].max = response['max'];
      //         this.dataUsd[index].value = response['value'];
              
              
      // });
      // });
      //   const bitpath = "/bit";
      //   const bitinfo = this.http.get(bitpath);
      //   bitinfo.subscribe(response => {
      //     // console.log(response);
      //    //  var usd_data = response;
      //    // localStorage.setItem('data', JSON.stringify(this.dataUsd));
      //         this.dataUsd[index].day = response[symbol+"/USDT"]['day'];
      //         this.dataUsd[index].week = response[symbol+"/USDT"]['week'];
              
      // });
        
      }
    });
  }
  isNegative(now) {
    if((parseInt(now)) >= 0) {
      return false;
    } 
    return true;
  }
  ngOnDestroy() {

  this.data.unsubscribe();
}

}
