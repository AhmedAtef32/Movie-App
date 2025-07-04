import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import {  IresTrendingMovie, ItrendingMovie } from '../../interfaces/itrending-movie';
import { enviro } from '../../../core/environments/enviro';

@Injectable({
  providedIn: 'root'
})
export class MoivesService {

  constructor(private http : HttpClient) { }
  basicHeraders = new HttpHeaders({
          'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUwMmI5NWQ0MTAyYWZkZDI3ZTA1ZmRhMzAxNjVkMyIsIm5iZiI6MTczNzM4MzQ1OC42ODUsInN1YiI6IjY3OGU1ZTIyMWMzNDFjODg5OTZkZTk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksjZpCaW7QAU2-ruF1UumvqQdq300x1J1SVo6isTYGA'
         ,
         'accept' : 'application/json'
        });

  trendingMoive$:Observable<ItrendingMovie[]>|undefined;
  trendingMovieThisWeek$:Observable<ItrendingMovie[]>|undefined;
  PathImageUrl :string = 'https://image.tmdb.org/t/p/original';


  /**
   * This function will get the trending movies of the day from the API, the data will be cached
   * so that it will not be requested again if called multiple times.
   */
  getTrendingMovies():Observable<any>{
    if(!this.trendingMoive$){
      this.trendingMoive$ = this.http.get<ItrendingMovie[]>(`${enviro.baseurl}/trending/all/day?api_key=${enviro.apikey}` ,
         {headers : this.basicHeraders} )
         .pipe(shareReplay(1));
    }
    return this.trendingMoive$;
  }


  /**
   * This function will get the trending movies of the week from the API, the data will be cached
   * so that it will not be requested again if called multiple times.
   */
  getTrendingMoviesThisWeek():Observable<any>{
    if(!this.trendingMovieThisWeek$){
      this.trendingMovieThisWeek$ = this.http.get<ItrendingMovie[]>(`${enviro.baseurl}/trending/all/week?api_key=${enviro.apikey}` ,
         {headers : this.basicHeraders} )
         .pipe(shareReplay(1));
    }
    return this.trendingMovieThisWeek$;
  }

}
