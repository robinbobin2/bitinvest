import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
import {StocksService} from '../stocks.service';
import {Observable} from 'rxjs/Rx';
import {PortfolioService} from "../portfolio.service";
import {AuthService} from "../auth.service";
import { NgForm } from '@angular/forms';

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
    year: number = undefined;
    сщгтекн = '';
  reverse: boolean = true;
  order = 'id';
  pairs_count = [];
  volume_data: any;
  alive = true;
  stocks = [];
  load=true;
    portfoliosInfo = [];
    addPortfolio: any;
    show = false;
    portfolioInfo:any;
    getUserPortfolio = [];
    yearFilterArray: any;
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
    // все биржи из админки
    this.stockService.getExchanges().subscribe((res: Array<any>) => {
      this.exchanges = res; 
      this.count = this.exchanges.length;


        this.yearFilterArray = this.exchanges.filter((x, i, a) => a.indexOf(x) == i)
        console.log(this.yearFilterArray)

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
  	this.stockService.getPairsCount().subscribe(res => {
        this.load=false;
        for(let item of res) {
            this.pairs_count[item.name] = item['count(xt.id)'];
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
        this.portfolioService.removePortfolio(id, 'App\\Stock', 0).subscribe( () => {
            this.portfolioInfo.subscribe(res=>{
                if(res['error']) {
                    // code...
                } else {
                    this.portfoliosInfo = res['stocks'];
                    console.log(this.portfoliosInfo);
                }
            });
            this.checkInPortfolio(id);
        })
    }

    createPortfolio(form: NgForm) {

        this.http.post('/angular/userportfolio/create', {'name': form.value.name, 'user_portfolio_type_id': 4},{headers: headers})
            .subscribe(
                response => {this.getUserPortfolio.push(response); form.reset()},
                error => console.log(error)
            )

    }

    submitPortfolio( post_id, type) {

        this.portfolioService.submitPortfolio(this.addPortfolio,post_id, type).subscribe(
            (response) => this.router.navigate(['/profile/portfolio']),
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
 }
}
