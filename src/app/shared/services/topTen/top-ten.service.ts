import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { IMovie } from '../../interfaces/movie';
import { enviro } from '../../../core/environments/enviro';

@Injectable({
  providedIn: 'root'
})
export class TopTenService {

  constructor(private _httpClient: HttpClient) { }
  topMovie$:Observable<IMovie> | undefined;
  topSeries$:Observable<IMovie> | undefined;



  getTop(search:string):Observable<any>{
    if(search==="Movie"){
      if(!this.topMovie$){
        this.topMovie$ = this._httpClient.get<IMovie>(`${enviro.baseurl}/trending/movie/week`).pipe(shareReplay(1));
      }

      return this.topMovie$

    }else{
     if(!this.topSeries$){
        this.topSeries$ = this._httpClient.get<IMovie>(`${enviro.baseurl}/trending/tv/week`).pipe(shareReplay(1));
      }
      return this.topSeries$
      }
  }

}
