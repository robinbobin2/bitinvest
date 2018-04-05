import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';


export class DataUsd {
  id: any;
  name: any;
  symbol: any;
  rank: any;
  price_usd: any;
  price_btc: any;
  h24_volume_usd: any;
  market_cap_usd: any;
  available_supply: any;
  total_supply:any;
  max_supply:any;
  percent_change_1h:any;
  percent_change_24h:any;
  percent_change_7d:any;
  last_updated:any;

}
export class DataMarket {
	id: any;
	name: any;
	price_usd: any;

}
// var h: string;
@Component({
  selector: 'app-cmc',
  templateUrl: './cmc.component.html',
  styleUrls: ['./cmc.component.css']
})
export class CmcComponent implements OnInit {

	dataUsd: DataUsd;
	dataMarket: Array <DataMarket> = [];

  constructor(private http:HttpClient) {
  	var item;
  	const info = http.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/");
  	const market = http.get<DataMarket[]>("https://api.coinmarketcap.com/v1/ticker/?limit=100");
  	market.subscribe(response => {
        console.log('asd');
  			console.log(response);
			for(let item of response) {
				// console.log(item);
				this.dataMarket.push ( {
					id: item.id,
					name: item.name,
					price_usd:item.price_usd
				});
				
  			}
        console.log(this.dataMarket);
 
  		});



  		info.subscribe(response => {
  			// console.log(response[0]);
  			// console.log(h);
  			this.dataUsd = {
  				  id: response[0].id,
				  name: response[0].name,
				  symbol: response[0].symbol,
				  rank: response[0].rank,
				  price_usd: response[0].price_usd,
				  price_btc: response[0].price_btc,
				  h24_volume_usd: response[0]['24h_volume_usd'],
				  market_cap_usd: response[0].market_cap_usd,
				  available_supply: response[0].available_supply,
				  total_supply:response[0].total_supply,
				  max_supply:response[0].max_supply,
				  percent_change_1h:response[0].percent_change_1h,
				  percent_change_24h:response[0].percent_change_24h,
				  percent_change_7d:response[0].percent_change_7d,
				  last_updated:response[0].last_updated
  			}
  			console.log(this.dataUsd);
  		});
  	Observable.interval(2000).subscribe(wait => {
  		info.subscribe(response => {
  			// console.log(response[0].id);
  			this.dataUsd = {
  				  id: response[0].id,
				  name: response[0].name,
				  symbol: response[0].symbol,
				  rank: response[0].rank,
				  price_usd: response[0].price_usd,
				  price_btc: response[0].price_btc,
				  h24_volume_usd: response[0]['24h_volume_usd'],
				  market_cap_usd: response[0].market_cap_usd,
				  available_supply: response[0].available_supply,
				  total_supply:response[0].total_supply,
				  max_supply:response[0].max_supply,
				  percent_change_1h:response[0].percent_change_1h,
				  percent_change_24h:response[0].percent_change_24h,
				  percent_change_7d:response[0].percent_change_7d,
				  last_updated:response[0].last_updated
  			}

  	});
	


  });


   }

  ngOnInit() {
  }

}
