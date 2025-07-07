import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./featured/pages/home/home.component').then(m => m.HomeComponent) , title: 'Home'},
  {path: 'movieDetails/:id', loadComponent: () => import('./featured/pages/movie-details/movie-details.component').then(m => m.MovieDetailsComponent) , title: 'movie Details'},
];
