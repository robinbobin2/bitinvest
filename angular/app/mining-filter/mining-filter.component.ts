import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mining-filter',
  templateUrl: './mining-filter.component.html',
  styleUrls: ['./mining-filter.component.scss']
})
export class MiningFilterComponent implements OnInit {
    status:any;
    order:any;
    reverse:any;
    categories: any;
    cat_id: any = 0;
  constructor(private http:HttpClient) { }

  ngOnInit() {
      let path = "/categoriesraw/6";
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
