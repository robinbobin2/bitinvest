import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Categories {
  id: number;
  name: string;
  count: number;

}

@Component({
  selector: 'app-ico-project',
  templateUrl: './ico-project.component.html',
  styleUrls: ['./ico-project.component.scss']
})
export class IcoProjectComponent implements OnInit {

 categories: Categories[] = [];
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 

}

  ngOnInit() {
    let path = "/categoriesraw/5";
    const info = this.http.get(path);
      info.subscribe(response => {
        for ( let item of response['cats']) {
          this.categories.push({
            id: item['id'],
          name:item['name'],
          count: item['count']
        });
        }
      });
  }


}
