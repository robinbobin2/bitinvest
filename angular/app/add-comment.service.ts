import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
export class CommentRaw {
  id: number;
  author: string;
  body: string;
  email: string;
  commentable_id:number;
  photo:string;
}
@Injectable()
export class AddCommentService {
  constructor(private http:HttpClient) { }
comment:any;
submitComment(form: NgForm) : Observable<CommentRaw> {
    const headers = new HttpHeaders({'Content-type': 'Application/json '});
    this.http.post('/storecomment', {
            'post_id': form.value.post_id,
            'body': form.value.body,
            'commentable_id': form.value.post_id,
            'commentable_type': form.value.type
     	}, {headers: headers}).map(response => {
	    	this.comment = response;
	   	});
	   	return this.comment;
      // this.submitted = true;
      // this.commentcount=this.commentcount+1;
  }
}
