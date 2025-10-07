import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, from, fromEvent, interval, Observable, of, Subject, Subscription, timer } from 'rxjs';

type News={
  category:"Business"|"Sports";
  content:string;
}

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.html',
  styleUrl: './fruits.css',
  standalone: false
})
export class Fruits implements OnInit {

  private destroy$ = new Subject<void>();

  newsFeed=new Observable<News>((s)=>{
    setTimeout(()=>{
      s.next({category:'Business',content:'News item #1'})
    },1000)
    setTimeout(()=>{
      s.next({category:'Business',content:'News item #2'})
    },2500)
    setTimeout(()=>{
      s.next({category:'Sports',content:'News item #3'})
    },3500)
  })

  ngOnInit(): void {
    this.newsFeed
      .pipe(filter((r)=>r.category=='Sports'))
      .subscribe((r)=>console.log(r));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
