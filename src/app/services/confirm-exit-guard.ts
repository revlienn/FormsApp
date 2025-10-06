import { CanDeactivateFn, Router } from '@angular/router';
import { Registration } from '../registration/registration';
import { inject } from '@angular/core';

export const confirmExitGuard: CanDeactivateFn<Registration> = (component, currentRoute, currentState, nextState) => {
  return component.confirmExit();

}
