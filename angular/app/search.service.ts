import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  baseUrl: string = '/miningraw/search';
  queryUrl: string = '?search=';
  mainUrl: string = '/angular/search';
  mainQueryUrl: string = '?q=';

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }
  mainSearch(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.mainSearchEntries(term));
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term);
  }
  mainSearchEntries(term) {
    return this.http
        .get(this.mainUrl + this.mainQueryUrl + term);
  }
}