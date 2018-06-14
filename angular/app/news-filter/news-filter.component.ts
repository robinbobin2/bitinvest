import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-filter',
  templateUrl: './news-filter.component.html',
  styleUrls: ['./news-filter.component.scss']
})
export class NewsFilterComponent implements OnInit {
  categories = [];
  cat_id = 0;
  order= ''
  reverse = ''
  constructor(private http:HttpClient) { }

  ngOnInit() {

      let path = "/categoriesraw/1";
      const info = this.http.get(path);
      info.subscribe(response => {
          for ( let item of response['cats']) {
              if(item['count'] > 0) {
                  this.categories.push({
                      id: item['id'],
                      name:item['name'],
                      count: item['count']
                  });
              }

          }
      });

  }
    setOrder(ord, rev) {
        this.order=ord;
        this.reverse=rev;
    }

}
