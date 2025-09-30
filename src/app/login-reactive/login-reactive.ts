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

  reactiveLoginForm = new FormGroup({
    email: this.email,
    password: this.password
  })

  reset(){
    this.reactiveLoginForm.reset({
      email:this.initEmail,
      password:this.initPassword
    });
    console.log(this.reactiveLoginForm.value);
  }

  login(){
    console.log(this.reactiveLoginForm.value);
    this.reactiveLoginForm.reset({
      email:'',
      password:''
    });
  }
}
