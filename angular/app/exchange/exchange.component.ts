import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
import {StocksService} from '../stocks.service';
import {AuthService} from "../auth.service";

declare var $:any;
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
	main_news = [];
	count_pairs = 0;
	filteredName = '';
 	animtype = [];
	stock_data: any;
	 selectedItem: any;
    portfolioInfo:any;
	load = true;
    portfoliosInfo = [];
    getUserPortfolio = [];
    addPortfolio: any;
    checkPortfolio = false;
	private fragment: string;
    show = 10;
    time = 0;
	constructor(private http:HttpClient, 
		private stockService:StocksService, 
		private router:Router, 
		private orderPipe: OrderPipe, 
		private route:ActivatedRoute,
				private auth:AuthService) {
		this.name = route.snapshot.params['name'];

	}


	ngOnInit() {
        this.auth.getUser().subscribe(
            response => {
                for(let item of response['portfolio']) {
                    if (item.user_portfolio_type_id == 4) {
                        this.getUserPortfolio.push(item)
                    }
                }
            }
        );
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
			console.log(this.exchange)
			this.commentcount = this.exchange.comments_count;
			this.comments = this.exchange.comments;
			for(let item of this.exchange.categories) {
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
			this.load = false;
			this.count_pairs = this.pairs.length;
		});

		this.stock_data = Observable.interval(1000).concatMap(()=>this.stockService.getExchangePairs(this.name))
		.map((res) => {
			
			for (var _i = 0; _i < this.pairs.length; ++_i) {

				this.animtype[_i] = '';
				if (this.pairs[_i].createTime > this.time) {
					this.time = this.pairs[_i].createTime
				}
				if(this.pairs[_i].value > res[_i]['value']) {


		            this.animtype[_i] = 'greencolor';
		          } else if(this.pairs[_i].value < res[_i]['value']) {
		            this.animtype[_i] = 'redcolor';

		          } else {
		          	this.animtype[_i] = '';
		          }


			}
			for(let item of this.pairs) {
				console.log(item.createTime);
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

      createPortfolio(form: NgForm) {
        const headers = new HttpHeaders({'Content-type': 'Application/json '});

        this.http.post('/angular/userportfolio/create', {'name': form.value.name, 'user_portfolio_type_id': 4},{headers: headers})
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
        const removeUrl = '/angular/userportfolio/stocks/remove/';
        const removePost = this.http.get(removeUrl+id);
        removePost.subscribe(
            response => {
                this.portfolioInfo.subscribe(res=>{
                    if(res['error']) {
                        // code...
                    } else {
                        this.portfoliosInfo = res['stocks'];
                    }
                }),
                    this.checkInPortfolio(id);
                setTimeout(()=> {
                    $.getScript('/js/script.js');
                }, 300)

            },
            error => console.log(error)
        )
    }

	ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
