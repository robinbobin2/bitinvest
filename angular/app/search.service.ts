import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
    miningBaseUrl: string = '/miningraw/search';
    icoBaseUrl: string = '/icoraw/search';
    cryptoBaseUrl: string = '/cryptoraw/search';
    stockBaseUrl: string = '/stockraw/search';
  queryUrl: string = '?search=';
  mainUrl: string = '/angular/search';
  mainQueryUrl: string = '?q=';

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>, type) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term, type));
  }
  mainSearch(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.mainSearchEntries(term));
  }

  searchEntries(term,type) {
      if (type == 1) {
          return this.http
              .get(this.miningBaseUrl + this.queryUrl + term);
      }
      if (type == 2) {
          return this.http
              .get(this.icoBaseUrl + this.queryUrl + term);
      }
      if (type == 3) {
          return this.http
              .get(this.cryptoBaseUrl + this.queryUrl + term);
      }
      if (type == 4) {
          return this.http
              .get(this.stockBaseUrl + this.queryUrl + term);
      }
  }
  mainSearchEntries(term) {
    return this.http
        .get(this.mainUrl + this.mainQueryUrl + term);
  }
}