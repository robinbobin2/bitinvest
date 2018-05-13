import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
import {StocksService} from '../stocks.service';
@Component({
	selector: 'app-exchange',
	templateUrl: './exchange.component.html',
	styleUrls: ['./exchange.component.scss'],
	providers: [StocksService]
})
export class ExchangeComponent implements OnInit, AfterViewInit {
	order: string = 'bid';
  reverse: boolean = true;
  /**
   * @param {OrderPipe} 
   */
	exchange: any;
	name = '';
	comments = [];
	commentcount = 0;
	user: any;
	pairs = [];
	Observable = Observable;
	stocks=[];
	news = [];
	count_pairs = 0;
	filteredName = '';
 	animtype = [];
	stock_data: any;
	private fragment: string;
	constructor(private http:HttpClient, 
		private stockService:StocksService, 
		private router:Router, 
		private orderPipe: OrderPipe, 
		private route:ActivatedRoute) { 
		this.name = route.snapshot.params['name'];

	}


	ngOnInit() {
		 this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        }
      }
    });
		this.stockService.getExchange(this.name).subscribe(res => {
			this.exchange = res;
			this.commentcount = this.exchange.comments_count;
			this.comments = this.exchange.comments;
			for(let item of this.exchange.categories) {
				let newsUrl = "/postsbycat/"+item.id;
				let newsInfo = this.http.get<any>(newsUrl).publishReplay(1).refCount();
				newsInfo.subscribe(response => {
					for(let news_item of response['news']) {
						this.news.push(news_item)
					}
					console.log(this.news);
				});
			}
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




		this.stockService.getExchangePairs(this.name).subscribe(res => {
			this.pairs = res
			this.count_pairs = this.pairs.length;
		});

		this.stock_data = Observable.interval(1000).concatMap(()=>this.stockService.getExchangePairs(this.name))
		.map((res) => {
			
			for (var _i = 0; _i < this.pairs.length; ++_i) {

				this.animtype[_i] = '';

				if(this.pairs[_i].value > res[_i]['value']) {


		            this.animtype[_i] = 'greencolor';
		          } else if(this.pairs[_i].value < res[_i]['value']) {
		            this.animtype[_i] = 'redcolor';

		          } else {
		          	this.animtype[_i] = '';
		          }


			}
			this.pairs = res;
			this.count_pairs = this.pairs.length;
		}).subscribe();
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
	onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( "#" + f )
      if ( element ) element.scrollIntoView ( element )
    });
  }
	ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
