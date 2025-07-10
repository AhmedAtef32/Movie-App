import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviro } from '../../../core/environments/enviro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesDetailsService {


  constructor(private http: HttpClient) { }


     basicHeraders:HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUwMmI5NWQ0MTAyYWZkZDI3ZTA1ZmRhMzAxNjVkMyIsIm5iZiI6MTczNzM4MzQ1OC42ODUsInN1YiI6IjY3OGU1ZTIyMWMzNDFjODg5OTZkZTk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksjZpCaW7QAU2-ruF1UumvqQdq300x1J1SVo6isTYGA',
    accept: 'application/json',
  });

   /**
     * This function retrieves the details of a specific Tv from the API.
     * @param id - The unique identifier of the Tv.
     * @returns An Observable containing the details of the specified Tv.
     */
    getTvDetails(id: number): Observable<any> {
      return this.http.get(`${enviro.baseurl}/tv/${id}?language=en-US`, {
        headers: this.basicHeraders,
      });
    }


  /**
   * This function retrieves the trailer videos for a specific Tv from the API.
   * @param id - The unique identifier of the Tv.
   * @returns An Observable containing the trailer videos of the specified Tv.
   */
    getTvTrailer(id: number): Observable<any> {
      return this.http.get(
        `${enviro.baseurl}/tv/${id}/videos?language=en-US`,
        { headers: this.basicHeraders }
      );
    }

    /**
     * This function will get the Tv images from the API
     * @param id the id of the Tv
     * @returns Observable of the Tv images
     */
    getTvImages(id: number): Observable<any> {
      return this.http.get(`${enviro.baseurl}/tv/${id}/images?include_image_language=en`, {
        headers: this.basicHeraders,
      });
    }


    /**
     * Retrieves the cast information for a specific Tv from the API.
     * @param id The unique identifier of the Tv.
     * @returns An Observable containing the cast information of the specified Tv.
     */
    getCastTv(id: number): Observable<any> {
      return this.http.get(`${enviro.baseurl}/tv/${id}/credits?language=en-US`, {
        headers: this.basicHeraders,
      });
    }


    /**
     * Retrieves the Tv recommendations for a specific Tv from the API.
     * @param id The unique identifier of the Tv.
     * @returns An Observable containing the Tv recommendations of the specified Tv.
     */
    getTvRecommendations(id: number): Observable<any> {
      return this.http.get(`${enviro.baseurl}/tv/${id}/recommendations?language=en-US`, {
        headers: this.basicHeraders,
      });
    }
}
