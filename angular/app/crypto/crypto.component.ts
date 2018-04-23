import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
// import { interval } from 'rxjs/Observable/interval';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {AuthService} from '../auth.service';
import {AddCommentService} from '../add-comment.service';

export interface CryptoData {
  id: number
  sym: string;
  last: number;
  now: number;
  min:number;
  max: number;
  value:number;
  year: number;
  algo: string;
  week: number;
  day: number;
  name: string;
  desc: string;


}
export class User {  
  id:number;
  name: string;
  email:string;
  photo_id: number;
  role_id: number;
  telegram: string;

};
export class CommentRaw {
  id: number;
  author: string;
  body: string;
  email: string;
  commentable_id:number;
  photo:string;
}
@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
  comments: CommentRaw[] = [];
  dataUsd: CryptoData;
  user: User = {
      id:0,
      name: '',
      email:'',
      photo_id: 0,
      role_id: 0,
      telegram: '',

  }; 
  commentcount = 0;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute, 
    public auth: AuthService) {


  //   Observable.interval(2000).subscribe(wait => {
  //     info.subscribe(response => {
  //   var data = response['DISPLAY'][symbol];
  //   var eur_data = response['DISPLAY'][symbol]['EUR'];
  //   var usd_data = response['DISPLAY'][symbol]['USD'];
  //   var rub_data = response['DISPLAY'][symbol]['RUB'];
  //   this.dataRub ={
  //                  price: rub_data.PRICE,
  //         lastupdate: rub_data.LASTUPDATE,
  //         mktcap: rub_data.MKTCAP,
  //         vol24hours: rub_data.VOLUME24HOUR,
  //         open24hours: rub_data.OPEN24HOUR,
  //         low24hours: rub_data.LOW24HOUR,
  //         high24hours: rub_data.HIGH24HOUR,
  //         lasttrade: rub_data.LASTTRADEID
  //              };
  //        this.dataEur ={
  //                  price: eur_data.PRICE,
  //         lastupdate: eur_data.LASTUPDATE,
  //         mktcap: eur_data.MKTCAP,
  //         vol24hours: eur_data.VOLUME24HOUR,
  //         open24hours: eur_data.OPEN24HOUR,
  //         low24hours: eur_data.LOW24HOUR,
  //         high24hours: eur_data.HIGH24HOUR,
  //         lasttrade: eur_data.LASTTRADEID
  //              };

  //        this.dataUsd ={
  //                  price: usd_data.PRICE,
  //         lastupdate: usd_data.LASTUPDATE,
  //         mktcap: usd_data.MKTCAP,
  //         vol24hours: usd_data.VOLUME24HOUR,
  //         open24hours: usd_data.OPEN24HOUR,
  //         low24hours: usd_data.LOW24HOUR,
  //         high24hours: usd_data.HIGH24HOUR,
  //         lasttrade: usd_data.LASTTRADEID
  //              };

  //   });
  


  // });
  }

  ngOnInit() {

    let symbol = this.route.snapshot.params['sym'];
    let path = "/bit/pair?pair="+symbol+"/USDT";
    const info = this.http.get<CryptoData>(path);
      info.subscribe(response => {
        this.dataUsd = response;
        this.dataUsd.sym = symbol;
      });
    let infoCryptoPath = "/allcrypto/"+symbol;
    const infoCrypto = this.http.get<CryptoData>(infoCryptoPath);
      infoCrypto.subscribe(response => {
        this.dataUsd.name = response['name'];
        this.dataUsd.id = response['id'];
        this.dataUsd.year = response['year'];
        this.dataUsd.algo = response['algo'];
        this.dataUsd.desc = response['desc'];
        for(let item of response['comments']) {
          this.comments.push({ 
              id: item.id,
              author: item.author,
              body: item.body,
              email: item.email,
              commentable_id:item.commentable_id,
              photo:item.photo

          });

        }
      this.commentcount = response['comments_count'];
      });
        this.auth
      .getUser()
      .subscribe(
        (response) => {
          this.user = response;
          this.auth.setUser(this.user);
        }
      );
  }

  submitComment(form: NgForm, post_id, type) {
    const headers = new HttpHeaders({'Content-type': 'Application/json '});
    this.http.post('/storecomment', {
            'post_id': post_id,
            'body': form.value.body,
            'commentable_id': post_id,
            'commentable_type': type
      }, {headers: headers}).subscribe(
        (response) => 
        this.comments.unshift({
            id: response['id'],
            email:response['email'],
          author: response['author'],
          body: response['body'],
          commentable_id:response['commentable_id'],
          photo: response['photo']
        }),
        (error) => console.log(error)
      );
      form.reset();
      this.commentcount=this.commentcount+1;
  }

}
