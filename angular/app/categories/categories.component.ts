import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { OrderPipe } from '../order-pipe/ngx-order.pipe';
import { HttpClient } from '@angular/common/http';


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
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})


export class CategoriesComponent implements OnInit {
	id;
	path;
  countAll = 0;
	info;
  news_raw: any[];
	news: NewsRaw[] = [];
  main_news: NewsRaw[] = [];
  order: string = 'id';
  reverse: boolean = true;
/**
   * @param {OrderPipe} 
   */
   constructor(private orderPipe: OrderPipe, private http:HttpClient, private router:Router, private route:ActivatedRoute) { 

   	



   }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
          this.order = params['order'];
          this.reverse = params['reverse'];
          if (this.order == undefined) {
              this.order = 'position'
          }
          if (this.reverse == undefined) {
              this.reverse = false
          }
          // this.age = params['year'];
          // if (this.age == undefined) {
          //     this.age = ''
          // }
      });
    this.route.params.subscribe(
   		(params: Params) => {
   			this.id = params['id'];
   			this.news.length = 0;
   			this.main_news.length = 0;
   			this.path = "/postsbycat/"+this.id;
  			this.info = this.http.get(this.path);
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
          comments_count: item.comments_count

       });
         }
         

       for (let item of response['main_news']) {
         console.log(item);
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

       this.countAll = this.news.length+this.main_news.length;

   	});
   		}
   		);
    
  }
setOrder(value: string) {
     if (this.order === value) {
       this.reverse = !this.reverse;
    }
    this.order = value;
    console.log(this.order);
}

}

