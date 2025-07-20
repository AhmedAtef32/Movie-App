import { Component, inject } from '@angular/core';
import { ItrendingMovie } from '../../../../interfaces/itrending-movie';
import { MoivesService } from '../../../../services/moive/moives.service';
import { MainSliderInEveryPageComponent } from "../../../../../shared/components/business/main-slider-in-every-page/main-slider-in-every-page.component";
import { SkeletonMainSliderComponent } from "../../../../../shared/components/ui/skeleton-main-slider/skeleton-main-slider.component";
import { SericesService } from '../../../../services/series/serices.service';

@Component({
  selector: 'app-series-main-slider',
  imports: [MainSliderInEveryPageComponent, SkeletonMainSliderComponent],
  templateUrl: './series-main-slider.component.html',
  styleUrl: './series-main-slider.component.css'
})
export class SeriesMainSliderComponent {
  private readonly _movieService = inject(MoivesService);
  private readonly _sericesService = inject(SericesService);

  trendingSeries!: ItrendingMovie[];
  pathImage: string = this._movieService.PathImageUrl;

  ngOnInit() {
    this.getTrendingSeries();
  }


  getTrendingSeries() {
    this._sericesService.getTrendingSeries().subscribe({
      next: (res) => {
        this.trendingSeries = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
