import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
import {StocksService} from '../stocks.service';
import {Observable} from 'rxjs/Rx';
import {PortfolioService} from "../portfolio.service";
import {AuthService} from "../auth.service";
import { NgForm } from '@angular/forms';

const headers = new HttpHeaders({'Content-type': 'Application/json '});
declare var $:any;
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
    year: any = '';
    country = '';
    age = ''
  reverse: boolean = true;
  order = 'usd';
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
    languageFilterArray: any;
    countryFilterArray: any;


  constructor(private http:HttpClient,
              private router:Router,
              private route:ActivatedRoute,private stockService:StocksService, private orderPipe: OrderPipe,
              private portfolioService: PortfolioService,
              private authService: AuthService) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
          this.year = params['year'];
          if (this.year == undefined) {
              this.year = ''
          }
          this.age = params['year'];
          if (this.age == undefined) {
              this.age = ''
          }
          this.language = params['language'];
          if (this.language == undefined) {
              this.language = ''
          }
          this.country = params['country'];
          if (this.country == undefined) {
              this.country = ''
          }
      });
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
      this.router.events
          .filter(event => event instanceof NavigationEnd)
          .map(() => this.route)
          .subscribe((event) => {
              setTimeout(()=> {
                  $.getScript('/js/script.js');
              }, 300)

          });
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
      console.log(this.exchanges)
        this.stockService.getVolumes().subscribe(res => {

            this.volumes = res
            for(let item of this.volumes) {
                this.exchange_volumes[item.name] = {
                    'btc': item.btc,
                    'usd': item.usd
                }
            }
            for(let item of this.exchanges) {
                item.btc = this.exchange_volumes[item.name].btc
                item.usd = this.exchange_volumes[item.name].usd
            }
        });
      this.count = this.exchanges.length;
        this.yearFilterArray = [...Array.from(new Set(this.exchanges.map(item => item.year)))]
        this.languageFilterArray = [...Array.from(new Set(this.exchanges.map(item => item.languages)))]
        this.countryFilterArray = [...Array.from(new Set(this.exchanges.map(item => item.country)))]

    });



  	this.stockService.getPairsCount().subscribe(res => {
        this.load=false;
        for(let item of res) {
            this.pairs_count[item.name] = item['count(xt.id)'];
        }
        console.log(this.pairs_count)
    });


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
            setTimeout(()=> {
                $.getScript('/js/script.js');
            }, 300)
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
 }
}
