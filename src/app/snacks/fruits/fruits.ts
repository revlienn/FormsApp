import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, EMPTY, filter, map, Observable, of, Subject, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax'

type News = {
  category: "Business" | "Sports";
  content: string;
}

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.html',
  styleUrl: './fruits.css',
  standalone: false
})
export class Fruits implements OnInit {

  private destroy$ = new Subject<void>();

  errorObservable$=new Observable<any>((r)=>{
    setTimeout(()=>{
      r.error(new Error('Error 🧨'))
    },3000)
  })

  ngOnInit(): void {

    this.errorObservable$.pipe(
      catchError((err)=>of(EMPTY))
    ).subscribe({
      next:(v)=>console.log(v),
      complete:()=>console.log('COMPLETED')
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

