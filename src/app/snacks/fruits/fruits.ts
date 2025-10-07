import { Component, OnInit } from '@angular/core';
import { from, Observable, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.html',
  styleUrl: './fruits.css',
  standalone: false
})
export class Fruits implements OnInit {


  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    of('Apple').subscribe((res)=>console.log(res));
    from(['Banana','Cherry']).subscribe((res)=>console.log(res));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
