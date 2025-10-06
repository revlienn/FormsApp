import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.html',
  styleUrl: './fruits.css',
  standalone:false
})
export class Fruits implements OnInit{

  fruits$=new Observable<string>((subscriber)=>{
    subscriber.next('Apple');
    subscriber.next('Banana');
    subscriber.next('Cherry');
    subscriber.complete();
  })

  private destroy$=new Subject<void>();

  ngOnInit(): void {
    this.fruits$.subscribe({
      next:(res:string)=>console.log(res),
      error:(err:Error)=>console.error(err.message),
      complete:()=>console.log('complete 🔥')
    })
  }

  ngOnDestroy():void{
    this.destroy$.next();
    this.destroy$.complete();
    console.log('destroyed')
  }

}
