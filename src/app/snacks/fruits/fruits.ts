import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { catchError, combineLatest, concat, concatMap, debounceTime, distinct, distinctUntilChanged, EMPTY, filter, from, fromEvent, interval, map, merge, mergeMap, Observable, of, scan, startWith, Subject, switchMap, take, takeUntil, tap, withLatestFrom, zip } from 'rxjs';
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
export class Fruits implements AfterViewInit {

  @ViewChild('inputField') inputField!:ElementRef<HTMLInputElement>;

  private destroy$ = new Subject<void>();

  distinctUntilChangedRecs:string[]=[];
  distinctRecs:string[]=[];
  
  ngAfterViewInit(): void {
    fromEvent(this.inputField.nativeElement,'input').pipe(
      map(()=>this.inputField.nativeElement.value),
      debounceTime(500),
      distinctUntilChanged(),
    )
    .subscribe(
      (res)=>{
        this.distinctUntilChangedRecs.push(res);
        console.log(`${res}-${this.distinctUntilChangedRecs}`)
      }
    )

    //  fromEvent(this.inputField.nativeElement,'input').pipe(
    //   map(()=>this.inputField.nativeElement.value),
    //   distinct(),
    // )
    // .subscribe(
    //   (res)=>{
    //     this.distinctRecs.push(res);
    //     console.log(`${res}-${this.distinctRecs}`)
    //   }
    // )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

