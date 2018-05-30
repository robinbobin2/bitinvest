import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthService} from "../../auth.service";
import {PortfolioService} from "../../portfolio.service";
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';

import { NgForm } from '@angular/forms';

const headers = new HttpHeaders({'Content-type': 'Application/json '});
declare var $:any;
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
    percentage: number;
    comments_count:number;
    start_days: number;

}
@Component({
  selector: 'app-cloud-mining-categories',
  templateUrl: './cloud-mining-categories.component.html',
  styleUrls: ['./cloud-mining-categories.component.scss'],
    providers: [PortfolioService]
})
export class CloudMiningCategoriesComponent implements OnInit {
    order: string = 'proc';
    reverse: boolean = false;
    /**
     * @param {OrderPipe}
     */
	id;
	path;
	info;
  active = 0;
  inactive = 0;
  allCount = 0;
  news_raw: any[];
    portfoliosInfo = [];
    portfolioAdded = false;
    getUserPortfolio = [];
    addPortfolio: any;
    checkPortfolio = false;
    removed = false;
    show = false;
    portfolioInfo:any;
	news: Array<NewsRaw> = [];
   constructor(private http:HttpClient,private orderPipe: OrderPipe,  private router:Router, private route:ActivatedRoute, private authService: AuthService, private portfolioService: PortfolioService) {



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
        this.route.params.subscribe(
   		(params: Params) => {
        this.active = 0;
        this.inactive = 0;
        this.allCount = 0;
   		  this.id = params['id'];
   			this.news.length = 0;
   			this.path = "/miningbycat/"+this.id;
  			this.info = this.http.get<Array<NewsRaw>>(this.path);
       this.info.subscribe(response => {
       for (let item of response['news']) {
           this.news.push( {
		  	id: item.id,
		    name:item.name,
		    depo: item.depo,
		    proc: item.proc,
		    status: item.status,
		    recieved: item.recieved,
		    logo: item.logo,
		    desc: item.desc,
		    depo_date: item.depo_date,
		    start: item.start,
		    website: item.website,
		    lang: item.lang,
		    ref: item.ref,
		    ref_about: item.ref_about,
		    latest_date: item.latest_date,
		    percentage: item.percentage,
		    start_days: item.start_days,
        comments_count:item.comments_count,

       });
         }
         console.log(this.news);
         this.allCount = this.news.length;
       for(let item of this.news)
       {
         if(item.status == 1) {
           this.active++;
         } else {
           this.inactive++;
         }
         
       }
     });
     
  }
);
    
  }

  loadMore(id) {
    this.router.navigate(['/cloud-mining/item', id]);
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
    setOrder(value: string, reverse) {
        //  if (this.order === value) {
        //    this.reverse = !this.reverse;
        // }
        if (reverse != 'none') {
            this.reverse = reverse;
        }
        this.order = value;
    }
    submitPortfolio( post_id, type) {

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

}