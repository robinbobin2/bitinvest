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
  comments_count: number;

}
@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  
public myOptions: MasonryOptions = { 
      transitionDuration: '0' 
};
  news_raw: any[];
	news: NewsRaw[] = [];
  main_news: NewsRaw[] = [];
  countAll = 0;
   constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
   	let path = "/newsraw";
   	const info = http.get(path);
   	info.subscribe(response => {
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
          comments_count: item.comments_count

       });
         }
         

       for (let item of response['main_news']) {
         console.log(item.photos[0].file);
         this.main_news.push( {
         id: item.id,
          title: item.title,
          desc: item.desc,
          main: item.main,
          category:item.category.name,
          created_at:item.created_at,
          photo: item.photos[0].file,
          comments_count: item.comments_count

       });

       }
   		// this.news.push(response['news']);
     //   this.main_news.push(response['main_news']);
   		// console.log(response['news']);
       console.log(this.news);
       console.log(this.main_news);
       this.countAll = this.news.length+this.main_news.length;
   	});



   }
getBack(image) {
  return 'url('+image+')';
}
  ngOnInit() {
    
    
  }

  loadMore(id) {
    this.router.navigate(['/posts/post', id]);
  }
  

}
