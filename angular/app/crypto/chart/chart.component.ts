import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

declare const TradingView: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
loadAPI: Promise<any>;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    let symbol = this.route.snapshot.params['sym'];
    
  	setTimeout(()=>{
        new TradingView.MediumWidget(
            {
                "container_id": "tv-medium-widget",
                "symbols": [
                    [
                        "BTC (Bitcoin)",
                        "COINBASE:BTCUSD|1d"
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
