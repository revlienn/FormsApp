import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeveragesRoutingModule } from './beverages.routing';
import { NonAlcohol } from './non-alcohol/non-alcohol';
import { Alcohol } from './alcohol/alcohol';



@NgModule({
  declarations: [NonAlcohol,Alcohol],
  imports: [
    CommonModule,BeveragesRoutingModule
  ]
})
export class BeveragesModule {
   constructor() {
    console.log('✅ DrinksModule loaded');
  }
 }
