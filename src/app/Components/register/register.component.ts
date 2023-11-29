import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  submitted = false;
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    console.log("Oninit life cycle gets called");
    this.RegisterForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    console.log(this.RegisterForm.value);
    if (this.RegisterForm.valid) {
      this.userService.Register(this.RegisterForm.value).subscribe((response) => {
        console.log(response)
      })
    } else {
      console.log("The Value is Invalid");
      return;
    }
  }
}