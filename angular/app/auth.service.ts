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
}
@Injectable()

export class AuthService {

user: User;
error = '';
info;
  constructor(private http:HttpClient ) {

  }
  
  public getUser(): Observable<User> {
  return this.http
    .get<User>('/angular/user')
    .map(response => {
      this.user = response;
      return this.user;
    })
  }
}
