import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { BooksService } from './books/books.service';
import { BooksJsonServerService } from './books/books-json-server.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), // active la possibilité de faire des requêtes
    { 
      provide: BooksService, // c'est ce que je peux faire
      useClass: BooksJsonServerService // c'est ce que je fais réellement
    }
  ]
};
