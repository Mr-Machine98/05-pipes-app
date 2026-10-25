import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import localEs from '@angular/common/locales/es';
import localBr from '@angular/common/locales/pt';
import localEn from '@angular/common/locales/en';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import { LocalService } from './services/local.service';

registerLocaleData(localBr, 'pt');
registerLocaleData(localEn, 'en');
registerLocaleData(localEs, 'es');

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    {
      provide: LOCALE_ID,
      //useValue: 'pt'
      deps: [LocalService],
      useFactory: (localService: LocalService) => localService.getLocale
    }
  ]
};
