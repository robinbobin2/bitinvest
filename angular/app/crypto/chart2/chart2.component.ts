import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

declare const TradingView: any;
@Component({
    selector: 'app-chart2',
    templateUrl: './chart2.component.html',
    styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {
    loadAPI: Promise<any>;
    infoCrypto: any;
    data: any;
    constructor(private router:Router, private route:ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
        let symbol = this.route.snapshot.params['sym'];
        let infoCryptoPath = "/allcrypto/"+symbol;
        this.infoCrypto = this.http.get<any>(infoCryptoPath).publishReplay(1).refCount();
        this.infoCrypto.subscribe(response => {
            this.data = response;

            setTimeout(()=>{
            new TradingView.widget(
                {
                    "width": 881,
                    "height": 393,
                    "max-width": "100%",
                    "symbol": this.data.exchange+":"+symbol+"USD",
                    "interval": "D",
                    "timezone": "Etc/UTC",
                    "theme": "Light",
                    "style": "1",
                    "locale": "ru",
                    "toolbar_bg": "#f1f3f6",
                    "enable_publishing": false,
                    "allow_symbol_change": true,
                    "container_id": "tradingview_4e1cc"
                }
            );
        },200);
        });


    }

}
