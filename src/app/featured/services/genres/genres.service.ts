import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviro } from '../../../core/environments/enviro';
import { Observable, shareReplay } from 'rxjs';
import { Igeres } from '../../interfaces/genres';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private _http: HttpClient) {}

  genres$: Observable<Igeres> | undefined;

  /**
   * Retrieves the list of movie genres from the API and caches it in the genre$ observable.
   * @returns An Observable containing the list of movie genres.
   */
  getGenres(): Observable<any> {
    if (!this.genres$) {
      this.genres$ = this._http
        .get<Igeres>(`${enviro.baseurl}/genre/movie/list?language=en-US`)
        .pipe(shareReplay(1));
    }
    return this.genres$;
  }

  /**
   * Retrieves the list of movies or series that belong to the genre with id
   * from the API and returns an Observable containing the list of movies or series.
   * @param id - The unique identifier of the genre.
   * @param type - The type of the content to be retrieved, it can be either
   *               'movie' or 'tv'.
   * @returns An Observable containing the list of movies or series that belong
   *          to the specified genre.
   */
  getGenresByType(id:number , type:string , numberOfPage:number = 1): Observable<any> {
    return this._http.get(
      `${enviro.baseurl}/discover/${type}?with_genres=${id}&language=en-US&page=${numberOfPage}`
    );
  }
}
