import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {AuthService} from '../auth.service';
import {StocksService} from '../stocks.service';
import {NewsRaw} from "../cloud-mining/all-cloud-mining/all-cloud-mining.component";

export interface CryptoData {

  last: number;
  now: number;
  min:number;
  max: number;
  value:number;
  week: number;
  day: number;


}
export interface PositionData {
  name: string;
  desc: string;
  year: number;
  algo: string;
  id: number;
  symbol: string;
  cat_id_news: number;
  cat_id_analytics: number;
}
export class User {  
  id:number;
  name: string;
  email:string;
  photo_id: number;
  role_id: number;
  telegram: string;

};
export class CommentRaw {
  id: number;
  author: string;
  body: string;
  email: string;
  commentable_id:number;
  photo:string;
}

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css'],
  providers: [StocksService]
})
export class CryptoComponent implements OnInit, OnDestroy {
  comments: CommentRaw[] = [];
  dataUsd: CryptoData;
  data: PositionData;
  load:boolean=true;
  user: User = {
    id:0,
    name: '',
    email:'',
    photo_id: 0,
    role_id: 0,
    telegram: '',

  };

  commentcount = 0;
  stocks=[];
  main_news: any;
  news: any;
  info: any;
  infoCrypto: any;
  stocksData: any;
  cryptoFirst:any;
  lowest: number;
  cryptoData: any;
  bid_ask: {bid: number; ask: number;} = {bid: 0, ask: 0};
  animtype = '';
  animtypebg = '';
  diff = 0;
  volume = 0;
  animstock = [];
  prev = 0;
  min = [];
  min_value = 0;
  max_value = 0;
  max = [];
  time = [];
  time_value = 0;
  selectedItem: PositionData;
    portfolioInfo:any;

    portfoliosInfo = [];
    getUserPortfolio = [];
    addPortfolio: any;
    checkPortfolio = false;

    constructor(private http:HttpClient,private stocksService:StocksService,
    private router:Router, private route:ActivatedRoute, 
    public auth: AuthService) {

  }

