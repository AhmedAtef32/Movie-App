import { DatePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  signal,
  ViewChildren,
  WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, SlidesOutputData } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TermPipe } from '../../../../core/pipe/term.pipe';
import { ItrendingMovie } from '../../../../featured/interfaces/itrending-movie';
@Component({
  selector: 'app-main-slider-in-every-page',
  imports: [CarouselModule, DatePipe, TermPipe, RouterLink],
  templateUrl: './main-slider-in-every-page.component.html',
  styleUrl: './main-slider-in-every-page.component.css',
})
export class MainSliderInEveryPageComponent {

  @Input({required:true}) movies!:ItrendingMovie[]
  @Input({required:true}) pathImage!:string
  movieNumber: WritableSignal<number> = signal(5);
  counter: WritableSignal<number> = signal(1);
  @ViewChildren('movieDetails') movieDetails!: ElementRef<HTMLElement>[];
  carouselLoaded: boolean = false;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoHeight: false,
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

  onCarouselReady() {
    this.carouselLoaded = true;
  }
}
