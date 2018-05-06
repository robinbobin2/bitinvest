import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {AuthService} from '../auth.service';
import {StocksService} from '../stocks.service';

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
  cryptoData: any;
  constructor(private http:HttpClient,private stocksService:StocksService,
    private router:Router, private route:ActivatedRoute, 
    public auth: AuthService) {
  }

  ngOnInit() {


    let symbol = this.route.snapshot.params['sym'];
    if(localStorage.getItem(symbol)) {
      this.dataUsd = JSON.parse(localStorage.getItem(symbol));
      
    }

    if(localStorage.getItem(symbol+'USD stocks')) {
      this.stocks = JSON.parse(localStorage.getItem(symbol+'USD stocks'));
      this.load = false;

    }
    this.stocksData = Observable.interval(1000).take(50).concatMap(()=>
      this.stocksService.getStocks(symbol+'/USDT'))
    .map(response => {
      this.stocks = response;
      this.load = false;
      localStorage.setItem(symbol+'USD stocks', JSON.stringify(this.stocks));
    }).subscribe();




    this.cryptoFirst = this.stocksService.getCrypto()
    .map((response)=>{
      this.dataUsd = response[symbol+'/USDT'];
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

    this.cryptoData=Observable.interval(1000).take(50).concatMap(()=>this.stocksService.getCrypto())
    .map((response)=>{
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
    if((parseInt(now)) >= 0) {
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
  ngOnDestroy() {

    this.cryptoData.unsubscribe();
    this.stocksData.unsubscribe();
    this.cryptoFirst.unsubscribe();
  }
}
