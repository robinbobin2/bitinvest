import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

export class DataRub {
  price: any;
  lastupdate: any;
  mktcap: any;
  vol24hours: any;
  open24hours: any;
  low24hours: any;
  high24hours: any;
  lasttrade: any;

}

export class DataUsd {
  price: any;
  lastupdate: any;
  mktcap: any;
  vol24hours: any;
  open24hours: any;
  low24hours: any;
  high24hours: any;
  lasttrade: any;

}
export class DataEur {
  price: any;
  lastupdate: any;
  mktcap: any;
  vol24hours: any;
  open24hours: any;
  low24hours: any;
  high24hours: any;
  lasttrade: any;

}
var dataRub;
var dataEur;
var dataUsd;


@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  dataRub: DataRub;
  dataUsd: DataUsd;
  dataEur: DataEur;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { 
    let symbol = route.snapshot.params['sym'];
    let path = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+symbol+"&tsyms=RUB,USD,EUR";
  	const info = http.get(path);
  		info.subscribe(response => {
		var data = response['DISPLAY'][symbol];
    var eur_data = response['DISPLAY'][symbol]['EUR'];
    var usd_data = response['DISPLAY'][symbol]['USD'];
    var rub_data = response['DISPLAY'][symbol]['RUB'];
    this.dataRub ={
                   price: rub_data.PRICE,
          lastupdate: rub_data.LASTUPDATE,
          mktcap: rub_data.MKTCAP,
          vol24hours: rub_data.VOLUME24HOUR,
          open24hours: rub_data.OPEN24HOUR,
          low24hours: rub_data.LOW24HOUR,
          high24hours: rub_data.HIGH24HOUR,
          lasttrade: rub_data.LASTTRADEID
               };
         this.dataEur ={
                   price: eur_data.PRICE,
          lastupdate: eur_data.LASTUPDATE,
          mktcap: eur_data.MKTCAP,
          vol24hours: eur_data.VOLUME24HOUR,
          open24hours: eur_data.OPEN24HOUR,
          low24hours: eur_data.LOW24HOUR,
          high24hours: eur_data.HIGH24HOUR,
          lasttrade: eur_data.LASTTRADEID
               };

         this.dataUsd ={
                   price: usd_data.PRICE,
          lastupdate: usd_data.LASTUPDATE,
          mktcap: usd_data.MKTCAP,
          vol24hours: usd_data.VOLUME24HOUR,
          open24hours: usd_data.OPEN24HOUR,
          low24hours: usd_data.LOW24HOUR,
          high24hours: usd_data.HIGH24HOUR,
          lasttrade: usd_data.LASTTRADEID
               };
        
      });
    Observable.interval(2000).subscribe(wait => {
      info.subscribe(response => {
    var data = response['DISPLAY'][symbol];
    var eur_data = response['DISPLAY'][symbol]['EUR'];
    var usd_data = response['DISPLAY'][symbol]['USD'];
    var rub_data = response['DISPLAY'][symbol]['RUB'];
    this.dataRub ={
                   price: rub_data.PRICE,
          lastupdate: rub_data.LASTUPDATE,
          mktcap: rub_data.MKTCAP,
          vol24hours: rub_data.VOLUME24HOUR,
          open24hours: rub_data.OPEN24HOUR,
          low24hours: rub_data.LOW24HOUR,
          high24hours: rub_data.HIGH24HOUR,
          lasttrade: rub_data.LASTTRADEID
               };
         this.dataEur ={
                   price: eur_data.PRICE,
          lastupdate: eur_data.LASTUPDATE,
          mktcap: eur_data.MKTCAP,
          vol24hours: eur_data.VOLUME24HOUR,
          open24hours: eur_data.OPEN24HOUR,
          low24hours: eur_data.LOW24HOUR,
          high24hours: eur_data.HIGH24HOUR,
          lasttrade: eur_data.LASTTRADEID
               };

         this.dataUsd ={
                   price: usd_data.PRICE,
          lastupdate: usd_data.LASTUPDATE,
          mktcap: usd_data.MKTCAP,
          vol24hours: usd_data.VOLUME24HOUR,
          open24hours: usd_data.OPEN24HOUR,
          low24hours: usd_data.LOW24HOUR,
          high24hours: usd_data.HIGH24HOUR,
          lasttrade: usd_data.LASTTRADEID
               };

    });
  


  });
  }

  ngOnInit() {
  }

}
