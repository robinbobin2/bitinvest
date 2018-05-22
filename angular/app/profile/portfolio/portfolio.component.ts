import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../portfolio.service';
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';
import { SearchService } from '../../search.service';
import { Subject } from 'rxjs/Subject';
import {StocksService} from "../../stocks.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [PortfolioService, SearchService, StocksService]
})
export class PortfolioComponent implements OnInit {
  order = 'proc';
  portfolioNames = [];
  portfolios: Array<any> = [];
  reverse: boolean = false;
  results: Object;
  searchTerm$ = new Subject<string>();
  searchLine = '';
  result_id = 0;
  dataUsd = [];
  /**
   * Example: Use Order pipe in the component
   *
   * @param {OrderPipe} orderPipe
   */
  constructor(private orderPipe: OrderPipe, 
    private portfolioService: PortfolioService, 
    private searchService: SearchService,
    private stockService: StocksService) 
  {
    this.searchService.mainSearch(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
        console.log(results);
      });
  	
  	
   }
   getPorts(type, type_id) {
     this.portfolioService.getPortfolioNames().subscribe(
      res => {
        this.portfolioNames = res['portfolio'];
        console.log(this.portfolioNames)
        for(let item of this.portfolioNames) {
            if (item.user_portfolio_type_id == type_id) {


                this.portfolioService.getPortfolioById(item.id)
                    .subscribe(
                        res => {

                            if (res[type].length > 0) {
                                this.portfolios[item.id] = res[type]
                                this.portfolios[item.id].type = type
                            }
                            
                            
                            if(type == 3) {
                                   
                                   this.stockService.getCrypto().subscribe(crypto=>{
                                       
                                       this.dataUsd = crypto
                                       
                                       for (let portfolioItem of this.portfolios[item.id]) {
                                           portfolioItem.last = crypto[portfolioItem['symbol']+'/USD']['last'];
                                           portfolioItem.now = crypto[portfolioItem['symbol']+'/USD']['now'];
                                           portfolioItem.min = crypto[portfolioItem['symbol']+'/USD']['min'];
                                           portfolioItem.max = crypto[portfolioItem['symbol']+'/USD']['max'];
                                           portfolioItem.volume = crypto[portfolioItem['symbol']+'/USD']['volume'];
                                           portfolioItem.day = crypto[portfolioItem['symbol']+"/USD"]['day'];
                                           portfolioItem.week = crypto[portfolioItem['symbol']+"/USD"]['week'];
                                           portfolioItem.marketCapUsd = crypto[portfolioItem['symbol']+"/USD"]['marketCapUsd'];
                                       }

                                       console.log(crypto)
                                       console.log(this.portfolios[item.id])

                                   })
                               
                                
                            }
                            
                            
                        }
                        
                        
                        
                        
                    )


            }
        }
      }
    );
   }
   setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
   }
   onDelete(id, index) {
   	this.portfolioService.deletePortfolioCat(id).subscribe(
   		res => {
					if (index > -1) {
					  this.portfolioNames.splice(index, 1);
					}
					}
   	)
   }
   onAdd(port_id, id) {
     this.portfolioService.submitPortfolio(port_id,id,'App\\CloudMining').subscribe(
       result => {
         this.portfolioService.getPortfolioById(port_id)
        .subscribe(
          res => {if (res.length > 0) {this.portfolios[port_id] = res; console.log(res) } }
        );
        console.log(result);
       }
     )
   }
   onRemove(itemid, id, index) {
   	this.portfolioService.removePortfolio(id).subscribe(

   		res => {
   			if (index > -1) {
				this.portfolios[itemid].splice(index, 1);
			}
   		}

   	)
   }
  ngOnInit() {
  	
  this.getPorts('mining', 1);
  this.getPorts('ico', 2);
  this.getPorts('crypto', 3);
  this.getPorts('stocks', 4);
  }

}
