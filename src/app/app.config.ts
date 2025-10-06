import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { prefix } from '@fortawesome/free-solid-svg-icons';
import { CustomPreloadStrategy } from './services/custom-preload-snack.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    CustomPreloadStrategy,
    provideRouter(routes,withViewTransitions(),withPreloading(CustomPreloadStrategy))
  ]
};
