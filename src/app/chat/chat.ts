import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat',
  imports: [MatButton,RouterLink],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {

}
