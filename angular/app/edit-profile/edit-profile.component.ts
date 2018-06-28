import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http} from '@angular/http';
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
  fileToUpload: File;
  msg = '';
  error_msg = false;
    loading = false;
    error_load='';
  constructor(public auth: AuthService, private http:HttpClient, private _http:Http) { }
@ViewChild('fileInput') fileInput
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

uploadFileToActivity(photo: File) {
    
}
handleFileInput() {
    this.loading = true;
  const image  = this.fileInput.nativeElement;
    console.log(image.files);
   let pathUrl = '/profile/updatephoto';
   this.fileToUpload = image.files[0]
   console.log(this.fileToUpload);
    const formData: FormData = new FormData();
    formData.append('photo', this.fileToUpload, this.fileToUpload.name);
    // console.log(formData.get('photo'));
    // console.log(formData.get('photo'));
    const header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    this.http.post(pathUrl, formData).subscribe(data => {
      console.log(data);
      this.auth
      .getUser()
      .subscribe(
        (response) => {
          this.user = response;
          this.auth.setUser(this.user);
          this.loading = false;
          this.auth.publishData(this.user);
        }
      );
      }, error => {
        this.loading = false;
        this.error_load = "Слишком большое изображение";
        this.auth
            .getUser()
            .subscribe(
                (response) => {
                    this.user = response;
                    this.auth.setUser(this.user);
                    this.auth.publishData(this.user);
                }
            );
      });

}

deletePhoto() {

    let pathUrl = '/profile/deletephoto';
    this.http
        .get<any>(pathUrl).subscribe(()=>{
        this.auth
            .getUser()
            .subscribe(
                (response) => {
                    this.user = response;
                    this.auth.setUser(this.user);
                }
            );
    })
}
onUpdate(form) {
    this.msg = ''
    this.newData={
		email: form.value.email,
		telegram: form.value.telegram,
		name: form.value.name
	} 
    this.http.patch('/users/'+this.user.id+'/update', this.newData, {headers: headers}).subscribe(
        (response) => {
            if (response['error']) {
                this.msg = response['error'];
                this.error_msg = true;
            } else if(response['status']) {
                this.msg = 'Данные успешно изменены';
                this.error_msg = false;
            }

        },
        (error) => console.log(error)
      );
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
