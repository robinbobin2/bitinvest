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
        let path = "/newsraw"
        this.info = http.get(path)



    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.info.subscribe(response => {
            this.news = response['news'];

            this.main_news = response['main_news'];
            this.countAll = this.news.length+this.main_news.length;

            this.return_any = {
                'main_news': this.main_news,
                'news': this.news,
                'countAll': this.countAll
            };
        })

    }
}