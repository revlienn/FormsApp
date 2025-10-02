import { Injectable } from '@angular/core';
import { Food } from '../types/food';
import { MOCK_FOOD } from '../data/mockFood';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServices {
  getFoods():Observable<Food[]>{
    return of(MOCK_FOOD).pipe(delay(500))
  }

  getFoodById(id:number):Observable<Food|undefined>{
    return of(MOCK_FOOD.find((f)=>f.id===id)).pipe(delay(500));
  }
}
