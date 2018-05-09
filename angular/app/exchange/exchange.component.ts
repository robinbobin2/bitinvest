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
     let carNumbers = [1, 2, 3];
		let observables = this.stockService.getCrypto().map(crypto => this.stockService.getStocks(crypto));

		// forkJoin the array/collection of observables
		let source = Observable.forkJoin(observables);

		// subscribe and sort combined array/collection prior to additional processing
		source.subscribe(x => console.log(x));
     // this.stockService.getCrypto().subscribe(crypto => {
     // 	let keys = Object.keys(crypto);
     // 	for(let item of keys) {
     // 		this.stockService.getStocks(item).flatMap(res=> {
     // 			console.log(res);
     // 		})
     //   .subscribe(res=> {
     // 			if(res.name == this.name) {
     // 				this.pairs.push(res);
     // 			}

     // 		});
     // 	}
     	

     // });
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
