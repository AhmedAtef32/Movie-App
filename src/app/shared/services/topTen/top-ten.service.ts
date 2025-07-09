import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { IMovie } from '../../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class TopTenService {

  constructor(private _httpClient: HttpClient) { }
  topMovie$:Observable<IMovie> | undefined;
  topSeries$:Observable<IMovie> | undefined;


    basicHeraders:HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUwMmI5NWQ0MTAyYWZkZDI3ZTA1ZmRhMzAxNjVkMyIsIm5iZiI6MTczNzM4MzQ1OC42ODUsInN1YiI6IjY3OGU1ZTIyMWMzNDFjODg5OTZkZTk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksjZpCaW7QAU2-ruF1UumvqQdq300x1J1SVo6isTYGA',
    accept: 'application/json',
  });

  getTop(search:string):Observable<any>{
    if(search==="Movie"){
      if(!this.topMovie$){
        this.topMovie$ = this._httpClient.get<IMovie>('https://api.themoviedb.org/3/trending/movie/week', {headers:this.basicHeraders}).pipe(shareReplay(1));
      }

      return this.topMovie$

    }else{
     if(!this.topSeries$){
        this.topSeries$ = this._httpClient.get<IMovie>('https://api.themoviedb.org/3/trending/tv/week', {headers:this.basicHeraders}).pipe(shareReplay(1));
      }

      return this.topSeries$
      }
  }

}
