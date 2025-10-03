import { Component, inject } from '@angular/core';
import { FoodCard } from '../food-card/food-card';
import { Food } from '../../types/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-list',
  imports: [FoodCard],
  templateUrl: './food-list.html',
  styleUrl: './food-list.css'
})
export class FoodList {
  private route=inject(ActivatedRoute);
  protected foodList=this.route.snapshot.data['food'];

}
