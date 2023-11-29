import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userservices/user.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpasswordForm!: FormGroup;
  submitted = false;
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword
  }


  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private activateroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log("Oninit life cycle gets called");
    this.resetpasswordForm = this.formBuilder.group({
      email: [localStorage.getItem('Email'), [Validators.required, Validators.email]],
      newpassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    console.log(this.resetpasswordForm.value);

    if (this.resetpasswordForm.valid) {
      var token = this.activateroute.snapshot.paramMap.get('token')
      this.userService.Resetpassword(token, this.resetpasswordForm.value).subscribe((response) => {
        console.log(response)
        this.router.navigate(['login'])
      })
    }
    else {
      console.log("The Value is invalid");
      return
    }
  }
}

