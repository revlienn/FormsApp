import { Component } from '@angular/core';
import { FoodCard } from '../food-card/food-card';
import { Food } from '../../types/food';

@Component({
  selector: 'app-food-list',
  imports: [FoodCard],
  templateUrl: './food-list.html',
  styleUrl: './food-list.css'
})
export class FoodList {
  food:Food[]=[
    { id: 1, name: 'Apple', calories: 95, category: 'Fruit' },
    { id: 2, name: 'Banana', calories: 105, category: 'Fruit' },
  ];
}
