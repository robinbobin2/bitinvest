import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Categories {
  id: number;
  name: string;
  count: number;

}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

   categories: Categories[] = [];
  constructor(private http:HttpClient) {

}

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


}
