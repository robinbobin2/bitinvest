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
 dataUsd:any;
  constructor(private http:HttpClient,
    private stocksServise:StocksService
    ) { }
data: any;
response: any;
cryptoData: any;
  ngOnInit() {
    if(localStorage.getItem('data')) {
      this.dataUsd = JSON.parse(localStorage.getItem('data'));
      // console.log(this.dataUsd);
      
    }
    this.stocksServise.getCrypto()
        .subscribe(response => {
            this.response = response;
            localStorage.removeItem('data');
              localStorage.setItem('data',JSON.stringify(this.dataUsd))
          });
    this.cryptoData=Observable.interval(3000).take(50).concatMap(()=>this.stocksServise.getCrypto())
        .map((response)=>this.response = response).subscribe();
        
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
        this.dataUsd[index].sym = symbol;
              this.dataUsd[index].algo = algo;
              this.dataUsd[index].year = year;
              this.dataUsd[index].last = this.response[symbol+'/USDT']['last'];
              this.dataUsd[index].now = this.response[symbol+'/USDT']['now'];
              this.dataUsd[index].min = this.response[symbol+'/USDT']['min'];
              this.dataUsd[index].max = this.response[symbol+'/USDT']['max'];
              this.dataUsd[index].value = this.response[symbol+'/USDT']['value'];
              this.dataUsd[index].day = this.response[symbol+"/USDT"]['day'];
              this.dataUsd[index].week = this.response[symbol+"/USDT"]['week'];
              
        
      }
    });
  }
ngOnDestroy() {

  this.data.unsubscribe();
  this.cryptoData.unsubscribe();
}
}
