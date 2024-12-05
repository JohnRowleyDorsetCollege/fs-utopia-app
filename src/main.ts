import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { appRouting } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    appRouting,
    provideHttpClient() // Replaces importProvidersFrom for cleaner syntax
  ]
});
