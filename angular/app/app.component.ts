import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MinLengthValidator } from '@angular/forms';


export class Login {
	email: string;
	password: string;
}
export class LostPass {
	email: string;
}
export class Registration {
	email: string;
	password: string;
	password_repeat: string;
}
export class User {	
	id:number;
	name: string;
	email:string;
	photo_id: number;
	role_id: number;
	telegram: string;

};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})

export class AppComponent implements OnInit {
login: Login;
lostPass: LostPass;
registration: Registration;
user: User;
	constructor(public auth: AuthService,private http:HttpClient) {
	
	console.log(this.user);
	console.log('user');
	// auth.getUser();
}
checkAuth() {
	if(this.user.id !=undefined) {
		return true;
	} else {
		return false;
	}
}

  onSingin(form: NgForm) {
  	this.login = {
  		email: form.value.email,
  		password: form.value.password,
  	}
    // const headers = new HttpHeaders({'Content-type': 'Application/json '});
    // this.http.post('/storecomment', {
    //         'post_id': post_id,
    //         'body': form.value.body,
    //         'commentable_id': post_id,
    //         'commentable_type': type
    //   }, {headers: headers}).subscribe(
    //     (response) => 
    //     console.log(response),
    //     (error) => console.log(error)
    //   );
    // console.log
    console.log(this.login);
      form.reset();
  }
  onSignup(form: NgForm) {
  	this.registration = {
  		email: form.value.email,
  		password: form.value.password,
  		password_repeat: form.value.password_repeat
  	}
    // const headers = new HttpHeaders({'Content-type': 'Application/json '});
    // this.http.post('/storecomment', {
    //         'post_id': post_id,
    //         'body': form.value.body,
    //         'commentable_id': post_id,
    //         'commentable_type': type
    //   }, {headers: headers}).subscribe(
    //     (response) => 
    //     console.log(response),
    //     (error) => console.log(error)
    //   );
    // console.log
    console.log(this.registration);
      form.reset();
  }
  onRestore(form: NgForm) {
  	this.lostPass = {
  		email: form.value.email
  	}
    // const headers = new HttpHeaders({'Content-type': 'Application/json '});
    // this.http.post('/storecomment', {
    //         'post_id': post_id,
    //         'body': form.value.body,
    //         'commentable_id': post_id,
    //         'commentable_type': type
    //   }, {headers: headers}).subscribe(
    //     (response) => 
    //     console.log(response),
    //     (error) => console.log(error)
    //   );
    // console.log
    console.log(this.lostPass);
      form.reset();
  }
  // getUser(): User {
  //   return this.user;
  // }
  ngOnInit() {
  	this.auth
      .getUser()
      .subscribe(
        (response) => {
          this.user = response;
          // console.log(this.user);
        }
      );

  	// this.user = this.auth.checkAuth();
  	// console.log(	this.user);


  	// this.user = this.auth.getUser();
  }
}
