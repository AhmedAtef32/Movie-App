import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { IMovie } from '../../../shared/interfaces/movie';
import { IMovieDetails } from '../../../featured/interfaces/imovie-details';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly _http: HttpClient) {}

  favoriteitems$:WritableSignal<IMovieDetails[]> = signal([]);
  listitems$:WritableSignal<IMovieDetails[]> = signal([]);


  addToFavoritesOrDelete(movie: IMovieDetails) {
    this.favoriteitems$.update((items) => [...items, movie]);
    localStorage.setItem('favoriteItems', JSON.stringify(this.favoriteitems$()));
  }

  removeFromFavorites(movie: IMovieDetails) {
    this.favoriteitems$.update((items) => items.filter((item) => item.id !== movie.id));
    localStorage.setItem('favoriteItems', JSON.stringify(this.favoriteitems$()));
  }

  getFavorites() {
    this.favoriteitems$.set(JSON.parse(localStorage.getItem('favoriteItems')!));
  }

}
