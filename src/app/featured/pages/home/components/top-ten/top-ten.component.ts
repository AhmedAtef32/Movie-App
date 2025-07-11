import { Component, inject, OnInit } from '@angular/core';

import { CardTopTenComponent } from '../../../../../shared/components/ui/card-top-ten/card-top-ten.component';
import { MoivesService } from '../../../../services/moive/moives.service';
import { TopTenService } from '../../../../../shared/services/topTen/top-ten.service';
import { IMovie } from '../../../../../shared/interfaces/movie';
import { TopTenSliderComponent } from '../../../../../shared/components/business/top-ten-slider/top-ten-slider.component';
import { SkeletonAllSlidersComponent } from "../../../../../shared/components/ui/skeleton-all-sliders/skeleton-all-sliders.component";
@Component({
  selector: 'app-top-ten',
  imports: [CardTopTenComponent, TopTenSliderComponent, SkeletonAllSlidersComponent],
  templateUrl: './top-ten.component.html',
  styleUrl: './top-ten.component.css',
})
export class TopTenComponent implements OnInit {
  private readonly _movieService = inject(MoivesService);
  private readonly _topTenService = inject(TopTenService);
  imagePath: string = this._movieService.PathImageUrl;
  topTenMovieOrSeries!: IMovie[];
  topTenWord: string = 'Movies';
  ngOnInit(): void {
    this.getTopTen();
  }

  /**
   * Retrieves the top ten movies or series of the day from the API
   * The data will be cached so that it will not be requested again if called multiple times.
   * The data will be logged in the console.
   * @param search {string} 'movie' or 'series' - Defaults to 'movie'
   */
  getTopTen(search: string = 'Movie') {
    this._topTenService.getTop(search).subscribe({
      next: (res) => {
        this.topTenMovieOrSeries = res.results;
        console.log(this.topTenMovieOrSeries);
      },
    });
  }

  changeSearch(event: Event) {
    let ele = event.target as HTMLSelectElement;
    this.topTenWord = ele.value;
    this.getTopTen(ele.value);
  }
}
