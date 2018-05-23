import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {StocksService} from '../stocks.service';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
import {PortfolioService} from "../portfolio.service";
import {AuthService} from "../auth.service";
import {NewsRaw, Portfolio} from "../cloud-mining/all-cloud-mining/all-cloud-mining.component";

export class Cripto {
  id: number;
  name:string;
  symbol:string;
  year:number;
  desc: string;
  algo: string;
}

export interface CryptoData {
    name: string;
    id: number;
  sym: string;
  last: number;
  now: number;
  min:number;
  max: number;
  volume:number;
  year: number;
  algo: string;
  week: number;
  day: number;
  marketCapUsd: number;

}
const headers = new HttpHeaders({'Content-type': 'Application/json '});
@Component({
  selector: 'app-crypto-all',
  templateUrl: './crypto-all.component.html',
  styleUrls: ['./crypto-all.component.scss'],
  providers: [StocksService, PortfolioService],
})

export class CryptoAllComponent implements OnInit, OnDestroy {
  public object: Object;
  load:boolean = true;

  // admin= new Array;
  dataUsd: Array<CryptoData> = [];
  order = 'now';
  data: any;
  resp: any;
  cryptoData: any;
  first_time:boolean = true;
  reverse: boolean = true;
  animtype = [];
  diff:Array<number> = [];
    selectedItem = [];
    active = 0;
    inactive = 0;
    portfoliosInfo = [];
    addPortfolio: any;
    show = false;
    portfolioInfo:any;
    getUserPortfolio = [];
  /**
   * Example: Use Order pipe in the component
   *
   * @param {OrderPipe} orderPipe
   */
   constructor(private orderPipe: OrderPipe, 
     private http:HttpClient, 
     private router:Router, 
     private route:ActivatedRoute,
     private StockService:StocksService,
               private portfolioService: PortfolioService,
               private authService: AuthService
     ) {


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
    log(data) {
       console.log(data);
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
   setOrder(value: string) {
     if (this.order === value) {
       this.reverse = !this.reverse;
     }

     this.order = value;
   }

   ngOnInit() {
       let portfolioUrl = '/angular/userportfolio';
       this.portfolioInfo = this.http.get<any>(portfolioUrl);
       this.portfolioInfo.subscribe(
           response => {
               if(response['error']) {
                   // code...
               } else {
                   this.portfoliosInfo = response['crypto'];
                   console.log(this.portfoliosInfo);
               }
           },
       );
       this.authService.getUser().subscribe(
           response => {
               for(let item of response['portfolio']) {
                   if (item.user_portfolio_type_id == 3) {
                       this.getUserPortfolio.push(item)
                   }
               }
           }
       );
     const alldata = this.http.get<Array<Cripto>>('/allcrypto');
     if(localStorage.getItem('data')) {
       this.dataUsd = JSON.parse(localStorage.getItem('data'));
       this.load = false;
     }
     this.StockService.getCrypto()
     .subscribe(response => {
       this.resp = response;
       this.data = alldata.subscribe(response => {
      let admin = response;
      for (var _i = 0; _i < admin.length; ++_i) {

        // console.log(this.admin[i].symbol);
        let index = _i;
        let symbol = admin[index].symbol;
        let year = admin[index].year;
        let algo = admin[index].algo;
          let id = admin[index].id;
          let name = admin[index].name;
        if(this.dataUsd[index]) {
            this.dataUsd[index].sym = symbol;
            this.dataUsd[index].id = id;
            this.dataUsd[index].name = name;
          this.dataUsd[index].algo = algo;
          this.dataUsd[index].year = year;
            this.dataUsd[index].last = this.resp[symbol+'/USD']['last'];
          this.dataUsd[index].now = this.resp[symbol+'/USD']['now'];
          this.dataUsd[index].min = this.resp[symbol+'/USD']['min'];
          this.dataUsd[index].max = this.resp[symbol+'/USD']['max'];
          this.dataUsd[index].volume = this.resp[symbol+'/USD']['volume'];
          this.dataUsd[index].day = this.resp[symbol+"/USD"]['day'];
          this.dataUsd[index].week = this.resp[symbol+"/USD"]['week'];
          this.dataUsd[index].marketCapUsd = this.resp[symbol+"/USD"]['marketCapUsd']; 

          
        } else {
          this.dataUsd[index] = {
              id: 0,
              name: '',
            sym: '',
            last: 0,
            now: 0,
            min:0,
            max: 0,
            volume:0,
            year: 0,
            algo: '',
            week: 0,
            day: 0,
            marketCapUsd: 0
          }
        }
        this.load = false;
        localStorage.removeItem('data');
        localStorage.setItem('data',JSON.stringify(this.dataUsd))
      }
    });
     });
     this.data = alldata.subscribe(response => {
       this.cryptoData=Observable.interval(1000).concatMap(()=>this.StockService.getCrypto())
       .map((response)=>{this.resp = response;}).subscribe(()=>{

         let admin = response;
         for (var _i = 0; _i < admin.length; ++_i) {
        // console.log(this.admin[i].symbol);
        let index = _i;
        let symbol = admin[index].symbol;
        let year = admin[index].year;
        let algo = admin[index].algo;
        let desc = 'DESC';
           this.animtype[index] = '';
           this.diff[index] = 0;

        if(this.dataUsd[index].now != this.resp[symbol+'/USD']['now']) {
          this.first_time = false;
          this.diff[index] = this.resp[symbol+'/USD']['now']-this.dataUsd[index].now;
          if(this.dataUsd[index].now > this.resp[symbol+'/USD']['now']) {


            this.animtype[index] = 'redbg';
          } else {
            this.animtype[index] = 'greenbg';

          }
        }
        this.dataUsd[index].sym = symbol;
        this.dataUsd[index].algo = algo;
        this.dataUsd[index].year = year;
        this.dataUsd[index].last = this.resp[symbol+'/USD']['last'];
        this.dataUsd[index].now = this.resp[symbol+'/USD']['now'];
        this.dataUsd[index].min = this.resp[symbol+'/USD']['min'];
        this.dataUsd[index].max = this.resp[symbol+'/USD']['max'];
        this.dataUsd[index].volume = this.resp[symbol+'/USD']['volume'];
        this.dataUsd[index].day = this.resp[symbol+"/USD"]['day'];
        this.dataUsd[index].week = this.resp[symbol+"/USD"]['week'];
          this.dataUsd[index].marketCapUsd = this.resp[symbol+"/USD"]['marketCapUsd']; 
        

        localStorage.removeItem('data');
        localStorage.setItem('data',JSON.stringify(this.dataUsd))
        
      }
      
    });
     });
   }
   isNegative(now) {
     if(now >= 0) {
       return false;
     } 
     return true;
   }
   countPercent(now, last) {
     return (now-last) / (now+last) * 100;
   }
   isNegativePercent(now, last) {
     if(((parseInt(now)-parseInt(last)) /  ((parseInt(now)+parseInt(last)) / 2)  * 100) >= 0) {
       return false;
     } 
     return true;
   }

   isNegativeMath(now, last) {
     this.object = "{'background': 'white'}";
     if(this.first_time == false) {

       if((parseInt(now)-parseInt(last)) >= 0) {
         this.object = "{ 'background': 'white', 'animation': 'greenbg 2s', '-webkit-animation': 'greenbg 2s'  }";

       } else if(parseInt(now)-parseInt(last) == 0) {
       } else {
         this.object = "{ 'background': 'white', 'animation': 'redbg 2s', '-webkit-animation': 'redbg 2s'  }";
       }
     }
     return this.object;
   }
   ngOnDestroy() {

  // this.data.unsubscribe();
       if (this.cryptoData) {
           this.cryptoData.unsubscribe();
       }

}

}
