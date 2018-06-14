import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { OrderPipe } from '../../order-pipe/ngx-order.pipe';
import {ActivatedRoute} from '@angular/router';

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
    constructor(private orderPipe: OrderPipe, private http:HttpClient, private route:ActivatedRoute) {
   	let path = "/reviewraw";
   	this.info = http.get(path);



   }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
          this.order = params['order'];
          this.reverse = params['reverse'];
          if (this.order == undefined) {
              this.order = 'id'
          }
          if (this.reverse == undefined) {
              this.reverse = false
          }
      });
      this.info.map(response => {
          this.news = response['news'];
          this.main_news = response['main_news'];
          this.countAll = this.news.length+this.main_news.length;
      }).subscribe()
  }


}
