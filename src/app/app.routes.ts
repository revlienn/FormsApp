import { Routes } from '@angular/router';
import { LoginReactive } from './login-reactive/login-reactive';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { FoodModule } from './food/food-module';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
   {path:'',redirectTo:'login',pathMatch:'full'},
   {path:'login',component:Login},
   {path:'login-reactive',component:LoginReactive},
   {path:'register',component:Registration},
   {path:'**',component:PageNotFound}
   // {
   //    path:'food',
   //    loadChildren:()=>import('./food/food-module').then((m)=>m.FoodModule)
   // },
];
