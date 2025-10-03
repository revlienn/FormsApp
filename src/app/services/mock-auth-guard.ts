import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { MockLoginService } from './mocklogin-service';
import { of } from 'rxjs';

export const mockAuthGuard: CanActivateFn = (route, state) => {
  const mockLoginService=inject(MockLoginService);
  const router=inject(Router);

  return mockLoginService.isLoggedIn()?true:router.createUrlTree(['/register']);
};

export const mockAuthChildGuard: CanActivateChildFn =(route, state) => {
  return mockAuthGuard(route,state);
};
