import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../portfolio.service';
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';
import { SearchService } from '../../search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [PortfolioService, SearchService]
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
  /**
   * Example: Use Order pipe in the component
   *
   * @param {OrderPipe} orderPipe
   */
  constructor(private orderPipe: OrderPipe, 
    private portfolioService: PortfolioService, 
    private searchService: SearchService) 
  {
    this.searchService.mainSearch(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
        console.log(results);
      });
  	
  	
   }
   getPorts(type) {
     this.portfolioService.getPortfolioNames().subscribe(
      res => {
        this.portfolioNames = res['portfolio']; console.log(this.portfolioNames)
        for(let item of this.portfolioNames) {
        console.log('asd');
        this.portfolioService.getPortfolioById(item.id)
        .subscribe(
          res => {if (res[type].length > 0) {this.portfolios[item.id] = res[type] } 
          console.log(res)
          console.log(this.portfolios)

           }
        )
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
  	
  this.getPorts('mining');
  this.getPorts('ico');
  this.getPorts('crypto');
  }

}
