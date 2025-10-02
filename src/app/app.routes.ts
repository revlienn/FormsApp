import { Routes } from '@angular/router';
import { LoginReactive } from './login-reactive/login-reactive';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { PageNotFound } from './page-not-found/page-not-found';
import { FoodList } from './food/food-list/food-list';
import { FoodDetails } from './food/food-details/food-details';
import { foodResolver } from './services/food-resolver';

export const routes: Routes = [
   {path:'',redirectTo:'login',pathMatch:'full'},
   {path:'login',component:Login},
   {path:'login-reactive',component:LoginReactive},
   {path:'register',component:Registration},
   {path:'food',component:FoodList},
   {path:'food/:id',component:FoodDetails,resolve:{foodDetails:foodResolver}},
   {path:'**',component:PageNotFound}
   // {
   //    path:'food',
   //    loadChildren:()=>import('./food/food-module').then((m)=>m.FoodModule)
   // },
];
