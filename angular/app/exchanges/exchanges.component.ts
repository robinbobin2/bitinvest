import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
import {StocksService} from '../stocks.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss'],
  providers: [StocksService]
})
export class ExchangesComponent implements OnInit, OnDestroy {
  exchanges = [];
  count = 0;
  volumes = []
  exchange_volumes = [];
  language = '';
  reverse: boolean = true;
  order = 'id';
  pairs_count = [];
  volume_data: any;
  exchange_data: any;
  alive = true;
  stocks = [];
    observale_pairs: any;
  load: any;
  constructor(private http:HttpClient, private stockService:StocksService, private orderPipe: OrderPipe) { }

  ngOnInit() {

    this.stockService.getExchanges().subscribe((res: Array<any>) => {
      this.exchanges = res; 
      this.count = this.exchanges.length;
      for(let item of this.exchanges) {
          this.stocks.push(
          this.stockService.getExchangePairs(item.name).takeWhile(() => this.alive).map(
          pairs => {item.count=pairs.length; this.load[item.name] = true;}
      )
      );
      }
        this.observale_pairs = Observable.from(this.stocks)
            .concatAll()
            .subscribe();
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

  	this.volume_data = Observable.interval(2000).concatMap(()=>this.stockService.getVolumes())
          .map((response)=>{
              this.volumes = response;
          }).subscribe( () => {
              for(let item of this.volumes) {
                  this.exchange_volumes[item.name] = {
                      'btc': item.btc,
                      'usd': item.usd
                  }
              }
          } );
  }
  setOrder(value: string) {
     if (this.order === value) {
       this.reverse = !this.reverse;
     }

     this.order = value;
   }

 ngOnDestroy() {
      this.alive = false;
   this.volume_data.unsubscribe();
   this.observale_pairs.unsubscribe();
 }
}
