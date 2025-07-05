import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
  ViewChild,
  ViewChildren,
  WritableSignal,
} from '@angular/core';
import { ItrendingMovie } from '../../../../interfaces/itrending-movie';
import { MoivesService } from '../../../../services/moive/moives.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DatePipe } from '@angular/common';
import { TermPipe } from '../../../../../core/pipe/term.pipe';

@Component({
  selector: 'app-main-slider',
  imports: [CarouselModule, DatePipe, TermPipe],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css',
})
export class MainSliderComponent implements OnInit {
  private readonly _movieService = inject(MoivesService);

  responsiveOptions: any[] | undefined;
  trendingMoive!: ItrendingMovie[];
  pathImage: string = this._movieService.PathImageUrl;
  movieNumber: WritableSignal<number> = signal(1);
  counter: WritableSignal<number> = signal(1);
  @ViewChildren('movieDetails') movieDetails!: ElementRef<HTMLElement>[];
  ngOnInit() {
    this.getTrendingMovies();
  }

  getTrendingMovies() {
    this._movieService.getTrendingMovies().subscribe({
      next: (res) => {
        this.trendingMoive = res.results;
        this.movieNumber.set(this.trendingMoive.length);
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

  nextBtn() {
    if (this.counter() == this.movieNumber()) {
      this.counter.set(1);
    } else {
      this.counter.update((counter) => counter + 1);
    }
  }

  prevBtn() {
    if (this.counter() == 1) {
      this.counter.set(this.movieNumber());
    } else {
      this.counter.update((counter) => counter - 1);
    }
  }

  onTranslated() {
    this.movieDetails.forEach((ele) => {
      ele.nativeElement.classList.remove('animate__fadeInUp');
      ele.nativeElement.classList.add('opacity-0');

      setTimeout(() => {
        ele.nativeElement.classList.add('opacity-100');
        ele.nativeElement.classList.add('animate__fadeInUp');
      }, 30);
    });
  }
}
