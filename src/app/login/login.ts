import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  imports: [FormsModule,MatCardModule,JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login{
  value={
    email:'email@test.com',
    password:'1234'
  };

  login(loginForm:NgForm, submit:Event){
    console.log(this.value);
    //console.log(loginForm.value, loginForm.valid,submit)
  }

  onEmailChange(change:any){
    console.log(change);
  }
}
