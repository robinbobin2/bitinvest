import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BannerService {

  constructor(private http:HttpClient) {

  }


  getBannersById(pageId) {
      return this.http.get(' ebfb'+pageId)
  }

}
