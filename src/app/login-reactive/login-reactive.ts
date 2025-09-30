import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { passwordStrengthValidator } from '../../validators/password-strength.validator';

@Component({
  selector: 'app-login-reactive',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './login-reactive.html',
  styleUrl: './login-reactive.css'
})
export class LoginReactive implements OnInit {

  initEmail:string='username@email.com';
  initPassword:string='password';
  initUsername:string='username';
  initMobilenumber:string='mobile number';
  stepTwo:boolean=false;

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
    validators:[Validators.required, Validators.minLength(3)]
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
