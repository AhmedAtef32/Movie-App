import { Component, inject, OnInit } from '@angular/core';
import { ReuseableCarouselComponent } from "../../../../../shared/components/business/reuseable-carousel/reuseable-carousel.component";
import { MoivesService } from '../../../../services/moive/moives.service';
import { ItrendingMovie } from '../../../../interfaces/itrending-movie';

@Component({
  selector: 'app-trending-this-week',
  imports: [ReuseableCarouselComponent],
  templateUrl: './trending-this-week.component.html',
  styleUrl: './trending-this-week.component.css'
})
export class TrendingThisWeekComponent implements OnInit {
  private readonly _movieService = inject(MoivesService);
  trendingMovieThisWeek!:ItrendingMovie[]
  imagePath:string = this._movieService.PathImageUrl
  ngOnInit(): void {
    this.getTrendingMoviesThisWeek();
  }

  getTrendingMoviesThisWeek() {
    return this._movieService.getTrendingMoviesThisWeek().subscribe({
      next: (res) => {
        console.log(res.results);
        this.trendingMovieThisWeek = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
