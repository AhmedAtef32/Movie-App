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
import { SkeletonMainSliderComponent } from "../../../../../shared/components/ui/skeleton-main-slider/skeleton-main-slider.component";

@Component({
  selector: 'app-main-slider',
  imports: [CarouselModule, DatePipe, TermPipe, RouterLink, SkeletonMainSliderComponent],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css',
})
export class MainSliderComponent implements OnInit {
  private readonly _movieService = inject(MoivesService);

  trendingMoive!: ItrendingMovie[];
  pathImage: string = this._movieService.PathImageUrl;
  movieNumber: WritableSignal<number> = signal(1);
  counter: WritableSignal<number> = signal(1);
  @ViewChildren('movieDetails') movieDetails!: ElementRef<HTMLElement>[];

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
        this.movieNumber.set(res.results.length);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    lazyLoad: true,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 20,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  onTranslated(event: SlidesOutputData) {
    this.movieDetails.forEach((ele) => {
      ele.nativeElement.classList.remove('animate__fadeInUp');
      ele.nativeElement.classList.add('opacity-0');

      setTimeout(() => {
        ele.nativeElement.classList.add('opacity-100');
        ele.nativeElement.classList.add('animate__fadeInUp');
      }, 30);
    });

    this.counter.set(event.startPosition! + 1);
  }
}
