import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


export class User {
	id:number;
	name: string;
	email:string;
	photo_id: number;
	role_id: number;
  telegram:string;
  photo:any;
  error: string;
}
@Injectable()

export class AuthService {

user: User;
error = '';
info;
  constructor(private http:HttpClient ) {
    this.user = {
        id:0,
        name: '',
        email:'',
        photo_id: 0,
        role_id: 0,
        telegram:'',
        photo: [],
        error: '',
    }
  }
  
  public getUser(): Observable<User> {
  return this.http
    .get<User>('/angular/user')
    .map(response => {
      this.user = response;
      return this.user;
    })
  }
  public setUser(user) {
  this.user = user;
  }
  public getUserInfo() {
  return this.user;
  }
  public isLogged() {
  if(this.user.id ==0) {
    return false;
  } else {
    return true;
  }
  }
}
