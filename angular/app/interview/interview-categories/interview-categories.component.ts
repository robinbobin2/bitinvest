import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MasonryOptions } from 'angular2-masonry';
const scr = 'http://ppql.ru/masonry.js';
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
  workplace: string;
  name_credits: string;
  comments_count: string;

}
@Component({
  selector: 'app-interview-categories',
  templateUrl: './interview-categories.component.html',
  styleUrls: ['./interview-categories.component.scss']
})
export class InterviewCategoriesComponent implements OnInit {
public myOptions: MasonryOptions = { 
      transitionDuration: '0' 
};
	id;
	path;
	info;
loadAPI: Promise<any>;

    public loadScript() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = scr;
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('body')[0].appendChild(node);
    }
  news_raw: any[];
	news: NewsRaw[] = [];
  main_news: NewsRaw[] = [];
  allCount = 0;

   constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
   }

  ngOnInit() {
    this.route.params.subscribe(
   		(params: Params) => {
   			this.id = params['id'];
   			this.news.length = 0;
   			this.main_news.length = 0;
   			this.path = "/interviewsbycat/"+this.id;
  			this.info = this.http.get(this.path);
        this.allCount = 0;
   			this.info.subscribe(response => {
       // console.log(response['news']);
       // this.news = response['news'];
       for (let item of response['news']) {
         console.log(item.photos[0].file);
           this.news.push( {
         id: item.id,
          title: item.title,
          desc: item.desc,
          main: item.main,
          created_at:item.created_at,
          category: item.category.name,
          photo: item.photos[0].file,
          name_credits:item.name_credits,
          workplace:item.workplace,
          comments_count:item.comments_count

       });
         }
         

       for (let item of response['main_news']) {
         console.log(item);
         this.main_news.push( {
         id: item.id,
          title: item.title,
          desc: item.desc,
          main: item.main,
          created_at:item.created_at,
          category: item.category.name,
          photo: item.photos[0].file,
          name_credits:item.name_credits,
          workplace:item.workplace,
          comments_count:item.comments_count

       });
       }
   		// this.news.push(response['news']);
     //   this.main_news.push(response['main_news']);
   		// console.log(response['news']);
       this.allCount = this.main_news.length+this.news.length;
   	});
   		}
   		);
    
  }

  loadMore(id) {
    this.router.navigate(['/interview/item', id]);
  }
  

}

