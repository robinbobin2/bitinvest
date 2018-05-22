import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';
import { PortfolioService } from '../../portfolio.service';
import { AuthService } from '../../auth.service';
 interface Category {
  id: number;
  name: string;
}
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
  logo:string;
  comments_count:number
}

@Component({
  selector: 'app-ico-project-all',
  templateUrl: './ico-project-all.component.html',
  styleUrls: ['./ico-project-all.component.scss'],
  providers: [PortfolioService, AuthService]
})
export class IcoProjectAllComponent implements OnInit {
  news: NewsRaw[] = [];
  activeCount = 0;
  inactiveCount = 0;
  icoCount = 0;
  order: string = '';
  reverse: boolean = false;
  portfolios=[];
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
  /**
   * @param {OrderPipe} 
   */
   constructor(private authService: AuthService, 
     private portfolioService: PortfolioService, 
     private orderPipe: OrderPipe, 
     private http:HttpClient, 
     private router:Router, 
     private route:ActivatedRoute) { 
   	



   }

  ngOnInit() {
    let path = "/icoraw";
     const info = this.http.get(path);
     info.subscribe(response => {
       for(let item of response['news']) 
       {
         this.news.push( {
               id: item.id,
              name: item.name,
              status: item.status,
              website:item.website,
              cat_id:item.cat_id,
              escrow: item.escrow,
              type: item.type,
              white_paper: item.white_paper,
              currencies: item.currencies,
              platform: item.platform,
              place: item.place,
              about:item.about,
              money: item.money,
              money_start: item.money_start,
              money_end:item.money_end,
              current_money: item.current_money,
              number_people: item.number_people,
              updated_at: item.updated_at,
              category: item.category['name'],
              logo:item.logo,
              comments_count:item.comments_count,

         } );
       }
       this.icoCount = this.news.length;
       for(let item of this.news)
       {
         if(item.status == 1) {
           this.activeCount++;
         } else {
           this.inactiveCount++;
         }
         
       }
     console.log(this.news.length);
     });
     
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
setOrder(value: string) {
     if (this.order === value) {
       this.reverse = !this.reverse;
    }
    this.order = value;
    console.log(this.order);
}
  loadMore(id) {
    this.router.navigate(['/ico/item', id]);
    
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

}
