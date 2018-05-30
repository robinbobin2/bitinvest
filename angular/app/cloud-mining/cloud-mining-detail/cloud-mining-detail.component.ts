import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';
import {PortfolioService} from "../../portfolio.service";
import {AuthService} from "../../auth.service";
import {CommentsService} from "../../comments.service";
const headers = new HttpHeaders({'Content-type': 'Application/json '});
export class NewsRaw {
	id: number;
    name:string;
    depo: number;
    proc: number;
    status: number;
    recieved: string;
    logo: string;
    desc: string;
    depo_date: number;
    start: string;
    website: string;
    lang: string;
    ref: number;
    ref_about: string;
    latest_date: number;
    percentage: string;
    start_days: number;
    category: any;
    cat_id: any;
}
export class User {
  id:number;
  name: string;
  email:string;
  photo_id: number;
  role_id: number;
}
export class History {
	id: number;
	price: number;
	type:number;
	comment: string;
	datetime: string;
}
export class CommentRaw {
  id: number;
  author: string;
  body: string;
  email: string;
  commentable_id:number;
  photo:string;
  created_at: string;
}
declare var $:any;
@Component({
  selector: 'app-cloud-mining-detail',
  templateUrl: './cloud-mining-detail.component.html',
  styleUrls: ['./cloud-mining-detail.component.scss'],
    providers: [ PortfolioService]
})
export class CloudMiningDetailComponent implements OnInit {
private fragment: string;
news: NewsRaw;
comments: CommentRaw[] = [];
histories: Array<History>=[];
commentcount = 0;
submitted = false;

    rating_count = [];
    user: User;
    hide = false;

    portfoliosInfo = [];
    portfolioAdded = false;
    getUserPortfolio = [];
    addPortfolio: any;
    checkPortfolio = false;
    removed = false;
    show = false;
    portfolioInfo:any;
 constructor(private authService: AuthService,
             private orderPipe: OrderPipe,
             private http:HttpClient,
             private router:Router,
             private route:ActivatedRoute,
             private portfolioService: PortfolioService,
             private commentService: CommentsService) {
    let id = route.snapshot.params['id'];
    let path = "/miningraw/"+id;

    const info = http.get(path);

  		info.subscribe(response => {
  			this.news = {
						id: response['news'].id,
					    name:response['news'].name,
					    depo: response['news'].depo,
					    proc: response['news'].proc,
					    status: response['news'].status,
					    recieved: response['news'].recieved,
					    logo: response['news'].logo,
					    desc: response['news'].desc,
					    depo_date: response['news'].depo_date,
					    start: response['news'].start,
					    website: response['news'].website,
					    lang: response['news'].lang,
					    ref: response['news'].ref,
					    ref_about: response['news'].ref_about,
					    latest_date: response['news'].latest_date,
					    percentage: response['news'].percentage,
                start_days: response['news'].start_days,
                category: response['news'].category,
                cat_id: response['news'].cat_id,
					};

  			for(let item of response['news'].history) {
  				this.histories.push({
					id: item.id,
					price: item.price,
					type:item.type,
					comment: item.comment,
					datetime: item.datetime,
  				});
  			}
  			if(response['news'].comments.length > 0) {
  				for(let item of response['news'].comments) {
		          this.comments.push({
		            id: item['id'],
		            email:item['email'],
		            author: item['author'],
		            body: item['body'],
		            commentable_id:item['commentable_id'],
		            photo: item['photo'],
		            created_at: item['created_at']
		        });
		          this.commentcount=this.commentcount+1;
                        this.rating_count[item['id']] = 0;
                        for (let rating_item of item.rating) {
                            if (rating_item.positive == 1) {
                                this.rating_count[item['id']] +=1;
                            } else {
                                this.rating_count[item['id']] -=1;
                            }
                        }

		        }
  				// this.commentcount = response['comments'].length;
  			} 
  			
        
   		});
  }

  ngOnInit() {
      this.authService.getUser().subscribe(
          response => {
              for(let item of response['portfolio']) {
                  if (item.user_portfolio_type_id == 1) {
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
                  this.portfoliosInfo = response['mining'];
              }
          },
      );
  	this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  	try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
  const userpath = "/angular/user";
     const userinfo = this.http.get<User>(userpath);
     userinfo.subscribe(response => {
        this.user = {
            id:response.id,
            name: response.name,
            email:response.email,
            photo_id: response.photo_id,
            role_id: response.role_id

        };
   });
  }
    onVote(comment_id, positive) {
        this.commentService.addVote(comment_id,positive).subscribe(
            res =>
            {
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
    checkAuth() {
        if(this.authService.getUserInfo()) {
            return true;
        }
        return(false);

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

    removePortfolio(id) {
        this.portfolioService.removePortfolio(id, 'App\\CloudMining', 0).subscribe( () => {
            this.portfolioInfo.subscribe(res=>{
                if(res['error']) {
                    // code...
                } else {
                    this.portfoliosInfo = res['mining'];
                }
            });

            this.checkInPortfolio(id);

            setTimeout(()=> {
                $.getScript('/js/script.js');
            }, 300)
        })

    }
    createPortfolio(form: NgForm) {

        this.http.post('/angular/userportfolio/create', {'name': form.value.name, 'user_portfolio_type_id': 1},{headers: headers})
            .subscribe(
                response => {this.getUserPortfolio.push(response); form.reset()},
                error => console.log(error)
            )

    }
    submitPortfolio( post_id, type) {

        this.http.post('/storeportfolio', {
                'user_portfollable_id': post_id,
                'user_portfolio_id':this.addPortfolio,
                'user_portfollable_type': type
            },
            {headers: headers}).subscribe(
            () => this.router.navigate(['/profile/portfolio'])
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
          photo: response['photo'],
          created_at: response['created_at']
        })
      );
      form.reset();
      this.submitted = true;
      this.commentcount=this.commentcount+1;
  }

 goBack() {
 	this.router.navigateByUrl('/mining/all');
 }

  }