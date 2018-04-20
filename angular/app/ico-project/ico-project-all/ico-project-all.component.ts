import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';
 interface Category {
  id: number;
  name: string;
}

export class NewsRaw {
  id: number;
  name: string;
  status: number;
  website:string;
  cat_id:number;
  escrow: number;
  type: number;
  white_paper: string;
  currencies: string;
  platform: string;
  place: string;
  about:string;
  money: number;
  money_start: string;
  money_end:string;
  current_money: number;
  number_people: number;
  updated_at: string;
  category: any;
  logo:string;
  comments_count:number
}

@Component({
  selector: 'app-ico-project-all',
  templateUrl: './ico-project-all.component.html',
  styleUrls: ['./ico-project-all.component.scss']
})
export class IcoProjectAllComponent implements OnInit {
  news: NewsRaw[] = [];
  activeCount = 0;
  inactiveCount = 0;
  icoCount = 0;
  order: string = '';
  reverse: boolean = false;
  /**
   * @param {OrderPipe} 
   */
   constructor(private orderPipe: OrderPipe, private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
   	



   }

  ngOnInit() {
    let path = "/icoraw";
     const info = this.http.get(path);
     info.subscribe(response => {
       for(let item of response['news']) 
       {
         this.news.push( {
               id: item.id,
              name: item.name,
              status: item.status,
              website:item.website,
              cat_id:item.cat_id,
              escrow: item.escrow,
              type: item.type,
              white_paper: item.white_paper,
              currencies: item.currencies,
              platform: item.platform,
              place: item.place,
              about:item.about,
              money: item.money,
              money_start: item.money_start,
              money_end:item.money_end,
              current_money: item.current_money,
              number_people: item.number_people,
              updated_at: item.updated_at,
              category: item.category['name'],
              logo:item.logo,
              comments_count:item.comments_count,

         } );
       }
       this.icoCount = this.news.length;
       for(let item of this.news)
       {
         if(item.status == 1) {
           this.activeCount++;
         } else {
           this.inactiveCount++;
         }
         
       }
     console.log(this.news.length);
     });
     
    

  }

setOrder(value: string) {
     if (this.order === value) {
       this.reverse = !this.reverse;
    }
    this.order = value;
    console.log(this.order);
}
  loadMore(id) {
    this.router.navigate(['/ico/item', id]);
    
  }
  

}
