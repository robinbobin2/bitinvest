import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



export class User {
	id:number;
	name: string;
	email:string;
	photo_id: number;
	role_id: number;
}
@Injectable()

export class AuthService {

user: User;
error = '';
  constructor(private http:HttpClient ) {

   }
   checkAuth() {
   	const path = "/angular/user";
   	const info = this.http.get<User>(path);
   	info.subscribe(response => {
   		return response;
   });
}
}
