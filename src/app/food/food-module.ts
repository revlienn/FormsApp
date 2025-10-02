import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Foods } from './foods/foods';

const routes:Routes=[
  {path:'',component:Foods}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class FoodModule { }
