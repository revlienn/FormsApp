import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, combineLatest, concat, EMPTY, filter, from, map, Observable, of, Subject, tap, zip } from 'rxjs';
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

    const names=of('Alice','Bob');
    const ages=of(60,20);

    combineLatest([names,ages]).subscribe(([username,age])=>{
      console.log(`${username} is ${age} years old`)
    })

    zip([names,ages]).subscribe(([username,age])=>{
      console.log(`${username} is ${age} years old`)
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

