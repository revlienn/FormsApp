import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, combineLatest, concat, concatMap, EMPTY, filter, from, fromEvent, interval, map, mergeMap, Observable, of, Subject, switchMap, take, takeUntil, tap, zip } from 'rxjs';
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
  clicks$=fromEvent(document,'click');
  numbers$=interval(500).pipe(take(5));
  
  ngOnInit(): void {

    // this.clicks$.pipe(
    //   switchMap(()=>this.numbers$)
    // ).subscribe(
    //   val=>console.log(`SWITCHMAP Click: ${val}`)
    // )

    // this.clicks$.pipe(
    //   mergeMap(()=>this.numbers$)
    // ).subscribe(
    //   val=>console.log(`MERGE MAP, ${val}`)
    // )

    this.clicks$.pipe(
      concatMap(()=>this.numbers$)
    ).subscribe(val=>console.log(val))

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

