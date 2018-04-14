import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Category {
  id: number;
  name: string;
}
interface Categories {
  id: number;
  name: string;
  count: number;

}
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
@Component({
  selector: 'app-ico-project-categories',
  templateUrl: './ico-project-categories.component.html',
  styleUrls: ['./ico-project-categories.component.scss']
})
export class IcoProjectCategoriesComponent implements OnInit {
 
	id;
	path;
	info;
  activeCount = 0;
  inactiveCount = 0;
  icoCount = 0;
  news_raw: any[];
	news: Array<NewsRaw> = [];
  // main_news: NewsRaw[] = [];

   constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
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
}
  loadMore(id) {
    this.router.navigate(['/ico/item', id]);
  }
  

}

