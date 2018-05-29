import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MasonryOptions } from 'angular2-masonry';


const scr = 'http://ppql.ru/masonry.js';
interface Category {
  id: number;
  name: string;
}

export class NewsRaw {
  id: number;
  title: string;
  desc: string;
  main: number;
  category:string;
  photo: string;
  created_at:string;

}
@Component({
  selector: 'app-all-review',
  templateUrl: './all-review.component.html',
  styleUrls: ['./all-review.component.scss']
})
export class AllReviewComponent implements OnInit {
  news_raw: any[];
	news: NewsRaw[] = [];
  main_news: NewsRaw[] = [];
  info: any;
  countAll: any;
   constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {
   	let path = "/reviewraw";
   	this.info = http.get(path);



   }

  ngOnInit() {

      this.info.map(response => {
          this.news = response['news'];

          this.main_news = response['main_news'];
          this.countAll = this.news.length+this.main_news.length;
      })
  }


}
