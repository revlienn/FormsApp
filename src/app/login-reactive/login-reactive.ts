import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './login-reactive.html',
  styleUrl: './login-reactive.css'
})
export class LoginReactive {
  reactiveLoginForm = new FormGroup({
    email: new FormControl("email@test.com", {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl("Password", {
      validators: [Validators.required, Validators.minLength(4)],
    }),
  })
}

