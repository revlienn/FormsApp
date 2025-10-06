import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { MockLoginService } from './mocklogin-service';
import {MatSnackBar} from '@angular/material/snack-bar'

export const canLoadDrinksGuard: CanMatchFn = (route, state) => {
  const mockLoginService=inject(MockLoginService);
  const router=inject(Router);
  const snackBar=inject(MatSnackBar);

  if(mockLoginService.isLoggedIn()){
    return true;
  }else{
    snackBar.open('Please login','Close',{duration:3000,verticalPosition:'bottom',horizontalPosition:'center'})
    return router.createUrlTree(['/login'])
  }
};
