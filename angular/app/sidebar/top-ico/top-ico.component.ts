import { Component, OnInit } from '@angular/core';
import {CloudMiningService} from "../../cloud-mining.service";

@Component({
  selector: 'app-top-ico',
  templateUrl: './top-ico.component.html',
  styleUrls: ['./top-ico.component.scss'],
    providers: [CloudMiningService]
})

export class TopIcoComponent implements OnInit {

  ico_top = [];
  constructor(private cloudMining: CloudMiningService) { }

  ngOnInit() {
    this.cloudMining.getIcoTop().subscribe(
        res => {
          this.ico_top = res;

        },

    )
  }

}
