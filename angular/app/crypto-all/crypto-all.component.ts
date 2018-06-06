import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StocksService} from '../stocks.service';
import {OrderPipe} from '../order-pipe/ngx-order.pipe';
import {PortfolioService} from "../portfolio.service";
import {AuthService} from "../auth.service";
import {NgForm} from '@angular/forms';


export class Cripto {
    id: number;
    name: string;
    symbol: string;
    year: number;
    desc: string;
    algo: string;
    logo: string
}


const headers = new HttpHeaders({'Content-type': 'Application/json '});
declare var $:any;
@Component({
    selector: 'app-crypto-all',
    templateUrl: './crypto-all.component.html',
    styleUrls: ['./crypto-all.component.scss'],
    providers: [PortfolioService],
})

export class CryptoAllComponent implements OnInit, OnDestroy {
    public object: Object;
    load: boolean = true;

    dataUsd = [];
    order = 'now';
    data: any;
    resp: any;
    cryptoData: any;
    first_time: boolean = true;
    reverse: boolean = true;
    animtype = [];
    algoFilter = [];
    yearFilter = [];
    diff: Array<number> = [];
    selectedItem = [];
    active = 0;
    inactive = 0;
    portfoliosInfo = [];
    addPortfolio: any;
    show = false;
    portfolioInfo: any;
    getUserPortfolio = [];
    algorithm = ''
    age = ''
    /**
     * Example: Use Order pipe in the component
     *
     * @param {OrderPipe} orderPipe
     */
    constructor(
                private orderPipe: OrderPipe,
                private http: HttpClient,
                private router: Router,
                private route: ActivatedRoute,
                private StockService: StocksService,
                private portfolioService: PortfolioService,
                private authService: AuthService
    ) {


    }

    removePortfolio(id) {
        this.portfolioService.removePortfolio(id, 'App\\CryptoStat', 0).subscribe(() => {
            this.portfolioInfo.subscribe(res => {
                if (res['error']) {
                    // code...
                } else {
                    this.portfoliosInfo = res['crypto'];
                }
            });
            this.checkInPortfolio(id);
            setTimeout(()=> {
                $.getScript('/js/script.js');
            }, 300)
        })
    }

    submitPortfolio(post_id, type) {

        this.http.post('/storeportfolio', {
                'user_portfollable_id': post_id,
                'user_portfolio_id': this.addPortfolio,
                'user_portfollable_type': type
            },
            {headers: headers}).subscribe(
            () => this.router.navigate(['/profile/portfolio']),
            (error) => console.log(error)
        );
    }

