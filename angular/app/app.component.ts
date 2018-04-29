import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { MinLengthValidator } from '@angular/forms';

const url = 'script.js';

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
  photo: any;
  error: any;

};
declare var $:any;
const headers = new HttpHeaders({'Content-type': 'Application/json '});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})

export class AppComponent implements OnInit {
  loadAPI: Promise<any>;
  login: Login;
  lostPass: LostPass;
  registration: Registration;
  user: User;
 
	constructor(public auth: AuthService, private http:HttpClient, 
    private router:Router, private activatedRoute: ActivatedRoute) {
	
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
    this.http.post('/profile/login', this.login
    , {headers: headers}).subscribe(
        (response) => 
        this.auth.setUser(response),
        (error) => console.log(error)
      );
    // console.log
      form.reset();

      this.router.navigate(['/profile/edit']);

  }
  onSignup(form: NgForm) {
  	this.registration = {
  		email: form.value.email,
  		password: form.value.password,
  		password_repeat: form.value.password_repeat
  	}
    this.http.post('/profile/register', this.registration, {headers: headers}).subscribe(
        (response) => 
        window.location.replace("/profile/portfolio"),
        (error) => console.log(error)
      );
    // console.log
    console.log(this.registration);
      form.reset();
  }
  onRestore(form: NgForm) {
  	this.lostPass = {
  		email: form.value.email
  	}
    console.log(this.lostPass);
      form.reset();
  }
  checkUser() {
  if(this.user.error == '') {
    return false;
  } else {
    return true;
  }
  }
  ngOnInit() {
  	this.auth
      .getUser()
      .subscribe(
        (response) => {
          this.user = response;
          this.auth.setUser(this.user);
          console.log(this.user);
        }
      );

        this.router.events
        .filter(event => event instanceof NavigationEnd)
        .map(() => this.activatedRoute)
        .subscribe((event) => {
           $.getScript('/js/script.js');
        });
  	// this.user = this.auth.getUser();
  }
}
