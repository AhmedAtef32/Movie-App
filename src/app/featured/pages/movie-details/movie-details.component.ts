import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MoivesService } from '../../services/moive/moives.service';
import { SliderMovieDetailsComponent } from './components/slider-movie-details/slider-movie-details.component';
import { IMovieDetails } from '../../interfaces/imovie-details';
import { IMovieVideos } from '../../interfaces/Imovie-videos';
import { IMovieImages } from '../../interfaces/Imovie-images';
import { MovieTrailerComponent } from './components/movie-trailer/movie-trailer.component';
import { ICast } from '../../interfaces/Icast';
import { MovieCastComponent } from './components/movie-cast/movie-cast.component';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { MovieRecommendationsComponent } from './components/movie-recommendations/movie-recommendations.component';
import { ItrendingMovie } from '../../interfaces/itrending-movie';

@Component({
  selector: 'app-movie-details',
  imports: [
    SliderMovieDetailsComponent,
    MovieTrailerComponent,
    MovieCastComponent,
    MovieRecommendationsComponent,
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  private readonly _movieService = inject(MoivesService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  movieID!: number;
  MovieDeatails!: IMovieDetails;
  MovieVideos!: IMovieVideos;
  MovieImages!: IMovieImages;
  MovieRecommendation!: ItrendingMovie[];
  MovieCast!: ICast[];

  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      this._ActivatedRoute.params.subscribe((params) => {
        this.movieID = params['id'];
        this.getMovieDetails();
        this.getMovieTrailer();
        this.getMovieImages();
        this.getMovieCast();
        this.getMovieRecommendations();
      });
    }
  }

  /**
   * Retrieves the details of a specific movie from the API and assigns it to `MovieDeatails`.
   * The movie ID used is hardcoded to movieID.
   */

  getMovieDetails() {
    this._movieService.getMovieDetails(this.movieID).subscribe({
      next: (res) => {
        this.MovieDeatails = res;
        console.log(res);

      }
    });
  }

  /**
   * Retrieves the trailer videos for a specific movie from the API and assigns it to `MovieVideos`.
   * The movie ID used is hardcoded to movieID.
   */
  getMovieTrailer() {
    this._movieService.getMovieTrailer(this.movieID).subscribe({
      next: (res) => {
        this.MovieVideos = res;
      }
    });
  }

  /**
   * Retrieves the images for a specific movie from the API and assigns them to `MovieImages`.
   * The movie ID used is hardcoded to movieID.
   */

  getMovieImages() {
    this._movieService.getMovieImages(this.movieID).subscribe({
      next: (res) => {
        this.MovieImages = res;
        console.log(this.MovieImages);

      }
    });
  }

  /**
   * Retrieves the cast information for a specific movie from the API and assigns it to `MovieCast`.
   * The movie ID used is hardcoded to movieID.
   */

  getMovieCast() {
    this._movieService.getCastMovie(this.movieID).subscribe({
      next: (res) => {
        this.MovieCast = res.cast;
      }
    });
  }

  /**
   * Retrieves the movie recommendations for a specific movie from the API and assigns them to `MovieRecommendation`.
   * The movie ID used is hardcoded to movieID.
   */
  getMovieRecommendations() {
    this._movieService.getMovieRecommendations(this.movieID).subscribe({
      next: (res) => {
        this.MovieRecommendation = res.results;
      }
    });
  }
}
