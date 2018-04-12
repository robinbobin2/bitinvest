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
  title: string;
  desc: string;
  main: number;
  category:string;
  photo: string;
  created_at:string;

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

  news_raw: any[];
	news: Array<NewsRaw> = [];
  // main_news: NewsRaw[] = [];

   constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
   }

  ngOnInit() {
    this.route.params.subscribe(
   		(params: Params) => {
   			this.id = params['id'];
   			this.news = undefined;
   			this.news = [];
   			this.path = "/icobycat/"+this.id;
  			this.info = this.http.get<Array<NewsRaw>>(this.path);
     this.info.subscribe(response => {
       this.news = response;
       for(let item of response) {
       	this.news.push({
  id: item.id,
  title: item.title,
  desc: item.desc,
  main: item.main,
  category:item.category.name,
  photo: item.photo,
  created_at:item.photos[0].file


       	});
       }
     });
     console.log('news');
    console.log(this.news);
  }
);
}
  loadMore(id) {
    this.router.navigate(['/analytics/item', id]);
  }
  

}

