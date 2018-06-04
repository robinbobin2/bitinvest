import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {OrderPipe} from "../../order-pipe/ngx-order.pipe";
 


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
  view_count: number;
}
@Component({
  selector: 'app-all-interview',
  templateUrl: './all-interview.component.html',
  styleUrls: ['./all-interview.component.scss']
})
export class AllInterviewComponent implements OnInit {
    order: string = 'id';
    reverse: boolean = false;

  news_raw: any[];
	news: NewsRaw[] = [];
  main_news: NewsRaw[] = [];
  allCount = 0;
/**
* @param {OrderPipe}
*/
constructor(private orderPipe: OrderPipe, private http:HttpClient) {




   }

  ngOnInit() {

      let path = "/interviewraw";
      const info = this.http.get(path);
      info.subscribe(response => {
          for (let item of response['news']) {
              this.news.push( {
                  id: item.id,
                  title: item.title,
                  desc: item.desc,
                  main: item.main,
                  created_at:item.created_at,
                  view_count:item.view_count,
                  category: item.category.name,
                  photo: item.photos[0].file,
                  name_credits:item.name_credits,
                  workplace:item.workplace,
                  comments_count:item.comments_count

              });
          }


          for (let item of response['main_news']) {
              this.main_news.push( {
                  id: item.id,
                  title: item.title,
                  desc: item.desc,
                  main: item.main,
                  category:item.category.name,
                  created_at:item.created_at,
                  photo: item.photos[0].file,
                  view_count:item.view_count,
                  name_credits:item.name_credits,
                  workplace:item.workplace,
                  comments_count:item.comments_count

              });
          }
          this.allCount = this.main_news.length+this.news.length;
      });
  }

}
