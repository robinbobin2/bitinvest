import { Component, OnInit } from '@angular/core';
import {Cripto} from "../crypto-all/crypto-all.component";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-crypto-filter',
  templateUrl: './crypto-filter.component.html',
  styleUrls: ['./crypto-filter.component.scss']
})
export class CryptoFilterComponent implements OnInit {
  algorithm = '';
  age = ''
    algoFilter = [];
    yearFilter = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
      const alldata = this.http.get<Array<Cripto>>('/allcrypto');
      alldata.subscribe(response => {
          this.algoFilter = [...Array.from(new Set(response.map(item => item.algo)))]
          this.yearFilter = [...Array.from(new Set(response.map(item => item.year)))]
          console.log(this.algoFilter)
          console.log(this.yearFilter)
      });
  }

}
