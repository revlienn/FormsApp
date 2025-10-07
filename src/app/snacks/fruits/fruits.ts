import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.html',
  styleUrl: './fruits.css',
  standalone: false
})
export class Fruits implements OnInit,AfterViewInit {

  @ViewChild('fromEventBtn') fromEventBtn!:ElementRef<HTMLButtonElement>;

  private destroy$ = new Subject<void>();

  ngAfterViewInit(): void {
    fromEvent<MouseEvent>(this.fromEventBtn.nativeElement,"click").subscribe((res)=>console.log(res))
    fromEvent<MouseEvent>(this.fromEventBtn.nativeElement,"mousedown").subscribe((res)=>console.log('mouse down'))
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
