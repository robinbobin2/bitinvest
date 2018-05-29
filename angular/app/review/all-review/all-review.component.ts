import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { OrderPipe } from '../../order-pipe/ngx-order.pipe';

@Component({
  selector: 'app-all-review',
  templateUrl: './all-review.component.html',
  styleUrls: ['./all-review.component.scss']
})
export class AllReviewComponent implements OnInit {
  news_raw: any[];
	news= [];
  main_news = [];
  info: any;
  countAll: any;
    order: string = 'id';
    reverse: boolean = false;
    /**
     * @param {OrderPipe}
     */
    constructor(private orderPipe: OrderPipe, private http:HttpClient) {
   	let path = "/reviewraw";
   	this.info = http.get(path);



   }

  ngOnInit() {

      this.info.map(response => {
          this.news = response['news'];
          this.main_news = response['main_news'];
          this.countAll = this.news.length+this.main_news.length;
      }).subscribe()
  }


}
