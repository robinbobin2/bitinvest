import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';

export class NewsRaw {
	id: number;
    name:string;
    depo: number;
    proc: number;
    status: number;
    recieved: string;
    logo: string;
    desc: string;
    depo_date: number;
    start: string;
    website: string;
    lang: string;
    ref: number;
    ref_about: string;
    latest_date: number;
    percentage: string;
    start_days: number;
}
export class User {
  id:number;
  name: string;
  email:string;
  photo_id: number;
  role_id: number;
}
export class History {
	id: number;
	price: number;
	type:number;
	comment: string;
	datetime: string;
}
export class CommentRaw {
  id: number;
  author: string;
  body: string;
  email: string;
  commentable_id:number;
  photo:string;
  created_at: string;
}
@Component({
  selector: 'app-cloud-mining-detail',
  templateUrl: './cloud-mining-detail.component.html',
  styleUrls: ['./cloud-mining-detail.component.scss']
})
export class CloudMiningDetailComponent implements OnInit {
private fragment: string;
news: NewsRaw;
comments: CommentRaw[] = [];
histories: Array<History>=[];
commentcount = 0;
submitted = false;
user: User;

 constructor(private orderPipe: OrderPipe, private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
    let id = route.snapshot.params['id'];
    let path = "/miningraw/"+id;

    const info = http.get(path);

  		info.subscribe(response => {

  			// console.log(response['news']);
  			this.news = {
						id: response['news'].id,
					    name:response['news'].name,
					    depo: response['news'].depo,
					    proc: response['news'].proc,
					    status: response['news'].status,
					    recieved: response['news'].recieved,
					    logo: response['news'].logo,
					    desc: response['news'].desc,
					    depo_date: response['news'].depo_date,
					    start: response['news'].start,
					    website: response['news'].website,
					    lang: response['news'].lang,
					    ref: response['news'].ref,
					    ref_about: response['news'].ref_about,
					    latest_date: response['news'].latest_date,
					    percentage: response['news'].percentage,
					    start_days: response['news'].start_days,
					};

  			console.log(response['news']['history']);
  			for(let item of response['news'].history) {
  				this.histories.push({
					id: item.id,
					price: item.price,
					type:item.type,
					comment: item.comment,
					datetime: item.datetime,
  				});
  			}
  			if(response['news'].comments.length > 0) {
  				for(let item of response['news'].comments) {
		          this.comments.push({
		            id: item['id'],
		            email:item['email'],
		            author: item['author'],
		            body: item['body'],
		            commentable_id:item['commentable_id'],
		            photo: item['photo'],
		            created_at: item['created_at']
		        });
		          this.commentcount=this.commentcount+1;
		        }
  				// this.commentcount = response['comments'].length;
  			} 
  			
        
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
  submitComment(form: NgForm, post_id, type) {
    const headers = new HttpHeaders({'Content-type': 'Application/json '});
    this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
      }, {headers: headers}).subscribe(
        (response) => 
        this.comments.unshift({
            id: response['id'],
            email:response['email'],
          author: response['author'],
          body: response['body'],
          commentable_id:response['commentable_id'],
          photo: response['photo'],
          created_at: response['created_at']
        }),
        (error) => console.log(error)
      );
      form.reset();
      this.submitted = true;
      this.commentcount=this.commentcount+1;
    // console.log(post_id + " " + form.value.body + " " + type); 
  }

 goBack() {
 	this.router.navigateByUrl('/mining/all');
 }

  }