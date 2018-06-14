import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {AuthService} from '../auth.service';
import {StocksService} from '../stocks.service';
import {CommentsService} from "../comments.service";
import {Cripto} from "../sidebar/stocks-sidebar/stocks-sidebar.component";


declare var $: any;
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
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit, OnDestroy {
  comments: CommentRaw[] = [];
  dataUsd: CryptoData;
  data: PositionData;
  now = Date.now()
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
  cryptoData: any;
  bid_ask: {bid: number; ask: number;} = {bid: 0, ask: 0};
  animtype = '';
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
  dataAll;
  news_container: any;
  selectedItem: PositionData;
    portfolioInfo:any;

    portfoliosInfo = [];
    getUserPortfolio = [];
    addPortfolio: any;
    checkPortfolio = false;
    rating:any;
    resp: any;
    rating_count = [];
    constructor(private http:HttpClient,private stocksService:StocksService,
    private router:Router, private route:ActivatedRoute, 
    public auth: AuthService,
                private commentService: CommentsService) {
    console.log(this.now);
  }

  ngOnInit() {
    this.auth.getUser().subscribe(
     response => {
         for(let item of response['portfolio']) {
             if (item.user_portfolio_type_id == 3) {
                 this.getUserPortfolio.push(item)
             }
         }

     }
   );
      let portfolioUrl = '/angular/userportfolio';
      this.portfolioInfo = this.http.get<any>(portfolioUrl);
      this.portfolioInfo.subscribe(
          response => {
              if(response['error']) {
                  // code...
              } else {
                  this.portfoliosInfo = response['crypto'];
              }
          },
      );
    let symbol = this.route.snapshot.params['sym'];
    if(localStorage.getItem('bit')) {
      this.dataAll = JSON.parse(localStorage.getItem('bit'));
        console.log('this.dataAll');

      this.dataUsd = this.dataAll[symbol+'/USD'];
        console.log(this.dataUsd.now);
      this.diff = this.dataUsd.now - this.dataUsd.last;
      this.prev = this.dataUsd.last;
      
    }
      if(localStorage.getItem(symbol+'bid')) {
          this.bid_ask.bid = JSON.parse(localStorage.getItem(symbol+'bid'));

      }
      if(localStorage.getItem(symbol+'min')) {
          this.min_value = JSON.parse(localStorage.getItem(symbol+'min'));

      }
      if(localStorage.getItem(symbol+'max')) {
          this.max_value = JSON.parse(localStorage.getItem(symbol+'max'));

      }
    if(localStorage.getItem(symbol+'ask')) {
      this.bid_ask.ask = JSON.parse(localStorage.getItem(symbol+'ask'));
      
    }
      if(localStorage.getItem(symbol+'volume')) {
          this.volume = JSON.parse(localStorage.getItem(symbol+'volume'));

      }

      this.stocksService.getStocks(symbol+'/USD')
  .subscribe(response => {
          this.stocks = response
          for (var _i = 0; _i < this.stocks.length; ++_i) {
              this.time.push(this.stocks[_i].time);
              }
          this.time_value = Math.max.apply(null, this.time);
          localStorage.removeItem(symbol+'time_value');
          localStorage.setItem(symbol+'time_value', JSON.stringify(this.time_value));
          this.load = false;
          localStorage.removeItem(symbol+'USD stocks');
          localStorage.setItem(symbol+'USD stocks', JSON.stringify(this.stocks));
      this.bid_ask.bid = 0
      this.bid_ask.ask = 0
      this.volume = 0
          for(let item of this.stocks) {
              if(item.ask > 0) {
                  this.min.push(item.ask);

              }
              if(item.bid) {
                  this.max.push(item.bid);
              }
              this.volume = this.volume+item.volume

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

          }
      localStorage.removeItem(symbol+'volume')
      localStorage.setItem(symbol+'volume', JSON.stringify(this.volume))


          this.min_value = Math.min.apply(null, this.min);
          this.max_value = Math.max.apply(null, this.max);
      localStorage.removeItem(symbol+'min')
      localStorage.setItem(symbol+'min', JSON.stringify(this.min_value))
      localStorage.removeItem(symbol+'max')
      localStorage.setItem(symbol+'max', JSON.stringify(this.max_value))
      })

    this.stocksData = Observable.interval(2000).take(700).concatMap(()=>
      this.stocksService.getStocks(symbol+'/USD'))
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
        localStorage.removeItem(symbol+'time_value');
        localStorage.setItem(symbol+'time_value', JSON.stringify(this.time_value));
      this.load = false;
      localStorage.removeItem(symbol+'USD stocks');
      localStorage.setItem(symbol+'USD stocks', JSON.stringify(this.stocks));
        this.bid_ask.bid = 0
        this.bid_ask.ask = 0
      for(let item of this.stocks) {
          if(item.ask > 0) {
              this.min.push(item.ask);

          }
          if(item.bid) {
              this.max.push(item.bid);
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

        this.min_value = Math.min.apply(null, this.min);
        this.max_value = Math.max.apply(null, this.max);
    }).subscribe();




      this.cryptoFirst = Observable.interval(1000).take(3).concatMap(() => this.stocksService.bit$)
          .subscribe(response => {
              if(response) {
                  this.dataUsd = response[symbol + '/USD'];
                  this.diff = this.dataUsd.now - this.dataUsd.last;
                  this.prev = this.dataUsd.last;
                  localStorage.removeItem(symbol);
                  localStorage.setItem(symbol, JSON.stringify(this.dataUsd));
                  this.animtype = '';
                  if (this.dataUsd) {
                      if (this.dataUsd.now != response[symbol + '/USD'].now) {

                          this.diff = response[symbol + '/USD'].now - this.dataUsd.now;
                          this.prev = this.dataUsd.now;
                          if (this.dataUsd.now > response[symbol + '/USD'].now) {

                              this.animtype = 'redcolor';
                          } else {
                              this.animtype = 'greencolor';
                          }
                      }
                  }
                  this.dataUsd = response[symbol + '/USD'];

                  localStorage.removeItem(symbol);

                  localStorage.setItem(symbol, JSON.stringify(this.dataUsd));
              }
    });
    let infoCryptoPath = "/allcrypto/"+symbol;
    this.infoCrypto = this.http.get<PositionData>(infoCryptoPath).publishReplay(1).refCount();
    this.infoCrypto.subscribe(response => {
      this.data = response;
      console.log(this.data)
      for(let item of response['comments']) {
        this.comments.push({
          id: item.id,
          author: item.author,
          body: item.body,
          email: item.email,
          commentable_id:item.commentable_id,
          photo:item.photo

        });
          this.rating_count[item['id']] = 0;
          for (let rating_item of item.rating) {
              if (rating_item.positive == 1) {
                  this.rating_count[item['id']] +=1;
              } else {
                  this.rating_count[item['id']] -=1;
              }
          }
      }
        for(let item of response['category_news']) {
            let newsUrl = "/postsbycat/"+item.id;
            let newsInfo = this.http.get<any>(newsUrl).publishReplay(1).refCount();
            newsInfo.subscribe(response => {
                for(let news_item of response['news']) {
                    this.news.push(news_item)
                }
                this.main_news.push(...response['main_news'])
                console.log(this.news);
            });
        }
      this.commentcount = response['comments_count'];

      let newsUrl = "/postsbycat/"+this.data.cat_id_news;
      let newsInfo = this.http.get<any>(newsUrl).publishReplay(1).refCount();
      newsInfo.subscribe(response => {
        this.main_news = response['main_news'];
        this.news = response['news'];
        this.news_container = this.news.slice(0,3);
        console.log(this.news);
        console.log(this.main_news);
      });
    });


    this.auth
    .getUser()
    .subscribe(
      (response) => {
        this.user = response;
        this.auth.setUser(this.user);
      }
      );
  }
    onScroll() {
        console.log('scroll')
        if(this.news_container.length < this.news.length){
            let len = this.news_container.length;

            for(let i = len; i <= len+3; i++){
                this.news_container.push(this.news[i]);
            }
        }
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

        this.http.post('/angular/userportfolio/create', {'name': form.value.name, 'user_portfolio_type_id': 3},{headers: headers})
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
        if(confirm('Подтвердите удаление')) {
            const removeUrl = '/angular/userportfolio/crypto/remove/';
            const removePost = this.http.get(removeUrl + id);
            removePost.subscribe(
                () => {
                    this.portfolioInfo.subscribe(res => {
                        if (res['error']) {
                            // code...
                        } else {
                            this.portfoliosInfo = res['crypto'];
                        }
                    }),
                        this.checkInPortfolio(id);
                    setTimeout(() => {
                        $.getScript('/js/script.js');
                    }, 300)
                },
                error => console.log(error)
            )
        }
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

    onVote(comment_id, positive) {
        this.commentService.addVote(comment_id,positive).subscribe(
            res =>
            {
                console.log(res) ;
                if(res['error']) {
                    // code...
                } else {
                    if (positive == 1) {
                        this.rating_count[comment_id] += 1;
                    } else {
                        this.rating_count[comment_id] -= 1;

                    }
                }
            },
            error => console.log(error)
        );
    }
  ngOnDestroy() {

      this.stocksData.unsubscribe();
      this.cryptoFirst.unsubscribe();
  }
}
