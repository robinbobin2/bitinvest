import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../portfolio.service';
import {OrderPipe} from '../../order-pipe/ngx-order.pipe';
import {SearchService} from '../../search.service';
import {Subject} from 'rxjs/Subject';
import {StocksService} from "../../stocks.service";
import {CloudMiningService} from "../../cloud-mining.service";

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    providers: [PortfolioService, SearchService, StocksService, CloudMiningService]
})
export class PortfolioComponent implements OnInit {
    order = 'proc';
    portfolioNames = [];
    portfolios = [];
    reverse: boolean = false;
    results: Object;
    searchTerm$ = new Subject<string>();
    searchLine = '';
    result_id = 0;
    dataUsd = [];
    diff = [];
    volumes = [];
    exchange_volumes = [];

    mining_form = false;
    ico_form = false;
    crypto_form = false;
    stock_form = false;
    type = 1;
    loading = false;

    /**
     * Example: Use Order pipe in the component
     *
     * @param {OrderPipe} orderPipe
     */
    constructor(private orderPipe: OrderPipe,
                private portfolioService: PortfolioService,
                private searchService: SearchService,
                private stockService: StocksService,
                private miningService: CloudMiningService) {


    }

    onSearch(type) {
        this.searchService.search(this.searchTerm$, type)
            .subscribe(results => {
                this.results = results;
                console.log(results);
            });
    }

    openForm(type) {
        if (type == 1) {
            this.mining_form = !this.mining_form
        }
        if (type == 2) {
            this.ico_form = !this.ico_form
        }
        if (type == 3) {
            this.crypto_form = !this.crypto_form
        }
        if (type == 4) {
            this.stock_form = !this.stock_form
        }
    }

    getPorts(type, type_id) {
        this.portfolioService.getPortfolioNames().subscribe(
            res => {
                this.portfolioNames = res['portfolio'];
                for (let item of this.portfolioNames) {
                    if (item.user_portfolio_type_id == type_id) {
                    if (item.user_portfolio_type_id == 3) {
                        this.loading = true;
                    }

                        this.portfolioService.getPortfolioById(item.id)
                            .subscribe(
                                res => {

                                    if (res[type].length > 0) {
                                        this.portfolios[item.id] = res[type];
                                        this.portfolios[item.id].type = type
                                    }

                                    if (type_id == 4) {
                                        if (item.length > 0) {
                                            this.stockService.getVolumes().subscribe(res => {
                                                for (let resItem of res) {
                                                    this.volumes[resItem.name] = {
                                                        'btc': resItem.btc,
                                                        'usd': resItem.usd
                                                    }
                                                }
                                            });
                                        }
                                    }

                                    if (item.user_portfolio_type_id == 3) {
                                        if (item.length > 0) {
                                            this.stockService.getCrypto().subscribe(crypto => {

                                                this.dataUsd = crypto;

                                                for (let portfolioItem of this.portfolios[item.id]) {
                                                    portfolioItem.last = crypto[portfolioItem['symbol'] + '/USD']['last'];
                                                    portfolioItem.now = crypto[portfolioItem['symbol'] + '/USD']['now'];
                                                    portfolioItem.min = crypto[portfolioItem['symbol'] + '/USD']['min'];
                                                    portfolioItem.max = crypto[portfolioItem['symbol'] + '/USD']['max'];
                                                    portfolioItem.volume = crypto[portfolioItem['symbol'] + '/USD']['volume'];
                                                    portfolioItem.day = crypto[portfolioItem['symbol'] + "/USD"]['day'];
                                                    portfolioItem.week = crypto[portfolioItem['symbol'] + "/USD"]['week'];
                                                    portfolioItem.month = crypto[portfolioItem['symbol'] + "/USD"]['month'];
                                                    portfolioItem.marketCapUsd = crypto[portfolioItem['symbol'] + "/USD"]['marketCapUsd'];

                                                    this.diff[item.id] = portfolioItem.now - portfolioItem.last;

                                                    this.miningService.getCryptoId(portfolioItem.symbol).subscribe((res) => {
                                                            portfolioItem.id = res['id'];

                                                        }
                                                    )
                                                }

                                            });
                                        } else {
                                            this.loading = false;
                                        }


                                    }

                                    if (type_id == 1) {
                                        if (item.length > 0) {
                                            for (let portfolioItem of this.portfolios[item.id]) {
                                                this.miningService.getMiningId(portfolioItem.id).subscribe(
                                                    res => {
                                                        portfolioItem['percentage'] = res['news']['percentage'];
                                                    }
                                                )
                                            }
                                        }
                                    }
                                    if (type_id == 2) {
                                        if (item.length > 0) {
                                            for (let portfolioItem of this.portfolios[item.id]) {
                                                this.miningService.getIcoId(portfolioItem.id).subscribe(
                                                    res => {

                                                        portfolioItem = res['news'];

                                                    }
                                                )
                                            }
                                        }
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

    onAdd(port_id, id, type, type_view) {
        this.portfolioService.submitPortfolio(port_id, id, type).subscribe(
            result => {
                console.log(result);
                this.portfolioService.getPortfolioById(port_id)
                    .subscribe(
                        res => {
                            if (res[type_view].length > 0) {
                                this.portfolios[port_id] = res[type_view];
                            }

                        }
                    );
            }
        )
    }

    onRemove(itemid, id, index, type) {

        this.portfolioService.removePortfolio(id, type, itemid).subscribe(
            res => {
                if (index > -1) {
                    console.log(res);
                    this.portfolios[itemid].splice(index, 1);
                }
            }
        )

    }

    isNegative(now) {
        if (now >= 0) {
            return false;
        }
        return true;
    }

    isNegativeMath(now, last) {
        if ((parseInt(now) - parseInt(last)) >= 0) {
            return false;
        }
        return true;
    }

    comparePrice(now, last) {
        if (parseInt(now) > parseInt(last)) {
            return true;
        }
        return false;
    }

    countPercent(now, last) {
        return (now - last) / (now + last) * 100;
    }

    isNegativePercent(now, last) {
        if (((parseInt(now) - parseInt(last)) / ((parseInt(now) + parseInt(last)) / 2) * 100) >= 0) {
            return false;
        }
        return true;
    }

    ngOnInit() {

        this.getPorts('mining', 1);
        this.getPorts('ico', 2);
        this.getPorts('crypto', 3);
        this.getPorts('stocks', 4);
    }

}
