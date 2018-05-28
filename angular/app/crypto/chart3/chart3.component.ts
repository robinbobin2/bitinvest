import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

declare const TradingView: any;
@Component({
    selector: 'app-chart3',
    templateUrl: './chart3.component.html',
    styleUrls: ['./chart3.component.scss']
})
export class Chart3Component implements OnInit {
    loadAPI: Promise<any>;
    constructor(private router:Router, private route:ActivatedRoute) { }

    ngOnInit() {
        let symbol = this.route.snapshot.params['sym'];

        setTimeout(()=>{
            new TradingView.MediumWidget(
                {
                    "container_id": "tv-medium-widget-3",
                    "symbols": [
                        [
                            symbol,
                            "COINBASE:"+symbol+"USD|1d"
                        ]
                    ],
                    "greyText": "Котировки предоставлены",
                    "gridLineColor": "#e9e9ea",
                    "fontColor": "#83888D",
                    "underLineColor": "rgba(242, 242, 242, 0.19)",
                    "trendLineColor": "rgba(255, 152, 0, 1)",
                    "width": "881px",
                    "height": "361px",
                    "locale": "ru",
                    "chartOnly": true
                }
            );
        },200);
    }

}
