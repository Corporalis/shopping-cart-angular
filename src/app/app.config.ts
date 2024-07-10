import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  ApplicationModule,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { ProductEffects } from './store/product/effects/product.effects';
import { reducers } from './store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(reducers),
    provideEffects(ProductEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withFetch()),
    ApplicationModule,
  ],
};
