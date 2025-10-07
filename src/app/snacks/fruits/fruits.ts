import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.html',
  styleUrl: './fruits.css',
  standalone: false
})
export class Fruits implements OnInit {


  private destroy$ = new Subject<void>();

  ngOnInit(): void {
  
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
