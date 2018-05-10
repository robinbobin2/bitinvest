import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
import {StocksService} from '../stocks.service';
@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss'],
  providers: [StocksService]
})
export class ExchangesComponent implements OnInit {
  exchanges = [];
  count = 0;
  volumes = []
  exchange_volumes = [];
  language = '';
  reverse: boolean = true;
  order = 'id';
  constructor(private http:HttpClient, private stockService:StocksService, private orderPipe: OrderPipe) { }

  ngOnInit() {
    this.stockService.getExchanges().subscribe(res => {

      this.exchanges = res; 
      this.count = this.exchanges.length;
      console.log(this.count);

    });
  	this.stockService.getVolumes().subscribe(res => {
      this.volumes = res
      for(let item of this.volumes) {
        this.exchange_volumes[item.name] = {
          'btc': item.btc,
          'usd': item.usd
        }
      }
    });
  }
  setOrder(value: string) {
     if (this.order === value) {
       this.reverse = !this.reverse;
     }

     this.order = value;
   }


}
