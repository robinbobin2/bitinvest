import { Component, OnInit, Input } from '@angular/core';
import {BannerService} from "../../banner.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
    providers:[BannerService]
})
export class BannerComponent implements OnInit {
banner: any;
  @Input() pageId: number;

  constructor(private bannerService: BannerService) { }

  ngOnInit() {
      this.bannerService.getBannersById(1).subscribe(res => {
          this.banner = res
          console.log('banner')
          console.log(this.banner)
      })
  }

}
