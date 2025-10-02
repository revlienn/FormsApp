import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../types/food';

@Component({
  selector: 'app-food-details',
  imports: [],
  templateUrl: './food-details.html',
  styleUrl: './food-details.css'
})
export class FoodDetails {
  private route=inject(ActivatedRoute);
  food:Food=this.route.snapshot.data['foodDetails']

}
