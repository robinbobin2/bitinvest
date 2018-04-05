import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class News {
  id: number;
  title: string;
  desc: string;
  created_at:string;

}
export class CommentRaw {
  id: number;
  author: string;
  body: string;
  email: string;
  commentable_id:number;
  photo:string;
}
@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {
news: News;
comments: CommentRaw[] = [];
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
    let id = route.snapshot.params['id'];
    let path = "/reviewraw/"+id;
    const info = http.get(path);
  		info.subscribe(response => {
  			this.news = {
            id: response['news'][0]['id'],
          title: response['news'][0]['title'],
          desc: response['news'][0]['desc'],
          created_at:response['news'][0]['created_at']
        }
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
        
  			// console.log(response['news'][0]['id']);
  			// console.log(this.news);
     //    console.log(this.comments);

  		});
}

  ngOnInit() {
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

}
