import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./featured/pages/home/home.component').then(m => m.HomeComponent) , title: 'Home'},
];
