import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {

  news_raw: any[];
	news= [];
  main_news= [];
  countAll = 0;
  order: string = 'position';
  reverse: boolean = false;
  /**
   * @param {OrderPipe} 
   */
   constructor(private orderPipe: OrderPipe, private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
   	let path = "/newsraw";
   	const info = http.get(path);
   	info.subscribe(response => {
       this.news = response['news'];
         
         this.main_news = response['main_news'];
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
setOrder(value: string) {
     if (this.order === value) {
       this.reverse = !this.reverse;
    }
    this.order = value;
    console.log(this.order);
}
  loadMore(id) {
    this.router.navigate(['/posts/post', id]);
  }
  

}
