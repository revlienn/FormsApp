import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../../types/food';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-food-details',
  imports: [AsyncPipe],
  templateUrl: './food-details.html',
  styleUrl: './food-details.css'
})
export class FoodDetails implements OnInit{
  private route=inject(ActivatedRoute);
  private router=inject(Router);

  food$!:Observable<Food>;

  ngOnInit(): void {
    this.food$=this.route.data.pipe(map(res=>res['foodDetails']));
    this.food$.subscribe(res=>console.log(res));
  }

  next(food:Food){
    this.router.navigate(['food/',food.id+1])
  }

  previous(food:Food){
    this.router.navigate(['food/',food.id-1])
  }

}
