import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthService} from "../../auth.service";
import {PortfolioService} from "../../portfolio.service";
import { NgForm } from '@angular/forms';
import {OrderPipe} from "../../order-pipe/ngx-order.pipe";


const headers = new HttpHeaders({'Content-type': 'Application/json '});
declare var $:any;
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
  place: string;
  about:string;
  money: number;
  money_start: string;
  money_end:string;
  current_money: number;
  number_people: number;
  updated_at: string;
  category: any;
  comments_count: number;

}
@Component({
  selector: 'app-ico-project-categories',
  templateUrl: './ico-project-categories.component.html',
  styleUrls: ['./ico-project-categories.component.scss'],
    providers: [PortfolioService]
})
export class IcoProjectCategoriesComponent implements OnInit {

    order: string = '';
    reverse: boolean = false;
    /**
     * @param {OrderPipe}
     */
	id;
	path;
	info;
  activeCount = 0;
  inactiveCount = 0;
  icoCount = 0;
  news_raw: any[];
	news: Array<NewsRaw> = [];

    portfoliosInfo = [];
    getUserPortfolio = [];
    addPortfolio: any;
    hide = false;
    portfolioInfo:any;
  // main_news: NewsRaw[] = [];

   constructor(private http:HttpClient,
               private router:Router,
               private route:ActivatedRoute,
               private orderPipe: OrderPipe,

               private authService:AuthService,
               private portfolioService: PortfolioService) {
   }

  ngOnInit() {
    this.route.params.subscribe(
   		(params: Params) => {
        this.activeCount = 0;
        this.inactiveCount = 0;
        this.icoCount = 0;
   		  this.id = params['id'];
   			this.news.length = 0;
   			this.path = "/icobycat/"+this.id;
  			this.info = this.http.get<Array<NewsRaw>>(this.path);
       this.info.subscribe(response => {
       this.news = response;
       this.icoCount = this.news.length;
       for(let item of this.news)
       {
         if(item.status == 1) {
           this.activeCount++;
         } else {
           this.inactiveCount++;
         }
         
       }
     });
     
  }
);
      let portfolioUrl = '/angular/userportfolio';
      this.portfolioInfo = this.http.get<any>(portfolioUrl);
      this.portfolioInfo.subscribe(
          response => {
              if(response['error']) {
                  // code...
              } else {
                  this.portfoliosInfo = response['ico'];
                  console.log(this.portfoliosInfo);
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
}

    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
        console.log(this.order);
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
            (response) => {
                this.router.navigate(['/profile/portfolio'])
            },

            (error) => console.log(error)
        );
    }
  

}

