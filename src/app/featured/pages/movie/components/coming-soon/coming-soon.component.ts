import { Component, inject, OnInit } from '@angular/core';
import { MoivesService } from '../../../../services/moive/moives.service';
import { ItrendingMovie } from '../../../../interfaces/itrending-movie';
import { ReuseableCarouselComponent } from '../../../../../shared/components/business/reuseable-carousel/reuseable-carousel.component';
import { SkeletonAllSlidersComponent } from '../../../../../shared/components/ui/skeleton-all-sliders/skeleton-all-sliders.component';

@Component({
  selector: 'app-coming-soon',
  imports: [ReuseableCarouselComponent, SkeletonAllSlidersComponent],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css',
})
export class ComingSoonComponent implements OnInit {
  private readonly _moivesService = inject(MoivesService);
  comingSoonSeries!: ItrendingMovie[];
  imagePath: string = this._moivesService.PathImageUrlWithLowQuality;

  ngOnInit(): void {
    this.getCompingSoonMovie();
  }
  getCompingSoonMovie() {
    this._moivesService.getUpComingMovie().subscribe({
      next: (res) => {
        console.log(res);
        this.comingSoonSeries = res.results;
      },
    });
  }
}
