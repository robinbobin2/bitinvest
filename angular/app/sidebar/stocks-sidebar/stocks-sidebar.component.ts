import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StocksService} from '../../stocks.service';
import { Observable } from 'rxjs/Rx';
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
  styleUrls: ['./stocks-sidebar.component.scss']
})
export class StocksSidebarComponent implements OnInit {
 dataUsd: Array<CryptoData> = [];
  constructor(private http:HttpClient,
    private stocksServise:StocksService
    ) { }
data: any;

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
        Observable.interval(1400).take(50).subscribe(wait =>{
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
        
      }
    });
  }
ngOnDestroy() {

  this.data.unsubscribe();
}
}
