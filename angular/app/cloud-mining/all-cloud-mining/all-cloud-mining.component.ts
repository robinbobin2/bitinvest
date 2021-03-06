import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';
import { AuthService } from '../../auth.service';
import {PortfolioService} from "../../portfolio.service";

const headers = new HttpHeaders({'Content-type': 'Application/json '});
export class NewsRaw {
  id: number;
    name:string;
    depo: number;
    proc: number;
    status: any;
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
  providers: [AuthService, PortfolioService]
})

export class AllCloudMiningComponent implements OnInit {
order: string = 'name';
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
  showCaret = false;
  status = 'both'
   constructor(private authService: AuthService, 
     private orderPipe: OrderPipe, 
     private http:HttpClient, 
     private router:Router, 
     private route:ActivatedRoute,
               private portfolioService: PortfolioService)

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
           if(item.status == 2) {
               this.inactive++;
           } else {
               this.active ++;
           }
         }
   	});



   }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
          this.order = params['order'];
          this.reverse = params['reverse'];
          this.status = params['status'];
          if (this.status == undefined) {
              this.status = ''
          }
          if (this.order == undefined) {
              this.order = 'name'
          }
          if (this.reverse == undefined) {
              this.reverse = false
          }
          // this.age = params['year'];
          // if (this.age == undefined) {
          //     this.age = ''
          // }
      });


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
                   console.log(this.portfoliosInfo);
               }
           });
               this.checkInPortfolio(id);
       })

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
