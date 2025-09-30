import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { passwordStrengthValidator } from '../../validators/password-strength.validator';

@Component({
  selector: 'app-login-reactive',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './login-reactive.html',
  styleUrl: './login-reactive.css'
})
export class LoginReactive {

  email = new FormControl("email@gmail.com", {
    validators: [Validators.required, Validators.email],
    updateOn:'blur'
  })
  password = new FormControl("Password", {
    validators: [Validators.required, Validators.minLength(8),passwordStrengthValidator()]
  })

  reactiveLoginForm = new FormGroup({
    email: this.email,
    password: this.password
  })
}
