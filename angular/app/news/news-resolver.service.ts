import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class NewsResolverService implements Resolve<any> {
    news_raw: any[];
    news= [];
    main_news= [];
    countAll = 0;
    info: any;
    return_any: any;
    constructor(private http:HttpClient) {




    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {


    }
}