import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
import {StocksService} from '../stocks.service';
import {Observable} from 'rxjs/Rx';
import {PortfolioService} from "../portfolio.service";
import {AuthService} from "../auth.service";


const headers = new HttpHeaders({'Content-type': 'Application/json '});

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss'],
  providers: [StocksService, PortfolioService]
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
  load=true;
    portfoliosInfo = [];
    addPortfolio: any;
    show = false;
    portfolioInfo:any;
    getUserPortfolio = [];
  constructor(private http:HttpClient,
              private router:Router,
              private route:ActivatedRoute,private stockService:StocksService, private orderPipe: OrderPipe,
              private portfolioService: PortfolioService,
              private authService: AuthService) { }

  ngOnInit() {
      let portfolioUrl = '/angular/userportfolio';
      this.portfolioInfo = this.http.get<any>(portfolioUrl);
      this.portfolioInfo.subscribe(
          response => {
              if(response['error']) {
                  // code...
              } else {
                  this.portfoliosInfo = response['stocks'];
                  console.log(this.portfoliosInfo);
              }
          },
      );
      this.authService.getUser().subscribe(
          response => {
              for(let item of response['portfolio']) {
                  if (item.user_portfolio_type_id == 4) {
                      this.getUserPortfolio.push(item)
                  }
              }
          }
      );
    this.stockService.getExchanges().subscribe((res: Array<any>) => {
      this.exchanges = res; 
      this.count = this.exchanges.length;
      // for(let item of this.exchanges) {
      //     item.load = false;
      //     this.stocks.push(
      //     this.stockService.getExchangePairs(item.name).takeWhile(() => this.alive).map(
      //     pairs => {item.count=pairs.length; item.load = true;}
      // )
      // );
      // }
      //   this.observale_pairs = Observable.from(this.stocks)
      //       .concatAll()
      //       .subscribe();
    });


  	this.stockService.getVolumes().subscribe(res => {
  	    this.load=false;
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

    removePortfolio(id) {
        this.portfolioService.removePortfolio(id, 'App\\CryptoStat', 0).subscribe( () => {
            this.portfolioInfo.subscribe(res=>{
                if(res['error']) {
                    // code...
                } else {
                    this.portfoliosInfo = res['crypto'];
                    console.log(this.portfoliosInfo);
                }
            });
            this.checkInPortfolio(id);
        })
    }

    submitPortfolio( post_id, type) {

        this.http.post('/storeportfolio', {
                'user_portfollable_id': post_id,
                'user_portfolio_id':this.addPortfolio,
                'user_portfollable_type': type
            },
            {headers: headers}).subscribe(
            () => this.router.navigate(['/profile/portfolio']),
            (error) => console.log(error)
        );
    }
    checkInPortfolio(id) {
        if(this.portfoliosInfo == undefined) {
            return false;
        }

        for(let item of this.portfoliosInfo) {
            for(let it of item) {
                if(it.id ) {

                    if(it.id == id) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    checkAuth() {
        if(this.authService.getUserInfo()) {
            return true;
        }
        return(false);

    }


 ngOnDestroy() {
      this.alive = false;
   this.volume_data.unsubscribe();
   // this.observale_pairs.unsubscribe();
 }
}
