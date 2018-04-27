import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../portfolio.service';
import { OrderPipe } from '../../order-pipe/ngx-order.pipe';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {
  order = 'proc';
  portfolioNames = [];
  portfolios: Array<any> = [];
  reverse: boolean = false;
  /**
   * Example: Use Order pipe in the component
   *
   * @param {OrderPipe} orderPipe
   */
  constructor(private orderPipe: OrderPipe, public portfolioService: PortfolioService) {
  	portfolioService.getPortfolioNames().subscribe(
  		res => {
  			this.portfolioNames = res['portfolio']; console.log(this.portfolioNames)
  			for(let item of this.portfolioNames) {
	  		console.log('asd');
	  		this.portfolioService.getPortfolioById(item.id)
	  		.subscribe(
	  			res => {if (res.length > 0) {this.portfolios[item.id] = res } console.log(this.portfolios) }
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
  	

  }

}
