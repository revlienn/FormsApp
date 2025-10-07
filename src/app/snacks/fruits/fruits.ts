import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.html',
  styleUrl: './fruits.css',
  standalone: false
})
export class Fruits implements OnInit {

  fruits$ = new Observable<string>((subscriber) => {
    subscriber.next('Apple');
    subscriber.next('Banana');
    subscriber.next('Cherry');
    subscriber.complete();
  })

  emptylog$ = new Observable((s) => {
    s.next('empty log');
    s.complete();
  })

  timerLog$ = new Observable((s) => {
    s.next('value');
    setTimeout(() => {
      s.next('timer log');
      s.complete();
    }, 1500)
    return(()=>{
      console.log('Teardown')
    })
  })

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.emptylog$.subscribe();
    this.timerLog$.subscribe((s) => {
      console.log(`${s}`)
    })
  
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log('destroyed')
  }

}
