import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
@Component({
  selector: 'app-stocks-sidebar',
  templateUrl: './stocks-sidebar.component.html',
  styleUrls: ['./stocks-sidebar.component.scss']
})
export class StocksSidebarComponent implements OnInit {
 dataUsd: Array<CryptoData> = [];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    if(localStorage.getItem('data')) {
      this.dataUsd = JSON.parse(localStorage.getItem('data'));
      // console.log(this.dataUsd);
      
    }
  	const alldata = this.http.get<any>('/allcrypto');
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
        info.subscribe(response => {
          console.log(response);
         //  var usd_data = response;
            
              this.dataUsd[index].sym = symbol;
              this.dataUsd[index].algo = algo;
              this.dataUsd[index].year = year;
              this.dataUsd[index].last = response['last'];
              this.dataUsd[index].now = response['now'];
              this.dataUsd[index].min = response['min'];
              this.dataUsd[index].max = response['max'];
              this.dataUsd[index].value = response['value'];
              if(localStorage.getItem('data')) {
                let old = localStorage.getItem('data');
                localStorage.setItem('data', old+', '+JSON.stringify(this.dataUsd[index]))
              } else {
                localStorage.setItem('data', JSON.stringify(this.dataUsd[index]))
              }
      });
        const bitpath = "/bit";
        const bitinfo = this.http.get(bitpath);
        bitinfo.subscribe(response => {
          // console.log(response);
         //  var usd_data = response;
            
              this.dataUsd[index].day = response[symbol+"/USDT"]['day'];
              this.dataUsd[index].week = response[symbol+"/USDT"]['week'];
      });
      }
    });
  }

}
