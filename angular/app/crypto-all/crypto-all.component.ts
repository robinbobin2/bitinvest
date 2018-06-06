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
    age = '';
    algorithm = '';

    /**
     * Example: Use Order pipe in the component
     *
     * @param {OrderPipe} orderPipe
     */
    constructor(private orderPipe: OrderPipe,
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
                for (let item of response['portfolio']) {
                    if (item.user_portfolio_type_id == 3) {
                        this.getUserPortfolio.push(item)
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
