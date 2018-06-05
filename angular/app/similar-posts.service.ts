import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SimilarPostsService {

    constructor(private http:HttpClient) { }

    getSimilarPosts(id, type) {

        return this.http.get(type+'/'+id)
    }

}
