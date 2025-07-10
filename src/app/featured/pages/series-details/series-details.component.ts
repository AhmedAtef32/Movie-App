import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesDetailsService } from '../../services/seriesDetails/series-details.service';
import { ICast } from '../../interfaces/Icast';
import { IMovieDetails } from '../../interfaces/imovie-details';
import { IMovieImages } from '../../interfaces/Imovie-images';
import { IMovieVideos } from '../../interfaces/Imovie-videos';
import { ItrendingMovie } from '../../interfaces/itrending-movie';
import { SliderMovieDetailsComponent } from "../movie-details/components/slider-movie-details/slider-movie-details.component";
import { MovieTrailerComponent } from "../movie-details/components/movie-trailer/movie-trailer.component";
import { MovieCastComponent } from "../movie-details/components/movie-cast/movie-cast.component";
import { MovieRecommendationsComponent } from "../movie-details/components/movie-recommendations/movie-recommendations.component";

@Component({
  selector: 'app-series-details',
  imports: [SliderMovieDetailsComponent, MovieTrailerComponent, MovieCastComponent, MovieRecommendationsComponent],
  templateUrl: './series-details.component.html',
  styleUrl: './series-details.component.css'
})
export class SeriesDetailsComponent implements OnInit{

  private readonly _activatedRoute = inject(ActivatedRoute)
  private readonly _seriesDetailsService = inject(SeriesDetailsService)

  seriesID!:number
  seriesDeatails!: IMovieDetails;
  seriesVideos!: IMovieVideos;
  seriesImages!: IMovieImages;
  seriesRecommendation!: ItrendingMovie[];
  seriesCast!: ICast[];
  ngOnInit(): void {
    this.getIDFromUrl();
    this.getMovieDetails();
    this.getSeriesTrailer();
    this.getSeriesImages();
    this.getSeriesCast();
    this.getSeriesRecommendations();
  }


  /**
   * Retrieves the series ID from the URL parameters and assigns it to the
   * component's `seriesID` property.
  **/
  getIDFromUrl() {
    this._activatedRoute.params.subscribe((params) => {
      this.seriesID = params['id'];
    });
  }




  /**
   * Retrieves the details of a specific series from the API and assigns it to
   * the component's `seriesDeatails` property.
   */
  getMovieDetails() {
    this._seriesDetailsService.getTvDetails(this.seriesID).subscribe({
      next: (res) => {
        this.seriesDeatails = res;
      }
    });
  }





  /**
   * Retrieves the trailer videos for a specific series from the API and assigns it to
   * the component's `seriesVideos` property.
   */
  getSeriesTrailer() {
    this._seriesDetailsService.getTvTrailer(this.seriesID).subscribe({
      next: (res) => {
        this.seriesVideos = res;
      }
    });
  }






  /**
   * Retrieves the images of a specific series from the API and assigns them to
   * the component's `seriesImages` property.
   */
  getSeriesImages() {
    this._seriesDetailsService.getTvImages(this.seriesID).subscribe({
      next: (res) => {
        this.seriesImages = res;
      }
    });
  }




  /**
   * Retrieves the cast information for a specific series from the API and assigns it to
   * the component's `seriesCast` property.
   */
  getSeriesCast() {
    this._seriesDetailsService.getCastTv(this.seriesID).subscribe({
      next: (res) => {
        this.seriesCast = res.cast;
      }
    });
  }




  /**
   * Retrieves the recommendations for a specific series from the API and assigns them to
   * the component's `seriesRecommendation` property.
   */
  getSeriesRecommendations() {
    this._seriesDetailsService.getTvRecommendations(this.seriesID).subscribe({
      next: (res) => {
        this.seriesRecommendation = res.results;
      }
    });
  }






}
