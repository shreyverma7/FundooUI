import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  resetpasswordform!: FormGroup;
  submitted = false;
  email: any = {};

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    console.log("Oninit life cycle gets called");
    this.resetpasswordform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log(this.resetpasswordform.value);
    let reqData = {
      email: this.resetpasswordform.value.email,
    }
    if (this.resetpasswordform.valid) {
      this.userService.ForgotPassword(reqData).subscribe((response) => {
        console.log(response);
        this.email = response;
        localStorage.setItem('Email', reqData.email);
      })
    }
    else {
      console.log("The value is Invalid");
      return;
    }
  }
}