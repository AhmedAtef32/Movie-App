import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenMainSliderComponent } from './components/gen-main-slider/gen-main-slider.component';
import { GenresService } from '../../services/genres/genres.service';
import { IMovie } from '../../../shared/interfaces/movie';
import { GenMoviesOrSeriesComponent } from './components/gen-movies-or-series/gen-movies-or-series.component';
import { SkeletonAllSlidersComponent } from '../../../shared/components/ui/skeleton-all-sliders/skeleton-all-sliders.component';

@Component({
  selector: 'app-genres-detalis',
  imports: [
    GenMainSliderComponent,
    GenMoviesOrSeriesComponent,
    SkeletonAllSlidersComponent,
  ],
  templateUrl: './genres-detalis.component.html',
  styleUrl: './genres-detalis.component.css',
})
export class GenresDetalisComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _genresService = inject(GenresService);
  movieOrSeries!: IMovie[] | undefined;
  id!: number;
  type!: string;
  genName!: string;
  numberOfPage: number = 1;
  ngOnInit(): void {
    this.getParams();
    this.getMovieOrSeries();
  }


  getParams() {
    this._activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.type = params['type'];
      this.genName = params['grnName'];
    });
  }


  /**
   * Retrieves the list of movies or series that belong to the genre with id
   * from the API and assigns it to the movieOrSeries property.
   * @param id - The unique identifier of the genre.
   * @param type - The type of the content to be retrieved, it can be either
   *               'movie' or 'tv'.
   * @param numberOfPage - The page number to be retrieved.
   */
  getMovieOrSeries() {
    this._genresService
      .getGenresByType(this.id, this.type, this.numberOfPage)
      .subscribe({
        next: (res) => {
          this.movieOrSeries = res.results;
          console.log(this.movieOrSeries);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  /**
   * Changes the page of the movies or series of the genre.
   * @param number - The number to change the page, it can be 1 or -1.
   * If 1, it will go to the next page, if -1, it will go to the previous page.
   */
  changePage(number: number) {
    this.movieOrSeries = undefined;

    if (number == 1) {
      this.numberOfPage++;
      this.getMovieOrSeries();
    } else {
      this.numberOfPage--;
      this.getMovieOrSeries();
    }
  }
}
