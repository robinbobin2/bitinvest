import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MasonryOptions } from 'angular2-masonry';
 
 interface Category {
  id: number;
  name: string;
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
}

@Component({
  selector: 'app-ico-project-all',
  templateUrl: './ico-project-all.component.html',
  styleUrls: ['./ico-project-all.component.scss']
})
export class IcoProjectAllComponent implements OnInit {

  news_raw: any[];
  news = [];
  main_news: NewsRaw[] = [];
  activecount = 0;
  inactivecount = 0;
   constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
   	



   }

  ngOnInit() {
    let path = "/icoraw";
     const info = this.http.get<Array<NewsRaw>>(path);
     info.subscribe(response => {
       this.news = response;
       console.log(this.news);
     });
    for(let item of this.news) {
      if(item['active'] == 1 ) {
        this.activecount = this.activecount+1;
      } else {
        this.inactivecount = this.inactivecount+1;
      }
    }
  }

  loadMore(id) {
    this.router.navigate(['/ico/item', id]);
    
  }
  

}
