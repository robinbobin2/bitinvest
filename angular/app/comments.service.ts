import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CommentsService {
  headers = new HttpHeaders({'Content-type': 'Application/json '});
  constructor(private http: HttpClient) { }

  addVote(comment_id, positive) {
    return this.http.post('angular/vote', {
        'comment_id': comment_id,
        'positive': positive
    }, {headers: this.headers});
  }
}
