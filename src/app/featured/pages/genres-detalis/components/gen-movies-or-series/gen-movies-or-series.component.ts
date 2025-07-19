import { Component, Input, OnInit, inject } from '@angular/core';
import { MovieCardComponent } from '../../../../../shared/components/ui/movie-card/movie-card.component';
import { IMovie } from '../../../../../shared/interfaces/movie';
import { MoivesService } from '../../../../services/moive/moives.service';

@Component({
  selector: 'app-gen-movies-or-series',
  imports: [MovieCardComponent],
  templateUrl: './gen-movies-or-series.component.html',
  styleUrl: './gen-movies-or-series.component.css',
})
export class GenMoviesOrSeriesComponent  {
  private readonly _moivesService = inject(MoivesService);
  @Input({ required: true }) movieOrSeries!: IMovie[];
  @Input({ required: true }) type!: string;
  imagePath: string = this._moivesService.PathImageUrlWithLowQuality;

}
