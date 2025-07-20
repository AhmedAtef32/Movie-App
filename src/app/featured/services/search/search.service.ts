import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviro } from '../../../core/environments/enviro';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http : HttpClient) { }

  getMoviesOrSeriesWithSearch(word:string , NumberOfpage:number= 1):Observable<any>{
   return this._http.get(`${enviro.baseurl}/search/multi?language=en-US&query=${word}&page=${NumberOfpage}&include_adult=false`);
  }
}
