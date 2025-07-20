import { Component, inject, OnInit } from '@angular/core';
import { ItrendingMovie } from '../../../../interfaces/itrending-movie';
import { MoivesService } from '../../../../services/moive/moives.service';
import { SericesService } from '../../../../services/series/serices.service';
import { ReuseableCarouselComponent } from "../../../../../shared/components/business/reuseable-carousel/reuseable-carousel.component";
import { SkeletonAllSlidersComponent } from "../../../../../shared/components/ui/skeleton-all-sliders/skeleton-all-sliders.component";

@Component({
  selector: 'app-upcoming-series',
  imports: [ReuseableCarouselComponent, SkeletonAllSlidersComponent],
  templateUrl: './upcoming-series.component.html',
  styleUrl: './upcoming-series.component.css'
})
export class UpcomingSeriesComponent implements OnInit {
 private readonly _moivesService = inject(MoivesService);
 private readonly _sericesService = inject(SericesService);
  comingSoonSeries!: ItrendingMovie[];
  imagePath: string = this._moivesService.PathImageUrlWithLowQuality;

  ngOnInit(): void {
    this.getCompingSoonSeries();
  }
  getCompingSoonSeries() {
    this._sericesService.getUpComingMovie().subscribe({
      next: (res) => {
        console.log(res);
        this.comingSoonSeries = res.results;
      },
    });
  }
}
