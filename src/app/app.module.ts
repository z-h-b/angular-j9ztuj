import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './login/auth-guard.service';
import { UserService } from './login/user.service';

const routes: Routes =  [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: '',  redirectTo: '/home', pathMatch: 'full'},
  ];
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent,  LoginComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthGuardService, UserService]
})
export class AppModule { }
