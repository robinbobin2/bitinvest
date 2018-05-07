import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {StocksService} from '../stocks.service';
@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss'],
  providers: [StocksService]
})
export class ExchangesComponent implements OnInit {
  exchanges = [];
  count = 0;
  constructor(private http:HttpClient, private stockService:StocksService) { }

  ngOnInit() {
  	this.stockService.getExchanges().subscribe(res => {this.exchanges = res; this.count = this.exchanges.length});
  }

}
