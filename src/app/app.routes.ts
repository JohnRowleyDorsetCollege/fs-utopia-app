import { provideRouter, Routes } from '@angular/router';
import { PublicComponent } from './components/public/public.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: PublicComponent, title: 'Public Page' },
  { path: 'login', component: LoginComponent, title: 'Login Page' },
  { path: 'protected', component: ProtectedComponent, canActivate: [authGuard], title: 'Protected Page' }
];

export const appRouting = provideRouter(routes);
