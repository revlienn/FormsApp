import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FontAwesomeModule,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LU.3a_Forms');

  login(loginForm:NgForm){
    console.log(loginForm.value, loginForm.valid)
  }
}
