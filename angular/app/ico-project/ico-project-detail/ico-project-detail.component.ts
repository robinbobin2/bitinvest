import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
export class CommentRaw {
  id: number;
  author: string;
  body: string;
  email: string;
  commentable_id:number;
  photo:string;
}
export class Team {
  id:number;
  name:string;
  workplace:string;
}
export class RoadMap {
  id:number;
  date:string;
  desc: string;
  state:string;
}
@Component({
  selector: 'app-ico-project-detail',
  templateUrl: './ico-project-detail.component.html',
  styleUrls: ['./ico-project-detail.component.scss']
})
export class IcoProjectDetailComponent implements OnInit {
private fragment: string;
news: NewsRaw;
comments: CommentRaw[] = [];
team: Array<Team>;
roadMap: Array<RoadMap>;
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
    let id = route.snapshot.params['id'];
    let path = "/icoraw/"+id;
    const info = http.get(path);

  		info.subscribe(response => {
  			// console.log(response['news']);
  			this.news = response['news'][0];
        
        for(let item of response['comments']) {
          this.comments.push({
            id: item['id'],
            email:item['email'],
          author: item['author'],
          body: item['body'],
          commentable_id:item['commentable_id'],
          photo: item['photo']
        })
        }
        this.team = response['team'];
        this.roadMap = response['roadmap']

  		});
}

  ngOnInit() {

  	this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  	try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
  }
  comment = { 
    'post_id': '',
    'body': '',
    'commentable_id': '',
    'commentable_type': ''
  }
  // @ViewChild('f') Form:NgForm;
  submitComment(form: NgForm, post_id, type) {
    const headers = new HttpHeaders({'Content-type': 'Application/json '});
    this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
      }, {headers: headers}).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    // console.log(post_id + " " + form.value.body + " " + type); 
  }
 goBack() {
 	this.router.navigateByUrl('/ico/all');
 }
 onState(state) {
 	if(state == 'past') {
 		return 'gray';
 	} else if(state == 'current') {
 		return 'green';
 	} else {
 		return 'ok';
 	}
 }
}
