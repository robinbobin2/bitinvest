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
  selector: 'app-cloud-mining-categories',
  templateUrl: './cloud-mining-categories.component.html',
  styleUrls: ['./cloud-mining-categories.component.scss']
})
export class CloudMiningCategoriesComponent implements OnInit {

	id;
	path;
	info;
  active = 0;
  inactive = 0;
  allCount = 0;
  news_raw: any[];
	news: Array<NewsRaw> = [];
   constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 



   }

  ngOnInit() {
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
  
  portfolio = { 
      'id': '',
  'name':'',
  'user_portfolio_type_id': '',
  'user_id': 4,
  }
  // @ViewChild('f') Form:NgForm;

}