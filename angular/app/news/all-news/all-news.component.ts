import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Data} from '@angular/router';
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
    info: any;
    return_any: any;
  order: string = 'position';
  reverse: boolean = false;

  resolved_data: any;
  /**
   * @param {OrderPipe} 
   */
   constructor(private orderPipe: OrderPipe, private http:HttpClient, private router:Router, private route:ActivatedRoute) {


      let path = "/newsraw"
      this.info = http.get(path)

   }
  ngOnInit() {
      this.info.map(response => {
          this.news = response['news'];

          this.main_news = response['main_news'];
          this.countAll = this.news.length+this.main_news.length;

      }).subscribe()
    
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
