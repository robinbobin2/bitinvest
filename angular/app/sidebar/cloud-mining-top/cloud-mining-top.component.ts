import { Component, OnInit } from '@angular/core';
import {CloudMiningService} from '../../cloud-mining.service';
@Component({
  selector: 'app-cloud-mining-top',
  templateUrl: './cloud-mining-top.component.html',
  styleUrls: ['./cloud-mining-top.component.scss'],
  providers: [CloudMiningService]
})
export class CloudMiningTopComponent implements OnInit {

  constructor(public cloudMining: CloudMiningService) { }
  topfive = [];
  ngOnInit() {
  	this.cloudMining.getTop().subscribe(
  		(response) => this.topfive = response,
        (error) => console.log(error)
  	)
  }

}
