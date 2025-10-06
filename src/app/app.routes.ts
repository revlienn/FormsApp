import { Routes } from '@angular/router';
import { LoginReactive } from './login-reactive/login-reactive';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { PageNotFound } from './page-not-found/page-not-found';
import { FoodList } from './food/food-list/food-list';
import { FoodDetails } from './food/food-details/food-details';
import { foodResolver } from './services/food-resolver';
import { foodlistResolver } from './services/foodlist-resolver';
import { mockAuthChildGuard, mockAuthGuard } from './services/mock-auth-guard';
import { confirmExitGuard } from './services/confirm-exit-guard';

export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'login', component: Login },
   { path: 'login-reactive', component: LoginReactive },
   { path: 'register', component: Registration, canDeactivate:[confirmExitGuard] },
   {
      path: 'food', 
      resolve: {food:foodlistResolver}, 
      canActivate: [mockAuthGuard], 
      canActivateChild: [mockAuthChildGuard], 
      children: [
         {
            path: '',
            component: FoodList
         },
         {
            path: ':id',
            component: FoodDetails,
            resolve:{foodDetails:foodResolver}
         }
      ]
   },
   { path: '**', component: PageNotFound }
   // {
   //    path:'food',
   //    loadChildren:()=>import('./food/food-module').then((m)=>m.FoodModule)
   // },
];
