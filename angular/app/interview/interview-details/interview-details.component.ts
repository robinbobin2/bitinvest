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
  workplace: string;
  name_credits: string;
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
export class Photos {
  id: number;
  file:string;
}
export class User {
  id:number;
  name: string;
  email:string;
  photo_id: number;
  role_id: number;
}
@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.scss']
})
export class InterviewDetailsComponent implements OnInit {
news: News;
comments: CommentRaw[] = [];
photos: Photos[] = [];
commentcount = 0;
user: User;
    rating_count: any;
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
    
}

  ngOnInit() {
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
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });



    let id = this.route.snapshot.params['id'];
    let path = "/interviewraw/"+id;
    const info = this.http.get(path);
      info.subscribe(response => {
        this.news = {
            id: response['news'][0]['id'],
          title: response['news'][0]['title'],
          desc: response['news'][0]['desc'],
          name_credits: response['news'][0]['name_credits'],
          workplace: response['news'][0]['workplace'],
          created_at:response['news'][0]['created_at'],
          // photo:response['news'][0]['photos']['file'],
          comments_count: response['comments_count'],
          // category: response['news'][0]['category'].name
        }
        this.commentcount = response['comments_count'];
          this.comments.push(...response['news'][0]['comments']);

          for(let item of response['news'][0]['comments']) {
              this.rating_count[item['id']] = 0;
              for (let rating_item of item.rating) {
                  if (rating_item.positive == 1) {
                      this.rating_count[item['id']] +=1;
                  } else {
                      this.rating_count[item['id']] -=1;
                  }
              }
          }
        for(let item of response['photos']) {
          this.photos.push({
            id: item['id'],
            file: item['file']
        })
        }

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
        (response) => this.comments.unshift({
            id: response['id'],
            email:response['email'],
          author: response['author'],
          body: response['body'],
          commentable_id:response['commentable_id'],
          photo: response['photo']
        }),
        
      );
    this.commentcount++;
  }

}
