import { Component, inject, Input } from '@angular/core';
import { ItrendingMovie } from '../../../../interfaces/itrending-movie';
import { ReuseableCarouselComponent } from '../../../../../shared/components/business/reuseable-carousel/reuseable-carousel.component';
import { MoivesService } from '../../../../services/moive/moives.service';

@Component({
  selector: 'app-movie-recommendations',
  imports: [ReuseableCarouselComponent],
  templateUrl: './movie-recommendations.component.html',
  styleUrl: './movie-recommendations.component.css',
})
export class MovieRecommendationsComponent {
  private readonly _movieService = inject(MoivesService);

  pathImage: string = this._movieService.PathImageUrl;
  @Input({ required: true }) recommendationMovie!: ItrendingMovie[];
  @Input({ required: true }) type!: string;
}
