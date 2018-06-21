import { Component, AfterContentInit } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';

declare var $:any;

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements AfterContentInit {

    news_raw: any[];
    news= [];
    main_news= [];
    countAll = 0;
    info: any;
    return_any: any;
  order: string = 'position';
  reverse: boolean = false;
  load = true;

  resolved_data: any;
  /**
   * @param {OrderPipe} 
   */
   constructor(private orderPipe: OrderPipe, private http:HttpClient, private router:Router, private route:ActivatedRoute) {


      let path = "/newsraw"
      this.info = http.get(path)
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
   }
    ngAfterContentInit() {
      this.info.map(response => {
          this.news = response['news'];

          this.main_news = response['main_news'];
          this.countAll = this.news.length+this.main_news.length;
          this.load = false;
          if (this.load = false) {
              setTimeout(()=> {
                  $.getScript('/js/script.js');
              }, 800)
          }


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
