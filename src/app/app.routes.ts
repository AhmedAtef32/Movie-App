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

  {
    path: 'genres',
    loadComponent: () =>
      import('./featured/pages/genres/genres.component').then(
        (c) => c.GenresComponent
      ),
    title: 'Genres',
  },


  {
    path: 'gen/:grnName/:type/:id',
    loadComponent: () =>
      import('./featured/pages/genres-detalis/genres-detalis.component').then(
        (c) => c.GenresDetalisComponent
      ),
    title: 'Genres Detalis',
  },

   {
    path: 'search',
    loadComponent: () =>
      import('./featured/pages/search/search.component').then(
        (c) => c.SearchComponent
      ),
    title: 'Search',
  },

  {
    path: 'movies',
    loadComponent: () =>
      import('./featured/pages/movie/movie.component').then(
        (c) => c.MovieComponent
      ),
    title: 'Movies',
  },
   {
    path: 'series',
    loadComponent: () =>
      import('./featured/pages/series/series.component').then(
        (c) => c.SeriesComponent
      ),
    title: 'Sreies',
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./featured/pages/favourtie/favourtie.component').then(
        (c) => c.FavourtieComponent
      ),
    title: 'Favorites',
  },
];
