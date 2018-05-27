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
  order: string = 'position';
  reverse: boolean = false;

  resolved_data: any;
  /**
   * @param {OrderPipe} 
   */
   constructor(private orderPipe: OrderPipe, private http:HttpClient, private router:Router, private route:ActivatedRoute) { 




   }
getBack(image) {
  return 'url('+image+')';
}
  ngOnInit() {
    this.route.data.subscribe(
        (data: Data) => {
            this.resolved_data = data['news_resolver']
            console.log('resolved')
            console.log(data)
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
  loadMore(id) {
    this.router.navigate(['/posts/post', id]);
  }
  

}
