import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, combineLatest, concat, concatMap, EMPTY, filter, from, fromEvent, interval, map, merge, mergeMap, Observable, of, scan, startWith, Subject, switchMap, take, takeUntil, tap, withLatestFrom, zip } from 'rxjs';
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

  @ViewChild('countBtn') countBtn!:ElementRef<HTMLButtonElement>;
  @ViewChild('showCalcBtn') showCalcBtn!:ElementRef<HTMLButtonElement>;

  private destroy$ = new Subject<void>();

  location:{x:number,y:number}[]=[];
  time:number[]=[];
  
  ngAfterViewInit(): void {

    fromEvent(this.countBtn.nativeElement,'click').pipe(
      scan(count=>count+1,0)
    ).subscribe((count)=>console.log(`Tally: `,count,` times`))

    fromEvent<MouseEvent>(this.showCalcBtn.nativeElement,'click').pipe(
      scan((acc,curr)=>{
        const currentLocation={x:curr.clientX,y:curr.clientY};
        const currentTime=curr.timeStamp;
        this.location.push(currentLocation);
        this.time.push(currentTime);
        return acc+1
      },0))
      .subscribe((count)=>{
        console.log(`Calc: `,count,` times`);
        console.log(this.location, this.time);
      })

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

