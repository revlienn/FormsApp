import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, map, of, Subject, tap } from 'rxjs';
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


    const userData$ = ajax<any>("https://randomuser.me/api");

    userData$.pipe(map((user) => ({
      firstName: user.response.results[0].name.first,
      lastName: user.response.results[0].name.last,
      country: user.response.results[0].location.country
    }))).subscribe(({ firstName, lastName, country }) => {
      console.log(firstName, lastName, '-',country)
    })

    userData$.subscribe((r) => console.log(r))

    of(1,23,7,10).pipe(
      filter((num)=>num>5),
      tap((filtered)=>console.log("🕵️‍♀️SPY ",filtered)),
      map((spied)=>spied*2)
    ).subscribe((v)=>console.log(`TIMES 2: ${v}`))
    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

