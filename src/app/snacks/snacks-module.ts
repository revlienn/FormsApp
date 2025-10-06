import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fruits } from './fruits/fruits';
import { SnacksRoutingModule } from './snacks.routing';



@NgModule({
  declarations: [Fruits],
  imports: [
    CommonModule,SnacksRoutingModule
  ]
})
export class SnacksModule { 
  constructor(){console.log('✅ Snacks module loaded')}
}
