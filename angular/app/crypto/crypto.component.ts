import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {AuthService} from '../auth.service';
import {AddCommentService} from '../add-comment.service';
import {StocksService} from '../stocks.service';

export interface CryptoData {
  id: number
  sym: string;
  last: number;
  now: number;
  min:number;
  max: number;
  value:number;
  year: number;
  algo: string;
  week: number;
  day: number;
  name: string;
  desc: string;


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
export class Stock {
  exchangeId: number;
  volume: number;
  value: number;
  percent:number;
  bid:number;
  ask: number;
  currency: string;
}
@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css'],
  providers: [StocksService]
})
export class CryptoComponent implements OnInit {
  comments: CommentRaw[] = [];
  dataUsd: CryptoData;
  user: User = {
      id:0,
      name: '',
      email:'',
      photo_id: 0,
      role_id: 0,
      telegram: '',

  }; 
  commentcount = 0;
  stocks: Stock[] = [];
  constructor(private http:HttpClient,public stocksServise:StocksService, private router:Router, private route:ActivatedRoute, 
    public auth: AuthService) {
  }

  ngOnInit() {
    let symbol = this.route.snapshot.params['sym'];
    console.log('stocks');
    this.stocksServise.getStocks(symbol+'/USDT')
    .subscribe(response => {
        this.stocks = response;
        console.log(this.stocks);
      });




    
    let path = "/bit/pair?pair="+symbol+"/USDT";
    const info = this.http.get<CryptoData>(path);
      info.subscribe(response => {
        this.dataUsd = response;
        this.dataUsd['sym'] = symbol;
        console.log(this.dataUsd);
      });
    let infoCryptoPath = "/allcrypto/"+symbol;
    const infoCrypto = this.http.get<CryptoData>(infoCryptoPath);
      infoCrypto.subscribe(response => {
        this.dataUsd['name'] = response['name'];
        this.dataUsd['id'] = response['id'];
        this.dataUsd['year'] = response['year'];
        this.dataUsd['algo'] = response['algo'];
        this.dataUsd['desc'] = response['desc'];
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
      console.log('IDIDIDID');
      console.log(this.dataUsd.id);
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

  submitComment(form: NgForm, post_id, type) {
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

}
