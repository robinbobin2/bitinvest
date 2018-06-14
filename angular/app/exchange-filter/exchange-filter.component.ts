import { Component, OnInit } from '@angular/core';
import {StocksService} from "../stocks.service";

@Component({
  selector: 'app-exchange-filter',
  templateUrl: './exchange-filter.component.html',
  styleUrls: ['./exchange-filter.component.scss'],
    providers:[StocksService]
})
export class ExchangeFilterComponent implements OnInit {
    exchanges=[];
    yearFilterArray;
    languageFilterArray;
    countryFilterArray;
    country = '';
    age = '';
    language = '';
  constructor(private stockService:StocksService) { }

  ngOnInit() {
      this.stockService.getExchanges().subscribe((res: Array<any>) => {
          this.exchanges = res;

          this.yearFilterArray = [...Array.from(new Set(this.exchanges.map(item => item.year)))]
          this.languageFilterArray = [...Array.from(new Set(this.exchanges.map(item => item.languages)))]
          this.countryFilterArray = [...Array.from(new Set(this.exchanges.map(item => item.country)))]
      });

  }

}
