import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { passwordStrengthValidator } from '../../validators/password-strength.validator';
import { usernameCheck } from '../../validators/username-check.validator';
import { UserService } from '../services/user-service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-login-reactive',
  imports: [JsonPipe, ReactiveFormsModule,FontAwesomeModule],
  templateUrl: './login-reactive.html',
  styleUrl: './login-reactive.css'
})
export class LoginReactive implements OnInit {

  initEmail:string='username@email.com';
  initPassword:string='';
  initUsername:string='username';
  initMobilenumber:string='mobile number';
  stepTwo:boolean=false;

  faCheck=faCheck;

  private userService=inject(UserService);

  ngOnInit(): void {
    console.log(this.reactiveLoginForm.value);
  }

  email = new FormControl(this.initEmail, {
    validators: [Validators.required, Validators.email],
    updateOn:'blur'
  })
  password = new FormControl(this.initPassword, {
    validators: [Validators.required, Validators.minLength(8),passwordStrengthValidator()]
  })
  username=new FormControl(this.initUsername,{
    validators:[Validators.required, Validators.minLength(3)],
    asyncValidators:usernameCheck(this.userService),
    updateOn:'blur'
  })

  mobileNumber=new FormControl(this.initMobilenumber,{
    validators:[Validators.minLength(7)]
  })

  reactiveLoginForm = new FormGroup({
    email: this.email,
    password: this.password,
    username:this.username,
    mobileNumber:this.mobileNumber
  })

  toggleStep(){
    this.stepTwo=!this.stepTwo;
  }

  reset(){
    this.reactiveLoginForm.reset({
      email:this.initEmail,
      password:this.initPassword,
      username:this.initUsername,
      mobileNumber:this.initMobilenumber
    });
    console.log(this.reactiveLoginForm.value);
  }

  login(){
   console.log(this.reactiveLoginForm.value);
    this.reactiveLoginForm.reset({
      email:'',
      password:'',
      username:'',
      mobileNumber:''
    });
  }
}
