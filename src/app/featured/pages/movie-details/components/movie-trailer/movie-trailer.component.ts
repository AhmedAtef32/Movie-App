import { Component, Input } from '@angular/core';
import { IMovieDetails } from '../../../../interfaces/imovie-details';
import { IMovieImages } from '../../../../interfaces/Imovie-images';
import { IMovieVideos } from '../../../../interfaces/Imovie-videos';
import { SafeUrlPipe } from '../../../../../core/pipe/safeUrl/safe-url.pipe';
import { SkeletonMovieOrSeriesDetailsComponent } from "../../../../../shared/components/ui/skeleton-movie-or-series-details/skeleton-movie-or-series-details.component";

@Component({
  selector: 'app-movie-trailer',
  imports: [SafeUrlPipe, SkeletonMovieOrSeriesDetailsComponent],
  templateUrl: './movie-trailer.component.html',
  styleUrl: './movie-trailer.component.css'
})
export class MovieTrailerComponent {


  @Input({ required: true }) movieDetails!: IMovieDetails;
  @Input({ required: true }) movieVideos!: IMovieVideos;
  @Input({ required: true }) MovieImages!: IMovieImages;
}
