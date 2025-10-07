import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, of, Subject, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.html',
  styleUrl: './fruits.css',
  standalone: false
})
export class Fruits implements OnInit,AfterViewInit {

  @ViewChild('fromEventBtn') fromEventBtn!:ElementRef<HTMLButtonElement>;

  private destroy$ = new Subject<void>();


  ngAfterViewInit(): void {
    timer(3000).subscribe(()=>{
      const btn=this.fromEventBtn.nativeElement;
      btn.classList.remove('btn-outline');
      btn.classList.add('btn-primary')
    })

    const intervalVar$=interval(1000).subscribe(()=>console.log('interval 🎁'));
    setTimeout(()=>{intervalVar$.unsubscribe()},3000)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
