import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { LoginReactive } from './login-reactive/login-reactive';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { Registration } from './registration/registration';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FontAwesomeModule,Registration],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LU.3a_Forms');

  login(loginForm:NgForm){
    console.log(loginForm.value, loginForm.valid)
  }
}
