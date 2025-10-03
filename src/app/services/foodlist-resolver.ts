import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FoodServices } from './food-services';
import { Food } from '../types/food';

export const foodlistResolver: ResolveFn<Food[]> = () => {
  const foodService=inject(FoodServices);
  return foodService.getFoods();
};
