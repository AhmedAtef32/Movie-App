import {
  Component,
  ElementRef,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewChildren,
  WritableSignal,
} from '@angular/core';
import { ItrendingMovie } from '../../../../interfaces/itrending-movie';
import { MoivesService } from '../../../../services/moive/moives.service';
import { CarouselModule, SlidesOutputData } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { TermPipe } from '../../../../../core/pipe/term.pipe';
import { RouterLink } from '@angular/router';
import { SkeletonMainSliderComponent } from '../../../../../shared/components/ui/skeleton-main-slider/skeleton-main-slider.component';
import { MainSliderInEveryPageComponent } from "../../../../../shared/components/business/main-slider-in-every-page/main-slider-in-every-page.component";

@Component({
  selector: 'app-main-slider',
  imports: [
    CarouselModule,
    DatePipe,
    TermPipe,
    RouterLink,
    SkeletonMainSliderComponent,
    MainSliderInEveryPageComponent
],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css',
})
export class MainSliderComponent implements OnInit {
  private readonly _movieService = inject(MoivesService);

  trendingMoive!: ItrendingMovie[];
  pathImage: string = this._movieService.PathImageUrl;

  ngOnInit() {
    this.getTrendingMovies();
  }

  /**
   * This function will get the trending movies of the day from the API, the data will be cached
   * so that it will not be requested again if called multiple times.
   * The length of the movies will be set to the movieNumber signal
   */
  getTrendingMovies() {
    this._movieService.getTrendingMovies().subscribe({
      next: (res) => {
        this.trendingMoive = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }




}
