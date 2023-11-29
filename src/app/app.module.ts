import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes.component';
import { RemainderComponent } from './Components/remainder/remainder.component';
import { ArcheiveComponent } from './Components/archeive/archeive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { UpdateComponent } from './Components/update/update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DisplaynoteComponent } from './Components/displaynote/displaynote.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { IconComponent } from './Components/icon/icon.component';

// import { ColorPickerModule } from 'ngx-color-picker';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { SearchPipe } from './Pipes/Search/search.pipe';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  {
    path: 'home',
    component: DashboardComponent,
    children: [
      { path: 'notes', component: GetallnotesComponent },
      { path: 'remainder', component: RemainderComponent },
      { path: 'archeive', component: ArcheiveComponent },
      { path: 'trash', component: TrashComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    GetallnotesComponent,
    RemainderComponent,
    ArcheiveComponent,
    TrashComponent,
    CreatenoteComponent,
    UpdateComponent,
    DisplaynoteComponent,
    IconComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
