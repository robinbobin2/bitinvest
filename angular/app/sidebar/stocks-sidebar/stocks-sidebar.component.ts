import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StocksService} from '../../stocks.service';
import { Observable } from 'rxjs/Rx';
export class Cripto {
  id: number;
  name:string;
  symbol:string;
  year:number;
  desc: string;
  algo: string;
}
@Component({
  selector: 'app-stocks-sidebar',
  templateUrl: './stocks-sidebar.component.html',
  styleUrls: ['./stocks-sidebar.component.scss'],
  providers: [StocksService],
})
export class StocksSidebarComponent implements OnInit {
 dataUsd:any=[];
  constructor(private http:HttpClient,
    private stocksServise:StocksService
    ) { }
data: any;
resp: any;
cryptoData: any;
load:boolean = true;
  ngOnInit() {
    const alldata = this.http.get<Array<Cripto>>('/allcrypto');
if(localStorage.getItem('data')) {
      this.load = false;
      this.dataUsd = JSON.parse(localStorage.getItem('data'));
      }
    this.stocksServise.getCrypto()
        .subscribe(response => {
            this.resp = response;
            this.data = alldata.subscribe(response => {
      let admin = response;
      for (var _i = 0; _i < admin.length; ++_i) {
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
        this.load = false;
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
ngOnDestroy() {

  // this.data.unsubscribe();
  this.cryptoData.unsubscribe();
}
}
