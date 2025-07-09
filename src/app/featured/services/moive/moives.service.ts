import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  basicHeraders:HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUwMmI5NWQ0MTAyYWZkZDI3ZTA1ZmRhMzAxNjVkMyIsIm5iZiI6MTczNzM4MzQ1OC42ODUsInN1YiI6IjY3OGU1ZTIyMWMzNDFjODg5OTZkZTk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksjZpCaW7QAU2-ruF1UumvqQdq300x1J1SVo6isTYGA',
    accept: 'application/json',
  });

  trendingMoive$: Observable<ItrendingMovie[]> | undefined;
  trendingMovieThisWeek$: Observable<ItrendingMovie[]> | undefined;
  PathImageUrl: string = 'https://image.tmdb.org/t/p/original';

  /**
   * This function will get the trending movies of the day from the API, the data will be cached
   * so that it will not be requested again if called multiple times.
   */
  getTrendingMovies(): Observable<any> {
    if (!this.trendingMoive$) {
      this.trendingMoive$ = this.http
        .get<ItrendingMovie[]>(
          `${enviro.baseurl}/trending/movie/day?language=en-US`,
          { headers: this.basicHeraders }
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
          `${enviro.baseurl}/trending/movie/week?language=en-US`,
          { headers: this.basicHeraders }
        )
        .pipe(shareReplay(1));
    }
    return this.trendingMovieThisWeek$;
  }

  /**
   * This function retrieves the details of a specific movie from the API.
   * @param id - The unique identifier of the movie.
   * @returns An Observable containing the details of the specified movie.
   */
  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${enviro.baseurl}/movie/${id}?language=en-US`, {
      headers: this.basicHeraders,
    });
  }


/**
 * This function retrieves the trailer videos for a specific movie from the API.
 * @param id - The unique identifier of the movie.
 * @returns An Observable containing the trailer videos of the specified movie.
 */
  getMovieTrailer(id: number): Observable<any> {
    return this.http.get(
      `${enviro.baseurl}/movie/${id}/videos?language=en-US`,
      { headers: this.basicHeraders }
    );
  }

  /**
   * This function will get the movie images from the API
   * @param id the id of the movie
   * @returns Observable of the movie images
   */
  getMovieImages(id: number): Observable<any> {
    return this.http.get(`${enviro.baseurl}/movie/${id}/images?include_image_language=en`, {
      headers: this.basicHeraders,
    });
  }


  /**
   * Retrieves the cast information for a specific movie from the API.
   * @param id The unique identifier of the movie.
   * @returns An Observable containing the cast information of the specified movie.
   */
  getCastMovie(id: number): Observable<any> {
    return this.http.get(`${enviro.baseurl}/movie/${id}/credits?language=en-US`, {
      headers: this.basicHeraders,
    });
  }


  /**
   * Retrieves the movie recommendations for a specific movie from the API.
   * @param id The unique identifier of the movie.
   * @returns An Observable containing the movie recommendations of the specified movie.
   */
  getMovieRecommendations(id: number): Observable<any> {
    return this.http.get(`${enviro.baseurl}/movie/${id}/recommendations?language=en-US`, {
      headers: this.basicHeraders,
    });
  }

}
