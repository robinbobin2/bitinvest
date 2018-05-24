import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PortfolioService} from "../../portfolio.service";
import {AuthService} from "../../auth.service";
import {OrderPipe} from "../../order-pipe/ngx-order.pipe";
import {CommentsService} from "../../comments.service";

const headers = new HttpHeaders({'Content-type': 'Application/json '});
export class NewsRaw {
  id: number;
  name: string;
  status: number;
  website:string;
  cat_id:number;
  escrow: number;
  type: number;
  white_paper: string;
  currencies: string;
  platform: string;
  place: string;
  about:string;
  money: number;
  money_start: string;
  money_end:string;
  current_money: number;
  number_people: number;
  updated_at: string;
  category: any;
}
export class User {
  id:number;
  name: string;
  email:string;
  photo_id: number;
  role_id: number;
}
export class CommentRaw {
  id: number;
  author: string;
  body: string;
  email: string;
  commentable_id:number;
  photo:string;
}
export class Team {
  id:number;
  name:string;
  workplace:string;
}
export class RoadMap {
  id:number;
  date:string;
  desc: string;
  state:string;
}
export class Percent {
  id:number;
  percent:number;
  name: string;
}
@Component({
  selector: 'app-ico-project-detail',
  templateUrl: './ico-project-detail.component.html',
  styleUrls: ['./ico-project-detail.component.scss'],
    providers:[PortfolioService, CommentsService]
})
export class IcoProjectDetailComponent implements OnInit {
private fragment: string;
news: NewsRaw;
comments: CommentRaw[] = [];
team: Array<Team>;
roadMap: Array<RoadMap>;
submitted = false;
commentcount = 0;
user: User;
percents: Array<Percent> = [];
    portfoliosInfo = [];
    portfolioAdded = false;
    getUserPortfolio = [];
    addPortfolio: any;
    checkPortfolio = false;
    removed = false;
    show = false;
    portfolioInfo:any;
    rating_count = [];
  constructor(private authService: AuthService,
              private portfolioService: PortfolioService,
              private orderPipe: OrderPipe,
              private http:HttpClient,
              private router:Router,
              private route:ActivatedRoute,
              private commentService: CommentsService) {
}

  ngOnInit() {
      let portfolioUrl = '/angular/userportfolio';
      this.portfolioInfo = this.http.get<any>(portfolioUrl);
      this.portfolioInfo.subscribe(
          response => {
              if(response['error']) {
                  // code...
              } else {
                  this.portfoliosInfo = response['ico'];
              }
          },
      );
      this.authService.getUser().subscribe(
          response => {
              for(let item of response['portfolio']) {
                  if (item.user_portfolio_type_id == 2) {
                      this.getUserPortfolio.push(item)
                  }
              }
          }
      );
        let id = this.route.snapshot.params['id'];
    let path = "/icoraw/"+id;
    const info = this.http.get<any>(path);

      info.subscribe(response => {
        console.log(response['news']);
        console.log(response);
        this.news = response['news'][0];
        // this.news.category = response['category'].name;
        console.log(this.news);
        
        for(let item of response['comments']) {
          this.comments.push({
            id: item['id'],
            email:item['email'],
          author: item['author'],
          body: item['body'],
          commentable_id:item['commentable_id'],
          photo: item['photo']
        });
          this.commentcount=this.commentcount+1;
            this.rating_count[item['id']] = 0;
            if (item.rating.length > 0) {
                for (let rating_item of item.rating) {
                    if (rating_item.positive == 1) {
                        this.rating_count[item['id']] += 1;
                    } else {
                        this.rating_count[item['id']] -= 1;
                    }
                }
            }
        }
        this.team = response['team'];
        this.roadMap = response['roadmap']

      });
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

     const percentpath = "/angular/funds/"+id;
     const percentinfo = this.http.get<any>(percentpath);
     percentinfo.subscribe(response => {
       for(let item of response) {
         this.percents.push({
             id:item['id'],
            percent:item['percent'],
            name: item['name']
         });
       }
       console.log(this.percents);
   });
  }
  // @ViewChild('f') Form:NgForm;
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
      this.submitted = true;
      this.commentcount=this.commentcount+1;
  }
 goBack() {
 	this.router.navigateByUrl('/ico/all');
 }
 percentClass(percent, type) {
   if(type=='first') {
     if(percent >=40) {
       return 'gray';
     } else if(percent>=30) {
       return 'blue';
     } else if(percent>=20) {
       return 'purple';
     } else if(percent>=10) {
       return 'green';
     }
   }

   if(type=='second') {
     if(percent >=40) {
       return 'bg-gray';
     } else if(percent>=30) {
       return 'bg-blue';
     } else if(percent>=20) {
       return 'bg-purple';
     } else if(percent>=10) {
       return 'bg-green';
     }
   }
   if(type=='third') {
     if(percent >=40) {
       return 'text-grya';
     } else if(percent>=30) {
       return 'text-blue';
     } else if(percent>=20) {
       return 'text-purple';
     } else if(percent>=10) {
       return 'text-green';
     }
   }
 }
 onState(state) {
 	if(state == 'past') {
 		return 'gray';
 	} else if(state == 'current') {
 		return 'green';
 	} else {
 		return 'ok';
 	}
 }
    checkAuth() {
        if(this.authService.getUserInfo()) {
            return true;
        }
        return(false);

    }
    removePortfolio(id, type) {
        let removeUrl: string;
        if(type == 'App\\IcoProject') {
            removeUrl = '/angular/userportfolio/ico/remove/';
        } else{
            removeUrl = '/angular/userportfolio/remove/';
        }
        const removePost = this.http.get(removeUrl+id);
        removePost.subscribe(
            response => {
                this.portfolioInfo.subscribe(res=>{
                    if(res['error']) {
                        // code...
                    } else {
                        this.portfoliosInfo = res['ico'];
                        console.log(this.portfoliosInfo);
                    }
                }),
                    this.checkInPortfolio(id);

            },
            error => console.log(error)
        )
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


    createPortfolio(form: NgForm) {

        this.http.post('/angular/userportfolio/create', {'name': form.value.name, 'user_portfolio_type_id': 2},{headers: headers})
            .subscribe(
                response => {this.getUserPortfolio.push(response); form.reset()},
                error => console.log(error)
            )

    }

    submitPortfolio( post_id, type) {

        this.portfolioService.submitPortfolio(this.addPortfolio,post_id, type).subscribe(
            (response) => this.router.navigate(['/profile/portfolio']),
            (error) => console.log(error)
        );
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
}
