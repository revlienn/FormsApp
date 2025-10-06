import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Alcohol } from './alcohol/alcohol';
import { NonAlcohol } from './non-alcohol/non-alcohol';

const routes:Routes=[
  {path:'',component:NonAlcohol},
  {path:'',component:Alcohol}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BeveragesRoutingModule { }
