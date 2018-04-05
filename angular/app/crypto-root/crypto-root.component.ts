import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crypto-root',
  templateUrl: './crypto-root.component.html',
  styleUrls: ['./crypto-root.component.scss']
})
export class CryptoRootComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

}
