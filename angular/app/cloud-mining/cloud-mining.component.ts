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
  selector: 'app-cloud-mining',
  templateUrl: './cloud-mining.component.html',
  styleUrls: ['./cloud-mining.component.scss'],
    providers: [BannerService]
})
export class CloudMiningComponent implements OnInit {
banner: any;
   categories: Categories[] = [];
  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute, private bannerService:BannerService) {
    let path = "/categoriesraw/6";
    const info = http.get(path);
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
  			
  			console.log(this.categories);

  		});
}

  ngOnInit() {
      this.bannerService.getBannersById(2).subscribe(res => {
          this.banner = res
      })
  }
  loadCat(id) {
  	this.router.navigate(['/posts/category', id]);
    console.log('snap');
    this.route.url.subscribe(() => {
    console.log(this.route.snapshot.firstChild.data);
   });
  }


}