import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {EventEmitter} from '@angular/core';

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
    navchange: EventEmitter<number> = new EventEmitter();
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
    emitNavChangeEvent(number) {
        this.navchange.emit(number);
    }
  public uploadPhoto(photo) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    let path = '/profile/updatephoto';
    const formData: FormData = new FormData();
    formData.append('photo', photo);
    // console.log(formData.get('photo'));
    // console.log(formData.get('photo'));
    
    return this.http.post(path, formData);
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
  public addEmail(email) {
      let path = '/angular/addemail';
      return this.http.post(path, {'email': email});
  }
  public getUserInfo() {
 if(this.user.id != undefined) {
   return true;
 }
  return false;
  }
  public isLogged() {
  if(this.user.id == 0) {
    return false;
  } else {
    return true;
  }
  }
}
