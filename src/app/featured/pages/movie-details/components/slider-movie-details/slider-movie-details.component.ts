import { Component, inject, Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoivesService } from '../../../../services/moive/moives.service';
import { IMovieDetails } from '../../../../interfaces/imovie-details';
import { IMovieVideos } from '../../../../interfaces/Imovie-videos';
import { IMovieImages } from '../../../../interfaces/Imovie-images';
import { TermPipe } from '../../../../../core/pipe/term.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-slider-movie-details',
  imports: [CarouselModule, TermPipe, DatePipe],
  templateUrl: './slider-movie-details.component.html',
  styleUrl: './slider-movie-details.component.css',
})
export class SliderMovieDetailsComponent {
  private readonly _movieService = inject(MoivesService);
  pathImage: string = this._movieService.PathImageUrl;

  @Input({ required: true }) movieDetails!: IMovieDetails;
  @Input({ required: true }) movieVideos!: IMovieVideos;
  @Input({ required: true }) MovieImages!: IMovieImages;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };
}
