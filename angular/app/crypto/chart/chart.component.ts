import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

declare const TradingView: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
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
              new TradingView.MediumWidget(
                  {
                      "container_id": "tv-medium-widget",
                      "symbols": [
                          [
                              symbol,
                              this.data.exchange+":"+symbol+"USD|1d"
                          ]
                      ],
                      "greyText": "Котировки предоставлены",
                      "gridLineColor": "#e9e9ea",
                      "fontColor": "#83888D",
                      "underLineColor": "rgba(242, 242, 242, 0.19)",
                      "trendLineColor": "rgba(255, 152, 0, 1)",
                      "width": "881px",
                      "max-width": "100%",
                      "height": "361px",
                      "locale": "ru",
                      "chartOnly": true
                  }
              );
          },200);
      });
    

  }

}
