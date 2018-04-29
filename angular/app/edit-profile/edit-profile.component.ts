import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MinLengthValidator } from '@angular/forms';
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
export class NewData {	
	name: string;
	email:string;
	telegram: string;

};
export class NewPass {	
	oldpassword: string;
	password:string;
	password_repeat: string;

};

const headers = new HttpHeaders({'Content-type': 'Application/json '});
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  error = '';
  user: User;
  newPass: NewPass;
  newData: NewData;
  submitted = false;
  submittedPass = false;
  constructor(public auth: AuthService, private http:HttpClient) { }

  ngOnInit() {
  	this.auth
      .getUser()
      .subscribe(
        (response) => {
          this.user = response;
          this.auth.setUser(this.user);
        }
      );
  }

onUpdate(form) {
	this.newData={
		email: form.value.email,
		telegram: form.value.telegram,
		name: form.value.name
	} 
    this.http.patch('/users/'+this.user.id+'/update', this.newData, {headers: headers}).subscribe(
        (response) => response,
        (error) => console.log(error)
      );
    this.submitted = true;
    this.auth
      .getUser()
      .subscribe(
        (response) => {
          this.user = response;
          this.auth.setUser(this.user);
        }
      );
}

onUpdatePass(form) {
	this.newPass={
		oldpassword: form.value.oldpassword,
		password: form.value.password,
		password_repeat: form.value.password_repeat
	} 
    this.http.patch('users/'+this.user.id+'/updatepass', 
    	this.newPass, {headers: headers}).subscribe(
        (response) => { this.submittedPass = true; this.error = ''},
        (error) => this.error = 'Неправильный пароль'
      );
    console.log(this.user);
    console.log(this.newPass);
}
}
