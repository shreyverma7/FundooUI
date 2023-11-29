import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent}
];