  ngOnInit() {
    this.auth.getUser().subscribe(
     response => {this.getUserPortfolio = response['portfolio']; console.log(this.getUserPortfolio)}
   );
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
    let symbol = this.route.snapshot.params['sym'];
    if(localStorage.getItem(symbol)) {
      this.dataUsd = JSON.parse(localStorage.getItem(symbol));
      this.diff = this.dataUsd.now - this.dataUsd.last;
      this.prev = this.dataUsd.last;
      
    }
    if(localStorage.getItem(symbol+'bid')) {
      this.bid_ask.bid = JSON.parse(localStorage.getItem('bid'));
      
    }
    if(localStorage.getItem(symbol+'ask')) {
      this.bid_ask.ask = JSON.parse(localStorage.getItem('ask'));
      
    }

    if(localStorage.getItem(symbol+'USD stocks')) {
      this.stocks = JSON.parse(localStorage.getItem(symbol+'USD stocks'));
      this.load = false;
      if(this.volume === 0) {
        
        for(let item of this.stocks) {
          this.volume = this.volume+item.volume;
        this.time.push(item.time);
      }
      this.time_value = Math.max.apply(null, this.time);

      }

    }

      this.stocksService.getStocks(symbol+'/USDT').subscribe(response => {
        this.load = true;
      this.stocks = response;
      this.load = false;
      this.diff = this.dataUsd.now-this.dataUsd.last;
      localStorage.setItem(symbol+'USD stocks', JSON.stringify(this.stocks));
      for(let item of this.stocks) {
        if(item.ask > 0) {
          this.min.push(item.ask);
          
        }
        if(item.bid) {
          this.max.push(item.bid);
        }
        if(this.volume === 0) {
        
            this.volume = this.volume+item.volume;
          
        } else {
          this.volume = 0;
          this.volume = this.volume+item.volume;
        }
        if(this.bid_ask.ask < item.ask) {
        this.bid_ask.ask = item.ask
        localStorage.removeItem(symbol+'ask')
        localStorage.setItem(symbol+'ask', JSON.stringify(this.bid_ask.ask))
        }
        if(this.bid_ask.bid < item.bid) {
        this.bid_ask.bid = item.bid
        localStorage.removeItem(symbol+'bid')
        localStorage.setItem(symbol+'bid', JSON.stringify(this.bid_ask.bid))
        }
        this.time.push(item.time);
      }
      this.time_value = Math.max.apply(null, this.time);
      this.min_value = Math.min.apply(null, this.min);
      this.max_value = Math.max.apply(null, this.max);

    });
    this.stocksData = Observable.interval(2000).concatMap(()=>
      this.stocksService.getStocks(symbol+'/USDT'))
    .map(response => {

      for (var _i = 0; _i < this.stocks.length; ++_i) {
        this.time.push(this.stocks[_i].time);
        this.animstock[_i] = '';
        if(this.stocks[_i].value > response[_i].value) {
          this.animstock[_i] = 'greencolor';
          this.stocks[_i].value = response[_i].value
          this.stocks[_i].percent = response[_i].percent
          this.stocks[_i].bid = response[_i].bid
          this.stocks[_i].ask = response[_i].ask
          this.stocks[_i].time = response[_i].time
          this.stocks[_i].volume = response[_i].volume
        } else if(this.stocks[_i].value < response[_i].value) {
          this.animstock[_i] = 'redcolor';
          this.stocks[_i].percent = response[_i].percent
          this.stocks[_i].value = response[_i].value
          this.stocks[_i].bid = response[_i].bid
          this.stocks[_i].ask = response[_i].ask
          this.stocks[_i].time = response[_i].time
          this.stocks[_i].volume = response[_i].volume

        }
      }
      this.time_value = Math.max.apply(null, this.time);
      this.load = false;
      localStorage.removeItem(symbol+'USD stocks');
      localStorage.setItem(symbol+'USD stocks', JSON.stringify(this.stocks));
      for(let item of this.stocks) {
        if(this.volume === 0) {
        
          for(let item of this.stocks) {
            this.volume = this.volume+item.volume;
          }
          
        } else {
          this.volume = 0;
          for(let item of this.stocks) {
            this.volume = this.volume+item.volume;
          }
        }
        if(this.bid_ask.ask < item.ask) {
        this.bid_ask.ask = item.ask
        localStorage.removeItem('ask')
        localStorage.setItem('ask', JSON.stringify(this.bid_ask.ask))
        }
        if(this.bid_ask.bid < item.bid) {
        this.bid_ask.bid = item.bid
        localStorage.removeItem('bid')
        localStorage.setItem('bid', JSON.stringify(this.bid_ask.bid))
        }

      }
    }).subscribe();




    this.cryptoFirst = this.stocksService.getCrypto()
    .map((response)=>{
      this.dataUsd = response[symbol+'/USDT'];
      this.diff = this.dataUsd.now-this.dataUsd.last;
      this.prev = this.dataUsd.last;
      localStorage.removeItem(symbol);
      localStorage.setItem(symbol, JSON.stringify(this.dataUsd));
    }).subscribe();
    let infoCryptoPath = "/allcrypto/"+symbol;
    this.infoCrypto = this.http.get<PositionData>(infoCryptoPath).publishReplay(1).refCount();
    this.infoCrypto.subscribe(response => {
      this.data = response;
      for(let item of response['comments']) {
        this.comments.push({ 
          id: item.id,
          author: item.author,
          body: item.body,
          email: item.email,
          commentable_id:item.commentable_id,
          photo:item.photo

        });

      }
      this.commentcount = response['comments_count'];
      let newsUrl = "/postsbycat/"+this.data.cat_id_news;
      let newsInfo = this.http.get<any>(newsUrl).publishReplay(1).refCount();
      newsInfo.subscribe(response => {
        this.main_news = response['main_news'];
        this.news = response['news'];
        console.log(this.news);
        console.log(this.main_news);
      });
    });

    this.cryptoData=Observable.interval(1200).concatMap(()=>this.stocksService.getCrypto())
    .map((response)=>{
      this.animtype = '';

      if(this.dataUsd.now != response[symbol+'/USDT'].now) {

        this.diff = response[symbol+'/USDT'].now-this.dataUsd.now;
        this.prev = this.dataUsd.now;
        if(this.dataUsd.now > response[symbol+'/USDT'].now) {

            this.animtype = 'redcolor';
          } else {
            this.animtype = 'greencolor';
          }
      }
      this.dataUsd = response[symbol+'/USDT'];

      localStorage.removeItem(symbol);

      localStorage.setItem(symbol, JSON.stringify(this.dataUsd));

    }).subscribe();


    this.auth
    .getUser()
    .subscribe(
      (response) => {
        this.user = response;
        this.auth.setUser(this.user);
      }
      );
  }

