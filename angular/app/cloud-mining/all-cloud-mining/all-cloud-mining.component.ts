import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MasonryOptions } from 'angular2-masonry';

const scr = 'http://ppql.ru/masonry.js';
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
  styleUrls: ['./all-cloud-mining.component.scss']
})
export class AllCloudMiningComponent implements OnInit {

public myOptions: MasonryOptions = { 
      transitionDuration: '0' 
};
  news_raw: any[];
	news: NewsRaw[] = [];
  main_news: NewsRaw[] = [];
  portfolios: Portfolio[] = [];
   constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
   	let path = "/miningraw";
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
		    start_days: item.start_days

       });
         }
         console.log(this.news);
   	});



   }

  ngOnInit() {
    
    
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
  submitPortfolio(form: NgForm, post_id, type) {
    const headers = new HttpHeaders({'Content-type': 'Application/json '});
    this.http.post('/storeportfolio', {
            'user_portfollable_id': post_id,
            'user_portfolio_id':form.value.portfolio_id,
            'user_portfollable_type': type
      }, 
      {headers: headers}).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
