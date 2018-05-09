import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {StocksService} from '../stocks.service';
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
  providers: [StocksService]
})
export class ExchangeComponent implements OnInit {
 exchange: any;
 name = '';
 comments = [];
 commentcount = 0;
 user: any;
 pairs = [];
 Observable = Observable;
 stocks=[];
 count_pairs = 0;
 constructor(private http:HttpClient, 
 	private stockService:StocksService, 
 	private router:Router, 
 	private route:ActivatedRoute) { 
 	this.name = route.snapshot.params['name'];
 	
 }


  ngOnInit() {
  	console.log(this.name)
    this.stockService.getExchange(this.name).subscribe(res => {
    	this.exchange = res;
    	this.commentcount = this.exchange.comments_count;
    	this.comments = this.exchange.comments;
    });

    const userpath = "/angular/user";
     const userinfo = this.http.get<any>(userpath);
     userinfo.subscribe(response => {
        this.user = {
            id:response.id,
            name: response.name,
            email:response.email,
            photo_id: response.photo_id,
            role_id: response.role_id

        };
   });

     this.stockService.getCrypto().subscribe(crypto => {
     	let keys = Object.keys(crypto);
     	for(let item of keys) {
	     	this.stocks.push( 
	     		this.stockService.getStocks(item).map(result => {
	     			for(let res of result) {
		     			if(res.name == this.name) {
		     				this.pairs.push(res);
		     				this.count_pairs = this.pairs.length;
		     			}
	     			}

	     		})
	     	);
     	}
     	Observable.from(this.stocks)
		  .concatAll()
		  .subscribe();
     	

     });
  }

  submitComment(form: NgForm, post_id, type) {
    const headers = new HttpHeaders({'Content-type': 'Application/json '});
    this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
      }, {headers: headers}).subscribe(
        (response) => {
        this.comments.unshift({
            id: response['id'],
            email:response['email'],
          author: response['author'],
          body: response['body'],
          commentable_id:response['commentable_id'],
          photo: response['photo']
        })
      this.commentcount=this.commentcount+1;
       },
        (error) => console.log(error)
      );
      form.reset();
      }

}
