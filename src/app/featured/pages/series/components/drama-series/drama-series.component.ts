import { Component, inject, OnInit } from '@angular/core';
import { ItrendingMovie } from '../../../../interfaces/itrending-movie';
import { MoivesService } from '../../../../services/moive/moives.service';
import { SericesService } from '../../../../services/series/serices.service';
import { ReuseableCarouselComponent } from "../../../../../shared/components/business/reuseable-carousel/reuseable-carousel.component";
import { SkeletonAllSlidersComponent } from "../../../../../shared/components/ui/skeleton-all-sliders/skeleton-all-sliders.component";

@Component({
  selector: 'app-drama-series',
  imports: [ReuseableCarouselComponent, SkeletonAllSlidersComponent],
  templateUrl: './drama-series.component.html',
  styleUrl: './drama-series.component.css'
})
export class DramaSeriesComponent implements OnInit {
  private readonly _moivesService = inject(MoivesService);
  private readonly _sericesService = inject(SericesService);
  dramaSeries!: ItrendingMovie[];
  imagePath: string = this._moivesService.PathImageUrlWithLowQuality;

  ngOnInit(): void {
    this.getDramaSeries();
  }
  getDramaSeries() {
    this._sericesService.getDramaSeries().subscribe({
      next: (res) => {
        console.log(res);
        this.dramaSeries = res.results;
      },
    });
  }
}
