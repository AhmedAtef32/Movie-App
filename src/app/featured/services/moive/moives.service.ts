import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import {
  IresTrendingMovie,
  ItrendingMovie,
} from '../../interfaces/itrending-movie';
import { enviro } from '../../../core/environments/enviro';

@Injectable({
  providedIn: 'root',
})
export class MoivesService {
  constructor(private http: HttpClient) {}

  trendingMoive$: Observable<ItrendingMovie[]> | undefined;
  trendingMovieThisWeek$: Observable<ItrendingMovie[]> | undefined;
  actionMovie$: Observable<ItrendingMovie[]> | undefined;
  upComoingMovie$: Observable<ItrendingMovie[]> | undefined;
  PathImageUrl: string = 'https://image.tmdb.org/t/p/w1280';
  PathImageUrlWithLowQuality: string = 'https://image.tmdb.org/t/p/w500';

  /**
   * This function will get the trending movies of the day from the API, the data will be cached
   * so that it will not be requested again if called multiple times.
   */
  getTrendingMovies(): Observable<any> {
    if (!this.trendingMoive$) {
      this.trendingMoive$ = this.http
        .get<ItrendingMovie[]>(
          `${enviro.baseurl}/trending/movie/day?language=en-US`
        )
        .pipe(shareReplay(1));
    }
    return this.trendingMoive$;
  }

  /**
   * This function will get the trending movies of the week from the API, the data will be cached
   * so that it will not be requested again if called multiple times.
   */
  getTrendingMoviesThisWeek(): Observable<any> {
    if (!this.trendingMovieThisWeek$) {
      this.trendingMovieThisWeek$ = this.http
        .get<ItrendingMovie[]>(
          `${enviro.baseurl}/trending/movie/week?language=en-US`
        )
        .pipe(shareReplay(1));
    }
    return this.trendingMovieThisWeek$;
  }

  /**
   * Retrieves the action movies from the API, the data will be cached
   * so that it will not be requested again if called multiple times.
   * @returns An Observable containing the action movies.
   */
  getActionMovie(): Observable<any> {
    if (!this.actionMovie$) {
      this.actionMovie$ = this.http
        .get<ItrendingMovie[]>(
          `${enviro.baseurl}/discover/movie?with_genres=28&language=en-US&page=1`
        )
        .pipe(shareReplay(1));
    }
    return this.actionMovie$;
  }

  /**
   * This function retrieves the details of a specific movie from the API.
   * @param id - The unique identifier of the movie.
   * @returns An Observable containing the details of the specified movie.
   */
  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${enviro.baseurl}/movie/${id}?language=en-US`);
  }

  /**
   * This function retrieves the trailer videos for a specific movie from the API.
   * @param id - The unique identifier of the movie.
   * @returns An Observable containing the trailer videos of the specified movie.
   */
  getMovieTrailer(id: number): Observable<any> {
    return this.http.get(`${enviro.baseurl}/movie/${id}/videos?language=en-US`);
  }

  /**
   * This function will get the movie images from the API
   * @param id the id of the movie
   * @returns Observable of the movie images
   */
  getMovieImages(id: number): Observable<any> {
    return this.http.get(
      `${enviro.baseurl}/movie/${id}/images?include_image_language=en`
    );
  }

  /**
   * Retrieves the cast information for a specific movie from the API.
   * @param id The unique identifier of the movie.
   * @returns An Observable containing the cast information of the specified movie.
   */
  getCastMovie(id: number): Observable<any> {
    return this.http.get(
      `${enviro.baseurl}/movie/${id}/credits?language=en-US`
    );
  }

  /**
   * Retrieves the movie recommendations for a specific movie from the API.
   * @param id The unique identifier of the movie.
   * @returns An Observable containing the movie recommendations of the specified movie.
   */
  getMovieRecommendations(id: number): Observable<any> {
    return this.http.get(
      `${enviro.baseurl}/movie/${id}/recommendations?language=en-US`
    );
  }

  /**
   * Retrieves the upcoming movies from the API, the data will be cached
   * @returns An Observable containing the upcoming movies.
   */
  getUpComingMovie(): Observable<any> {
    if (!this.upComoingMovie$) {
      this.upComoingMovie$ = this.http
        .get<ItrendingMovie[]>(
          `${enviro.baseurl}/movie/upcoming?language=en-US&page=1`
        )
        .pipe(shareReplay(1));
    }
    return this.upComoingMovie$;
  }
}
