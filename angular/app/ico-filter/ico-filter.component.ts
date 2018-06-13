import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ico-filter',
  templateUrl: './ico-filter.component.html',
  styleUrls: ['./ico-filter.component.scss']
})
export class IcoFilterComponent implements OnInit {
    status:any;
    order:any;
    reverse:any;
    categories=[];
    cat_id: any = 0;
  constructor(private http:HttpClient) { }

  ngOnInit() {
      let path = "/categoriesraw/5";
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
