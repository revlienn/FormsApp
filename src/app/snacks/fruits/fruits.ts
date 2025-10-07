import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, combineLatest, concat, concatMap, EMPTY, filter, from, fromEvent, interval, map, merge, mergeMap, Observable, of, startWith, Subject, switchMap, take, takeUntil, tap, withLatestFrom, zip } from 'rxjs';
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

  fast$=interval(1000).pipe(take(3));
  slow$=interval(1500).pipe(take(3));
  
  ngOnInit(): void {

    combineLatest(this.fast$,this.slow$).subscribe(([f,s])=>{
      console.log(`Fast 🔴 ${f}, Slow 🟢 ${s}`)
    })

    //concat(this.fast$,this.slow$).subscribe((f)=>{console.log(f)})

    //merge(this.fast$,this.slow$).subscribe((v)=>console.log(v));

    // of('World').pipe(
    //   startWith(('Hello'))
    // ).subscribe((v)=>console.log(v));

    // this.slow$.pipe(
    //   withLatestFrom(this.fast$)
    // ).subscribe(([s,f])=>console.log(`slow ${s} fast ${f}`))

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