    checkInPortfolio(id) {
        if (this.portfoliosInfo == undefined) {
            return false;
        }

        for (let item of this.portfoliosInfo) {
            for (let it of item) {
                if (it.id) {

                    if (it.id == id) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    checkAuth() {
        if (this.authService.getUserInfo()) {
            return true;
        }
        return (false);

    }

    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }

        this.order = value;
    }

    ngOnInit() {
        console.log('etet');
        let portfolioUrl = '/angular/userportfolio';
        this.portfolioInfo = this.http.get<any>(portfolioUrl);
        this.portfolioInfo.subscribe(
            response => {
                if (response['error']) {
                    // code...
                } else {
                    this.portfoliosInfo = response['crypto'];
                    console.log(this.portfoliosInfo);
                }
            },
        );
        this.authService.getUser().subscribe(
            response => {
                if (response['portfolio']) {
                    for (let item of response['portfolio']) {
                        if (item.user_portfolio_type_id == 3) {
                            this.getUserPortfolio.push(item)
                        }
                    }
                }
            }
        );

            const alldata = this.http.get<Array<Cripto>>('/allcrypto');
            if (localStorage.getItem('data')) {
                this.dataUsd = JSON.parse(localStorage.getItem('data'));
                this.load = false;
            }
            alldata.subscribe(response => {
                let admin = response;
                this.StockService.getCryptoVol().debounceTime(10000).subscribe(volumes => {
                this.cryptoData = Observable.interval(5000).concatMap(() => this.StockService.bit$)
                    .subscribe(resp => {
                        this.resp = resp;

                        // console.log(this.resp)
                        this.algoFilter = [...Array.from(new Set(admin.map(item => item.algo)))]
                        this.yearFilter = [...Array.from(new Set(admin.map(item => item.year)))]

                            for (var _i = 0; _i < admin.length; ++_i) {

                                // console.log(this.admin[i].symbol);
                                let index = _i;


                                let symbol = admin[index].symbol;
                                let year = admin[index].year;
                                let algo = admin[index].algo;
                                let logo = admin[index].logo;
                                let id = admin[index].id;



                                    if (this.dataUsd[index]) {

                                        if (this.resp[symbol + '/USD']) {

                                            if (this.dataUsd[index].now != this.resp[symbol + '/USD']['now']) {
                                                this.first_time = false;

                                                if (this.dataUsd[index].now > this.resp[symbol + '/USD']['now']) {
                                                    this.diff[index] = 0
                                                    this.diff[index] = this.resp[symbol + '/USD']['now'] - this.dataUsd[index].now;
                                                    this.animtype[index] = '';
                                                    this.animtype[index] = 'redbg';
                                                } else {
                                                    this.animtype[index] = '';
                                                    this.animtype[index] = 'greenbg';

                                                }
                                            }
                                        }
                                        this.dataUsd[index].sym = symbol;
                                        this.dataUsd[index].algo = algo;
                                        this.dataUsd[index].year = year;
                                        if (this.resp[symbol + '/USD']) {

                                            this.dataUsd[index].last = this.resp[symbol + '/USD']['last'];
                                            this.dataUsd[index].now = this.resp[symbol + '/USD']['now'];
                                            this.dataUsd[index].min = this.resp[symbol + '/USD']['min'];
                                            this.dataUsd[index].max = this.resp[symbol + '/USD']['max'];
                                            this.dataUsd[index].volume = this.resp[symbol + '/USD']['volume'];
                                            this.dataUsd[index].day = this.resp[symbol + "/USD"]['day'];
                                            this.dataUsd[index].week = this.resp[symbol + "/USD"]['week'];
                                            this.dataUsd[index].marketCapUsd = this.resp[symbol + "/USD"]['marketCapUsd'];
                                            this.dataUsd[index].logo = logo;
                                            this.dataUsd[index].percentDay = this.countPercent(this.dataUsd[index].now, this.dataUsd[index].day)
                                            this.dataUsd[index].percentWeek = this.countPercent(this.dataUsd[index].now, this.dataUsd[index].week)
                                        }
                                    } else {
                                        if (this.resp[symbol + '/USD']) {
                                            this.dataUsd[index] = {
                                                id: id,
                                                name: name,
                                                sym: symbol,
                                                last: this.resp[symbol + '/USD']['last'],
                                                now: this.resp[symbol + '/USD']['now'],
                                                min: this.resp[symbol + '/USD']['min'],
                                                max: this.resp[symbol + '/USD']['max'],
                                                volume: this.resp[symbol + '/USD']['volume'],
                                                year: year,
                                                algo: algo,
                                                week: this.resp[symbol + "/USD"]['week'],
                                                day: this.resp[symbol + "/USD"]['day'],
                                                marketCapUsd: this.resp[symbol + "/USD"]['marketCapUsd'],
                                                percentDay: 0,
                                                percentWeek: 0,
                                                currencyVol: 0
                                            }
                                        }
                                    }

                                this.load = false;
                                localStorage.removeItem('data');
                                localStorage.setItem('data', JSON.stringify(this.dataUsd))


                                for (let it of volumes) {
                                    if (it.currency == symbol + '/USD') {
                                        this.dataUsd[index].currencyVol = it.volume
                                    }
                                }


                            }
                        })

                    });

            });


    }

    isNegative(now) {
        if (now >= 0) {
            return false;
        }
        return true;
    }

    countPercent(now, last) {
        return (now - last) / (now + last) * 100;
    }

    isNegativePercent(now, last) {
        if (((now - last) / ((now + last) / 2) * 100) >= 0) {
            return false;
        }
        return true;
    }

    isNegativeMath(now, last) {
        this.object = "{'background': 'white'}";
        if (this.first_time == false) {

            if ((parseInt(now) - parseInt(last)) >= 0) {
                this.object = "{ 'background': 'white', 'animation': 'greenbg 2s', '-webkit-animation': 'greenbg 2s'  }";

            } else if (parseInt(now) - parseInt(last) == 0) {
            } else {
                this.object = "{ 'background': 'white', 'animation': 'redbg 2s', '-webkit-animation': 'redbg 2s'  }";
            }
        }
        return this.object;
    }

    createPortfolio(form: NgForm) {
        const headers = new HttpHeaders({'Content-type': 'Application/json '});

        this.http.post('/angular/userportfolio/create', {
            'name': form.value.name,
            'user_portfolio_type_id': 3
        }, {headers: headers})
            .subscribe(
                response => {
                    this.getUserPortfolio.push(response);
                    form.reset()
                },
                error => console.log(error)
            )

    }

    ngOnDestroy() {

        // this.data.unsubscribe();
        if (this.cryptoData) {
            this.cryptoData.unsubscribe();
        }

    }

}
