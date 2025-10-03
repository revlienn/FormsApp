import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { PasswordStrengthDirective } from '../directives/password-strength.directive';
import { MockLoginService } from '../services/mocklogin-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,MatCardModule,JsonPipe,PasswordStrengthDirective],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login{

  protected mockLoginService=inject(MockLoginService);

  value={
    email:'email@test.com',
    password:'1234'
  };

  login(loginForm:NgForm, submit:Event){
    console.log(this.value);
    this.mockLoginService.logIn();
    console.log(this.mockLoginService.isLoggedIn());
  }

  onEmailChange(change:any){
    console.log(change);
  }
}
