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

  obs$=new Observable<number>((s)=>{
    let number=0;
    let myInterval=setInterval(()=>{
      console.log("NUMBER: ",number);
      s.next(number++)
    },1500)
    return(()=>{
      clearInterval(myInterval)
    })
  })

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.emptylog$.subscribe();
    this.timerLog$.subscribe((s) => {
      console.log(`${s}`)
    })
    const unending=this.obs$.subscribe({
      next:(v)=>{console.log(v)},
      complete:()=>console.log('Completed')
    })
    setTimeout(()=>{unending.unsubscribe()},4500)
  
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log('destroyed')
  }

}
