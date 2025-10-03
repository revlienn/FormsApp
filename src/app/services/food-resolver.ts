import { inject, Injectable } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Food } from '../types/food';
import { FoodServices } from './food-services';
import { of } from 'rxjs';

export const foodResolver: ResolveFn<Food|undefined> = (route, state) => {
  const foodService=inject(FoodServices);
  const id=Number(route.paramMap.get('id'));
  if (!id) {
    return of(undefined);  
  }

  return foodService.getFoodById(id);
};
