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
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

    categories: Categories[] = [];
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
    let path = "/categoriesraw/2";
    const info = http.get(path);
  		info.subscribe(response => {
  			for ( let item of response['cats']) {
  				this.categories.push({
  				  id: item['id'],
				  name:item['name'],
				  count: item['count']
  			});
  			}
  			
  			console.log(this.categories);

  		});
}

  ngOnInit() {

  }
  loadCat(id) {
  	this.router.navigate(['/interview/category', id]);
    console.log('snap');
    this.route.url.subscribe(() => {
    console.log(this.route.snapshot.firstChild.data);
   });
  }


}
