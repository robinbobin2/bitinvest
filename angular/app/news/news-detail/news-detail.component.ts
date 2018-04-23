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
  // main: number;
  category:string;
  photo: string;
  created_at:string;
  comments_count: number;

}
export class CommentRaw {
  id: number;
  author: string;
  body: string;
  email: string;
  commentable_id:number;
  photo:string;
}
export class User {
  id:number;
  name: string;
  email:string;
  photo_id: number;
  role_id: number;
}
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
news: News;
comments: CommentRaw[] = [];
submitted = false;
commentcount = 0;
user: User;
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
    let id = route.snapshot.params['id'];
    let path = "/newsraw/"+id;
    const info = http.get(path);
  		info.subscribe(response => {
  			this.news = {
            id: response['news'][0]['id'],
          title: response['news'][0]['title'],
          desc: response['news'][0]['desc'],
          created_at:response['news'][0]['created_at'],
          category:response['category'].name,
          photo:response['photos'][0].file,
          comments_count:response['comments_count']
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
        
  			console.log(response['news'][0]['id']);
  			console.log(this.news);
        console.log(this.comments);

  		});
}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
      const userpath = "/angular/user";
     const userinfo = this.http.get<User>(userpath);
     userinfo.subscribe(response => {
        this.user = {
            id:response.id,
            name: response.name,
            email:response.email,
            photo_id: response.photo_id,
            role_id: response.role_id

        };
   });
  }
  comment = { 
    'post_id': '',
    'body': '',
    'commentable_id': '',
    'commentable_type': ''
  }
  // @ViewChild('f') Form:NgForm;
  
  submitComment(form: NgForm) {
    const headers = new HttpHeaders({'Content-type': 'Application/json '});
    this.http.post('/storecomment', {
            'post_id': form.value.post_id,
            'body': form.value.body,
            'commentable_id': form.value.post_id,
            'commentable_type': form.value.type
      }, {headers: headers}).subscribe(
        (response) => 
        this.comments.unshift({
            id: response['id'],
            email:response['email'],
          author: response['author'],
          body: response['body'],
          commentable_id:response['commentable_id'],
          photo: response['photo']
        }),
        (error) => console.log(error)
      );
      form.reset();
      this.submitted = true;
      this.commentcount=this.commentcount+1;
  }
}
