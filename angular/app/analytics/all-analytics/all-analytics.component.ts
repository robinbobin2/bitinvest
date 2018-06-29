import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

import { OrderPipe } from '../../order-pipe/ngx-order.pipe';

@Component({
    selector: 'app-all-analytics',
    templateUrl: './all-analytics.component.html',
    styleUrls: ['./all-analytics.component.scss']
})
export class AllAnalyticsComponent implements OnInit {
    news_raw: any[];
    news= [];
    main_news = [];
    info: any;
    countAll: any;
    order: string = 'id';
    reverse: boolean = false;
    /**
     * @param {OrderPipe}
     */
    constructor(private orderPipe: OrderPipe, private http:HttpClient, private route:ActivatedRoute) {
        let path = "/analyticsraw";
        this.info = http.get(path);



    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.order = params['order'];
            this.reverse = params['reverse'];
            if (this.order == undefined) {
                this.order = 'position'
            }
            if (this.reverse == undefined) {
                this.reverse = false
            }
        });
        this.info.map(response => {
            this.news = response['news'];
            this.main_news = response['main_news'];
            this.countAll = this.news.length+this.main_news.length;
        }).subscribe()
    }

    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
        console.log(this.order);
    }
}
