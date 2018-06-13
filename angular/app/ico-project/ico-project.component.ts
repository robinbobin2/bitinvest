import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {BannerService} from "../banner.service";

interface Categories {
  id: number;
  name: string;
  count: number;

}

@Component({
  selector: 'app-ico-project',
  templateUrl: './ico-project.component.html',
  styleUrls: ['./ico-project.component.scss'],
    providers: [BannerService]
})
export class IcoProjectComponent implements OnInit {
    banner: any;
 categories: Categories[] = [];
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute, private bannerService:BannerService) {

}

  ngOnInit() {
      this.bannerService.getBannersById(1).subscribe(res => {
          this.banner = res
      })
    let path = "/categoriesraw/5";
    const info = this.http.get(path);
      info.subscribe(response => {
        for ( let item of response['cats']) {
          if(item['count'] > 0) {
            this.categories.push({
            id: item['id'],
          name:item['name'],
          count: item['count']
        });
          }
        }
      });
  }
 loadCat(id) {
    this.router.navigate(['/ico/category', id]);
   //  console.log('snap');
   //  this.route.url.subscribe(() => {
   //  console.log(this.route.snapshot.firstChild.data);
   // });
  }

}
