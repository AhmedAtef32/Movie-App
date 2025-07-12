import { Component, inject, OnInit } from '@angular/core';
import { ReuseableCarouselComponent } from '../../../../../shared/components/business/reuseable-carousel/reuseable-carousel.component';
import { MoivesService } from '../../../../services/moive/moives.service';
import { ItrendingMovie } from '../../../../interfaces/itrending-movie';
import { SkeletonAllSlidersComponent } from "../../../../../shared/components/ui/skeleton-all-sliders/skeleton-all-sliders.component";

@Component({
  selector: 'app-trending-this-week',
  imports: [ReuseableCarouselComponent, SkeletonAllSlidersComponent],
  templateUrl: './trending-this-week.component.html',
  styleUrl: './trending-this-week.component.css',
})
export class TrendingThisWeekComponent implements OnInit {
  private readonly _movieService = inject(MoivesService);
  trendingMovieThisWeek!: ItrendingMovie[];
  imagePath: string = this._movieService.PathImageUrlWithLowQuality;
  ngOnInit(): void {
    this.getTrendingMoviesThisWeek();
  }

  getTrendingMoviesThisWeek() {
    return this._movieService.getTrendingMoviesThisWeek().subscribe({
      next: (res) => {
        this.trendingMovieThisWeek = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
