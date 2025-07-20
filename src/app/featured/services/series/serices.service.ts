import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ItrendingMovie } from '../../interfaces/itrending-movie';
import { enviro } from '../../../core/environments/enviro';

@Injectable({
  providedIn: 'root',
})
export class SericesService {
  constructor(private _http: HttpClient) {}
  trendingSeries$: Observable<ItrendingMovie[]> | undefined;
  TopTenSeries$: Observable<ItrendingMovie[]> | undefined;
  upComoingSeries$:Observable<ItrendingMovie[]> | undefined
  dramaSeries$:Observable<ItrendingMovie[]> | undefined

  /**
   * Retrieves the trending series from the API, the data will be cached
   * @returns An Observable containing the trending series.
   */
  getTrendingSeries(): Observable<any> {
    if (!this.trendingSeries$) {
      this.trendingSeries$ = this._http
        .get<ItrendingMovie[]>(
          `${enviro.baseurl}/trending/tv/day?language=en-US`
        )
        .pipe(shareReplay(1));
    }
    return this.trendingSeries$;
  }

  /**
   * Retrieves the top ten series of the week from the API. The data will be cached
   * so that it will not be requested again if called multiple times.
   * @returns An Observable containing the top ten series of the week.
   */
  getTopTengSeries(): Observable<any> {
    if (!this.TopTenSeries$) {
      this.TopTenSeries$ = this._http
        .get<ItrendingMovie[]>(`${enviro.baseurl}/trending/tv/week`)
        .pipe(shareReplay(1));
    }
    return this.TopTenSeries$;
  }

  /**
   * Retrieves the upcoming series from the API, caching the data to prevent
   * multiple requests on subsequent calls.
   * @returns An Observable containing the upcoming series.
   */

  getUpComingMovie(): Observable<any> {
    if (!this.upComoingSeries$) {
      this.upComoingSeries$ = this._http
        .get<ItrendingMovie[]>(
          `${enviro.baseurl}/discover/tv?language=en-US&page=1`
        )
        .pipe(shareReplay(1));
    }
    return this.upComoingSeries$;
  }

  /**
   * Retrieves the details of a specific series from the API.
   * @param id The unique identifier of the series.
   * @returns An Observable containing the details of the specified series.
   */
    getSeriesDetails(id: number): Observable<any> {
    return this._http.get(`${enviro.baseurl}/tv/${id}?language=en-US`);
  }




  /**
   * Retrieves the drama series from the API, the data will be cached
   * @returns An Observable containing the drama series.
   */
    getDramaSeries(): Observable<any> {
    if (!this.dramaSeries$) {
      this.dramaSeries$ = this._http
        .get<ItrendingMovie[]>(
          `${enviro.baseurl}/discover/movie?with_genres=18&language=en-US&page=1`
        )
        .pipe(shareReplay(1));
    }
    return this.dramaSeries$;
  }

}
