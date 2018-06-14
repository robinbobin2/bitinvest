import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Categories {
    id: number;
    name: string;
    count: number;

}
@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss']
})

export class ReviewComponent implements OnInit {

    categories: Categories[] = [];
    constructor(private http:HttpClient) {
        let path = "/categoriesraw/4";
        const info = http.get(path);
        info.subscribe(response => {
            for ( let item of response['cats']) {
                if(item['count'] > 0) {
                    this.categories.push({
                        id: item['id'],
                        name:item['name'],
                        count: item['count']
                    });
                }

            }

        });
    }

    ngOnInit() {

    }


}
