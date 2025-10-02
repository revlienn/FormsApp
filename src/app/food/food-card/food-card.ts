import { Component, input } from '@angular/core';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Food } from '../../types/food';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-food-card',
  imports: [MatCardModule,MatButtonModule,RouterLink],
  templateUrl: './food-card.html',
  styleUrl: './food-card.css'
})
export class FoodCard {
  item=input<Food>();
}
