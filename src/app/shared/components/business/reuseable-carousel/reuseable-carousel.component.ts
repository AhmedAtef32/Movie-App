import { Component, inject, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ItrendingMovie } from '../../../../featured/interfaces/itrending-movie';
import { MovieCardComponent } from '../../ui/movie-card/movie-card.component';

@Component({
  selector: 'app-reuseable-carousel',
  imports: [CarouselModule, MovieCardComponent],
  templateUrl: './reuseable-carousel.component.html',
  styleUrl: './reuseable-carousel.component.css',
})
export class ReuseableCarouselComponent {
  @Input({ required: true }) movies!: ItrendingMovie[];
  @Input({ required: true }) imagePath!: string;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    stagePadding: 40,
    lazyLoad: true,
    margin: 20,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 7,
      },
    },
    nav: false,
  };
}
