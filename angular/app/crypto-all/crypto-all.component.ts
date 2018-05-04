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
order = 'now';
algorithm = '';
age = '';
data: any;
resp: any;
cryptoData: any;
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
      
    
  }
  
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  ngOnInit() {

    const alldata = this.http.get<Array<Cripto>>('/allcrypto');
if(localStorage.getItem('data')) {
      this.dataUsd = JSON.parse(localStorage.getItem('data'));
      console.log(this.dataUsd);
      }
    this.stocksServise.getCrypto()
        .subscribe(response => {
            this.resp = response;
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
        if(this.dataUsd[index]) {
                this.dataUsd[index].sym = symbol;
                this.dataUsd[index].algo = algo;
                this.dataUsd[index].year = year;
                this.dataUsd[index].last = this.resp[symbol+'/USDT']['last'];
                this.dataUsd[index].now = this.resp[symbol+'/USDT']['now'];
                this.dataUsd[index].min = this.resp[symbol+'/USDT']['min'];
                this.dataUsd[index].max = this.resp[symbol+'/USDT']['max'];
                this.dataUsd[index].value = this.resp[symbol+'/USDT']['value'];
                this.dataUsd[index].day = this.resp[symbol+"/USDT"]['day'];
                this.dataUsd[index].week = this.resp[symbol+"/USDT"]['week'];
                
          
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
        localStorage.removeItem('data');
            localStorage.setItem('data',JSON.stringify(this.dataUsd))
       }
    });
          });
    this.cryptoData=Observable.interval(1000).take(50).concatMap(()=>this.stocksServise.getCrypto())
        .map((response)=>{this.resp = response; console.log(this.resp)}).subscribe(()=>{
    

    
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
        console.log('asdasdasd');
        console.log(this.resp[symbol+'/USDT']['last'])
        if(this.dataUsd[index]) {
                this.dataUsd[index].sym = symbol;
                this.dataUsd[index].algo = algo;
                this.dataUsd[index].year = year;
                this.dataUsd[index].last = this.resp[symbol+'/USDT']['last'];
                this.dataUsd[index].now = this.resp[symbol+'/USDT']['now'];
                this.dataUsd[index].min = this.resp[symbol+'/USDT']['min'];
                this.dataUsd[index].max = this.resp[symbol+'/USDT']['max'];
                this.dataUsd[index].value = this.resp[symbol+'/USDT']['value'];
                this.dataUsd[index].day = this.resp[symbol+"/USDT"]['day'];
                this.dataUsd[index].week = this.resp[symbol+"/USDT"]['week'];
                
          
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
        localStorage.removeItem('data');
            localStorage.setItem('data',JSON.stringify(this.dataUsd))
       }
    });
    });
  }
  isNegative(now) {
    if((parseInt(now)) >= 0) {
      return false;
    } 
    return true;
  }
  isNegativeMath(now, last) {
    if((parseInt(now)-parseInt(last)) >= 0) {
      return false;
    } 
    return true;
  }
  ngOnDestroy() {

  // this.data.unsubscribe();
  this.cryptoData.unsubscribe();
}

}
