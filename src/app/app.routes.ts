import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./featured/pages/home/home.component').then(
        (c) => c.HomeComponent
      ),
    title: 'Home',
  },
  {
    path: 'movieDetails/:id',
    loadComponent: () =>
      import('./featured/pages/movie-details/movie-details.component').then(
        (c) => c.MovieDetailsComponent
      ),
    title: 'Movie Details',
  },
  {
    path: 'seriesDetails/:id',
    loadComponent: () =>
      import('./featured/pages/series-details/series-details.component').then(
        (c) => c.SeriesDetailsComponent
      ),
    title: 'Series Details',
  },
];