  submitComment(form: NgForm,post_id, type) {

    const headers = new HttpHeaders({'Content-type': 'Application/json '});
    this.http.post('/storecomment', {
      'post_id': post_id,
      'body': form.value.body,
      'commentable_id': post_id,
      'commentable_type': type
    }, {headers: headers}).subscribe(
    (response) => 
    this.comments.unshift({
      id: response['id'],
      email:response['email'],
      author: response['author'],
      body: response['body'],
      commentable_id:response['commentable_id'],
      photo: response['photo']
    }),
    (error) => console.log(error)
    );
    form.reset();
    console.log(form);
    this.commentcount=this.commentcount+1;
  }
  isNegative(now) {
    if(now >= 0) {
      return false;
    } 
    return true;
  }
  isNegativeMath(now, last) {
    if((parseInt(now)-parseInt(last)) >= 0) {
      return false;
    } 
    return true;
  }
  comparePrice(now, last) {
    if(parseInt(now)>parseInt(last)) {
      return true;
    } 
    return false;
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

    createPortfolio(form: NgForm) {
        const headers = new HttpHeaders({'Content-type': 'Application/json '});

        this.http.post('/angular/userportfolio/create', {'name': form.value.name, 'user_portfolio_type_id': 1},{headers: headers})
            .subscribe(
                response => {this.getUserPortfolio.push(response); form.reset()},
                error => console.log(error)
            )

    }
    submitPortfolio( post_id, type) {
        const headers = new HttpHeaders({'Content-type': 'Application/json '});

        this.http.post('/storeportfolio', {
                'user_portfollable_id': post_id,
                'user_portfolio_id':this.addPortfolio,
                'user_portfollable_type': type
            },
            {headers: headers}).subscribe(
            (response) => this.router.navigate(['/profile/portfolio']),
            (error) => console.log(error)
        );
    }

    callCheck(id) {
        if(this.checkInPortfolio(id)) {
            this.checkPortfolio = true;
        }
        this.checkPortfolio = false;
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
        if(this.auth.getUserInfo()) {
            return true;
        }
        return(false);

    }

    removePortfolio(id) {
        const removeUrl = '/angular/userportfolio/crypto/remove/';
        const removePost = this.http.get(removeUrl+id);
        removePost.subscribe(
            response => {
                this.portfolioInfo.subscribe(res=>{
                    if(res['error']) {
                        // code...
                    } else {
                        this.portfoliosInfo = res['crypto'];
                    }
                }),
                    this.checkInPortfolio(id);

            },
            error => console.log(error)
        )
    }
    basicRoute() {
      let symbol = this.route.snapshot.params['sym'];
      if(this.router.url == '/crypto/'+symbol) {
        return true
      }
      return false
    }
    getRoute(url){
      let symbol = this.route.snapshot.params['sym'];
     if (this.router.url === '/crypto/'+symbol+'/'+url){
       return true;
     }
     return false;
   }
  ngOnDestroy() {

    this.cryptoData.unsubscribe();
    this.stocksData.unsubscribe();
    this.cryptoFirst.unsubscribe();
  }
}
