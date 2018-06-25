import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StocksService} from '../../stocks.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Rx';

export class Cripto {
    id: number;
    name: string;
    symbol: string;
    year: number;
    desc: string;
    algo: string;
    logo: string
}
@Component({
  selector: 'app-stocks-sidebar',
  templateUrl: './stocks-sidebar.component.html',
  styleUrls: ['./stocks-sidebar.component.scss'],
})

export class StocksSidebarComponent implements OnInit, AfterViewInit, OnDestroy {
    order: string = 'percentDay';
    reverse: boolean = true;
  constructor(private http:HttpClient,
    private stocksService:StocksService,  private router:Router, private route:ActivatedRoute, private StockService: StocksService) {

    if (this.route.snapshot.params['sym']) {
       this.symbol = this.route.snapshot.params['sym'];
    }

  }
    dataUsd = [];
    data: any;
    resp: any;
    cryptoData: any;
    first_time: boolean = true;
    animtype = [];
    algoFilter = [];
    yearFilter = [];
    diff= [];
    selectedItem = [];
    active = 0;
    inactive = 0;
    portfoliosInfo = [];
    addPortfolio: any;
    show = false;
    portfolioInfo: any;
    getUserPortfolio = [];
    age = '';
    algorithm = '';
    alldata = this.http.get<Array<Cripto>>('/allcrypto');
    symbol = "";
    load = true;
  ngAfterViewInit() {
      const alldata = this.http.get<Array<Cripto>>('/allcrypto');
      if (localStorage.getItem('data')) {
          this.dataUsd = JSON.parse(localStorage.getItem('data'));
          this.load = false;
      }

      alldata.subscribe(response => {
          // if(localStorage.getItem('bit')) {
          //
          //     this.dataUsd = JSON.parse(localStorage.getItem('bit'));
          //
          // }
          let admin = response;
          // for (var _i = 0; _i < admin.length; ++_i) {
          //     this.dataUsd[_i].prev = this.dataUsd[_i].last;
          // }
          this.StockService.getCryptoVol().debounceTime(10000).subscribe(volumes => {
              this.cryptoData = Observable.interval(1000).concatMap(() => this.StockService.bit$)
                  .subscribe(resp => {

                      this.resp = resp;

                      for (var _i = 0; _i < admin.length; ++_i) {

                          // console.log(this.admin[i].symbol);
                          let index = _i;


                          let symbol = admin[index].symbol;
                          let year = admin[index].year;
                          let algo = admin[index].algo;
                          let logo = admin[index].logo;
                          let id = admin[index].id;

                          if (this.resp[symbol + '/USD']) {
                              if (this.dataUsd[index]) {
                                  if (this.dataUsd[index].now != this.resp[symbol + '/USD']['now']) {
                                      this.first_time = false;
                                      this.diff[index] = this.resp[symbol + '/USD']['now'] - this.dataUsd[index].now;
                                      if (this.resp[symbol + '/USD']['last'] > this.resp[symbol + '/USD']['now']) {
                                          this.animtype[index] = '';
                                          this.animtype[index] = 'redcolor';
                                      } else {
                                          this.animtype[index] = '';
                                          this.animtype[index] = 'greencolor';

                                      }
                                  }
                                  this.dataUsd[index].sym = symbol;
                                  this.dataUsd[index].algo = algo;
                                  this.dataUsd[index].year = year;
                                  this.dataUsd[index].prev = this.dataUsd[index].now;
                                  this.dataUsd[index].last = this.resp[symbol + '/USD']['last'];
                                  this.dataUsd[index].now = this.resp[symbol + '/USD']['now'];
                                  this.dataUsd[index].min = this.resp[symbol + '/USD']['min'];
                                  this.dataUsd[index].max = this.resp[symbol + '/USD']['max'];
                                  this.dataUsd[index].volume = this.resp[symbol + '/USD']['volume'];
                                  this.dataUsd[index].day = this.resp[symbol + "/USD"]['day'];
                                  this.dataUsd[index].week = this.resp[symbol + "/USD"]['week'];
                                  this.dataUsd[index].marketCapUsd = this.resp[symbol + "/USD"]['marketCapUsd'];
                                  this.dataUsd[index].logo = logo;
                                  this.dataUsd[index].percentDay = this.countPercent(this.dataUsd[index].now, this.dataUsd[index].day)
                                  this.dataUsd[index].percentWeek = this.countPercent(this.dataUsd[index].now, this.dataUsd[index].week)
                              } else {

                                  this.dataUsd[index] = {
                                      id: id,
                                      name: name,
                                      sym: symbol,
                                      last: this.resp[symbol + '/USD']['last'],
                                      now: this.resp[symbol + '/USD']['now'],
                                      min: this.resp[symbol + '/USD']['min'],
                                      max: this.resp[symbol + '/USD']['max'],
                                      volume: this.resp[symbol + '/USD']['volume'],
                                      year: year,
                                      algo: algo,
                                      week: this.resp[symbol + "/USD"]['week'],
                                      day: this.resp[symbol + "/USD"]['day'],
                                      marketCapUsd: this.resp[symbol + "/USD"]['marketCapUsd'],
                                      percentDay: 0,
                                      percentWeek: 0,
                                      currencyVol: 0,
                                      prev: this.resp[symbol + '/USD']['last']
                                  }
                              }
                          }
                          this.load = false;
                          localStorage.removeItem('data');
                          localStorage.setItem('data', JSON.stringify(this.dataUsd))


                          for (let it of volumes) {
                              if (it.currency == symbol + '/USD') {
                                  this.dataUsd[index].currencyVol = it.volume
                              }
                          }


                      }
                  })

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
