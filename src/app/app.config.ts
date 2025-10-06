import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withPreloading, withRouterConfig, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { CustomPreloadStrategy } from './services/custom-preload-snack.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    CustomPreloadStrategy,
    provideRouter(routes,withViewTransitions(),withPreloading(CustomPreloadStrategy),withRouterConfig({
      paramsInheritanceStrategy:'always',
    }))
  ]
};
