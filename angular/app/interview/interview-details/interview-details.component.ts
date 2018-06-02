import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CommentsService} from "../../comments.service";
import {CloudMiningService} from "../../cloud-mining.service";

export class News {
  id: number;
  title: string;
  desc: string;
  created_at:string;
  workplace: string;
  name_credits: string;
  comments_count: number;
  view_count: number;

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
  styleUrls: ['./interview-details.component.scss'],
    providers: [CommentsService, CloudMiningService]
})
export class InterviewDetailsComponent implements OnInit, AfterViewInit {
news: News;
comments: CommentRaw[] = [];
photos: Photos[] = [];
commentcount = 0;
id = 0;
user: User;
    rating_count: any[]=[];
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute,
              private commentService: CommentsService, private viewService: CloudMiningService) {
      this.id = this.route.snapshot.params['id'];
}
 ngAfterViewInit() {



     let path = "/interviewraw/"+this.id;

     const info = this.http.get(path);

     info.subscribe(response => {
         console.log(response['news'][0]['desc'])
         this.news = {
             id: response['news'][0]['id'],
             title: response['news'][0]['title'],
             desc: response['news'][0]['desc'],
             view_count: response['news'][0]['view_count'],
             name_credits: response['news'][0]['name_credits'],
             workplace: response['news'][0]['workplace'],
             created_at:response['news'][0]['created_at'],
             comments_count: response['comments_count'],
         }
         this.commentcount = response['comments_count'];
         this.comments.push(...response['news'][0]['comments']);

         for(let item of response['news'][0]['comments']) {
             this.rating_count[item['id']] = 0;
             // for (let rating_item of item.rating) {
             //     if (rating_item.positive == 1) {
             //         this.rating_count[item['id']] +=1;
             //     } else {
             //         this.rating_count[item['id']] -=1;
             //     }
             // }
         }
         this.photos.push(...response['photos'])

     });
 }
  ngOnInit() {
      this.viewService.incrementView('interview', this.id).subscribe()
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




  }
  comment = { 
    'post_id': '',
    'body': '',
    'commentable_id': '',
    'commentable_type': ''
  }
  // @ViewChild('f') Form:NgForm;
    onVote(comment_id, positive) {
        this.commentService.addVote(comment_id,positive).subscribe(
            res =>
            {
                console.log(res) ;
                if(res['error']) {
                    // code...
                } else {
                    if (positive == 1) {
                        this.rating_count[comment_id] += 1;
                    } else {
                        this.rating_count[comment_id] -= 1;

                    }
                }
            },
            error => console.log(error)
        );
    }
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
