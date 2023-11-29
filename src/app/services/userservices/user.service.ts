import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any

  constructor(private httpService: HttpService) { }
  loginservice(reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      }),
    };
    return this.httpService.postService('User/Login', reqData, false, httpAuthOptions);
  };

  ForgotPassword(reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.httpService.postService(
      'User/ForgetPassword?email=' + reqData.email,
      {},
      false,
      httpAuthOptions
    );
  }
  Register(reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.httpService.postService(
      'User/Register',
      reqData,
      false,
      httpAuthOptions
    );
  }
  Resetpassword(auth: any, reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth,
      }),
    };
    return this.httpService.updateService(
      'User/ResetPassword/',
      reqData,
      true,
      httpAuthOptions
    );
  }
  Getallnotes() {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.getservices(
      'api/Notes/GetAllNotes?userId=' + localStorage.getItem('Id'),
      true,
      httpAuthOptions
    );
  }

  //get all delete note here
  Trash() {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.getservices(
      'api/Notes/GetAllThrashedNotes?userId=' + localStorage.getItem('Id'),
      true,
      httpAuthOptions
    );
  }


  Archeive() {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.getservices(
      'api/Notes/GetAllArcheivedNotes?userId=' + localStorage.getItem('Id'),
      true,
      httpAuthOptions
    );
  }
  Remainder() {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.getservices(
      'api/Notes/RemainderById?userId=' + localStorage.getItem('Id'),
      true,
      httpAuthOptions
    );
  }

  //routing donefine
}
