import { Component, inject, OnInit } from '@angular/core';

import { CardTopTenComponent } from '../../../../../shared/components/ui/card-top-ten/card-top-ten.component';
import { MoivesService } from '../../../../services/moive/moives.service';
import { TopTenService } from '../../../../../shared/services/topTen/top-ten.service';
import { IMovie } from '../../../../../shared/interfaces/movie';
import { TopTenSliderComponent } from '../../../../../shared/components/business/top-ten-slider/top-ten-slider.component';
import { SkeletonAllSlidersComponent } from "../../../../../shared/components/ui/skeleton-all-sliders/skeleton-all-sliders.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-ten',
  imports: [CardTopTenComponent, TopTenSliderComponent, SkeletonAllSlidersComponent],
  templateUrl: './top-ten.component.html',
  styleUrl: './top-ten.component.css',
})
export class TopTenComponent implements OnInit {
  private readonly _movieService = inject(MoivesService);
  private readonly _topTenService = inject(TopTenService);
   readonly _router = inject(Router);
  imagePath: string = this._movieService.PathImageUrlWithLowQuality;
  topTenMovieOrSeries!: IMovie[] | undefined;
  topTenWord: string = this._router.url.includes('series') ? 'tv' : 'Movie';
  // 'Movie'
  ngOnInit(): void {
    this.getTopTen();
  }

  /**
   * Retrieves the top ten movies or series of the day from the API
   * The data will be cached so that it will not be requested again if called multiple times.
   * The data will be logged in the console.
   * @param search {string} 'movie' or 'series' - Defaults to 'movie'
   */
  getTopTen() {
    this._topTenService.getTop(this.topTenWord).subscribe({
      next: (res) => {
        this.topTenMovieOrSeries = res.results;
      },
    });
  }

  /**
   * Updates the search type based on the user's selection from a dropdown.
   * Clears the current top ten list and fetches a new list based on the selected type.
   * @param event {Event} - The change event triggered by the dropdown selection.
   */
  changeSearch(event: Event) {
    this.topTenMovieOrSeries = undefined;
    let ele = event.target as HTMLSelectElement;
    this.topTenWord = ele.value;
    this.getTopTen();
  }
}
