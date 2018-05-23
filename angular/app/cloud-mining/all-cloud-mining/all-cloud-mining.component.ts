import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';
import { AuthService } from '../../auth.service';
interface Category {
  id: number;
  name: string;
}
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
    percentage: number;
    comments_count:number;
    start_days: number;

}
export class Portfolio {
  id: number;
  name:string;
  user_portfolio_type_id: number;
  user_id: number
}

@Component({
  selector: 'app-all-cloud-mining',
  templateUrl: './all-cloud-mining.component.html',
  styleUrls: ['./all-cloud-mining.component.scss'],
  providers: [AuthService]
})

export class AllCloudMiningComponent implements OnInit {
order: string = 'proc';
  reverse: boolean = false;
  /**
   * @param {OrderPipe} 
   */
  news_raw: any[];
	news: NewsRaw[] = [];
  main_news: NewsRaw[] = [];
  portfolios: Portfolio[] = [];
  selectedItem: NewsRaw;
  allCount = 0;
  active = 0;
  inactive = 0;
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
     private route:ActivatedRoute) 

   {

   	let path = "/miningraw";
     let portfolioUrl = '/angular/userportfolio';
     this.portfolioInfo = http.get<any>(portfolioUrl);
     this.portfolioInfo.subscribe(
       response => {
         if(response['error']) {
           // code...
         } else {
         this.portfoliosInfo = response['mining'];
         }
       },
       );
   	const info = http.get(path);
   	info.subscribe(response => {
       // for (let portfolio of response['portfolios']) {
       //   this.portfolios.push({
       //        id: portfolio['id'],
       //        name:portfolio['name'],
       //        user_portfolio_type_id: portfolio['user_portfolio_type_id'],
       //        user_id: portfolio['user_id']
       //   })
       // }
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
         // console.log(this.news);
         this.allCount = this.news.length;
         for(let item of this.news) {
           if(item.status == 1) {
             this.active ++;
           } else {
             this.inactive++;
           }
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

    
  }
  checkAuth() {
    if(this.authService.getUserInfo()) {
      return true;
    }
    return(false);
    
  }

  loadMore(id) {
    this.router.navigate(['/cloud-mining/item', id]);
  }
  checkInPortfolio(id) {
      console.log(this.portfoliosInfo);
      if(this.portfoliosInfo == undefined) {
        return false;
      }

        for(let item of this.portfoliosInfo) {
          console.log(item)
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
    const removeUrl = '/angular/userportfolio/remove/';
    const removePost = this.http.get(removeUrl+id);
    removePost.subscribe(
      response => {
        this.portfolioInfo.subscribe(res=>{
          if(res['error']) {
           // code...
         } else {
         this.portfoliosInfo = res['mining'];
         console.log(this.portfoliosInfo);
         }
       }),
        this.checkInPortfolio(id);

      },
      error => console.log(error)
    )
  }

setOrder(value: string) {
     if (this.order === value) {
       this.reverse = !this.reverse;
    }
    this.order = value;
    console.log(this.order);
}
  portfolio = { 
      'id': '',
  'name':'',
  'user_portfolio_type_id': '',
  'user_id': 4,
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
        (response) => this.router.navigate(['/profile/portfolio']),
        (error) => console.log(error)
      );
  }

}
