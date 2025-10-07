import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, combineLatest, concat, EMPTY, filter, from, interval, map, Observable, of, Subject, takeUntil, tap, zip } from 'rxjs';
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
  ngOnInit(): void {

    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe((v)=>{
        console.log('Hello World')
      })

    setTimeout(()=>this.destroy$.next(),3000)
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    // this.destroy$.complete();
  }

}

