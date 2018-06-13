import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mining-filter',
  templateUrl: './mining-filter.component.html',
  styleUrls: ['./mining-filter.component.scss']
})
export class MiningFilterComponent implements OnInit {
    status:any;
    order:any;
    reverse:any;
  constructor() { }

  ngOnInit() {
  }

}
