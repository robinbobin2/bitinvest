import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { MinLengthValidator } from '@angular/forms';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';

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
  providers: [AuthService,SearchService]
})

export class AppComponent implements OnInit {
  loadAPI: Promise<any>;
  login: Login;
  lostPass: LostPass;
  registration: Registration;
  user: User = {
  id:0,
  name: '',
  email:'',
  photo_id: 0,
  role_id: 0,
  telegram: '',
  photo: 0,
  error: 0,
  };
  loginError = '';
  lostPassSuccess = false;
   errorLostPass = '';
  results: Object;
  searchTerm$ = new Subject<string>();
  search = '';
  searchAll = '';
	constructor(public auth: AuthService, private http:HttpClient, 
    private router:Router, private activatedRoute: ActivatedRoute,
    private searchService: SearchService) {

    this.searchService.mainSearch(this.searchTerm$)
      .subscribe(results => {
          if (results['error']) {
              this.results = undefined;
          } else {
              this.results = results;
          }

        console.log(results);
      });
	
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
        {
          console.log(response);
          if(response['status'] == 'denied') {
            console.log(response);
            this.loginError = 'Неправильные логин или пароль';
          } else if(response['status'] == 'success') {
            this.auth
            .getUser()
            .subscribe(
              (response) => {
                this.user = response;
                this.auth.setUser(this.user);
                console.log(this.user);
              }
            );
          this.router.navigate(['/profile/edit']);
          }
          
        },
        (error) => console.log(error)
      );
    // console.log
      form.reset();

      

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
    this.http.post('/profile/restorepass', this.lostPass, {headers: headers}).subscribe(
        (response) => this.lostPassSuccess = true,
        (error) => {console.log(error); 
          this.errorLostPass = 'Данного email-адреса нет в базе';}
      );
  }
  checkUser() {
    // console.log(this.user.error);
  if(this.user.error == 'User not loggined') {
    return false;
  } else {
    return true;
  }
  }
  close(results) {
    results = undefined;
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
let exec = false;
        this.router.events
        .filter(event => event instanceof NavigationEnd)
        .map(() => this.activatedRoute)
        .subscribe((event) => {
            exec = false;
            if(!exec) {
                setTimeout(() => {
                    $.getScript('/js/script.js');
                }, 300)
                console.log('loaded')
                exec = true;
            }
        });
  	// this.user = this.auth.getUser();
  }
}
