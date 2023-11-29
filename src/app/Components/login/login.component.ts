import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  Id: any = {};
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log("Oninit life cycle gets called");
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.userService.loginservice(reqData).subscribe((response) => {
        console.log(response);
        this.Id = response;
        localStorage.setItem('Id', this.Id.id);
        localStorage.setItem('Token', this.Id.data);
        this.router.navigate(['home/notes'])
        this._snackBar.open('Login Successfully', '', {
          duration: 2000
        });
      })
    }
    else {
      console.log("The Value is Invalid");
      return;
    }
  }
}
