import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StocksService} from '../../stocks.service';
import { Observable } from 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/router';
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';

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

export class StocksSidebarComponent implements OnInit, AfterViewInit, OnDestroy {
    order: string = 'percentDay';
    reverse: boolean = true;
  dataUsd:any=[];
  constructor(private http:HttpClient,
    private stocksService:StocksService,  private router:Router, private route:ActivatedRoute, ) {

    if (this.route.snapshot.params['sym']) {
       this.symbol = this.route.snapshot.params['sym'];
    }

  }
  
  data: any;
  resp: any;
  cryptoData: any;
  load:boolean = true;
  animtype = [];
  alldata = this.http.get<Array<Cripto>>('/allcrypto');
  symbol = "";
  ngAfterViewInit() {

    this.stocksService.getCrypto()
    .subscribe(response => {
      this.resp = response;
      this.data = this.alldata.subscribe(response => {
      this.cryptoData=Observable.interval(3000).take(10).concatMap(()=>this.stocksService.getCrypto())
    .map((response)=>{this.resp = response}).subscribe(()=>{
      
        let admin = response;
        for (var _i = 0; _i < admin.length; ++_i) {
          let index = _i;
          let symbol = admin[index].symbol;
          let year = admin[index].year;
          let algo = admin[index].algo;
          this.animtype[index] = '';
          if (this.dataUsd[index]) {
              if (this.dataUsd[index].now != this.resp[symbol + '/USD']['now']) {
                  if (this.dataUsd[index].now > this.resp[symbol + '/USD']['now']) {
                      this.animtype[index] = 'redcolor';
                  } else {
                      this.animtype[index] = 'greencolor';

                  }
              }
          }
          if(this.dataUsd[index]) {
            this.dataUsd[index].sym = symbol;
            this.dataUsd[index].algo = algo;
            this.dataUsd[index].year = year;
            this.dataUsd[index].last = this.resp[symbol+'/USD']['last'];
            this.dataUsd[index].now = this.resp[symbol+'/USD']['now'];
            this.dataUsd[index].min = this.resp[symbol+'/USD']['min'];
            this.dataUsd[index].max = this.resp[symbol+'/USD']['max'];
            this.dataUsd[index].value = this.resp[symbol+'/USD']['value'];
            this.dataUsd[index].day = this.resp[symbol+"/USD"]['day'];
              this.dataUsd[index].week = this.resp[symbol+"/USD"]['week'];
              this.dataUsd[index].month = this.resp[symbol+"/USD"]['month'];
            this.dataUsd[index].changePercent = this.resp[symbol+"/USD"]['changePercent'];
          this.dataUsd[index].marketCapUsd = this.resp[symbol+"/USD"]['marketCapUsd'];

              this.dataUsd[index].percentDay = this.countPercent(this.dataUsd[index].now, this.dataUsd[index].day)
              this.dataUsd[index].percentWeek = this.countPercent(this.dataUsd[index].now, this.dataUsd[index].week)
              this.dataUsd[index].percentMonth = this.countPercent(this.dataUsd[index].now, this.dataUsd[index].month)


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
                month: 0
            }
          }
          // console.log(this.dataUsd);
          this.load = false;
          localStorage.removeItem('data');
          localStorage.setItem('data',JSON.stringify(this.dataUsd))
        }
      });
    });
  });
  }
  ngOnInit() {
    if(localStorage.getItem('data')) {
      this.load = false;
      this.dataUsd = JSON.parse(localStorage.getItem('data'));
    }
  }
  countPercent(now, last) {
        return (now-last) / (now+last) * 100;
    }
  ngOnDestroy() {

  // this.data.unsubscribe();
  if(this.cryptoData) {
  this.cryptoData.unsubscribe();
  }
}
}
